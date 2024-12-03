//example situation of when to use useReducer Hook.
// import { useState } from "react"
// export const ReducerHook=()=>{
//     const[count,setCount]= useState(0);
//     const[showText,setshowText] = useState(true);
//     return(
//         <div>
//               <h1>{count}</h1>
//               <button onClick={()=>{
//                 setCount(count+1)
//                 setshowText(!showText)
//               }}>click here</button>
//               {showText && <h1>this is text</h1>}
//         </div>
//     )
// }
//useReducer hook is the alternative for useState hook, they both have same purpose, they own theire values, and page will rerender to show that changed values.

import { useReducer } from "react"

//here there will be a single state that will keep track on all the state that are going to change when we click button.
const reducer=(state, action)=>{
     switch(action.type){
        case "increment":
            return {count:state.count+1,showText:state.showText};
        case "toggleText":
            return {count:state.count, showText:!state.showText};
        default:
            return state;
     }
}
export const ReducerHook=()=>{
    const [state,dispatch] = useReducer(reducer, {count:0,showText:true});
    return(
        <div>
              <h1>{state.count}</h1>
              <button onClick={()=>{
                dispatch({type:"increment"});
                dispatch({type:"toggleText"});
              }}>click here</button>
              {state.showText && <h1>this is hidden text</h1>}
        </div>
    )
}