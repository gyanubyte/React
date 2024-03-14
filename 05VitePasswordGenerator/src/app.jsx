import { useCallback, useState, useEffect, useRef } from 'preact/hooks'


export function App() {
  const[length, setLength] = useState(8);
  const[numberAllowed, SetnumberAllowed] = useState(false);
  const[charAllowed, SetCharAllowed] = useState(false);
  const[password, setPassword] = useState();

  //useRef hook
  const passwordRef = useRef();
  const passwordGenerator = useCallback(()=>{
          let pass = "";
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          if(numberAllowed) str += "0123456789";
          if(charAllowed) str += ".^$*+?{}|";
          for(let i = 0; i<length; i++)
          {
            let char = Math.floor(Math.random()*str.length + 1);
            pass += str.charAt(char);
          }
          setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);

  //password copy clipboard
  const CopyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  //use Effect hook
  useEffect(()=>{
    passwordGenerator()
    },
      [length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 
     text-orange-500'>
      <h1 className='text-white- text-center my-3.5'>
        Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type = "text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyPasswordToClip}>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'> 
          <input
          type='checkbox'
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={()=>{SetnumberAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'> 
          <input
          type='checkbox'
          defaultChecked = {charAllowed}
          id='numberInput'
          onChange={()=>{SetCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
      
     </div>
    </>
  )
}
