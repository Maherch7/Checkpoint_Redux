import { ADDTASK, DELETETASK, EDITDONE } from "./ActionTypes"

const initialState={
    tasks : [
        {title : "Do checkpoint", isDone : false, id : Math.random()},
        {title : "Sport", isDone : false, id : Math.random()},
        {title : "Date", isDone : false, id : Math.random()}
    ]
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case ADDTASK : return {...state, tasks : [...state.tasks,action.payload]}
        case DELETETASK : return {...state, tasks : state.tasks.filter((el,i,t)=> el.id != action.payload) }    
        case EDITDONE : return {...state, tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el,isDone : !el.isDone} : el)}    
    
        default: return state
            
    }
            
    }


export default Reducer