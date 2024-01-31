
function Login() {
  return (
    <div style={{display: "flex", height: "500px", alignItems: "center",justifyContent: "center"}}>
    <form action="" style={{top: "50%"}}>
      <h1>Login Page</h1>
      <br />
      <br />
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Please enter your email"/>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Please enter your passwordd"/>
      </div>
    </form>
    </div>
  );
}

  
export default Login