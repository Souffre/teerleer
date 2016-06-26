angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Comptes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var comptes = [
    { id: 0, name: 'BIC/IBAN', montant: '2500' },
    { id: 1, name: 'RIB', montant: '3000' },
    { id: 3, name: 'Livret A', montant: '10000' }
  ];

  return {
    all: function() {
      return comptes;
    },
    get: function(compteId) {
      // Simple index lookup
      return comptes[compteId];
    }
  }
});
