import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App"
import Landing from "./pages/home/Home"

export default function Routers(){
   return (
      <Router>
         <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/home" component={Landing} exact/>
         </Switch>
      </Router>
   );
}