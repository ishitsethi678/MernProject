import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    work: '',
    password: '',
    cpassword: '',
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name,email,phone,work,password,cpassword}=formData;
    const HOST="http://localhost:5000";
const apiUrl = `${HOST}/register`;

// const apiUrl="http://localhost:5000/register"

    const res = await fetch(apiUrl,{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({name,email,phone,work,password,cpassword})
    })
    const responseformData = await res.json();
    // console.log(responseformData);

    if(res.status === 422 || !responseformData){
      window.alert("Invalid Data");
      console.log("invalid data");
    }
    else{
       window.alert("Registered Successfully");
      console.log("Registered Successfully");
      navigate('/login'); 

navigate('/login');    }
  };
  return (
    <>
    <div className="container">
      <h2>Sign Up</h2>
      <form method='POST' >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
         <div className="form-group">
          <label htmlFor="email">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <input type="submit" value="Register" /> */}
          <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup
