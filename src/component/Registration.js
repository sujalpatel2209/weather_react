import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const [nameError, setnameError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!name.match(/^[a-zA-Z ]*$/) || name == "") {
            formIsValid = false;
            setnameError("Name Not Valid");
            return false;
        } else {
            setnameError("");
            formIsValid = true;
        }

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return (
        <div className="container h-100">
            <h1 className="text-center">Registration</h1>
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form id="loginform" onSubmit={loginSubmit}>
                    <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="NameInput"
                                name="NameInput"
                                aria-describedby="NameHelp"
                                placeholder="Enter name"
                                onChange={(event) => setName(event.target.value)}
                            />
                            <small id="NameHelp" className="text-danger form-text">
                                {nameError}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>
                        <div className="form-group form-check">
                            
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </form>
                    <span>Signin to Account</span><Link to={'/login'}> Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;