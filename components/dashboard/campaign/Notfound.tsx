import React from 'react'

const Notfound = ({ message }: { message: string }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  )
}

export default Notfound