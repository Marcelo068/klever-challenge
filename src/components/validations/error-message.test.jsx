import { render } from '@testing-library/react'

/* COMPONENT */
import ErrorMessage from './error-message'


describe('ErrorMessage', () => {
  it('should validate if token already insert', () => {
    const errors = {
      token: {
        type: 'validate',
        message: 'Token already insert'
      }
    }
    const { getByText } = render(<ErrorMessage errors={errors} inputName='token' />)

    expect(getByText('Token already insert')).toBeInTheDocument()
  })

  it('should validate empty fields', () => {
    const errors = {
      token: {
        type: 'required',
      },
    }
    const { getByText } = render(<ErrorMessage errors={errors} inputName='token' />)

    expect(getByText('This field is required')).toBeInTheDocument()
  })
})