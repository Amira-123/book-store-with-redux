import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Include Bootstrap JS if you need dropdowns/collapses without a library
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import store from './store/index.ts';

createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
           <App/>
        </Provider>


)
