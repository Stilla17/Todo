import { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import './App.css'

function App() {
  const [random, setRandom] = useState({ left: 900, top: 300 }) 
  const [count , setCout] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameActive, setGameActive] = useState(true)
  const [rekort, setRekort] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameActive) return

      setTimeLeft((prev) => {
        if (prev <= 1) {
        clearInterval(timer)
        setGameActive(false)
        return 0
      }
      return prev - 1
      })
      }, 1000)

    return () => clearInterval(timer)
  }, [gameActive])

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      let newLeft = Math.floor(Math.random() * (1900 - 150))
      let newTop = Math.floor(Math.random() * (900 - 150))
      setRandom({ left: newLeft, top: newTop })
    }, 1000)

    return () => clearInterval(interval)
  }, [gameActive])

  const restartGame = () => {
    setGameActive(true)
    setCout(0)
    setTimeLeft(15)
    setRandom({ left: 900, top: 300 })
  }

  useEffect(() => {
    if (count >= rekort) {
      setRekort(count)
    }
  }, [count])




  return (
    <div className="w-[100%] h-[100vh] mx-auto relative">
      <h2 className='absolute z-[1] font-bold text-[24px] ml-[20px] mt-[10px]'>record: {rekort}</h2>
      <div
        onClick={() => setCout((count) => count + 1)}
        className="rounded-full text-[34px] absolute transition-all duration-500 hover:rotate-[30deg] hover:scale-[1.2] z-[2]"
        style={{ left: `${random.left}px`, top: `${random.top}px` }}
      >🐸</div>
      <div className='absolute top-[400px] left-[900px] w-[400px] z-[1]'>
        <div className='bg-green-500 text-white rounded-md font-bold px-[9px] py-[9px]'>ball: {count}</div>
        <div className='bg-red-500 text-white rounded-md font-bold px-[9px] py-[9px]'>time: {timeLeft}</div>
      </div>

    <div className={`w-[100%] h-[100vh] flex justify-center transition-all duration-500 items-center bg-black relative opacity-75 z-[2] ${gameActive ? "hidden" : "flex"}`}>
      <div className='w-[400px] font-bold text-[40px] h-[200px] bg-white rounded-[18px] content-center text-center opacity-100'>
        <IoClose onClick={restartGame} className='absolute mt-[-20px] ml-[330px]'/>
        <h2>Game end</h2>
        <h2>your ball: {count}</h2>
      </div>
    </div>

    </div>
  )
}

export default App
