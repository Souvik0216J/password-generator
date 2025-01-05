import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPasword] = useState('')

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-3xl text-center font-bold mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3' placeholder='Password' readOnly
        />
        <button className='text-white bg-green-500 px-3 py-0.5 outline-none shrink-0'>Copy</button>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id=''
        />
        <label htmlFor="length">Length: {length}</label>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            name=''
            id=''
          />
          <label htmlFor="number">Numbers</label>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                charAllowed((prev) => !prev)
              }}
              name=''
              id=''
            />
            <label htmlFor="number">Charecter</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
