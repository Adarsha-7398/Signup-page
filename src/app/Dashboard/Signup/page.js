
const Signup = () => {
  return (
<>
<div style={{display: "flex", height: "500px", alignItems: "center",justifyContent: "center"}}>
    <form action="" style={{top: "50%"}}>
      <h1>Signup Page</h1>
      <br />
      <br />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Please enter your name"/>
      </div>
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
</>
  )
}

export default Signup