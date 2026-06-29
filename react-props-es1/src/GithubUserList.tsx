import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

interface User {
  id: number;
  login: string;
}

function GithubUserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Github Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.login}>
              {user.login}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet />
    </div>
  );
}

export default GithubUserList;