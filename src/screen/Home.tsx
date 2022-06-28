import { BaseBoard } from "../components/BaseBoard";
import { Top } from "../components/Top";
import SliderSlick from "../components/SliderSlick";
import { Menu } from "../components/Menu";
import Fade from "../components/SlickFade";
import MultipleItems from "../components/MultipleItems";
import BannerCurso from "../components/BannerCurso";


export function Home() {


  return (
    <>
      <div>
        <SliderSlick />
        <Top />
        <hr style={{ color: "#C0C0C0" }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Menu />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Fade />
        </div>
        <MultipleItems />
        {/* <BannerCurso /> */}
        <BaseBoard />
      </div>
    </>
  );
}
