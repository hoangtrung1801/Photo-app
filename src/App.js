import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";
import Menu from "./common/Menu";
import PhotoForm from "./features/Photo/PhotoForm";
import PhotoPage from "./features/Photo/PhotoPage";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />

        <Switch>
          <Container>
            <Route exact path="/" component={PhotoPage} />
            <Route exact path="/new" component={PhotoForm} />
          </Container>
        </Switch>
      </div>
    </Router>
  );
}
