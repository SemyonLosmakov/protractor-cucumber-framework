Feature: Tubbber long e2e
  As a student of JS TA lab
  I want to complete my final home task
  So I need to:
	1)	Develop TA FW based on Protractor + Cucumber modules for my personal site for testing.
	2)	Organize Page object structure for the site
	3)	Use Page factory for getting pages
	4)	Run your tests using one of task runners from lecture
	5)	Create 3 or more e2e tests for the site


  @e2e@long
  Scenario: Tubbber user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
	And the title should be 'RENT A BOAT FROM THE LOCAL OWNER'
	When set the destination 'Europe, Croatia, Split-Dalmatia County, Split'
	Then the destination should be 'Europe, Croatia, Split-Dalmatia County, Split'
	When set the date '28/08/2017'
	Then the date should be '28/08/2017'
	When set the duration '2 weeks'
	Then the duration should be '2 weeks'
	When set the guests '7'
	Then the guests should be '7'
	When I submit search
	Then the title should be 'Rent a boat in Split'
	And the main logo should be visible
	When I set filter 'Boat Type' to 'Sailing Yacht'
	Then filter 'Boat Type' with value 'Sailing Yacht' should be applied
	When I set filter 'Cabins' to '3'
	Then filter 'Cabins' with value '3' should be applied
	When I set filter 'Charter type' to 'Bareboat'
	Then filter 'Charter type' with value 'Bareboat' should be applied
	When I set filter 'Length (ft)' to '30 - 40'
	Then filter 'Length (ft)' with value '30 - 40' should be applied
	When I click on 'JEAN MICHEL' yacht
	Then the title should be 'JEAN MICHEL'
	And the main logo should be visible
	And the rental price should be 'EUR 4800.00'
	And the discount should be 'EUR 480.00'
	And the total price should be 'EUR 4830.60'
	When I return to the home page
	Then the title should be 'RENT A BOAT FROM THE LOCAL OWNER'
