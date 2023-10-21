class AdatView {
  constructor(szoveg, szuloElem) {
    // ha rákattintunk a gombra, akkor a p -tagbe írja ki a kapott szöveget.
    this.szuloElem = szuloElem;
    this.pElem = this.szuloElem.children("p");
    this.buttonElem = this.szuloElem.children("button");
    this.szoveg = szoveg;
    this.setpElem(this.szoveg);
    this.buttonElem.on("click", () => {
      console.log("katt");
      this.#esemenyTrigger("adatkeres")
    });

  }

  setpElem(ertek) {
    this.pElem.append(ertek);
  }

  #esemenyTrigger(esemenyNev){
    const esemeny= new CustomEvent (esemenyNev,{detail:this})
    window.dispatchEvent(esemeny)
  }
}
export default AdatView;
