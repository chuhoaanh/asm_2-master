import { useForm } from 'react-hook-form';
import { signinSchema } from '../schemas/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { sigin_user } from '../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks';

const login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<signinSchema>({
        resolver: yupResolver(signinSchema)
    });

    const [user, setUser] = useLocalStorage("user", null)

    const navigate = useNavigate()

    const onSubmit = async (data: signinSchema) => {
        try {
            const { data: { userCheck, accessToken } } = await sigin_user(data);
            setUser({
                accessToken,
                ...userCheck
            })
            navigate('/admin')

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-[500px]" >
                <div className="flex justify-center justify-items-center my-4 " >
                    <img className="w-[70px] " src="../../public/img/logo.png" alt="" />
                </div>
                <h3 className="text-3xl font-bold text-center text-[#D70018] ">
                    Sign In
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <div>
                            <label className="block font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                {...register('email')}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.email && errors.email.message}
                            </span>
                        </div>
                        <div className="mt-4 font-semibold">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                {errors.password && errors.password.message}
                            </span>
                        </div>
                        <div className="text-[#5855ff] text-right">
                            <a href="">Forgot password?</a>
                        </div>

                        <div className="flex items-baseline justify-center">
                            <button className="px-6 py-2 mt-4 text-white bg-[#D70018] rounded-lg hover:bg-[#ff001e]">Login</button>
                            {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                        </div>
                        <div className="text-center mt-4">
                            <div className="">
                                Create an account <Link to="/signup" className="text-[#5855ff]">Signup now</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login;