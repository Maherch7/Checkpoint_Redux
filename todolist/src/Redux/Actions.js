import { ADDTASK, DELETETASK, EDITDONE } from "./ActionTypes"

export const addTask=(payload)=>{
    return(
      {
        type : ADDTASK,
        payload
      }  
    )
}

export const deleteTask=(payload)=>{
    return(
        {
          type : DELETETASK,
          payload  
        }
    )
}

export const editDone=(payload)=>{
    return(
        {
            type : EDITDONE,
            payload

        }
    )
}