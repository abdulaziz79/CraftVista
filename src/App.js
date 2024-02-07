import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Router from './Routes/Route';

function App() {
  return (
    <div className="App">
      <ToastContainer     
      position="top-center"
      autoClose={3000}
      limit={2}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="light"/>
      <Router />
    </div>
  );
}

export default App;
