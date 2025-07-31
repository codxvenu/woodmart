const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie-parser");
const mysql = require("mysql");
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookie());
app.get("/", (req, res) => {
  res.send("hello express");
});
app.use((req, res, next) => {
  console.log("requested", req.method, req.url);
  next();
});

function generateInvoice(invoice, filename, success, error) {
    const postData = JSON.stringify(invoice);
    const options = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        headers: {
            "Authorization": `Bearer sk_0P6BuMi6gyYfBvbDuDpYY93CsCeKeC9K`,
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    const file = fs.createWriteStream(filename);

    const req = https.request(options, function (res) {
        res.pipe(file);

        file.on('finish', () => {
            file.close();
            success && success();
        });

        file.on('error', (err) => {
            fs.unlink(filename, () => {}); // delete incomplete file
            error && error(err);
        });
    });

    req.on('error', error);
    req.write(postData);
    req.end();
}



const db = mysql.createPool({
  host: "147.93.79.55",
  user: "u679703987_wood",
  password: "xG~5uEjzRlnX",
  database: "u679703987_wood",
});

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body, username, password, email);
  if (!username || !password || !email)
    return res.json({ error: "data missing" });
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query(
    "select * from users where username = ? or email = ?",
    [username, email],
    (err, result) => {
      if (err) {
        console.log(err, "error");
        return res.json({ message: "Db error" + err });
      }
      if (result.length === 0) {
        db.query(
          "Insert into users (username,password,email) values (?,?,?) ",
          [username, hashedPassword, email],
          (err, result) => {
            if (err) {
              console.log(err, "error");
              return res.status(400).json({ error: "Db error" + err });
            }
            return res.status(200).json({ message: "user registered" });
          }
        );
      } else {
        return res.status(400).json({ error: "User already Exists" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body, username, password, "body");
  db.query(
    "select * from users where username = ? ",
    [username],
    async (err, result) => {
      if (result.length === 0)
        return res.status(404).json({ error: "user not found" });
      console.log(result);
      if (!username || !password || !result[0].PASSWORD)
        return res.json({ error: "data missing" });
      const valid = await bcrypt.compare(password, result[0].PASSWORD);
      if (!valid) return res.status(400).json({ error: "Incorrect Password" });
      const token = jwt.sign({ id: username }, "babu", { expiresIn: "1hr" });
      res.cookie("token", token);
      res.cookie("user", username);
      res.status(200).json({ message: "User logged in" });
    }
  );
});

app.get("/item", (req, res) => {
  db.query("select * from items", [], (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Db error" + err });
    }
    return res.status(200).json({ data: result });
  });
});
app.get("/cart", (req, res) => {
  const username = req.cookies.user;
  if (!username)
    return res.status(401).json({ error: "username missing " + username });
  db.query("select id from cart where user = ?", [username], (err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    if (result.length > 0) {
      const user_id = result[0].id;
      console.log(user_id);

      db.query(
        "select * from cart_items where cart_id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            return res.status(400).json({ error: err });
          }
          console.log(result);
          return res.status(200).json({ data: result });
        }
      );
    } else {
      res.status(400).json({ error: err });
    }
  });
});
app.post("/cart", (req, res) => {
  const { item } = req.body;
  console.log(item, "empty item");
  if (!item) return res.status(400).json({ error: "item is empty" });

  const username = req.cookies.user;
  if (!username) return res.status(401).json({ error: "username missing" });
  try {
    db.query(
      "select id from users where username = ?",
      [username],
      (err, result) => {
        if (err) {
          console.log("error", err);
          return res.status(400).json({ error: err });
        }
        if (result.length > 0) {
          const user_id = result[0].id;
          db.query(
            "select * from cart_items where name = ? and cart_id = ?",
            [item.name, user_id],
            (err, result) => {
              if (err) {
                console.log(err);
                return res.status(400).json({ error: err });
              }
              if (result.length > 0) {
                db.query(
                  "update cart_items set quantity = ? where name = ? and cart_id = ?",
                  [result[0].quantity + 1, item.name, user_id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                      return res.status(400).json({ error: err });
                    }
                    return res
                      .status(200)
                      .json({ message: "Item quantity Increased" });
                  }
                );
              } else {
                db.query(
                  "select * from cart where user = ? and user_id = ?",
                  [username, user_id],
                  (err, result) => {
                    if (err) {
                      return res.status().json({ error: err });
                    }
                    if (result.length === 0) {
                      db.query(
                        "insert into cart(user,user_id) values(?,?)",
                        [username, user_id],
                        (err, result) => {
                          if (err) {
                            return res.status().json({ error: err });
                          }
                          db.query(
                            "insert into cart_items(cart_id,name,category,img,price,rating,colors,quantity) values(?,?,?,?,?,?,?,1)",
                            [
                              user_id,
                              item.name,
                              item.category,
                              item.img,
                              item.price,
                              item.rating,
                              item.colors,
                            ],
                            (err, result) => {
                              if (err) {
                                console.log(err);
                                return res.status(400).json({ error: err });
                              }
                              return res
                                .status(200)
                                .json({ message: "item Added to Cart" });
                            }
                          );
                        }
                      );
                    } else {
                      db.query(
                        "insert into cart_items(cart_id,name,category,img,price,rating,colors,quantity) values(?,?,?,?,?,?,?,1)",
                        [
                          user_id,
                          item.name,
                          item.category,
                          item.img,
                          item.price,
                          item.rating,
                          item.colors,
                        ],
                        (err, result) => {
                          if (err) {
                            console.log(err);
                            return res.status(400).json({ error: err });
                          }
                          return res
                            .status(200)
                            .json({ message: "item Added to Cart" });
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  } catch (e) {
    console.log(e, "error db");
  }
});
app.post("/cart/updateQuantity", (req, res) => {
  const { name, quantity } = req.body;
  const username = req.cookies.user;
  console.log(name, quantity, "AAA");
  db.query(
    "select id from users where username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log("error", err);
        return res.status(400).json({ error: err });
      }
      if (result.length > 0) {
        console.log(name, quantity, "AAA", username);
        const user_id = result[0].id;
        db.query(
          "update cart_items set quantity = ? where name = ? and cart_id = ?",
          [quantity, name, user_id],
          (err, result) => {
            if (err) {
              console.log("error", err);
              return res.status(400).json({ error: err });
            }
            return res.status(200).json({ message: "Quantity Updated" });
          }
        );
      }
    }
  );
});
app.post("/orders", (req, res) => {
  const {item} = req.body;
  const username = req.cookies.user
  db.query("insert into orders(user) values (?)", [username], (err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    const order_id = result.insertId;

    const InsertTask = item.map((items)=>{
      return new Promise((resolve,reject)=>{

        db.query(
          "insert into order_items(order_id,name,category,img,price,rating,colors,quantity) values(?,?,?,?,?,?,?,?)",
          [
            order_id,
                              items.name,
                              items.category,
                              items.img,
                              items.price,
                              items.rating,
                              items.colors,
            items.quantity,
          ],
          (err, results) => {
            if (err) {
              reject(err)
            }
            else{
              resolve(result)
            }
          }
        );
      })
    })

    Promise.all(InsertTask)
    .then(()=>{
      res.status(200).json({message : "Orders added TO list",order_id})
    })
     .catch((insertErr) => {
        res.status(500).json({ error: insertErr });
      });
    })

  });
app.get("/order",(req,res)=>{
  const username =  req.cookies.user
  db.query("select * from orders where user = ?",[username],(err,result)=>{
    if(err){
      res.status(500).json({ error: err });
    }
    if(result.length > 0){
      const items = result;
    const order_ids = items.map((i)=>{return i.id})
    db.query("select * from order_items where  order_id IN (?) ",[order_ids],(err,itemsResult)=>{
      if(err){
      res.status(500).json({ error: err });
    }
    const sorted = items.map((i)=>{
      const y = itemsResult.filter((x)=>(i.id === x.order_id ))
      return {...i,items : y}
    })
    return res.status(200).json({data : sorted })
    })
  }
  })
})
app.post("/DeleteCart",(req,res)=>{
  const username = req.cookies.user
  db.query("select * from cart where user = ?",[username],(err,result)=>{
    if(err){
      console.log(err);
      return res.status(400).json({error : err})
    }
    if(result.length > 0){
      const cart_id = result[0].id
      db.query("delete from cart_items where cart_id = ?",[cart_id],(err,Innerresult)=>{
        if(err){
      console.log(err);
      return res.status(400).json({error : err})
    }
    return res.status(200).json({message : "Success"})
      })
    }else{
      console.log("cart not found");
      
    }
  })
});
app.get("/invoices",(req,res)=>{
  const username = req.cookies.user;
  db.query("select * from orders where user = ? and status = ?",[username,"sucess"],(err,result)=>{
    if(err){
      return res.status(400).json({error : err})
    }
    return res.status(200).json({data : result})
  })
})
app.post("/invoice/:orderid/",async(req,res)=>{
  const {orderid} = req.params;
  const user = req.body.address;
  if(!user) console.log(req.params.address,"empty addr");
  
  db.query("select * from orders where id = ?",[orderid],(err,result)=>{
if(err){
      console.log(err);
      return res.status(400).json({error : err})
    }
    if(result.length > 0){
      const fulldata = result[0];
      const Details = {
        from: "Wood Mart Store",
        to: `${user.first} ${user.last} \n${user.email} \n${user.phone} \n${user.town}, ${user.state}, ${user.pin}, ${user.country}`,
        currency: "INR",
        number: `ORDER-${orderid}`,
        tax: 0,
        notes: "Thank you for your purchase!",
        terms: "Goods once sold will not be returned."
      }
      db.query("select * from order_items where order_id = ?",[orderid],(err,results)=>{
        if(err){
      console.log(err);
      return res.status(400).json({error : err})
    }
   
    const folder = path.join(__dirname, '/invoices');
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
} 
    const Adata =results.map(item => ({
  name: item.name,
  quantity: item.quantity,
  unit_cost: item.price}))
       console.log({...Details,items : Adata});
    const filePath = path.join(__dirname, `/invoices/invoice-${orderid}.pdf`);
    generateInvoice({...Details,items : Adata}, filePath, () => {
        res.download(filePath, `invoice-${orderid}.pdf`, (err) => {
            if (err) {
                res.status(500).send("Error downloading invoice");
            } else {
                // Optional: clean up file after download
               // fs.unlinkSync(filePath);
            }
        });
    }, (error) => {
        console.error(error);
        res.status(500).send("Failed to generate invoice");
    });
      })
    }else{
      return res.status(400).json({error : "order not found"})
    }
  })
})
app.listen(port, () => {
  console.log("server is running " + port);
});
