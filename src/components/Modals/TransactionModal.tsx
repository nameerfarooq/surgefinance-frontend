import { useDispatch, useSelector } from "react-redux";
import cross from "../../assets/icons/cross.svg";
import redirect from "../../assets/icons/redirect.svg";
import surgeIconColored from "../../assets/icons/surgeIconColored.svg";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { setModal } from "../../store/features/modalSlice";

// Inspired by the former Facebook spinners.
function CustomCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Circular loader */}
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={120}
        thickness={4}
        {...props}
        value={100}
      />

      {/* Image in the center */}
      <div
        style={{
          position: "absolute",
          top: "49%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          zIndex: 1, // Ensure image appears above circular loader
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={surgeIconColored}
          alt="Surge Icon Colored"
          style={{ maxWidth: "75%" }}
        />
      </div>

      {/* Animated circular loader */}
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "1000ms",
          position: "absolute",
          left: 0,
        }}
        size={120}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const TransactionModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal);
  return (
    <div className="transaction-modal">
      <div className="transaction-modal-card">
        <div className="buttons">
          <img src={redirect} alt="Redirect icon" />
          <img
            onClick={() =>
              dispatch(
                setModal({
                  show: false,
                  title: "",
                  subTitle: "",
                })
              )
            }
            src={cross}
            alt="cross icon"
          />
        </div>
        <div className="text-11">{modal?.title}</div>

        <CustomCircularProgress />
        <div className="text-10">{modal?.subTitle}</div>
      </div>
    </div>
  );
};

export default TransactionModal;
