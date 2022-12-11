import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import StudentRegistration from "./Components/StudentDetails/StudentRegistration";
import ViewStudents from "./Components/StudentDetails/ViewStudents";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <StudentRegistration />
        </Route>
        <Route path="/studentdetails" exact>
          <ViewStudents />
        </Route>
      </Switch>
    </>
  );
}

export default App;
