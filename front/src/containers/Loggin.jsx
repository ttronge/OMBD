import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import movies from './movies'

const Loggin = () => {

    const history = useHistory()
    const [logstate, setlogstate] = useState(false)
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
        axios.post('/api/login', { email: newUser, password: newPassword })
            .then(() => history.push('/home'))

    }

    return (
        <div className='loggin'>
            <div className="welcome">
                <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt="" />
            </div>
            <div className='titulosDeRegister'>
                <h1>Sign in to your account</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={'formulario'} >
                    <div classNameName="mb-3">
                        <br />
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUser} />

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label" onChange={handlePassword}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <button className='boton' type='submit'>ENTRAR</button>
                            <Link to={'/register'}><button className='boton'> Register</button></Link>
                            <h3>Si no puede entrar vaya  register</h3>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    )

}
export default Loggin


