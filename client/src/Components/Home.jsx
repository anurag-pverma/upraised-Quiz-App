import React from 'react'
import { useState } from 'react'
import Quiz from './Quiz'

function Home() {
    const [finish, setFinsh] = useState(false)
    const [result, setResult]= useState(0)
    if(finish){
        return (
            <div>
                <div>
                    <p>Result : {result}</p>
                    <button onClick={()=>setFinsh(false)}> playAgain</button>
                </div>
            </div>
        )
    }
  return (
    <div>
       <h5> Welcom to Home of React Quix</h5>

        <Quiz onResult ={(result)=> setResult(result)} onFinish={(finish)=> setFinsh(finish)}/>
    </div>
  )
}

export default Home