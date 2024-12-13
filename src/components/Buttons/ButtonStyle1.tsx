interface ButtonProps {
  text: string;
  action?: Function;
}
const ButtonStyle1: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <div
      className="button-style-1"
      onClick={() => {
        if (action) {
          action();
        }
      }}
    >
      <div className="text-7">{text}</div>
    </div>
  );
};

export default ButtonStyle1;
