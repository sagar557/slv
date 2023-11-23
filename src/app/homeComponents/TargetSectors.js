import Image from "next/image"
import Target from '../../../public/T.png'
const TargetSectors = () => {
  return (
    <>
      <div className="TargetSectors">
        <h2>Target <span>Sectors</span></h2>
        <div className="TargetSectorsContainer">
          <Image src={Target} />
        </div>    

      </div>
    </>
  )
}

export default TargetSectors
