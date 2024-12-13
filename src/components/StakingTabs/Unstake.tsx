import { useDispatch } from "react-redux";
import lock from "../../assets/icons/lock.svg";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { setModal } from "../../store/features/modalSlice";
const Unstake = () => {
    const dispatch = useDispatch();
  const clickOnUnStake = () => {
    dispatch(
      setModal({
        show: true,
        title: "UNSTAKE",
        subTitle: "1000 SURGE",
      })
    );
  };
  return (
    <div>
      <div className="box-space">
        <div className="text-3 center margin-y-4-6">
          Unstake your Surge tokens, but lose your multiplier.
        </div>
        <div className="unstake-box">
          <div className="unstake-box-inner">
            <div className="left">
              <div className="icon">
                <img src={lock} alt="Lock Icon" />
              </div>
              <div className="content">
                <div className="text-3">Staked Amount</div>
                <div className="text-9">123 SURGE</div>
              </div>
            </div>
            <div className="right">
              <div className="text-5">Staked Since: 01.01.2024</div>
              <div className="text-5">
                Multiplier: <span className="text-10"> 2x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="centerAll">
        <ButtonStyle1 text="UNSTAKE" action={clickOnUnStake}/>
      </div>
    </div>
  );
};

export default Unstake;
