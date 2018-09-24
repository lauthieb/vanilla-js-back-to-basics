var compteur = (function() {
  var compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function() {
      changeValeur(1);
    },
    decrement: function() {
      changeValeur(-1);
    },
    valeur: function() {
      return compteurPrive;
    }
  };
})();

console.log(compteur.valeur());
compteur.increment();
compteur.increment();
console.log(compteur.valeur());
compteur.decrement();
console.log(compteur.valeur());
