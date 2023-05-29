import React from 'react';

    const Contact = () =>{
        return(
            <form>
                <label>
                    Name:
                    <input type='text' name= "name"/>
                </label>
                <label>
                    Email:
                    <input type= "email" name= "email"/>
                </label>
                <label>
                    Message:
                    <input type="text" name= "message"/>
                </label>
            </form>
        )
    }
export default Contact