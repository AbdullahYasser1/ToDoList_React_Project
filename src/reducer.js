import * as type from "./ActionsType"
const initialState = {
    ToDoList:[]
  }
  export const AddTask= (task)=>{
    return{
      type:type.ADD_TASK,
      payload:{
        task:[task],
      }
    }
  }
  export const RemoveTask= (index)=>{
    return{
      type:type.REMOVE_TASK,
      payload:index,
    }
  }
  export const CompleteTask= (index,task)=>{
    return{
      type:type.COMPLETE_TASK,
      payload:{
        index:index,
        task:task,
        status:"completed"
        
      }
    }
  }
   export default function reducer (state=initialState,action){
    switch (action.type){
        case type.ADD_TASK :
          return{ ...state,ToDoList:[...state.ToDoList,{ task:action.payload.task}]}

          case type.REMOVE_TASK:
      return{ToDoList:[ ...state.ToDoList.slice(0, action.payload),...state.ToDoList.slice(action.payload + 1)]
      }
      case type.COMPLETE_TASK:
        return { 
          ...state, 
          ToDoList: state.ToDoList.map(
              (data, i) => i === action.payload.index ? {...data, task: action.payload.task ,status:"completed"}
                                      : data
          )
        }

          
          default:
        return state;
       
   }
}
   