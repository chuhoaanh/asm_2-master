import instance from '.';
import { signinSchema, signupSchema } from '../schemas/auth';

export const signup_user = (data: signupSchema) => {
    const uri = "/signup"
    return instance.post(uri, data)
};

export const sigin_user = (data: signinSchema) => {
    const uri = "/signin"
    return instance.post(uri, data)
};