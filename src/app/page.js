import '@/app/style/index.scss'

import Careers from './homeComponents/Careers'
import Head from './homeComponents/Head'
import OurAffiliates from './homeComponents/OurAffiliates'
import TargetSectors from './homeComponents/TargetSectors'
import WhoWeAre from './homeComponents/WhoWeAre'

export default function Home() {
  return (
    <>
      <Head />
      <WhoWeAre />
      <TargetSectors />
      <Careers />
      <OurAffiliates />
    </>
  )
}
