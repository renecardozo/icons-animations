/**
*  Module
*
* Description
*/
angular.module('helloWorld', [])
  .component('helloWorld', {
    bindings: {
      title: '@'
    },
    templateUrl: './components/hello-world/hello-world.html',
    controller: 'helloWorldController'
  })