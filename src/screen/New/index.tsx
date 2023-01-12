import { Conteiner} from "./styles";
import FirtsBanner from "../../newComponents/FirtsBanner";
import { CardAboutServices } from "../../components/CardAboutServices";
import { Maps } from "../../components/Maps";
import { ButtonWhatsApp } from "../../components/ButtonWhatsApp";
import { BaseBoard } from "../../components/BaseBoard";

export default function New(){
    return (
        <Conteiner>
            <div>
                <FirtsBanner/>
            </div>
            <div>
                <CardAboutServices />
            </div>
            <div id="maps">
                <Maps />
            </div>
            <ButtonWhatsApp />
            <BaseBoard />
        </Conteiner>
    )
}
