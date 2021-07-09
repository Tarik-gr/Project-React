import React, {useState , useContext} from 'react'
import { MyContext } from '../Firebase'
import { Link } from 'react-router-dom'

const Signup = (props) => {
    
    const [dataForLogin, setdataForLogin] = useState({
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:'', 
    })

    // handle change on form
    const handleChange = e =>{
        setdataForLogin({...dataForLogin, [e.target.id] : e.target.value})
    }
    // Load the firebase instance wich exist in MyContext.Provider (see index.js)
    const context = useContext(MyContext)
    //console.log(context)
    
    // handle the submit of the from
    const handleSubmit = e =>{
        e.preventDefault(); // prevent refreshment of the Page
        context.signupUser(dataForLogin.email, dataForLogin.password)
        setdataForLogin({
            pseudo:'',
            email:'',
            password:'',
            confirmPassword:'', 
        })
        // Redirection to start page 
        props.history.push('/start')

    }

    // button for login appearance only when the form is completed
    const btnLogin = (dataForLogin.pseudo !== '' && dataForLogin.email !== '' && dataForLogin.password !== '' && dataForLogin.password === dataForLogin.confirmPassword) && <button type="submit" className="btn btn-primary" > S'inscrire </button>



    return (
        <div className="container center-page">
            <div className="row ">
                <div className="col col-info">
                    <h2>Inscription</h2>
                        <form action="" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="pseudo">
                                    Pseudo
                                </label>
                                <input type="text" onChange={handleChange} value={dataForLogin.pseudo} className="form-control" id='pseudo' required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Adresse E-mail
                                </label>
                                <input type="email" onChange={handleChange} value={dataForLogin.email} className="form-control" id='email' required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Mot de passe
                                </label>
                                <input type="password" onChange={handleChange} value={dataForLogin.password} className="form-control" id='password'/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">
                                    Confirmer le mot de passe
                                </label>
                                <input type="password" onChange={handleChange} value={dataForLogin.confirmPassword} className="form-control" id='confirmPassword'/>
                            </div>

                            {btnLogin}
                        </form>
                        <div>
                            <Link to='/login'> Déjà inscrit ? Connectez vous.</Link>
                        </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}

export default Signup
