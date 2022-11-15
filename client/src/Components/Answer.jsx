import React from 'react'

function Answer( {answer, onAnswer}) {
  return (
    <div>
        
        <input type="submit" name='option' onClick={()=>onAnswer(answer)} />
            <span dangerouslySetInnerHTML={{__html:answer}}></span>

    </div>
  )
}

export default Answer