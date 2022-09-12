import './scss/base.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";


/* COMPONENTS */
import Layout from './components/layout/layout';
import Home from './pages/home/home';
import AddToken from './pages/add-token/add-token';
import EditToken from './pages/edit-token/edit-token';

import './assets/fonts/montserrat/montserrat.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-token" element={<AddToken />} />
          <Route path="edit-token/:id" element={<EditToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
