import React from 'react'
import AddPost from './feedComponents/AddPost'

function MainFeed() {
  return (
    <div className="w-2/5 flex flex-col  justify-start items-center">
      <AddPost/>
    </div>
  )
}

export default MainFeed