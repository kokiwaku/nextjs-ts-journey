import InputForm from '@/components/atoms/InputForm';
import InputLabel from '@/components/atoms/InputLabel';

type Props = JSX.IntrinsicElements['input'];
const InputFormWithLabel: React.FC<Props> = ({ type, id, value, onChange }) => {
  return (
    <>
      <InputLabel htmlFor={id}>{id}</InputLabel>
      <InputForm type={type} id={id} value={value} onChange={onChange} />
    </>
  );
};

export default InputFormWithLabel;
