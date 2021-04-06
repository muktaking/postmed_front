import axios from "axios";
import React, { useState } from 'react';
import { Alert, Button, FormControl, InputGroup } from 'react-bootstrap';
import { CgPassword } from "react-icons/cg";
import { useParams } from "react-router-dom";
import validator from "validator";
import "../../assets/scss/section/registration.scss";
import NavbarHome from '../../components/navbar/navbarHome';



export default function Reset({...props}) {
    let {id} = useParams();
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [formErrors, setFormErrors] = useState("");
    const [resStyle, setResStyle] = useState('danger');
  
    const changeHandler = (e)=>{
      const name = e.target.name;  
      const value = e.target.value;
      let msg = "";
      switch (name) {
          case 'password':
           msg += validator.matches(
                value,
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
              )
                ? ""
                : "Password should be minimum 6 characters and contain atleast one capital and lowercase alpha, neumeric value";
           setPassword(value);   
              break;
            case 'repeatPassword':
                msg += value === password
                    ? ""
                    : "Repeat Password is not matched ";
                setRepeatPassword(value);     
                
                break;    
      
          default:
              break;
      }
      setFormErrors(msg)
    }
    
    const submitHandler = ()=>{
      if(!password) {
        setFormErrors("Password can not be empty");
        return
      } else if(password !== repeatPassword){
        setFormErrors("Two Password fields must be matched");
        return
      } else if(formErrors){
        return
      } else{
        axios.post(process.env.REACT_APP_SITE_URL + "/auth/reset/" + id, {password, token: id})
        .then(response=>{
            setFormErrors(response.data.message + ' . Redirecting to login page...');
            setResStyle('success');
            setTimeout(()=>{
                props.history.push({ pathname: "/login" });
            }, 3000)
            
        })
        .catch(error=>{
            setFormErrors("Reset can not be done.Token may be expired");
            setResStyle('danger');
        })     
      }
    }

    
    return (
        <div className="registration">
            <NavbarHome isLanding={false} />
            <div className="landing">
                <div className="home-inner"></div>
            </div>
            <div className="caption text-center">
                <h1>Reset Password</h1>
                <div className="heading-underline"></div>
                <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="password">
                        <CgPassword />
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Password"
                    type="password"
                    name="password"
                    aria-label="Password"
                    aria-describedby="password"
                    onChange = {changeHandler}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="repeatPassword">
                        <CgPassword />
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Repeat Password"
                    type="password"
                    name="repeatPassword"
                    aria-label="RepeatPassword"
                    aria-describedby="repeatPassword"
                    onChange = {changeHandler}
                    />
                </InputGroup>
                { formErrors !== '' &&  <Alert className="my-2" variant={resStyle}> {formErrors} </Alert> }
                <Button variant="primary" onClick={submitHandler}>
                    Submit
                </Button>
                </div>

            </div>
        </div>
    )
}
