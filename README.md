# Task API - CRUD Application

This project is a simple Node.js and Express application that demonstrates how to build CRUD (Create, Read, Update, Delete) APIs for managing tasks. The API can be tested using Postman.

## Features

* Create new tasks
* View all tasks
* View a single task
* Update task details
* Delete tasks
* REST API structure

## Technologies Used

* Node.js
* Express.js
* Postman (for testing)

## Project Structure

Task-API

│

├── server.js

├── package.json

└── README.md

## Installation

Clone the repository

git clone https://github.com/mushrifa-hussain/Task-API.git

Navigate into the project folder

cd Task-API

Install dependencies

npm install

## Running the Server

Start the server using:

node server.js

The server will run on:

http://localhost:3000

## API Endpoints

### Get all tasks

GET /tasks

### Get a single task

GET /tasks/:id

### Create a new task

POST /tasks

Example JSON body:
{
"title": "Complete assignment"
}

### Update a task

PUT /tasks/:id

Example JSON body:
{
"title": "Updated task",
"completed": true
}

### Delete a task

DELETE /tasks/:id

## Learning Outcome

This project helped in understanding how CRUD operations work in backend development and how APIs are created and tested using Express and Postman.

## Author

Mushrifa Hussain
