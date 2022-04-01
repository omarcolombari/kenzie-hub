import GlobalStyles from './styles/global';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App" >
      <GlobalStyles />
      <ToastContainer autoClose={2500}/>
      <Routes />
    </div>
  );
}

export default App;
