import { Link } from "react-router-dom";

/* STYLES */
import './home.scss'

/* IMAGES */
import edit from '../../assets/icons/edit.png'

function Home() {
  const data = JSON.parse(localStorage.getItem('wallet'))

  return (
    <div className="container mt-5">
      {data && data.length > 0 &&
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 d-flex justify-content-end">
            <table className="table">
              <thead>
                <tr>
                  <th>Tokens</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return (
                      <tr key={`wallet-list-${index}`}>
                        <td className="position-relative">
                          <Link to={`edit-token/${item.id}`} className="edit-content d-flex justify-content-center align-items-center h-100">
                            <img src={edit} alt="Edit icon" height={25} width={25}></img>
                          </Link>
                          {item.token}
                        </td>
                        <td>{item.balance}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      }
      {(!data || data.length === 0) &&
        <div className="row">
          <div className="col">
            <h2 className="text-center">No records found.</h2>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
