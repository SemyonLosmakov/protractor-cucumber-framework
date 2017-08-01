Feature: Tubbber short e2e
  As a student of JS TA lab
  I want to complete my final home task
  So I need to:
	1)	Develop TA FW based on Protractor + Cucumber modules for my personal site for testing.
	2)	Organize Page object structure for the site
	3)	Use Page factory for getting pages
	4)	Run your tests using one of task runners from lecture
	5)	Create 3 or more e2e tests for the site


  @e2e@short@Croatia
  Scenario: Motor yacht in Croatia
    When I navigate to the 'super-home' page
    Then the main logo should be visible
	And the title should be 'RENT A BOAT FROM THE LOCAL OWNER'
	When I click on 'Croatia'
	Then the title should be 'Rent a boat in Croatia'
	And the main logo should be visible
	When I set filter 'Boat Type' to 'Motor Yacht'
	Then filter 'Boat Type' with value 'Motor Yacht' should be applied
	When I set filter 'Cabins' to '1'
	Then filter 'Cabins' with value '1' should be applied
	When I set filter 'Length (ft)' to '30+'
	Then filter 'Length (ft)' with value '30+' should be applied
	When I click on 'Sara' yacht
	Then the title should be 'Sara'
	And the main logo should be visible
	And the rental price should be 'EUR 3850.00'
	And the discount should be 'EUR 192.50'
	And the total price should be 'EUR 3847.23'
	When I return to the home page
	Then the title should be 'RENT A BOAT FROM THE LOCAL OWNER'

  @e2e@short@Ibiza
  Scenario: Tubbber user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
	And the title should be 'RENT A BOAT FROM THE LOCAL OWNER'
	When I click on 'Ibiza'
	Then the title should be 'Rent a boat in Ibiza'
	And the main logo should be visible
	When I set filter 'Boat Type' to 'Openboat'
	Then filter 'Boat Type' with value 'Openboat' should be applied
	When I click on 'JACKSON' yacht
	Then the title should be 'JACKSON'
	And the main logo should be visible
	And the rental price should be 'EUR 998.25'
	And the total price should be 'EUR 1028.20'
	When I return to the home page
	Then the title should be 'RENT A BOAT FROM THE LOCAL OWNER'
