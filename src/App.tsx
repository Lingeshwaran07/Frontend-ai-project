function App() {
  return (
    <>
      <h1>
        {'hello '}
        {import.meta.env.VITE_APP_ENV}
      </h1>
    </>
  );
}

export default App;
