import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function Loader() {
  return (
    <Spinner animation="border" variant="danger"
    style={{
        height: '100px',
        width: '100px',
        margin: 'auto',
        display: 'block',
    }} >
        <span className='sr-only'>loading ....</span>
    </Spinner>
  )
}

export default Loader