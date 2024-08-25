// // import { useState } from "react";



// const App = ()=>{
  
  //   let num = 20;
  
  //   const addCounter = ()=>{
    //     num += 1
    //     console.log(num);
    
    //   }
    
    
    
    //   return (
      //     <>
      //     <h1>hello world!</h1>
      //     <h1>{num}</h1>
      //     <button onClick={addCounter}>add</button>
      //     </>
      
      //   )
      // }
      
      
// export default App






// import { useState } from "react"

// const App = ()=>{
  
  //   let [num , setNum] = useState(0)
  
  //   const addCounter = ()=>{
    //     setNum(num + 1)
    //     console.log(num);
    
    //   }
    
    //   const lessCounter = ()=>{
      //     setNum(num - 1)
      //     console.log(num);
      
      //   }
      
      //   return(
        //     <>
        //     <h1>hello world</h1>
        //     <h1>{num}</h1>
        //     <button onClick={addCounter}>Add</button>
//     <button onClick={lessCounter}>Less</button>
    
//     </>
//   )
// }


// export default App








import { useRef } from "react"
import { useState } from "react"







const App = ()=>{

  let [todo , addTodo] = useState([])

  const todoVal = useRef()
 
  const getTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    addTodo([...todo])
    console.log(todo);
    todoVal.current.value = ""
  }

  return (
    <>
    
    <h1>Todo App</h1>
    
    {/* getitem  */}

    <form onSubmit={getTodo}>  
    <input type="text" placeholder="enter todo" ref={todoVal} />
    <button onClick={getTodo}>Add</button>
    </form>
    


    {/* renderItem */}

    <ul>
      {todo.map((item , index)=>{
        return (
          <>
          <li key={index}>{item}</li>
          </>
        )
      })}
    </ul>


    </>
  )
}





export default App