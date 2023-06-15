import React from 'react'
import {useSelector}from'react-redux'

export default function DiemCuoc(props) {

  const tongDiem=useSelector(state=>state.BaiTapGameBauCuaReducer.tongDiem)
  return (
    <div >
      <h3 className='text-center displlay-4' style={{color:'red'}}>Game Bầu cua</h3>
      <p className='text-center '>Còn thua là còn gỡ, dừng lại là thất bại, chơi tới chết thì dừng</p>

      <div className='text-end m-2'>
      <span className='p-2 text-white bg-danger' style={{fontSize:"20px", borderRadius:"5%"}}>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span> </span>
      </div>

      <div className='text-center '>
      <button className='btn btn-success' style={{fontSize:"15px", borderRadius:"5%", border:'none',}}>Chơi lại </button>
      </div>
    </div>
  )
}
