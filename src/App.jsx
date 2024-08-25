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
 
  //.. additem ..//

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

  //.. delete button ..//

  const deleteBtn = (index)=>{
    console.log("delete button");
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  //.. edit button ..//

  const editBtn = (index)=>{
  // console.log("edit button");
  const updateVal = prompt('enter your update todo');
  todo.splice(index , 1 , updateVal);
  setTodo([...todo])
  
  }

  

  return (
    <>
    
    <h1 className="text-center mt-5">React Todo App</h1>
    
    {/* getitem  */}

    <form onSubmit={addTodo} className="d-flex justify-content-center align-items-center mt-4">  
   
   <div>
   <input className="form-control form-control-lg rounded-3" type="text" placeholder="enter todo" ref={todoVal} />
   </div>
   
    <button onClick={addTodo} className="btn btn-primary mx-2">Add</button>
    </form>
    


    {/* renderItem */}

    <ul className="mt-4">
      {todo.map((item , index)=>{
        return (
          
          <div key={index} className="text-center">
         
          <li className="mt-1 fs-4">{item}
          
          <i className="fa-solid fa-pen-to-square mx-2 btn btn-info" onClick={()=> editBtn(index)}></i>
          <i className="fa-solid fa-delete-left btn btn-warning"  onClick={()=> deleteBtn(index)}></i>
          </li>
          
          <hr />
          </div>
        )
      })}
    </ul>


    </>
  )
}





export default App