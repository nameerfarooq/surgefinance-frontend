import { useDispatch } from "react-redux";
import inputLogo from "../../assets/icons/inputLogo.svg";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { setModal } from "../../store/features/modalSlice";
const Stake = () => {
  const dispatch = useDispatch();
  const clickOnStake = () => {
    dispatch(
      setModal({
        show: true,
        title: "STAKE",
        subTitle: "1000 SURGE",
      })
    );
  };

  return (
    <div>
      <div className="box-space">
        <div className="text-3 center margin-y-4-6">
          Stake your SURGE tokens and help secure the protocol. <br /> The
          longer you stake the larger your APR gets.
        </div>
        <div className="value-input-row">
          <div className="left">
            <div className="logo">
              <img src={inputLogo} alt="Surge Logo" />
            </div>
            <div className="input-area">
              <input type="number" placeholder="100.00" className="text-4" />
            </div>
          </div>
          <div className="right text-5">MAX</div>
        </div>
        <br />
        <h1 className="text-5 mt-and-mb1 center">
          Available in wallet: <span className="text-6">2391 SURGE</span>
        </h1>
      </div>
      <div className="centerAll">
        <ButtonStyle1 text="STAKE" action={clickOnStake} />
      </div>
    </div>
  );
};

export default Stake;
