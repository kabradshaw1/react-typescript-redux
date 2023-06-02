# React, TypeScript, Redux, Django, and PostgreSQL server

## Purpose
This project is for the purpose of learning about integrating these three technolgies: Django, PostgreSQL, and React.  It will also use Django Restframework, axios and SWR.  As I've gone on to add more, this project has added some TypeScript, React-Redux, Redux/toolkit, React-Hook-Form, and Yup during the process of learning another method of authentication.

## Deployed Site

[Store](ec2-52-91-48-17.compute-1.amazonaws.com)

## Installation

### With Docker

* Clone this repository
* in the command line type: docker-compose up -d
* in the command line type: docker-compose exec db sh
* in the command line type: psql -U devuser -d devdb
* in the command line type: i\ /tmp/seed.sql

### Without Docker

* Download and install python 3, PostgreSQL, and Node.js.
* Clone this repository
* In a command line, cd into the backend directory.  Create a virtual environment for the project by typing, py -m venv venv, into the command line (windows only)
* login to the virtual environment by typing, venv\Scripts\activate, into the command line (windows only)
* Install python packages by typing: pip install -r requirements.txt
* Set up .env with SECRET_KEY=, DEBUG=true, DB_PW=, DB_NAME=store, USER_NAME=, HOST=localhost . You can probably generate a random SECRET_KEY for development.  If you need the same secret key as mine, ask, and I can give it to you.  The Postgres default USER_NAME is postgres.
* Create a database if you haven't already.  You can do this from pgAdmin or from command line.  I used the command line.  Login with psql -U username and putting in password.  The command to make a database is CEATE DATABASE databasename;  If you are going to use the seeds file, you need to use the databasename store.
* In the command line, type: py manage.py migrate to create the tables in your database from the current migrations files.
* You can create an admin user with the command py manage.py createsuperuser
* In the postgres command line, you can populate the database with the seeds file.  First connect to the database with \c databasename, then i\ seeds.sql.  You will need to include the path if you aren not in that directory. You can also access the database by going to http://127.0.0.1:8000/admin/ and logging in with the admin you created with createsuperuser command.
* cd to frontend directory and install npm package from command line: npm i
* Right now it's set up so you will need to run both a front and backend server.  In the frontend directory run npm start.  In the backend directory run py manage.py runserver