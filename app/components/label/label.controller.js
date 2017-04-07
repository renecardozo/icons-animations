/**
* labelModule Module
*
* Description
*/
angular.module('labelModule')
  .controller('labelController', LabelController);

function LabelController(){
  var vm = this;
  vm.model = 'Text to write';
}