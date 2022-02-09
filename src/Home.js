import React,{Suspense} from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Loader from './Loader';
import Start from './Start'



const GuestPage = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./GuestPage")), 5000)
    )
);

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
        </Switch>    
           <Suspense fallback={<Start/>} > 
             <Route path='/guestPage' component={GuestPage} />
           </Suspense >
            </Router>
        </Suspense>
    
    
    </> 
  )
}

export default Home

