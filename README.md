# National Bootcamp - Week Nine Project Brief

For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

- A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
- A presentation, complete with how you worked as a team and a demonstration of the project

Your project application might include the following:

- Include a user experience created in React
- Build a REST API which is used by your front-end
- Be supported by a Postgresql database with multiple tables
- Be built and managed in an agile way
- Utilise testing for ensuring robust code

Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)

---

Plan

PLAN:
Use Chris npm package to create boiler plate api

1. Install dependencies (npm i) done
   Must use a database (hosted on heroku or elephantSQL) for persistent storage | Must use environment variables to store database credentials - do not hard code those credentials!
2.
3. Create heroku database (or use existing) DONE
4. Create .env file with database credentials
   -gitignore the .env file DONE
5. Edit pool for connecting with our database (done)
   -type out the pool (inc SSL authorisation)
   - edit the - Test it connects (done)
     -export the pool.query (done)
6. Edit script for creating a table (done)
7. Create several scripts for table
   - for populating the table (done)
   - for droping (done)
   - for resetting table (done)

---

_Setup Models and Routes folders and files_

- go through app.js and ensure we understand what is inside the file (done)
- setup port in .env file and add to app.js (done)

- configure models folder (done)

  - setup and export async functions that will query the database (done)
  - define a getTable function that selects all rows from the resources (USING sql) - sends the results as a .json

- configure routes folder

  - setup resources.js with post and get functions inside
  - import getTable and addToTable functions from models folder
  - makes sure routes are RESTful and include v1 in route
  - create router.get function for displaying the whole table to the frontend.
  - create router.post

  _Testing - Jest/ Supertest_

  Test the get request

  - import jest globals
  - import supertest
  - test that the get request returns the correct body and returns the correct status code.

  Test the post request

  - will do this by testing whether

Issues

- In order to end the get req

  - send response object ({success: true, payload: result}) (done)
  - Test on Postman (done - send response object ({success: true, payload: result}) (done)
  - Test on Postman (done
