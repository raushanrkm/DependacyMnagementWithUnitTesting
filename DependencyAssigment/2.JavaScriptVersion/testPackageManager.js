

var getOrderOfDependecy= require('./packagemanager').getOrderOfDependecy;

 var packageArray=['KittenService: ','Leetmeme: Cyberportal',
                  'Cyberportal: Ice','CamelCaser: KittenService',
                  'Fraudstream: Leetmeme','Ice: '];
                   //print ordered  dependency and package   
      console.log(getOrderOfDependecy(packageArray));

