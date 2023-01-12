import { BaseBoard } from "../components/BaseBoard";
import { Top } from "../components/Top";
import SliderSlick from "../components/SliderSlick";
import { Menu } from "../components/Menu";
import Fade from "../components/SlickFade";
import MultipleItems from "../components/MultipleItems";
import useMediaQuery from '../hooks/useMediaQuery';
import { Maps } from "../components/Maps";
import { CardAboutTeaching } from "../components/CardAboutTeaching";
import { CardAboutTeam } from "../components/CardAboutTeam";
import { CardAboutEquipment } from "../components/CardAboutEquipment";
import { CardAboutServices } from "../components/CardAboutServices";
import { ButtonWhatsApp } from "../components/ButtonWhatsApp";
import { CardAboutSpace } from "../components/CardAboutSpace";


export function Home() {

  const isScreenMin = useMediaQuery('(min-width: 901px)')

  return (
    <>
      <div>
        {isScreenMin && <SliderSlick />}
        <div id="home"  >
          <Top />
        </div>
        <hr style={{ border: "2px solid #DB7093"}} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Menu />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Fade />
        </div>
        <div id="services">
          <MultipleItems />
        </div>
        <div id="teaching">
          <CardAboutTeaching />
        </div>
        <div id="team">
          <CardAboutTeam />
        </div>
        <div id="equipment">
          <CardAboutEquipment />
        </div>
        <div id="aboutServices">
          <CardAboutServices />
        </div>
        <div id="space">
          <CardAboutSpace />
        </div>
        <div id="maps">
          <Maps />
        </div>
        <ButtonWhatsApp />
        <BaseBoard />
      </div>
    </>
  );
}
