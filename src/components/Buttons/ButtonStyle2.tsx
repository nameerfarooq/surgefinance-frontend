interface ButtonProps {
  text: string;
  action?: Function;
}
const ButtonStyle2: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <div
      className="button-style-2"
      onClick={() => {
        if (action) {
          action();
        }
      }}
    >
      <div className="text-13">{text}</div>
    </div>
  );
};

export default ButtonStyle2;
