import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

/* COMPONENTS */
import ErrorMessage from '../../components/validations/error-message'

function AddToken() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  let currentData = JSON.parse(localStorage.getItem('wallet'))

  const onSubmit = data => {
    data.id = uuidv4()

    if (currentData === null) {
      currentData = []
    }

    currentData.push(data)
    localStorage.setItem('wallet', JSON.stringify([...currentData]))
    navigate('/')
  };

  const TokenExist = (token) => {
    if (currentData) {
      const canSave = currentData.findIndex(item => item.token === token)
      return canSave >= 0 ? 'Token already insert' : true
    } else {
      return true
    }
  }




  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-5 d-flex justify-content-between align-items-end">
          <h2 className="m-0">Add Token</h2>
          <Link to="/" className="button button-gray" >Voltar</Link>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column mb-4">
              <label htmlFor="token" className="label mb-2">Token</label>
              <input id="token" className="input" {...register("token", { required: true, validate: TokenExist })} />
              <ErrorMessage errors={errors} inputName='token' />
            </div>
            <div className="d-flex flex-column mb-4">
              <label htmlFor="balance" className="label mb-2">Balance</label>
              <input id="balance" className="input" {...register("balance", { required: true })} />
              <ErrorMessage errors={errors} inputName='balance' />
            </div>
            <div className="d-flex justify-content-end w-100">
              <button type="submit" className="button button-blue">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddToken;
