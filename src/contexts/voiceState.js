import React,{useState} from 'react'
import VoiceContext from './VoiceContext'

const VoiceState = (props) => {
    const voiceRecords=[
      {
        "_id": "63r8yr878e8ey37",
          "user": "64e04a9d93d70526df181d37",
          "phone": "9952602775",
          "description": "this is the first note",
          "agent": "Amit Kumar",
          "category": "Laptop malfunction",
          "date": "2023-09-12T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        },
      {
        "_id": "63r8yr878e8ey37",
          "user": "64e04a9d93d70526df181d37",
          "phone": "9952602775",
          "description": "this is the first note",
          "agent": "Reena",
          "category": "Delivery Issue",
          "date": "2023-09-03T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        },
      {
        "_id": "63r8yr878e8ey37",
          "user": "64e04a9d93d70526df181d37",
          "phone": "9952602775",
          "description": "this is the first note",
          "agent": "Dileep",
          "category": "Warrenty",
          "date": "2023-02-03T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        },
      {
        "_id": "63r8yr878e8ey37",
          "user": "64e04a9d93d70526df181d37",
          "phone": "9952602775",
          "description": "this is the first note",
          "agent": "Refund",
          "category": "Laptop malfunction",
          "date": "2023-11-19T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        },
      {
        "_id": "63r8yr878e8ey37",
          "user": "64e04a9d93d70526df181d37",
          "phone": "9952602775",
          "description": "this is the first note",
          "agent": "Amit Kumar",
          "category": "Laptop malfunction",
          "date": "2022-09-01T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        },
        {
        "_id": "64f0266564d94c3463",
          "user": "64e04a9d93d70526df181d37",
          "phone": "8015291964",
          "description": "this is the first note",
          "agent": "Althaf",
          "category": "Smartphone malfunction",
          "date": "2023-10-09T05:54:08.432Z",
          "status": "reviewed",
          "__v": 0
        }
    ]

    const [records, setrecord] = useState(voiceRecords)
  return (
    <VoiceContext.Provider value={{records,setrecord}}>
        {props.children}
    </VoiceContext.Provider>
  )
}

export default VoiceState;