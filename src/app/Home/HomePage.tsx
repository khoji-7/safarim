import React from 'react'
import Recomended from '@/components/Recomended/Recomended'
import Profile from '@/components/Profile/Profile'
import ListOfGuides from '@/components/ListOfGuides/ListOfGuides'

const HomePage = () => {
  return (
    <div className='py-2'>
      
      {/* <Profile/> */}
      <ListOfGuides/>
      <Recomended/>
      
    </div>
  )
}

export default HomePage
