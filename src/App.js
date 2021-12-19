import './App.css'
import {Route, Switch} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
