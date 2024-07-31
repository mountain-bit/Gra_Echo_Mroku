const ObrazeniaNazwy={
    fizyczne:1,
    magiczne:2,
    błyskawica:3,
    ogień:4,
    spaczenia:5,
    święte:6,

    leczenieFizyczne:7,
    leczenieMagiczne:8,
    leczenieSwięte:9,
    
    krwawienie:10,
    zatrucie:11
}

console.log(ObrazeniaNazwy.magiczne);

class Obrazenia{
    //tworzy tylko strukture 
    constructor(punktyObrazen){
        this.punktyObrazen = punktyObrazen;
        this.obrazeniaProcentowe = [];
        this.#setFirstObrazeniaProcentowe();
        this.obrazeniaStale = [];
        this.#setFirstObrazeniaStale();
        //this.obrazeniaCalkowite ;
        this.#setFirstObrazeniaCalkowitePodzielone();
        this.obrazeniaCalkowitePodzielone = []; 
    }

    #setFirstObrazeniaProcentowe(){
        ObrazeniaNazwy.forEach(element,key => {
            this.obrazeniaProcentowe[element] = 0;
        });
    }

    #setFirstObrazeniaStale(){
        ObrazeniaNazwy.forEach(element,key => {
            this.obrazeniaStale[element] = 0;
        });
    }
    #setFirstObrazeniaCalkowitePodzielone(){
        ObrazeniaNazwy.forEach(element,key => {
            this.obrazeniaCalkowitePodzielone[element] = 0;
        });
    }

    #setCurrentObrazeniaCalkowitePodzielone(){
        for(let i=0;i<ObrazeniaNazwy.length;i++){
            this.obrazeniaCalkowitePodzielone[i] = this.punktyObrazen*this.obrazeniaProcentowe+this.obrazeniaStale;
        }
    }

    get obrazeniaCalkowitePodzielone(){
        this.#setCurrentObrazeniaCalkowitePodzielone();
        return this.obrazeniaCalkowitePodzielone;
    }

    get obrazeniaCalkowite (){
        this.#setCurrentObrazeniaCalkowitePodzielone();
        var obr = 0;
        this.obrazeniaCalkowitePodzielone.forEach(el => {
            obr += el;
        });
        return el;
    }

}


// generator 
// będzie tutaj