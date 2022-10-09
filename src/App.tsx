import './App.css';
import { Route } from 'wouter';
import { Appwide, Swipe } from './layouts';
import { MobileMenu } from './templates';
import { Dashboard } from './pages';

function App() {
  return (
    <Appwide>
      <Swipe>
        <Route path="/"><Dashboard /></Route>
        <Route path="/about">{() => <h1>что это такое</h1>}</Route>
        <Route path="/new">{() => <h1>создать</h1>}</Route>
        <Route path='/start'>{() => <h1>Привет! Начнем?</h1>}</Route>
      </Swipe>
    </Appwide>
  )
}

export default App
