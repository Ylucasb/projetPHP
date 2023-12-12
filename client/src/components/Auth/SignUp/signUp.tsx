import './signUp.css'
import '../../../styles/index.css'

export const SignUp = () => {

    return (
        <main className='columnContainer container_signup_form'>
            <div className='container_logo_sign'>
                <img className='form_logo ' src="./src/assets/Images/logo.png" alt="logo" />
            </div>
            <h2 className='title_form'>Créez un compte</h2>
            <p className='subtitle_form'>Rejoignez notre Ligue des Inscriptions et devenez un super contributeur en partageant vos connaissances sur l'univers des super-héros. </p>
            <div className='columnContainer container_inputs_field'>
                <div className='rowContainer container_name'>
                    <input placeholder='Nom' className='sign_input sign_input_name' type="text" name="" id="" />
                    <input placeholder='Prénom'className='sign_input sign_input_name'  type="text" name="" id="" />
                </div>
                <input placeholder='Email'className='sign_input' type="text" name="" id="" />
                <input placeholder='Password'className='sign_input' type="password" name="" id="" />
            </div>
            <button>S'incrire</button>
            <p>Vous avez déjà un compte ? <span>Se connecter</span></p>
        </main>
    )
}