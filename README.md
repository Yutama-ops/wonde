# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Test 2 Step by step:
After signed in into mysql

I listed the databases
SHOW DATABASES;

I selected the database
USE wonde;

SHOW TABLES;
I listed the tables in the database

SELECT id, name, contact_name FROM companies;
I listed the id, name and contact name of the companies and have found that Koss-Brown Ltd id is 30

SELECT \* FROM company_user WHERE company_id = 30;
SELECT id, first_name, last_name FROM users WHERE id IN (45, 276, 278, 279);
Then I listed the users in the Koss-Brown Ltd company and have found that Felipa Hamill is not registered to Koss-Brown organisation

SELECT _ FROM users WHERE first_name = 'Felipa' AND last_name = 'Hamill';
SELECT _ FROM users WHERE id = 45;
Then I i compare Felipa with other users and discovered that column type was different and have discovered Felipa id which is 277

SELECT \* FROM role_user where user_id IN (45,276,278,279,277);
Then i check user and list all of their role id and have found that Felipa Hamill was not in the table

SELECT \* FROM roles;
Then I listed the roles in the database and have found other people from Koss have roles which is owner, support, and project-manager

So my final guess is that Felipa Hamill has not assigned a role and the SQL code for adding the role is

It is actually either of the following 3,6, and 26.
INSERT INTO role_user (user_id, role_id) VALUES
(277, 3),
(277, 6),
(277, 26);

I have found that Felipa Hamill was not registered to Koss-Brown organisation

SELECT \* FROM role_user where user_id IN (45,276,278,279,277);

Test 3:
change method from get to post in the web.php file to add new users to the database
Route::post('users', [UsersController::class, 'store']);

and remove forward slash from the form method to cleanup the code

<form method="POST" action="users"/>
