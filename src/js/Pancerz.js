

const PancerzNazwy ={
    1 : "fizyczne",
    2 : "magiczne",
    3 : "błyskawica",
    4 : "ogień",
    5 : "spaczenia",
    6 : "święte",
    7:"leczenie fizyczne",
    8: "leczenie magiczne",
    9 : "leczenie święte",
    10 : "krwawienie",
    11 : "zatrucie",
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


const PancerzNazwyObr={
    fizyczne:1,
    magiczne:2,
    błyskawica:3,
    ogień:4,
    spaczenia:5,
    święte:6
}

const PancerzLecz={
    leczenieFizyczne:7,
    leczenieMagiczne:8,
    leczenieSwięte:9
}

const PancerzStatus={
     
    krwawienie:10,
    zatrucie:11
}


class Pancerz{
    constructor(){
      this.pancerz = new Array(Object.keys(PancerzNazwy).length/2);
      this.#setFirstPancerz();
    }

    #setFirstPancerz(){
        for(let i =0;i<this.pancerz.length;i++){
            this.pancerz[i] = 0;
        }
    }
}
