import { useState } from 'react';

import { useNavigate, useNavigation } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './Signin.module.css';

const Signin = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [switchInput, setSwitchInput] = useState('password');

    const navigate = useNavigate();
    const navigation = useNavigation();

    const text = navigation.state === 'submitting' 
                        ? 'Submitting...' 
                        : navigation.state === 'loading' 
                        ? 'Loading...' 
                        : 'Login'

    const submitFormHandler = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            localStorage.setItem('user', userCredential);
            navigate('/gallery');
        })
        .catch((error) => {
            console.log(error);
            setError(true);
            setEmail('');
            setPassword('');
        })
    }

    const emailChangeHandler = (event) => {
        setError(false);
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setError(false);
        setPassword(event.target.value);
    }

    const switchInputHandler = () => {
        setSwitchInput((input) => {
            if(input === 'password') {
                return 'text'
            } else {
                return 'password';
            }
        })
    }

    return(
        <div className={styles.main}>
             <form className={styles.form} onSubmit={submitFormHandler}>
                <div className={styles['form-group']}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder='username' 
                        value={email} 
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label>Password</label>
                    <div className={styles.password}>
                        <input 
                            type={switchInput} 
                            placeholder='password' 
                            value={password} 
                            onChange={passwordChangeHandler}
                        />
                        <FontAwesomeIcon 
                            onClick={switchInputHandler} 
                            icon={switchInput === 'password' ? faEye : faEyeSlash} 
                            style={{color: 'black', position: 'absolute', right: '0.5rem', top: '0.6rem', cursor: 'pointer'}}
                        />
                    </div>
                </div>
                <div className={styles['form-error']}>
                   {error && <span>Invalid username or password</span> }
                </div>
                <button type='submit'>{text}</button>
            </form>
        </div>
       
    );
};

export default Signin;