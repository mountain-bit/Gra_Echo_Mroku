

class Hp{
    constructor(hpMax){
        this.hp = hpMax;
        this.hpMax = hpMax;
    }
//potrzeba pancerza
    przyjmowanieObrazen(Obr,Pancerz){
        ObrazeniaNazwyObr.forEach(element,key => {
            this.hp-=Obr.obrazeniaCalkowitePodzielone[e]*(1-Pancerz.pancerz[e]);
        });
    }

    czyZyje(){
        return hp>=0;
    }
}