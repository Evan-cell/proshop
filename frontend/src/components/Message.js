import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Message() {
  return (
    <>
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        An {variant} error occured while proccesing you request!
      </Alert>
    ))}
  </>
  )
}

export default Message