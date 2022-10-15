
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ConfigRoutes from './config/Routes'
import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter >
      <Route render={props => (
        <>
          <Header {...props} />
          <ConfigRoutes />
          {/* <Routes /> */}
          <Footer />
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
