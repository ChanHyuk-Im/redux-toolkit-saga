interface Props {
  text: string;
  onClick: () => void;
}

const ButtonComponent = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
