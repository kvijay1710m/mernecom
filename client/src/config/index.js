//1st(Register)
export const registerFormControls = [
    {
        name : 'userName', //name is key and value is userName
        label : 'User Name',
        placeholder: 'Enter your user name',
        componentType: 'input',
        type: 'text'
    },
    {
        name : 'email', 
        label : 'Email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        name : 'password',
        label : 'Password',
        placeholder: 'Enter your Password',
        componentType: 'input',
        type: 'password'
    }
]
//2nd(Login)
export const loginFormControls = [
    {
        name : 'email',
        label : 'Email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        name : 'password',
        label : 'Password',
        placeholder: 'Enter your Password',
        componentType: 'input',
        type: 'password'
    }
]