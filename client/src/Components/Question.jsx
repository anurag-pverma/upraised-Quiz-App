import React from 'react'

function Question({question}) {
  return (
    <div>

        <span dangerouslySetInnerHTML={{__html: question}}></span>

    </div>
  )
}

export default Question