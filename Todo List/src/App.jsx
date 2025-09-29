import { useState } from 'react'
import Navbar from './components/navbar'

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckBox=(e)=>{
    e.target.name
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-slate-200  p-5 my-5 rounded-xl flex flex-col gap-10 min-h-[90vh]">
        <div className="addTodo flex flex-col gap-3 ">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className="input-todo flex justify-between gap-5 ">
            <input onChange={handleChange} value={todo} type="text" placeholder="Enter your Task" className='px-2 py-1 border rounded-xl bg-white w-5/5' />
            <button onClick={handleAdd} className='px-4 py-1 bg-blue-600 text-white rounded-xl transform transition duration-300 hover:scale-75 cursor-pointer'>Add</button>
          </div>
        </div>
        <div className='flex gap-3 flex-col'>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos bg-white p-4 rounded-xl">
            {todos.map(item => {
              return <div className="todo flex justify-between items-center gap-5 mb-2">
                <input onChange={handleCheckBox} type="checkbox" value={todo.isCompleted} />
                <div className={item.isCompleted ? "line-through text flex flex-wrap" : " text flex flex-wrap"}>
                  {item.todo}
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={handleEdit} className='px-4 py-1 bg-blue-600 text-white rounded-xl transform transition duration-300 hover:scale-75 cursor-pointer'>Edit</button>
                  <button onClick={handleDelete} className='px-4 py-1 bg-blue-600 text-white rounded-xl transform transition duration-300 hover:scale-75 cursor-pointer'>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
