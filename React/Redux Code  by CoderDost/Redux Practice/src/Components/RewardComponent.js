import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from '../Reducers/RewardReducer'

function RewardComponent() {
    const rewardPoints=useSelector((state)=>state.reward.rewardPoints)
    const dispatch=useDispatch()
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
    <h1>Reward Component</h1>
    <p>Total Reward Points: ${rewardPoints}</p>
    <button onClick={()=>{dispatch(increment())}} className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Increment point</button>
</div>
  )
}

export default RewardComponent