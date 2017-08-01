# protractor-cucumber-framework
Protractor-cucumber javascript framework

## Setup framework

Preconditions: JDK, Node.js

Preconditions

    npm install -g gulp
    npm install -g webdriver-manager

Open a command window and run:

    npm install

Then run:

	webdriver-manager update
	webdriver-manager start

Then will be possible to execute tests using (run it in another command window):

    gulp run
	gulp run --browser=firefox
	gulp run --tags="@Ibiza or @long"
