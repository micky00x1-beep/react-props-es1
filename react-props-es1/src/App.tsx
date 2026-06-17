type WelcomeProps = {
  name?: string;
  age: number;
};

function Welcome({ name = "You", age }: WelcomeProps) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>Your age is {age}.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Jimmy" age={37} />
    </div>
  );
}

export default App;
