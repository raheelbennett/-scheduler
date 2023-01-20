# Interview Scheduler

## Description:

Interview scheduler is a project built for learning purposes using React and several testing mechanisms, including Storybook, Jest and Cypress. The app provides an interface for students to book, edit and delete appointments with mentors from Monday to Friday.

-Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
-Data is persisted by the API server using a PostgreSQL database.
-The client application communicates with an API server over HTTP, using the JSON format.
-Jest tests are used through the development of the project.
-Error validation is built in: The user will be notified if an appointment could not be saved or deteled.
-While the app makes API requests to update the database during the saving and deleting of appointments, the user will see an intuitive in-progess status.
-Any descructive requests present the user wiht a confirmation window before proceeding. eg: deleting an appointment.
The landing page shows the number of remaining spots for each day without user having to load each day individually. Spots availability updates in real-time as use books/deletes appointments.

!["Home Page"](https://github.com/raheelbennett/scheduler/blob/master/docs/landing.PNG?raw=true)

!["Book Aoointment"](https://github.com/raheelbennett/scheduler/blob/master/docs/book.PNG?raw=true)

!["Book Aoointment Filled"](https://github.com/raheelbennett/scheduler/blob/master/docs/book-options.PNG?raw=true)

!["Show"](https://github.com/raheelbennett/scheduler/blob/master/docs/booked.PNG?raw=true)

!["Confirmation"](https://github.com/raheelbennett/scheduler/blob/master/docs/confirmation.PNG?raw=true)

!["Progress"](https://github.com/raheelbennett/scheduler/blob/master/docs/progress.PNG?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
