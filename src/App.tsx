import './App.css';
import { Route } from 'wouter';
import { Appwide, Swipe } from './layouts';
import { MobileMenu } from './templates';
import { Dashboard } from './pages';

function App() {
  return (
    <Appwide>
      <Swipe>
        <Route path="/"><p>check token</p></Route>
        <Route path="/auth"><h1>log</h1></Route>
        <Route path="/app"><Dashboard /></Route>
        <Route path="/app/about">{() => <h1>что это такое</h1>}</Route>
        <Route path="/app/new">{() => <h1>создать</h1>}</Route>
        <Route path='/app/start'>{() => <h1>Привет! Начнем?</h1>}</Route>
      </Swipe>
    </Appwide>
  )
}

export default App
