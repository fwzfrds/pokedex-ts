import React, { useState } from 'react'
import Input from '../../base/input/input'
import styles from './loginForm.module.css'
import pokeball from '../../../assets/img/pokeball.png'
import ButtonComp from '../../base/button/button'
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Typography from '@mui/material/Typography'
import { login, userDetail } from '../../../services/api/auth'
import swal from 'sweetalert';
import { validateLogin } from '../../../utils/validator/validation'
import { useNavigate } from 'react-router-dom';

type LoginData = {
    email: string
    password: string
}

type Errors = {
    email: string
    password: string
}

const LoginForm = () => {

    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [formErrors, setFormErrors] = useState<Errors>({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        switch (e.target.name) {
            case 'email':
                setLoginData({ ...loginData, email: e.target.value })
                break;
            case 'password':
                setLoginData({ ...loginData, password: e.target.value })
                break;

            default:
                break;
        }
    }

    const handleLogin = async (): Promise<void> => {
        setLoading(true)

        let errorDataForms: Errors = { email: '', password: '' }

        errorDataForms = validateLogin(loginData)
        if (errorDataForms.email || errorDataForms.password) {
            setFormErrors(errorDataForms)
            swal({
                title: "error",
                text: 'Check your email or your password',
                icon: "error",
                timer: 2000
            });
            setLoading(false)
            return
        }

        try {
            const res: any = await login(loginData.email, loginData.password)

            localStorage.setItem('pokeAccessToken', res.data.access_token)
            localStorage.setItem('pokeRefreshToken', res.data.refresh_token)

            swal({
                title: "Success",
                text: `Login success!`,
                icon: "success",
                timer: 2000
            });

            fetchProfile(res.data.access_token)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            console.error(error);
            setLoading(false)
            swal({
                title: "error",
                text: 'Error while loggin in',
                icon: "error",
                timer: 2000
            });
        }
    }

    const fetchProfile = async (token: string): Promise<void> => {
        const res: any = await userDetail(token)

        localStorage.setItem('dexUser', JSON.stringify(res.data))

        setLoading(false)
    }

    return (
        <div
            className={styles.formContainer}
        >
            <div
                className={styles.formHeader}
            >
                <div className={styles.formLogo}>
                    <img src={pokeball} alt="pokeball" />
                    <span>Login</span>
                </div>
            </div>
            <Input
                className={styles.input}
                label="Email"
                name="email"
                type="email"
                placeholder='takeshi@gmail.com'
                handleChange={(e) => handleChange(e)}
                inputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    ),
                }}
                error={formErrors.email ? true : false}
                validationText={formErrors.email ? formErrors.email : ''}
            />
            <Input
                className={styles.input}
                label="Password"
                name="password"
                type="password"
                placeholder='your password'
                handleChange={(e) => handleChange(e)}
                inputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HttpsOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
                error={formErrors.password ? true : false}
                validationText={formErrors.password ? formErrors.password : ''}
            />
            <Typography
                className={styles.forgotPassword}
                color='primary.main'
            >
                Forgot password ?
            </Typography>
            <ButtonComp
                variant="contained"
                onClick={() => handleLogin()}
                className={styles.buttonLogin}
                disabled={loading}
            >
                {loading ? 'loading...' : 'Login'}
            </ButtonComp>
        </div>
    )
}

export default LoginForm