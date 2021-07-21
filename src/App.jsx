import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Vocals from './pages/Vocals.jsx';
import Violin from './pages/Violin.jsx';
import Bass from './pages/Bass.jsx';
import Guitar from './pages/Guitar.jsx';
import Keyboard from './pages/Keyboard.jsx';
import Drums from './pages/Drums.jsx';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <h1 className="heading pt-5 pb-3">Nick Cave and the Bad Seeds</h1>
            <Navigation />
            <Switch>
                <Route path="/vocals">
                    <Vocals />
                </Route>
                <Route path="/violin">
                    <Violin />
                </Route>
                <Route path="/bass">
                    <Bass />
                </Route>
                <Route path="/guitar">
                    <Guitar />
                </Route>
                <Route path="/keyboard">
                    <Keyboard />
                </Route>
                <Route path="/drums">
                    <Drums />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch> 
        </div>
    )
}