import React, { useState, useEffect } from "react"

function Counter ({ defaultValue = 0, step = 1}) 
    const[value, setValue] = useState(defaultValue)
     useEffect (() => {
         console.log('useEffect')
            
        const minusBtn = document.getElementById('minus')
        const onClick = function () {
             console.log('click from useEffect')
         }
         minusBtn.addEventListener('click', onClick)

         return() => { 
             minusBtn.removeEventListener('click', onClick)
        }
})

export default Counter


