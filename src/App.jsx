
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
 <div  className="text-3xl font-bold" >
     <h1> Redux App</h1>
     <AddTodo/>
     <Todos/>
 </div>
  )
}

export default App
