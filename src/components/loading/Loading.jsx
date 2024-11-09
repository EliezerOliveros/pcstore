import { PacmanLoader } from "react-spinners";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading-screen">
      <PacmanLoader size={75} color={"purple"} />
    </div>
  );
};

export default Loading;
