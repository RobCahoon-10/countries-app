import { Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import Country from '../src/pages/country/Country'
import Error from '../src/pages/error/Error'
import './App.css';

function App() {

  return (
    <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:country' component={Country} />
          <Route component={Error} />
        </Switch>
    </main>
  );
}

export default App;
