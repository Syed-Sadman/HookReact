import React, { useState,useEffect } from 'react'

function WindowWidthEffect() {
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);

    const handleResize=()=>{
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize',handleResize)
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
         {windowWidth}
        </div>
    )
}

export default WindowWidthEffect
