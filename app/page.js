"use client"

import React,{useState} from 'react'
import { render } from 'react-dom';
import 'boxicons'


const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setMainTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, {title,desc}])
    settitle("");
    setdesc("");
    console.log(mainTask)
  }

  const onDelete = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
 
  let renderTask = <h2 className='text-center text-grey-400 font-bold py-15'>No Tasks are available</h2>;
   
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return <li className='w-5/6'>
        <div className='bg-neutral-700 rounded-md p-5 m-2 flex flex-row justify-between align-center'>
        <h1 className='text-violet-400 text-xl font-bold'>{t.title}</h1>
        <p className='text-white font-semibold text-md'>{t.desc}</p>
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" type = "button" 
        onClick = { () => {
          onDelete(i)
        } }
        ><box-icon  name='trash-alt' type='solid' color="#fff"></box-icon></button>
        </div>
      </li>
    })
  }

  return (
    <div className = "flex flex-row justify-center items-center bg-violet-400 w-screen bg-container">
      <div className='bg-neutral-800 flex-shrink flex-col w-5/6 p-8 app-container rounded-xl text-white'>
        <h1 className='text-white text-2xl font-bold text-center px-5 py-5'>Goal<span className = "text-violet-400">Getter.</span></h1>
        <div className='flex flex-row justify-center'>
        <form onSubmit={submitHandler}>
         <input type = "text" className='bg-neutral-700 text-voilet px-2 py-2 text-2xl rounded-md outline-none m-8' placeholder='Enter task here.'
         value = {title} onChange={(e)=>{
          settitle(e.target.value);
         }}/>
         <input type = "text" className='bg-neutral-700 text-voilet px-2 py-2 text-2xl rounded-md outline-none m-8' placeholder='Enter the description.'
         value = {desc}
         onChange={(e)=>{
          setdesc(e.target.value);
         }}/>
         <button className='transition ease-in-out delay-150 bg-violet-400 ml-10 hover:bg-violet-500 duration:300 hover: -translate-y-1 hover:scale-110 rounded-md px-5 py-2.5 my-9'>Add Task</button>
        </form>
        </div>
        <div className='w-full'>
           <ul className='flex flex-col items-center justify-center'> 
              {renderTask}
           </ul>
        </div>
      </div>
    </div>
  )
}

export default page