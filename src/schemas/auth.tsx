import * as Yup from "yup";

export const signupSchema = Yup.object({
    name: Yup.string()
        .required('Vui lòng nhập tên của bạn'),
    email: Yup.string()
        .email("Email sai định dạnng")
        .required('Vui lòng nhập email của bạn'),
    password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu có ít nhất 6 kí tự'),
    confirmPassword: Yup.string()
        .required('Vui lòng nhập lại mật khẩu')
        .oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
    role: Yup.string()
        .default("member")

});
export type signupSchema = Yup.InferType<typeof signupSchema>


export const signinSchema = Yup.object({
    email: Yup.string()
        .required('Vui lòng nhập email của bạn')
        .email("Email sai định dạnng"),
    password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu có ít nhất 6 kí tự'),
});
export type signinSchema = Yup.InferType<typeof signinSchema>
