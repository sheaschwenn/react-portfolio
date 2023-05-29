import React , {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import './../../styles/Contact.css'
    const Contact = () =>{
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')

        const [errorMessage, setErrorMessage] = useState('')

        const handleInputChange = (event) =>{
            const {target} = event;
            const inputType = target.name
            const inputValue = target.value

            if(inputType ==='email'){
                setEmail(inputValue);

            }else if(inputType === 'name'){
                setName(inputValue)
            }else{
                setMessage(inputValue)
            }

        }

        const handleFormSubmit = (event) => {
            event.preventDefault()
            if(!validateEmail(email)){
                setErrorMessage("Email is invalid")
                return;
            }

            setName('')
            setEmail('')
            setMessage('')
            setErrorMessage('')
        }
        return(
            <div className= 'contact'>  
                <h2>CONTACT</h2>
            <form className= "form">
                
                    <input
                    value={name}
                     type='text' 
                     name= "name"
                     onChange={handleInputChange}
                     placeholder='Name'
                     />
                
                
                    <input 
                    value={email}
                    type='email' 
                    name= "email"
                    onChange={handleInputChange}
                    placeholder='Email'
                    />
                
                
                    <input 
                    value={message}
                    type='text' 
                    name= "message"
                    onChange={handleInputChange}
                    placeholder='Message'
                    />
                <button className= 'submit' type= "button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className = "error-text">{errorMessage}</p>
                </div>
            )}
            </div>
        )
    }
export default Contact