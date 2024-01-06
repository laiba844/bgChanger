import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
 let [clr, setColor]=useState('');
  return (
    <>
     <h1 className="text-center bg-warning mb-2" >BACKGROUND-CHANGER <span className="fs-4">project-1</span> </h1>
     <div className="container w-100 vh-100" style={{backgroundColor : clr}}>
      <div className="text-center py-4">
        <div className=" py-2" style={{borderRadius: '10px' , backgroundColor: "yellow"}}>
      <Button className="mx-3 mt-1" onClick={()=>setColor('grey')} variant="secondary">Grey</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('green')} variant="success">Green</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('yellow')} variant="warning">Yellow</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('blue')} variant="primary">Blue</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('red')} variant="danger">Red</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('cyan')} variant="info">Cyan</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('white')} variant="light">White</Button>
      <Button className="mx-3 mt-1" onClick={()=>setColor('black')} variant="dark">Black</Button>
        </div>   
      </div>
     </div>
    </>
  )
}

export default App
