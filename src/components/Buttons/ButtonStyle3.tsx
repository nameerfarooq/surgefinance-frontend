interface ButtonProps {
  text: string;
  action?: Function;
  disabled?: boolean;
}
const ButtonStyle3: React.FC<ButtonProps> = ({ text, action, disabled }) => {
  return (
    <div
      className={`button-style-3 ${disabled && "disabled"}`}
      onClick={() => {
        if (action) {
          action();
        }
      }}
    >
      <div className="text-16">{text}</div>
    </div>
  );
};

export default ButtonStyle3;
