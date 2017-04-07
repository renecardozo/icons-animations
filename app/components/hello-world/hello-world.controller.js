/**
*  Module
*
* Description
*/
angular.module('helloWorld')
  .controller('helloWorldController',HelloWorldController)
function HelloWorldController(){
  var vm = this;
  vm.name = 'Hello World!!';
}