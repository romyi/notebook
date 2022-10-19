import './App.css';
import { Route } from 'wouter';
import { Appwide, Swipe } from './layouts';
import { Dashboard, Login } from './pages';
import AuthentificatedAccess from './authentification/AuthentificatedAccess';

function App() {
  return (
    <Appwide>
      <Swipe>
        <Route path="/"><p>check token</p></Route>
        <Route path="/auth"><Login /></Route>
        <AuthentificatedAccess to='app'>
          <Route path="/app"><Dashboard /></Route>
          <Route path="/app/about">{() => <h1>что это такое</h1>}</Route>
          <Route path="/app/new">{() => <h1>создать</h1>}</Route>
          <Route path='/app/start'>{() => <h1>Привет! Начнем?</h1>}</Route>
        </AuthentificatedAccess>
      </Swipe>
    </Appwide>
  )
}

export default App
