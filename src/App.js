import React from 'react'
import Frame from './components/Frame'
import { Switch, Route } from 'react-router-dom'
import { mainRoutes } from './routes'

function App() {
  return (
    <Frame>
      <Switch>
        {
          mainRoutes.map(route=> {
            return <Route path={route.path} component={route.components} />
          })
        }
      </Switch>
    </Frame>
  )
}

export default App
