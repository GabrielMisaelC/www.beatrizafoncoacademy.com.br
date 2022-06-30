import { BaseBoard } from "../components/BaseBoard";
import { Top } from "../components/Top";
import SliderSlick from "../components/SliderSlick";
import { Menu } from "../components/Menu";
import Fade from "../components/SlickFade";
import MultipleItems from "../components/MultipleItems";
import useMediaQuery from '../hooks/useMediaQuery';
import { BannerCurso } from "../components/BannerCurso";
import { Maps } from "../components/Maps";


export function Home() {

  const isScreenMin = useMediaQuery('(min-width: 901px)')

  return (
    <>

      <div>
        {isScreenMin &&  <SliderSlick />}
        <Top />
        <hr style={{ border: "2px solid #4B0082" }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Menu />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Fade />
        </div>
        <MultipleItems />
        <BannerCurso />
        <Maps/>
        <BaseBoard />
      </div>
    </>
  );
}
