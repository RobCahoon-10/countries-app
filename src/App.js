import { Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import Error from '../src/pages/error/Error'
import './App.css';

function App() {
  return (
    <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route component={Error} />
        </Switch>
    </main>
  );
}

export default App;
