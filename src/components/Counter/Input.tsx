import { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const InputComponent = ({ value, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default InputComponent;
