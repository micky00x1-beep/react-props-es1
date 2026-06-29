import { Routes, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import UsersIndex from "./UsersIndex";
import NotFound from "./NotFound";

type WelcomeProps = {
  name?: string;
  age: number;
};

function Welcome({ name = "You", age }: WelcomeProps) {
  return (
    <div>
      <h1>Welcome</h1>

      <p>Welcome, {name}!</p>

      <p>Your age is {age}.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>

        <br />

        <Link to="/counter">Counter</Link>

        <br />

        <Link to="/users">Github Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route
          path="/"
          element={<Welcome name="Jimmy" age={37} />}
        />

        <Route
          path="/counter"
          element={<Counter />}
        />

        <Route
          path="/users"
          element={<GithubUserList />}
        >
          <Route
            index
            element={<UsersIndex />}
          />

          <Route
            path=":username"
            element={<ShowGithubUser />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;