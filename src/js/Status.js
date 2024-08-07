

// klasa abstrakcyjna
class Status{
    constructor(moc,id,idDzialania,helpVal){
        this.moc = moc;
        this.id = parseInt(id);
        this.idDzialania = parseInt(idDzialania);
        this.helpVal = helpVal;
    }
    
    dzialanieStatusu(){

    }
    odwrocenieSattusu(){

    }
}

//nie przemyślałem żeby stworzyć statusy potrzebuje Postaci, a żeby mieć postać potrzebuje hp, many, pancerza

class StatusTurowy extends Status{
        constructor(moc,id,idDzialania,helpVal,startVal){
            super(moc,id,idDzialania,helpVal);
            this.startVal = startVal;
        }
        dzialanieStatusu(Postac){
            switch (Math.abs(this.idDzialania)) {
                case 1://regeneracja HP stała
                  Postac
                  break;
                case 2:
                  console.log("To jest dwójka!");
                  break;
                case 3:
                  console.log("To jest trójka!");
                  break;
                case 4:
                  console.log("To jest czwórka!");
                  break;
                case 5:
                  console.log("To jest piątka!");
                  break;
                case 6:
                  console.log("To jest szóstka!");
                  break;
                case 7:
                  console.log("To jest siódemka!");
                  break;
                case 8:
                  console.log("To jest ósemka!");
                  break;
                case 9:
                  console.log("To jest dziewiątka!");
                  break;
                case 10:
                  console.log("To jest dziesiątka!");
                  break;
                case 11:
                  console.log("To jest jedenaście!");
                  break;
                case 12:
                  console.log("To jest dwanaście!");
                  break;
                case 13:
                  console.log("To jest trzynaście!");
                  break;
                case 14:
                  console.log("To jest czternaście!");
                  break;
                case 15:
                  console.log("To jest piętnaście!");
                  break;
                case 16:
                  console.log("To jest szesnaście!");
                  break;
                case 17:
                  console.log("To jest siedemnaście!");
                  break;
                case 18:
                  console.log("To jest osiemnaście!");
                  break;
                case 19:
                  console.log("To jest dziewiętnaście!");
                  break;
                case 20:
                  console.log("To jest dwadzieścia!");
                  break;
                default:
                  console.log("Podana liczba nie jest z zakresu od 1 do 20.");
              }
        }
        odwrocenieSattusu(){
    
        }
        dzialanieStartoweStatusu(){s

        }
}




//sumator będzie w generatorze




