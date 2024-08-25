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

  let [todo , setTodo] = useState([])

  const todoVal = useRef()
 
  const addTodo = (event)=>{
    event.preventDefault();
    
    if(!todoVal.current.value){
      alert("enter todo")
    }else{
      todo.push(todoVal.current.value)
      setTodo([...todo])
      console.log(todo);
      console.log("todo");
      
    }

    todoVal.current.value = ""
  }



  const deleteBtn = (index)=>{
    console.log("delete button");
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  const editBtn = (index)=>{
  // console.log("edit button");
  const updateVal = prompt('enter your update todo');
  todo.splice(index , 1 , updateVal);
  setTodo([...todo])
  
  }

  

  return (
    <>
    
    <h1>Todo App</h1>
    
    {/* getitem  */}

    <form onSubmit={addTodo}>  
    <input type="text" placeholder="enter todo" ref={todoVal} />
    <button onClick={addTodo}>Add</button>
    </form>
    


    {/* renderItem */}

    <ul>
      {todo.map((item , index)=>{
        return (
          <div key={index}>
          <li >{item}</li>
          <button onClick={()=> deleteBtn(index)}>Delete</button>
          <button onClick={()=> editBtn(index)}>Edit</button>
          </div>
        )
      })}
    </ul>


    </>
  )
}





export default App