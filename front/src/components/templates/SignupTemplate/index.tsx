import HrefText from '@/components/atoms/HrefText';
import SignupForm from '@/components/oraganisms/SignupForm';

const SignupTemplate: React.FC = () => {
  return (
    <>
      <h1>Sign up</h1>
      <SignupForm />
      <HrefText text="or, login" href="/auth/login" />
    </>
  );
};

export default SignupTemplate;
