import '../auth_style.css'
import '../../../styles/index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../../utils/constants'

export const SignIn: React.FC = () => {
    const [emailController, setEmailController] = useState("");
    const [passwordController, setPasswordController] = useState("");

    const signIn = async () => {
        try {
            await axios.post(apiUrl, { email: emailController, password: passwordController });
        } catch (error: any) {
            throw new Error("Error while trying to check if user is valid :")
        }
    }

    return (
        <main className='columnContainer container_signup_form'>
            <div className='container_logo_sign'>
                <img className='form_logo ' src="./src/assets/Images/logo.png" alt="logo" />
            </div>
            <h2 className='title_form'>Se connecter</h2>
            <p className='subtitle_form'>Rejoignez notre Ligue des Inscriptions et devenez un super contributeur en partageant vos connaissances sur l'univers des super-héros. </p>
            <div className='columnContainer container_inputs_field'>
                <input required onChange={(e) => { setEmailController(e.target.value) }} placeholder='Email' className='sign_input' type="email" />
                <input required onChange={(e) => { setPasswordController(e.target.value) }} placeholder='Password' className='sign_input' type="password" />
            </div>
            <button onClick={() => signIn} className='sign_button'>Se connecter</button>
            <p className='switch_sign_text'>Vous n'avez pas déjà un compte ? <Link to={'/signup'} className='link_sign'>S'inscrire</Link></p>
        </main>
    )
}