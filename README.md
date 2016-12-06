This README.md file is displayed on your project page. You should edit this 
file to describe your project, including instructions for building and 
running the project, pointers to the license under which you are making the 
project available, and anything else you think would be useful for others to
know.


 Jeffsan security scan app with Arachni

  
 Using Arachni scan results, this very simple Node.js web application visualizes the
 data using D3js library which is then deployed to AWS Elastic Beanstalk.

 Pages
 Home - displays the denogram of the issues and the severity and the site it is from.
 Bar - this page displays a bar chart with frequency of the found issues and a pie chart that shows the percentage of the issues based on severity.
 Scan results -supposed to show json test results but some problem with the JSON.

 app.js - contains the main controller of the app that is called when running the start script
 node_modules - contains npm modules used throught out the app
 package.json - contains the dependencies, app name, version, start command and other info.
 views - contains the views for the application pages
 
 
 


 