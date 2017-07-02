

var packagemanager = require('../packagemanager');
var chi = require('chai');
var assert = chi.assert;
var expect = chi.expect;


 /*
 // to see result output remove comment of this section

 var packageArray=['KittenService: ','Leetmeme: Cyberportal',
                  'Cyberportal: Ice','CamelCaser: KittenService',
                  'Fraudstream: Leetmeme','Ice: '];
                   //print ordered  dependency and package   
      console.log(getOrderOfDependecy(packageArray)); 
      */

const testinput1=['KittenService: ','Leetmeme: Cyberportal',
                  'Cyberportal: Ice','CamelCaser: KittenService',
                  'Fraudstream: Leetmeme','Ice: Leetmeme'];
                  
describe('packagemanager', function(){
                                      it('test1 for CycleDepedecies ',function(){
                                      assert.throws(function(){packagemanager.getOrderOfDependecy(testinput1)},
                                       Error,"Invalid Dependencies Array  : "
			                  + "dependency specification must not contains cycles order. ");     
                                                            });
                                                      });
var testinput2;
describe('packagemanager', function(){
                                      it('test For Parameter of function For Null Referance or Undefined ',function(){
                                      assert.equal(packagemanager.getOrderOfDependecy(testinput2),null);     
                                                            });
                                                      });

const testinput3=["ram: ",null,"hello"];

describe('packagemanager', function(){
                                      it('test for parameter for Array Containing NullValue ',function(){
                                      assert.throws(function(){packagemanager.getOrderOfDependecy(testinput3)},
                                       Error,"Invalid Array : Array must not contain null value");     
                                                            });
                                                      });


const testinput4=['KittenService: ','Leetmeme: Cyberportal',
                  'Cyberportal: Ice','CamelCaser: KittenService',
                  'Fraudstream: Leetmeme','Ice: '];
const expectedoutput=['KittenService', 'Ice', 'Cyberportal', 'Leetmeme', 'CamelCaser', 'Fraudstream'];

describe('packagemanager', function(){
                                      it('test for output Order of dependency ',function(){
                  expect(packagemanager.getOrderOfDependecy(testinput4)).to.have.same.members(expectedoutput);   });
                                                      });