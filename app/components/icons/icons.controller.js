angular.module('iconsModule')
  .controller('iconsController', IconsController);
  function IconsController(){
    var vm = this;
    vm.showIcons;
    vm.$onInit = function(){
      vm.showIcons = false;
    }
  }