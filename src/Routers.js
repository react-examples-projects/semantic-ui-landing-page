import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App"
import Home from "./pages/home/Home"

export default function Routers(){
   return (
      <Router>
         <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/learning" component={App} exact/>
         </Switch>
      </Router>
   );
}