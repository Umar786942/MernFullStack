import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { incrementBonusPoints } from '../Actions'
import { increment } from '../slices/BonusSlicer'//this will not collide with increment of account slicer because its type is bonus/increment

function BonusComponent() {
    const points=useSelector((state)=>state.bonus.points)
    const dispatch=useDispatch()
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <h1>Bonus Component</h1>
        <p>Total Points: ${points}</p>
        <button onClick={()=>{dispatch(increment())}} className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Increment point</button>
    </div>
  )
}

export default BonusComponent