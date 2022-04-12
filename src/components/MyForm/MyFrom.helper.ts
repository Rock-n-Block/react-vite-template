import * as Yup from 'yup';

export const helperConfig = [
  { type: 'text', placeholder: 'email', name: 'email', id: 'email' },
  { type: 'password', placeholder: 'password', name: 'password', id: 'password' },
];
interface Values {
  email: string;
  password: string;
}
export const initialValues: Values = { email: '', password: '' };
export const SignupSchema = Yup.object().shape({
  password: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
