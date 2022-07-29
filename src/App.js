import './App.css';
import Router from './router/router';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
