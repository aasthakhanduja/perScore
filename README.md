perScore
===================

This application provides the front end of the **Personality score**. This is implemented via Vue.js. Application converts the data to JSON, fires POST REST request.

----------


Description
-------------
This application uses Vue.js, JavaScript, HTML, CSS. Sending REST call from client to the server. These are following features of the application in terms of functionality .

> **Note:**
> - Make sure that node.js is installed in your system.
> - Before starting the application make sure that all the perScore back-end servers are up and running.
> - Make sure you have all the required and correct environment variable available before running the service.
> - Make sure that you have postgres installed in your machine.


#### <i class="icon-folder-open"></i> Login

For this the client can log into the application and face the challenges. The client can have 3 roles. Namely  **Admin**, **Questioner** and **Respondent**. If the credentials are correct then it updates the DOM(Document Object Model) displaying the response(routing it to above mentioned components that are Admin/Questioner/Respondent) and creates a session. And if the credentials are incorrect then it will get an empty  response from the server displaying an error message. Also a client can create an account if he does not have one. For that we have provided a link that re routes it to the  **Registration** component.

#### <i class="icon-folder-open"></i> Registration

A client can create his account by  providing the mandatory details and choosing one out of three different roles which has been mentioned above. By hitting the **Submit** button the client sends request to the perScore server.


#### <i class="icon-folder-open"></i> Admin

Once the Administrator is logged in,  it will have a right to see all the questions and the category created by the questioner. Administrator will have a right to accept the question as well as the category . When admin will hit the **Approve** button a REST call will be sent to the approve_entries endpoint in perScore Server.


#### <i class="icon-folder-open"></i> Questioner

The function of **Questioner** is to give client the challenges in the form of questions which will be later approved by the administrator. The question will have the body, title, answers and weight corresponding to those answers. After hitting "Submit Question" the request is sent to perScore server.


#### <i class="icon-folder-open"></i> Respondent

Once the Respondent is logged in, it will have a right to attempt for the question on the basis of the chosen category. When a user will submit an answer it will hit the get_question endpoint in per score server using a REST call.  As the client moves forward the application will show his ongoing score at the top.
> **Github URL:**  [<i class="icon-download"></i> perScore](#https://github.com/aasthakhanduja/perScore)





Dependencies
-------------------
    axios: "^0.17.1",
    bulma: "^0.6.1",
    vue-cookies: "^1.5.4",
    vue-router: "^3.0.1",
    vuex: "^3.0.1"

Build and run this project
-------------
    
> Run command:
    npm run dev
   
Project Folder Structure Description
--------------------

1> Components:- The APP'S based directory will contain all the services that are,
* Login
* Admin
* Registration
* Respondent
* Questioner

2> Router:-   It contain all the routes that are used by client as a rest call go.    
