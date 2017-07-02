package test.smartrecruitet.coding;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.List;


import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import static org.hamcrest.MatcherAssert.assertThat;

import com.smartrecruiter.coding.*;


public class PackageManagerTest {
	
	private PackageManger classundertest;

	
	@Before
	public void setup(){
		classundertest= new PackageManger();
	}
	
	@Rule
    public ExpectedException thrown = ExpectedException.none();
	
	
	
	@Test
	public void testForCycleDepedecies() {
			
		thrown.expect(RuntimeException.class);
	    thrown.expectMessage("Invalid Dependencies Array : "
			+ "dependency specification must not contains cycles order. ");
		classundertest.getOrderOfDependecy(new String[]{"KittenService: ","Leetmeme: Cyberportal",
                "Cyberportal: Ice","CamelCaser: KittenService",
                "Fraudstream: Leetmeme","Ice: Leetmeme"});
	}
	
	
	@Test
	public void testForParameterForArrayNullReferance() {
			
      assertEquals(null, classundertest.getOrderOfDependecy(null));
	}
	
	@Test
	public void testForParameterForArrayContainNullValue() {
			thrown.expect(NullPointerException.class);
			thrown.expectMessage("Invalid Array : Array must not contain null value");
			classundertest.getOrderOfDependecy(new String[]{"ram: ",null,"hello"});
	}
	
	@Test
	public void testForParameterForEmptyArray() {
		thrown.expect(IllegalArgumentException.class);
		thrown.expectMessage("Invalid Dependencies Array Argument :Format must be Name of a package "
				+ "followed by a colon and space, then any dependencies for example [packagename: dependencyname]");
		classundertest.getOrderOfDependecy(new String[]{"aaa: ","bbb:","", " : "});
	}
	
	
	@Test
	public void testForOrderDependency() {
			
		String testinput[]=new String[]{"KittenService: ","Leetmeme: Cyberportal",
                "Cyberportal: Ice","CamelCaser: KittenService",
                "Fraudstream: Leetmeme","Ice: "};
	    List<String>expexted= Arrays.asList("KittenService", "Ice", "Cyberportal", "Leetmeme", "CamelCaser", "Fraudstream");
       assertEquals(classundertest.getOrderOfDependecy(testinput), expexted);
	
	}
	
	
	@After
	public void cleanup(){
		classundertest=null;
		thrown=null;
		
	}

}
