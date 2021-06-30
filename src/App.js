import { Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import Country from '../src/pages/country/Country'
import ErrorPage from './pages/errorPage/ErrorPage'
import './App.css';

function App() {

  return (
    <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/country/:country' component={Country} />
          <Route path='/Error' component={ErrorPage} />
          <Route path='*' component={ErrorPage} />
        </Switch>
    </main>
  );
}

export default App;
