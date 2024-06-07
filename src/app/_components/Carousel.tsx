"use client";
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)
  

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition
  
    if(touchDown === null) {
        return
    }
  
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
  
    if (diff > 5) {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }
  
    if (diff < -5) {
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }
  
    setTouchPosition(null)
  }

  useEffect(() => {
    const slideInterval = setInterval(next, 2000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative rounded-t-2xl rounded-b-none" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
       <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
       <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
             <FaChevronLeft />
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
             <FaChevronRight />
          </button>
       </div>

       <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel