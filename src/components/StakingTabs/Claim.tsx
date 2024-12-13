import { useDispatch } from "react-redux";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { setModal } from "../../store/features/modalSlice";
const Claim = () => {
  const dispatch = useDispatch();
  const clickOnClaim = () => {
    dispatch(
      setModal({
        show: true,
        title: "CLAIM",
        subTitle: "1000 SURGE",
      })
    );
  };
  return (
    <div>
      <div className="box-space">
        <div className="text-3 center margin-y-4-6">
          Claim your accumulated rewards.{" "}
        </div>
        <div className="claim-box">
          <div className="claim-box-inner">
            <div className="text-3">Accumulated Rewards</div>
            <div className="text-9">123 SURGE</div>
          </div>
        </div>
      </div>
      <div className="centerAll">
        <ButtonStyle1 text="CLAIM" action={clickOnClaim} />
      </div>
    </div>
  );
};

export default Claim;
