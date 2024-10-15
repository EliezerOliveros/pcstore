import ChildrenComponen from "./ChildrenComponent"
import childrenComponen from "./ChildrenComponent"

const FatherComponent = ({Children}) => {
  return (
    <>
      <ChildrenComponen title="Caja">
        <p>contenido personalizado</p>
        <button>Cliqueame</button>
      </ChildrenComponen>
    
    </>
  )
}

export default FatherComponent
