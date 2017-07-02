

//pass well formated Array of package and dependency for example([packagename1: dependencyname1,packagename2: dependencyname2]).


 module.exports={
              getOrderOfDependecy : function(packgeArray){
                                        if(packgeArray===undefined||packgeArray===null)
                                           return null;
                                        let orderlist=[];   // return ordered package and dependencies
                                        let temp=[];       // to sotre String split by :
                                        let indexoflist=0; // to point index of store element of Array
                                        let independentpackageindex=0; // index for independent package store at Beginning of Array
                                        let temp_index=0;              // temp vriable for calculation inside for loop for indexing 
                                        
                                      for (let i = 0; i < packgeArray.length; i++) { 

                                        if(packgeArray[i]===null||(packgeArray[i]===undefined))
                                              throw "Invalid Array : Array must not contain null value";
        
                                         temp=packgeArray[i].split(":");                    // split Package Name and dependencies by colon(:) 
		                               
                                        if(temp.length!=2 || temp==undefined ||(temp[0]===" "&& temp[1]===" "))
                                           throw "Invalid Dependencies Array Argument :Format must be Name of a package "
		                                          + "followed by a colon and space, then any dependencies for example [packagename: dependencyname]";
        
                                        temp[0]=temp[0].trim();                       // remove space from String
	                                    temp[1]=temp[1].trim();	
            
                                        if(temp[1]==""){
		                                     temp_index= orderlist.indexOf(temp[0]);
                                             if(temp_index>-1)
			                                    	orderlist.splice(temp_index,1);
		                                     orderlist.splice(independentpackageindex,0,temp[0]);                         // check for independent package then add
		                                     independentpackageindex = independentpackageindex+1;                         // independent package at Beginning of list
		                                      continue;                                                                    // as first come first in list.
			                         }

                                        if((orderlist.indexOf(temp[0])>-1) && (orderlist.indexOf(temp[1])>-1)){         // check for cycle of dependencies 
				
			                                if(orderlist.indexOf(temp[1])>orderlist.indexOf(temp[0]))
					                           throw "Invalid Dependencies Array : "
					                                  + "dependency specification must not contains cycles order. ";
                                             break;				
			                        }


                                        if(orderlist.indexOf(temp[0])>-1){           // first add dependency then package in list. (in fashion of chain order(a->b->c->d)). 
			                             	indexoflist=orderlist.indexOf(temp[0]);
                                            temp_index= orderlist.indexOf(temp[1]);
                                            if(temp_index>-1)
                                               orderlist.splice(temp_index,1);
                                            orderlist.splice(indexoflist,0,temp[1]);    
                                            continue;
			
			                       }
     
                                       if(orderlist.indexOf(temp[1])>-1){   //add those packages for which dependencies are already present in list
				                           orderlist.push(temp[0]);
				                          continue;
		                           }
			
		                               orderlist.push(temp[1]);          // add first time in list (dependency followed by name of Package)
	                                   orderlist.push(temp[0]);
                                 } //end of loop

                                       return orderlist;
                              }            //end of function



     /* var packageArray=['KittenService: ','Leetmeme: Cyberportal',
                  'Cyberportal: Ice','CamelCaser: KittenService',
                  'Fraudstream: Leetmeme','Ice: Leetmeme'];
                   //print ordered  dependency and package   
      console.log(getOrderOfDependecy(packageArray));*/
}

