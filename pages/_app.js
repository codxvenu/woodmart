import "@/styles/globals.css";
import { Work_Sans , Urbanist } from 'next/font/google';
import 'remixicon/fonts/remixicon.css'

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // use weights you need
  display: 'swap',
});
export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // use weights you need
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
