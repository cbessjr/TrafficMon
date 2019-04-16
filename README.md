# Project-3
P3-Team-3 Collaboration Project

# Project Title: TrafficMon (Traffic Monitor)

## Team Members:


[Matt Kilcup](https://www.linkedin.com/in/matt-kilcup-515697168/) <p>
[Brenden Knight](https://www.linkedin.com/in/brenden-knight-500042151/) <p>
[James Barker](https://www.linkedin.com/in/james-barker-78961295/) <p>
[Adam Karman](https://www.linkedin.com/in/adam-karman-1bb026171/) <p>
[Charles Bess, Jr.](https://www.linkedin.com/in/charles-bess-a97b055/)


## Overview

TrafficMon is a reporting application to post and review “reported” traffic conditions by users in your area. All “reported” traffic conditions are posted by TrafficMon application users. Casual users (Non-registered users) can view traffic alerts but not post traffic alerts.

TrafficMon alerts are searchable by City or State. Only authenticated users can post reports for viewing.

TrafficMon incorporates a map feature to view your local area (Registered-users) and current Google updated traffic condition.


## Running the application

## Heroku and JawsDB


### 1. Heroku Launch

The application can be launched from the following link to Heroku:

- https://trafficmon.herokuapp.com/

The application and database (JawsDB) will run through Heroku.


- OR - 



## Running the application (local)


### 1. Install mySQL

- mySQL (https://dev.mysql.com/downloads/installer/)


### 2. Clone the application

Clone the application from the following location... 

- https://github.com/cbessjr/Project-3


### 3. SQL Schema

- Run the production scripts (found in Project-3 > models > schema.sql) to create the database.
   
 
### 4. SQL Connection Update
 
Once the application has been cloned, create a .ENV file at the root of the cloned application. 

Add the following data to the .ENV file:

```
MYSQL_USERNAME="user name" 
PASS="password"
HOST="localhost"
```

Add the user name and password to the local database connection. The values must be inside the quotations as shown above. Host will be set as "localhost".


### 5. Install NPM

- NPM (Node Package Manager) (https://docs.npmjs.com/getting-started/installing-node)

Once NPM has been installed run the following command:

```
NPM I
``` 

The cloned package.json will allow the command to install all the set dependencies for the application within the main Project-3 directory and the client directory. Scripting allows for both to update without manual intervention. 


### 6. Install NPM Packages (Only if problems persist after the NPM installation. All packages should be installed when the command “NPM i” is processed)

Install the package(s) from the terminal in the folder the application was cloned.

### Dependencies

- bcrypt-nodejs (https://www.npmjs.com/package/bcrypt-nodejs)
- connect-flash (https://www.npmjs.com/package/connect-flash)
- dotenv (https://www.npmjs.com/package/dotenv)
- express (https://www.npmjs.com/package/express)
- express-session (https://www.npmjs.com/package/express-session)
- google-map-react (https://www.npmjs.com/package/google-maps-react)
- if-env (https://www.npmjs.com/package/if-env)
- list-of-us-cities (https://www.npmjs.com/package/list-of-us-cities)
- moment (https://www.npmjs.com/package/moment)
- mysql2 (https://www.npmjs.com/package/mysql2)
- passport (https://www.npmjs.com/package/passport)
- passport-local (https://www.npmjs.com/package/passport-local)
- react (https://www.npmjs.com/package/react)
- react-bootstrap (https://www.npmjs.com/package/react-bootstrap)
- react-bootstrap-typeahead (https://www.npmjs.com/package/react-bootstrap-typeahead)
- react-dom (https://www.npmjs.com/package/react-dom)
- react-scripts (https://www.npmjs.com/package/react-scripts)
- sequelize (https://www.npmjs.com/package/sequelize)


### Dev Dependencies

- concurrently (https://www.npmjs.com/package/concurrently)
- nodemon (https://www.npmjs.com/package/nodemon)


 
### 7. Using the Application
 
Run the following command from the terminal:

```npm run start```

The command will connect to the database.

<br>

The application should automatically open your default browser to the TrafficMon home page. If you have any blocks in your browswer to prevent pages from opening, then navigate to the following location:

[localhost:3000](http:\\localhost:3000)

<br>
  
Below are the screens of the application:




![Image of Home Screen](https://github.com/cbessjr/Project-3/blob/master/client/public/img/Home_Screen.png)


<br>

![Image of New User Screen](https://github.com/cbessjr/Project-3/blob/master/client/public/img/NewUser_Screen.png)

<br>

![Image of Search Screen](https://github.com/cbessjr/Project-3/blob/master/client/public/img/Search_Screen.png)

<br>

![Image of New Report](https://github.com/cbessjr/Project-3/blob/master/client/public/img/NewReport_Screen.png)

<br>

![Image of Login Menu](https://github.com/cbessjr/Project-3/blob/master/client/public/img/Login_Screen.png)

<br>



### Troubleshooting

If the application will not launch, do the following (this is a common problem for Apple computers):

- Create a .env file using path Project-3 > client 
- Add the following code, with no quotation marks and save: 

```
SKIP_PREFLIGHT_CHECK=true
```

- Create a .env file using path Project-3 > 
- Add the following code, with no quotation marks and save: 

```
SKIP_PREFLIGHT_CHECK=true
```


### Future Updates
  
- Reporting by data constraint for persisting incidents
- Push notification alerts
- Area maps images based on report

