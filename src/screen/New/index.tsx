import { Conteiner, Div} from "./styles";
import FirtsBanner from "../../newComponents/FirtsBanner";
import { CardAboutServices } from "../../components/CardAboutServices";
import { Maps } from "../../components/Maps";
import { ButtonWhatsApp } from "../../components/ButtonWhatsApp";
import { BaseBoard } from "../../components/BaseBoard";
import Agendamento from "../../newComponents/Agendamento";
import MultipleItems from "../../components/MultipleItems";
import { CardAboutTeaching } from "../../components/CardAboutTeaching";
import { CardAboutSpace } from "../../components/CardAboutSpace";
import { CardAboutEquipment } from "../../components/CardAboutEquipment";
import { CardAboutTeam } from "../../components/CardAboutTeam";

export default function New(){
    return (
        <Conteiner>
            <div>
                <FirtsBanner/>
            </div>
            <Div>
                <Agendamento/>
            </Div>
            <div id="services">
                <MultipleItems />
            </div>
            <div id="teaching">
                <CardAboutTeaching />
            </div>
            <div id="team">
                <CardAboutTeam />
            </div>
            {/* <div id="equipment">
                <CardAboutEquipment />
            </div> */}
            {/* <div id="aboutServices">
                <CardAboutServices />
            </div> */}
            <div id="space">
                <CardAboutSpace />
            </div>
            <div id="maps">
                <Maps />
            </div>
            <ButtonWhatsApp />
            <BaseBoard />
        </Conteiner>
    )
}
