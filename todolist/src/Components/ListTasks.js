import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTaks=()=>{
    const tasks = useSelector(state=> state.tasks)
    const [fillB, setFillB] = useState('ALL')
    return(
        <div>
            <button onClick={()=> setFillB("ALL")}>All</button>
            <button onClick={()=> setFillB("DONE")}>Done</button>
            <button onClick={()=> setFillB("NOTDONE")}>Not Done</button>
            {
                fillB == "ALL" ?
                tasks.map((el,i,t)=> <CardTask el={el}/>)
                :
                fillB == "DONE" ?
                tasks.filter((el,i,t)=> el.isDone == true).map((el,i,t)=> <CardTask el={el}/>)
                :
                tasks.filter((el,i,t)=> el.isDone == false).map((el,i,t)=> <CardTask el={el}/>)
            }
            

          
        </div>
    )
}

export default ListTaks