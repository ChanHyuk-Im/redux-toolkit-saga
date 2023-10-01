interface Props {
  text: string;
}

const TextComponent = ({ text }: Props) => {
  return (
    <div>{text}</div>
  );
};

export default TextComponent;
