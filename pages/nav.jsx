import React from 'react'
import S_nav from '@/components/nav/s_nav'
import M_nav from '@/components/nav/m_nav'
import L_nav from '@/components/nav/l_nav'
import Ms_nav from '@/components/nav/small/m_nav'
const nav = () => {
  return (
    <div>
      <S_nav/>
    <M_nav/>
    <L_nav/>
     <Ms_nav/>
    </div>
  )
}

export default nav
