angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('COLORS', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var colorList = [
    { id: 0, name: 'color0' },
    { id: 1, name: 'color1' },
    { id: 2, name: 'color2' },
    { id: 3, name: 'color3' }
  ];

  return {
    all: function() {
      return colorList;
    },
    get: function(colorId) {
      // Simple index lookup
      return colorList[colorId];
    }
  };
});
