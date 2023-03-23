import "../../css/LoginScreen.css";
import {React,useState,useEffect} from 'react';

function Signin_signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    useEffect(() => {
      const container = document.getElementById('container');
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const signUp = document.getElementById('real-sign-up');
      const signIn = document.getElementById('real-sign-in');
  
      const handleSignUpClick = () => {
        container.classList.add('right-panel-active');
      };
  
      const handleSignInClick = () => {
        container.classList.remove('right-panel-active');
      };
  
      const handleSignupClick = async () => {
        const data = {name, email, password};
        try {
          const response = await fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };
  
      const handleSigninClick = () => {
        console.log('Email:', email);
        console.log('Password:', password);
      };
  
      signUp.addEventListener('click', handleSignupClick);
      signIn.addEventListener('click', handleSigninClick);
      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);
  
      return () => {
        signUp.removeEventListener('click', handleSignupClick);
        signIn.removeEventListener('click', handleSigninClick);
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      };
    }, [name, email, password]);


  // useEffect(() => {
  //   const signUpButton = document.getElementById('signUp');
  //   const signInButton = document.getElementById('signIn');
  //   const signUp = document.getElementById('real-sign-up');
  //   const signIn = document.getElementById('real-sign-in');
  //   const container = document.getElementById('container');
  
  //   const handleSignUpClick = () => {
  //     container.classList.add("right-panel-active");
  //   };
  
  //   const handleSignInClick = () => {
  //     container.classList.remove("right-panel-active");
  //   };
    
  //   const handlesignupClick = () => {
  //     console.log('Name:', name);
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //   };
    
  //   const handlesigninClick = () => {
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //   };
    
  //   signUp.addEventListener('click', handlesignupClick);
  //   signIn.addEventListener('click', handlesigninClick);
  //   signUpButton.addEventListener('click', handleSignUpClick);
  //   signInButton.addEventListener('click', handleSignInClick);
  
  //   return () => {
  //     signUp.removeEventListener('click', handlesignupClick);
  //     signIn.removeEventListener('click', handlesigninClick);
  //     signUpButton.removeEventListener('click', handleSignUpClick);
  //     signInButton.removeEventListener('click', handleSignInClick);
  //   };
  // }, [email, name, password]);

  return (
    <div className="container" id="container">

      <div className="form-container sign-up-container">

          <form action="#">

              <h1>Create Account</h1>

              <div className="social-container">
                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>

              <span>or use your email for registration</span>

              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button id='real-sign-up'>Sign Up</button>

          </form>

      </div>

      <div className="form-container sign-in-container">

          <form action="#">

              <h1>Sign in</h1>

              <div className="social-container">

                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>

              </div>

              <span>or use your account</span>

              <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>

              <a href="#">Forgot your password?</a>
              <button id='real-sign-in'>Sign In</button>

          </form>

      </div>

      <div className="overlay-container">

          <div className="overlay">

              <div className="overlay-panel overlay-left">

                  <h1>Welcome Back!</h1>
                  <p>Ready to shop with us again? Log in and let's get started.</p>
                  <button className="ghost" id="signIn">Sign In</button>

              </div>

              <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Get started with us and enjoy a seamless shopping experience.</p>
                  <button className="ghost" id="signUp">Sign Up</button>
              </div>

          </div>

      </div>

    </div>
  )
}

export default Signin_signup
