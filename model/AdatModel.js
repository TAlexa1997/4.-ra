class AdatModel {
    #nev
    constructor(nev){
        this.#nev = nev;
    }
    koszon(){
        return " Te vagy a legjobb " + this.#nev +"<br>";
    }
}
export default AdatModel;