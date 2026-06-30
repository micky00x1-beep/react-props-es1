type WelcomeProps = {
  name?: string;
  age: number;
};

function Welcome({
  name = "You",
  age,
}: WelcomeProps) {
  return (
    <div>
      <h1>Welcome</h1>

      <p>Welcome, {name}!</p>

      <p>Your age is {age}.</p>
    </div>
  );
}

export default Welcome;