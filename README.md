# Faker Rest API

## ⚡ How to use

```
1. git clone this repo
2. cd fake-rest-api-services
3. npm i
4. npm start
```

After that you will see on terminal

```
running on port 7777
```

on folder db create json file, with empty array inside file, example

```
employee.json
product.json
```

##  🔥 API

### 🔧 CRUD API

```
GET  /<route>
GET  /<route>/:id
POST /<route>
PUT  /<route>/:id
DEL  /<route>/:id
```

### 🔒 AUTH API

## LOGIN -> POST /login

```
email string required
password string required
```

## REGISTER -> POST /register

```
email string required
password string required
```

## DEFAULT ACCOUNT 

```
  "email": "test@dev.com",
  "password": "tes12345"
```

### QUERY PARAMS SORTING

## SORTING

```
ASC  -> /<route>?sorting={fields}-ASC
DESC -> /<route>?sorting={fields}-DESC

example: 

/employee?sorting=name-ASC
/employee?sorting=name-DESC

```

## SEARCH

```
/<route>?search={fields}-{searchVal}

example: /employee?search=name-john
```

## LIMIT AND SKIP

```
/<route>?limit={limit}&skip={skip}

example: /employee?limit=2&skip=4
```

The main library I used in this project is React.js. It is completely flexible for me to use this as it is one of its benefits. By react js, I can have external libraries such as yup, react-router-dom, formik, and many more. Tools could be also used as react.js allows them. Using this library will ensure you that the app performance which you have will be optimized.
External Libraries: (based on google):
React Router DOM, enables you to implement dynamic routing in a web app.
Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints.
Formik, a small group of React components and hooks for building forms in React and React Native.
Yup, a JavaScript schema builder for value parsing and validation.
Reactstrap, It provides inbuilt Bootstrap components that make it easy to create UI with self-contained components that provide flexibility and inbuilt validations.
React-Bootstrap is a component-based library that provides native Bootstrap components as pure React components.

I've made a style for the login and register page (same design, and was referred from a guy in youtube), it is pretty simple and basic. Other then that, nothing much was added on. (dashboard a little).
