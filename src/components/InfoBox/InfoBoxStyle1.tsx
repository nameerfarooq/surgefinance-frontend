interface InfoBoxProps {
  text: string;
  value: string;
}
const InfoBoxStyle1: React.FC<InfoBoxProps> = ({ text, value }) => {
  return (
    <div className="info-box">
      <div className="text-5 center">{text}</div>
      <div className="text-8 center">{value}</div>
    </div>
  );
};

export default InfoBoxStyle1;
