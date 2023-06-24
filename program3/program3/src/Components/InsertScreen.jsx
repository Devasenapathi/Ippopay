import React, {useState} from 'react';
import axios from 'axios';
import './insert.css'

const InsertScreen = () => {
    const[userName, setUserName]=useState('')
    const[password, setPassword] = useState('')
    const [stepss, setSteps] = useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
      let steps = ''
       // Check password length
       if (password.length < 6 || password.length > 20) {
        steps = 6 - password.length;
        setSteps(steps)
        return false;
    }

    // Check for lowercase, uppercase, and digit
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regex.test(password)) {
        steps = "Password must contain at least one lowercase letter, one uppercase letter, and one digit.";
        setSteps(steps)
        return false;
    }

    // Check for three repeating characters
    var repeatingRegex = /([a-zA-Z0-9])\1{2}/;
    if (repeatingRegex.test(password)) {
        steps = "Password cannot contain three repeating characters in a row.";
        setSteps(steps)
        return false;
    }
    setSteps('0')
    if(steps == 0){
      axios.post("http://localhost:5000/api/data",{userName,password}).then((response)=>{
        setSteps("Inserted")
        console.log(response.data);
      }).catch((error)=>{
        console.error("error",error)
      })
    }
    return true
    }


    return (
      <div className="App">
        <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p  color={{color:'red'}}>{stepss}</p>
    </div>
      </div>
    );
}

export default InsertScreen