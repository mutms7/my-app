

export const App = () => {
  const username = "William"

  const greeting = (name) => `Hello, ${name}`;
  const userinfo = { age: 18, location: "Waterloo"}

  return (
  <>
  <h1>This is a good project</h1>
  <p>Your name is: {username}</p>
  <p>Greeting: {greeting(username)}</p>
  <p>
    Age: {userinfo.age}, Location: {userinfo.location}
  </p>
  </>)
}
 
//export default App;