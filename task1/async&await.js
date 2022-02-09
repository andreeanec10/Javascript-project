/*
    Task7 - async & await
*/
// functie asincrona = functie declarata cu keywordul async
// async = contine 0 sau mai multe expresii cu await

// await = folosit doar in interiorul functiilor async, altfel da eroare
//       = folosit in cadrul promisiunilor
//       = se asteapta pana cand o promisune in starea 'settled' (fulfiled || rejected) si continua functia asincrona
//       = in cazul in care promisiunea este in strarea rejected, returneaza eroarea aruncata de promisiune
//       = daca este succesat de orice alteva inafar de o promisiune, se va face o conversie catre 'resolved promise'

//ex:
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
console.log("Hello");