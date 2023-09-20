import React from 'react'
import im from './64e04a9d93d70526df181d37.png';
const recordItem = (props) => {
    const {record}=props
  return (
    <div className="card w-100 my-3 mb-3">
        <div className="card-body d-flex flex-row justify-content-around">
         < div className='d-flex flex-column my-4'>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Session ID</label>
            </div>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Agent</label>
            </div>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Phone Number</label>
            </div>
         </div>
         < div className='d-flex flex-column my-4'>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.user}</span>
            </div>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.agent}</span>
            </div>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.phone}</span>
            </div>
         </div>
         < div className='d-flex flex-column my-4'>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Call Date</label>
            </div>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Category</label>
            </div>
            <div className='mx-3'>
              <label  className='mx-3 fw-normal fs-6'>Call Status</label>
            </div>
         </div>
         < div className='d-flex flex-column my-4'>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.date.slice(0,10)}</span>
            </div>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.category}</span>
            </div>
            <div className='mx-3'>
              <span className="card-text fw-bold">{record.status}</span>
            </div>
         </div>
         <div>
            <img className="image" src={im}/>
         </div>
         </div>
    </div>
  )
}

export default recordItem