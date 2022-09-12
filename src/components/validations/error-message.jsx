import React, { useState } from "react";

function ErrorMessage({ errors, inputName }) {

  let message = useState('')
  if (errors[inputName]?.type === 'required') {
    message = 'This field is required'
  } else if (errors[inputName]?.type === 'validate') {
    message = errors[inputName]?.message
  }

  return (
    <>
      {errors[inputName] &&
        <span className="text-danger mt-2 m-0">
          {message}
        </span>
      }
    </>
  );
}

export default ErrorMessage;
