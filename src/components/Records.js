import React,{useContext} from 'react'
import VoiceContext from '../contexts/VoiceContext'
import RecordItem from './RecordItem'
import Addcall from './Addcall'

const Records = () => {
    const context = useContext(VoiceContext)
    const {records}= context
  return (
    <>
    {/* <div className='container'><Addcall/></div> */}
    <div className='container'>
        {
          records.map((record)=>{
            return <RecordItem record={record} key={record._id}/>
          })
        }
    </div>
    </>
  )
}

export default Records