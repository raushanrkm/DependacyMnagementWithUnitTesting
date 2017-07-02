package com.smartrecruiter.coding;

import java.util.ArrayList;
import java.util.List;



public class PackageManger {
	
	
	

	public static void main(String[] args) {
		
		String dependecypackages[]=new String[]{"KittenService: ","Leetmeme: Cyberportal",
				                                 "Cyberportal: Ice","CamelCaser: KittenService",
				                                 "Fraudstream: Leetmeme","Ice: "};
		
	 // pass well formated Array of package and dependency for example([packagename1: dependencyname1,packagename2: dependencyname2]).
		
		PackageManger packagemanger= new PackageManger();
	   //List<String>orderlist=packagemanger.getOrderOfDependecy(dependecypackages);
        for(String dependecy:packagemanger.getOrderOfDependecy(dependecypackages) ){
			System.out.print(dependecy+", ");                                     //print ordered  dependency and package 
		}
	
	}
	
    public  List<String> getOrderOfDependecy(String[]packgeArray){
		if(packgeArray==null)
			return null;
		
		
		List<String>orderlist =new ArrayList<String>();
		String temp[];
		int indexoflist=0;
	    int independentpackage=0;  
	    
	    
		for(int i=0; i<packgeArray.length;i++){               
	        if(packgeArray[i]==null)
	           throw new NullPointerException("Invalid Array : Array must not contain null value");
			
	        temp=packgeArray[i].split(":");                                       // split Package Name and dependencies by colon(:) 
			
	        if(temp.length!=2 || temp==null ||(temp[0].equals(" ")&& temp[1].equals(" ")))
	        	throw new IllegalArgumentException("Invalid Dependencies Array Argument :Format must be Name of a package "
						+ "followed by a colon and space, then any dependencies for example [packagename: dependencyname]");
				
	       
			    temp[0]=temp[0].trim();
			    temp[1]=temp[1].trim();
			    
			
			if(temp[1].equals("")){
				
				orderlist.remove(temp[0]);
				orderlist.add(independentpackage,temp[0]);                        // check for independent package and add
				independentpackage++;                                             // independent package at Beginning of list
				continue;                                                         // as first come first in list.
			  }
			
			
			 if(orderlist.contains(temp[0]) && orderlist.contains(temp[1])){      // check for cycle of dependencies 
				
			    if(orderlist.indexOf(temp[1])>orderlist.indexOf(temp[0]))
					throw new RuntimeException("Invalid Dependencies Array : "
							                           + "dependency specification must not contains cycles order. ");
				continue;
				
			  }
					
			 
			
			  if(orderlist.contains(temp[0])){                                    // first add dependency then package in list. (in fashion of chain order(a->b->c->d)). 
				
				indexoflist=orderlist.indexOf(temp[0]);
				orderlist.remove(temp[1]);
				orderlist.add(indexoflist,temp[1]);
				continue;
			
			   }
				

			if(orderlist.contains(temp[1])){                                    //add those packages for which dependencies are already present in list
				
				orderlist.add(temp[0]);
				continue;
			  }
			
			 orderlist.add(temp[1]);                                           // add first time in list (dependency followed by name of Package).
			 orderlist.add(temp[0]);
			
			
	        } //end of for loop
		
      return orderlist;
      
	  } // end of function
	
   } //end of class
	
	

