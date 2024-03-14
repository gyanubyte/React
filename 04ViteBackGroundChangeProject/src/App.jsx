import { useState } from 'react'



function App() {
  
   const[colorName, setColor] =  useState("Olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colorName }}>
        
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg
           bg-white px-3- py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-s' style={{background:"Red"}}>Red</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg
           bg-white px-3- py-2 rounded-3xl'>
            <button onClick={() => setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-s' style={{background:"Green"}}>Green</button>
           </div>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg
           bg-white px-3- py-2 rounded-3xl'>
            <button onClick={() => setColor("Yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-s' style={{background:"Yellow"}}>Yellow</button>
           </div>
         
          
      </div>
     
    </>
      
  )
}

export default App
