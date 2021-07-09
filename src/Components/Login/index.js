import React, {useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Firebase'

const Login = (props) => {

    const [dataForConnexion, setdataForConnexion] = useState({
        email:'',
        password:'',
    })

    // handle change on form
    const handleChange = e =>{
        setdataForConnexion({...dataForConnexion, [e.target.id] : e.target.value})
    }



    // button for login appearance only when the form is completed
    const btnConnexion = (dataForConnexion.email !== '' && dataForConnexion.password.length > 5) && <button type="submit" className="btn btn-primary" > Se connecter </button>
    //Get the context consumer of firebase
    const contextFirebase = useContext(MyContext)


    // Handle submit button => check for connexion and redirect to start page
    const handleSubmit = e =>{
        e.preventDefault();
        contextFirebase.loginUser(dataForConnexion.email, dataForConnexion.password)

        
        setdataForConnexion({
            email:'',
            password:'',
        })
        
        props.history.push('/start')
    }
    
    return (
        <div className="container center-page">
            <div className="row">
                <div className="col">

                </div>  
                <div className="col col-info">
                    <h2>Connexion</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Adresse E-mail
                                </label>
                                <input type="email" onChange={handleChange} value={dataForConnexion.email} className="form-control" id='email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Mot de passe
                                </label>
                                <input type="password" onChange={handleChange} value={dataForConnexion.password} className="form-control" id='password'/>
                            </div>

                            {btnConnexion}
                        </form>
                        <div>
                            <Link to='/signup'>Pas de compte ! Inscrivez vous maintenant.</Link>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Login
