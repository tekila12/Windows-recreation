import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Loader from './Loader';
import Start from './Start'
import { Setup } from './Setup/Setup';
import GuestPage from './GuestPage'





const App = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./App")), 3000)
    )
);





const Home = () => {
  return (
    <>

      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route path='/app' component={App} />
            <Route path='/' component={GuestPage} />
          </Switch>
        </Router>
      </Suspense >

    </>
  )
}

export default Home

