import { Link } from "react-router-dom";
import Style from "./loginpage.module.css";
import { useState } from "react";

const LoginPage = () => {
    const [troca, settroca] = useState(false);
    
    const trocar = () => {
       
        settroca(!troca);
        
    }
    return (
        <>
            <div className={`${Style.container} ${troca == true? Style.active: ""}`} id="container">

                <div className={`${Style.formcontainer} ${Style.signup}}`}>
                    <form>
                        <h2>Create Account</h2>
                        <div className={Style.socialicons}>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-github"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className={`${Style.formcontainer} ${Style.signin}`}>
                    <form>
                        <h1>Sign In</h1>
                        <div className={Style.socialicons}>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-github"></i></a>
                            <a href="#" className={Style.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>


                <div className={`${Style.togglecontainer}`}>
                    <div className={Style.toggle}>
                        <div className={`${Style.togglepanel} ${Style.toggleleft}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className={Style.hidden} onClick={()=>trocar()}>Sign In</button>
                        </div>
                        <div className={`${Style.togglepanel} ${Style.toggleright}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className={Style.hidden} onClick={()=> trocar()} id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default LoginPage;

// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classNameList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classNameList.remove("active");
// });