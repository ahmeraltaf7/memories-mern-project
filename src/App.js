import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

function App() {

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path= '/' exact component= {Home}></Route>
        <Route path= '/auth' exact component= {Auth}></Route>
      </Switch>
    </Container>
    </BrowserRouter>
  );
}

export default App;
