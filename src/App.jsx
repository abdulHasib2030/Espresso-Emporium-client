import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"


function App() {
 const coffees = useLoaderData()

 return (
    <div className="m-20 ">
     
      <h1 className='text-6xl text-purple-600'>Hot Hot Cold Coffee : {coffees.length}</h1>
     <div className="grid grid-cols-2 gap-4">
     {
      coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
     }
     </div>
    </div>
  )
}

export default App
