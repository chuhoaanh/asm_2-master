import { useForm } from 'react-hook-form';
import { signinSchema, signupSchema } from '../schemas/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup_user } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<signupSchema>({
        resolver: yupResolver(signupSchema)
    });
    const navigate = useNavigate()
    const onSubmit = async (data: signupSchema) => {

        try {
            const response = await signup_user(data);
            console.log(response);
            navigate('/signin')

        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-[500px]">
                <div className="flex justify-center justify-items-center my-4 " >
                    <img className="w-[70px] " src="../../public/img/logo.png" alt="" />
                </div>
                <h3 className="text-3xl font-bold text-center text-[#D70018] ">
                    Sign Up
                </h3>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">

                        <div>
                            <label className="mt-2 block font-semibold" >
                                Name
                            </label>
                            <input
                                {...register('name')}
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.name && errors.name.message}

                            </span>
                        </div>
                        <div>
                            <label className=" mt-2 block font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                {...register('email')}
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.email && errors.email.message}

                            </span>
                        </div>
                        <div className="mt-2 font-semibold">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.password && errors.password.message}

                            </span>
                        </div>
                        <div className="mt-2 font-semibold">
                            <label className="block font-semibold" htmlFor="password">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword')}
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.confirmPassword && errors.confirmPassword.message}
                            </span>
                        </div>
                        <div className="flex items-baseline justify-center">
                            <button className="px-6 py-2 mt-4 text-white bg-[#D70018] rounded-lg hover:bg-[#ff001e]">Lognup</button>
                            {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                        </div>
                        <div className="text-center mt-4">
                            <div className="">
                                Already a member? <a href="/signin" className="text-[#5855ff]">Log in</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default signup;