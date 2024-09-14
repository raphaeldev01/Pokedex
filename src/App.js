import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterController from './RouterController';
import Header from './Partials/Header/Header';

function App() {
    return (
        <div className="App">
            <div className='bg'></div>
            <Header />
            <BrowserRouter>
                <RouterController />
            </BrowserRouter>
        </div>
    );
}

export default App;
