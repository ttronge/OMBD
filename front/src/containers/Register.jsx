import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";




const Register = () => {
    const history = useHistory()
    const [newUser, SetNewUser] = useState()
    const [newPassword, SetNewPassword] = useState()

    const handleUser = (evt) => {
        SetNewUser(evt.target.value)
        console.log(newUser)
    }
    const handlePassword = (evt) => {
        SetNewPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('/api/register', { email: newUser, password: newPassword })
            .then(() => history.push('/home'))

    }

    return (
        <div className='loggin'>
            <div className="welcome">
                <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt="" />
            </div>
            <div className='titulosDeRegister'>
                <h1>Welcome to the page</h1>
                <h3>Please register with form</h3>
            </div>

            <form onSubmit={handleSubmit} >
                <div className={'formulario'} >
                    <div className="mb-3">
                        <br />
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUser} />

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
                        </div>
                        <div className="mb-3">
                            <button className='boton' type='submit' >ENTRAR</button>
                            <Link to={'/'}><button className='boton'> Log in</button></Link>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    )
}




export default Register