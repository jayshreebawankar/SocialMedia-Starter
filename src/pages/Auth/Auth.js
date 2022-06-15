import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
  return (
    <div className='auth'>
        <div className='auth-left'>
            <img src={Logo} alt='logo'/>
            <div className='web-name'>
                <h1>SOCIAL Media</h1>
                <h6>Explore the ideas throught the world</h6>   
            </div>
        </div>

        <SignUp/>
        {/* <Login/> */}
    </div>
  )
}

function SignUp(){
    return(
        <div className='auth-right'>
            <form className='infoForm  authForm'>

                <h3>Sign Up</h3>

                <div>
                    <input 
                        type='text' 
                        name='firstName'
                        className='infoInput' 
                        placeholder="First Name"
                    />
                    <input 
                        type='text' 
                        name='lastName'
                        className='infoInput' 
                        placeholder="Last Name"
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        name='Username'
                        className='infoInput' 
                        placeholder='Username'
                    />
                </div>
                <div>
                    <input 
                        type='password' 
                        name='password'
                        className='infoInput' 
                        placeholder="Password"
                    />
                    <input 
                        type='password' 
                        name='confirmPassword'
                        className='infoInput' 
                        placeholder="Confirm Password"
                    />
                </div>

                <div>
                    <span style={{fontSize:'12px'}}>Already have an account? Login!</span>
                </div>

                <button className='button signupBtn'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}


function Login(){
    return(
        <div className='auth-right'>
            <form className='infoForm  authForm'>

                <h3>Login</h3>

                <div>
                    <input 
                        type='text' 
                        name='Username'
                        className='infoInput' 
                        placeholder='Username'
                    />
                </div>
                <div>
                    <input 
                        type='password' 
                        name='password'
                        className='infoInput' 
                        placeholder="Password"
                    />
                </div>

                <div>
                    <span style={{fontSize:'12px'}}>Don`t have an account? SignUp!</span>
                </div>

                <button className='button signupBtn'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Auth