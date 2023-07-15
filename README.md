# ERS
# Employee-Review-System
A full stack, app used for reviewing employee.

### Hosted Link 
https://empservice.onrender.com/

### Admin Login Credentials
````
  Email     | aditya.lambat@gmail.com
  Password  | 1301
````

### Description
The Employee Review System is a web application that enables employees to review and provide feedback on their colleagues' performance within an organization. The system includes an admin panel that allows the administrator to manage employee records, including adding new employees, updating their information, and deleting employee profiles.
Only admin can make employee a admin. There is only login for both employee admin if a user is admin he will be reidrcted to admin dashboard otheriwse he will redirected to employee dashboard.


### Language and Framework used

Node, Express, Mongodb, EJS, JavaScript, Html, Css, Bootstrap, Fontawesome

### How to setup the project on local system
  ````
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.
  ````

### After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        node index.js
   ````

### Folder Structure

```
ERS
  ->|
    |              
    |---> config --->|---> database.js
    |                |---> middleware.js
    |                |---> passport-local-Strategy.js
    |                  
    |---> controllers --->|---> dashboard_controller.js
    |                     |---> review_controller.js
    |                     |---> users_controller.js
    |
    |---> models --->|---> review.js
    |                |---> user.js
    |
    |--> node_modules
    |
    |---> routes --->|---> index.js
    |                |---> review.js
    |                |---> user.js
    |
    |---> views --->|---> _header.ejs
    |               |---> add_employee.ejs
    |               |---> admin_dashboard.ejs
    |               |---> employee_dashboard.ejs
    |               |---> layout.ejs
    |               |---> update_employee.ejs
    |               |---> user_sign_in.ejs
    |               |---> user_sign_up.ejs
    |
    |---> README.md
    |---> index.js
    |---> package-lock.json
    |---> package.json
 
    ````
