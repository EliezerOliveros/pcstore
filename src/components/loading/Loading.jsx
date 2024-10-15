import { PacmanLoader } from "react-spinners"
import "./loading.scss"

const loading = () => {
  return (
    <div className="loading-screen">
      <PacmanLoader size={75} color={"purple"} />
    </div>
  )
}

export default loading
