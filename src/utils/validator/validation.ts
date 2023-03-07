type Errors = {
    email: string
    password: string
}

const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

export const validateLogin = (values: Errors) => {
    const errors: Errors = { email: '', password: '' }


    if (!values.email) {
        errors.email = 'email is required!'
    } else if (!regEx.test(values.email)) {
        errors.email = 'email is not valid'
    }


    if (!values.password) {
        errors.password = 'password is required!'
    } else if ((values.password).length < 5) {
        errors.password = 'password must be at least 5 characters!'
    }

    return errors
}