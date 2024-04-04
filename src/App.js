import './App.css';
import { SnackbarProvider } from 'notistack';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
         <div className="App">
     <HomePage/>
     {/* <CategoryPieChart/> */}
    </div>
    </SnackbarProvider>
 
  );
}

export default App;
