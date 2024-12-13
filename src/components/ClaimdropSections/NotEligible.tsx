import greenCross from "../../assets/icons/greenCross.svg";

const NotEligible = () => {
  return (
    <div className="not-eligible">
      <div className="left">
        <img src={greenCross} alt="Cross Icon" />
      </div>
      <div className="right">
        <div className="text-3">
          Sorry, you are not eligible for this claimdrop, but we would love you
          to join our community!
        </div>
      </div>
    </div>
  );
};

export default NotEligible;
