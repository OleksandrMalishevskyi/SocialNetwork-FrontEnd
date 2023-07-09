import { AppRouter } from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
export default App;
