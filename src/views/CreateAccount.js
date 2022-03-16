import React, { useState, useEffect } from "react";
import UserValidations from "../utils/userValidations";
import styles from './CreateAccount.module.scss'

const CreateAccount = () => {

    const [user, setUser] = useState({
        userName: ['', ''],
        rut: ['', ''],
        password: ['', ''],
        confirmPassword: ['', ''],
        email: ['', ''],
    })

    const [err, setErr] = useState([]);

    const userValidations = new UserValidations();

    const handlerForm = (target) => {
       
        //const isInputValid = userValidations.minCharacters(target.value);
        const isValidForm = userValidations.validate(user);
        setUser({ ...user, [target.name]: [target.value, isValidForm[0]] })
        console.log(isValidForm[0], "lo que llega")
        //setErr(isValidForm[0].err )
    }
    const createAccount = (e) => {
        e.preventDefault();
       /* const isValidForm = userValidations.validate(user);
      console.log(isValidForm[0],"retorno final")
      isValidForm.forEach(function(element){
          console.log(element.status,"statusss")

        if(!element.status ) {
          setErr(element.err)
        } else {
           setErr(element.err)
        }
        console.log(element.err, "err dentro del for")
    })
    console.log(err, "err con estado final")*/
    }
    
    useEffect(() => {
        console.log(Object.keys(user));
        
    }, [user]);


    return (
        <div>
            <h1>Crea tu cuenta</h1>
            <div className={styles.formContainer}>
                <form action="" onSubmit={createAccount}>
                    <label htmlFor="userName">Nombre:</label>
                    <input type="text" name="userName" value={user.userName[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.userName[1]}</p>
                    
                    <label htmlFor="rut">Rut:</label>
                    <input type="text" name="rut" value={user.rut[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.rut[1]}</p>
                   
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={user.password[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.password[1]}</p>
                    <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword[0]} onChange={(e) => handlerForm(e.target)}/>
                    <p className={styles.errMsg}>{user.confirmPassword[1]}</p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={user.email[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.email[1]}</p>
                    <button type="submit">Crear cuenta</button>
                </form>
                
            </div>
        </div>
    )
}

export default CreateAccount;