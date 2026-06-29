import { useEffect, useState } from "react";

interface GithubUserProps {
  username: string;
}

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>

      <p>{user.login}</p>

      <img
        src={user.avatar_url}
        alt={user.login}
        width={150}
      />
    </div>
  );
}

export default GithubUser;