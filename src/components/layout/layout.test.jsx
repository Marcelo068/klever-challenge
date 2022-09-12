import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'


/* COMPONENT */
import Layout from './layout';

describe('Home', () => {
  it('should have a button in home path', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>)
    
    expect(getByText('Add Token')).toBeInTheDocument()
  })
})