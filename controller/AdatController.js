import AdatModel from "../model/AdatModel.js";
import AdatView from "../view/AdatView.js";

class AdatController {
    constructor(){
        console.log("controller");
        this.adatView=new AdatView("Kattints a gombra!<br>",$(".tartalom"))
        this.adatModel=new AdatModel("Alexa");
        //Itt iratkozunk fel a View eseményre!
        $(window).on("adatkeres",(event)=>{
            
            const miObjektumunk=event.detail;
            console.log(miObjektumunk)
            let szoveg =this.adatModel.koszon();
            this.adatView.setpElem(szoveg)
        });
    }
}
export default AdatController;