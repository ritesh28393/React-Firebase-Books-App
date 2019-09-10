## Screen Shot
###### Dashboard
![Dashboard](https://raw.githubusercontent.com/ritesh28393/React-Firebase-Books-App/master/ScreenShot/Dashboard.png "Book Table Dashboard")
###### Adding New Book
![Add New Book](https://raw.githubusercontent.com/ritesh28393/React-Firebase-Books-App/master/ScreenShot/Add_New_Book.png "Add New Book")
###### Editing Existing Book
![Modify Existing Book](https://raw.githubusercontent.com/ritesh28393/React-Firebase-Books-App/master/ScreenShot/Modify_Existing_Book.png "Modify Existing Book" =250x250)
## Firebase JSON DB
https://react-books-app.firebaseio.com/books.json
## books.json
```json
[ {
  "id" : 1,
  "rating" : "4",
  "title" : "new updated title"
}, {
  "id" : 2,
  "rating" : "2",
  "title" : "title 2"
}, {
  "id" : 3,
  "rating" : "5",
  "title" : "title 3"
}, {
  "id" : 4,
  "rating" : "2",
  "title" : "title using patch request"
} ]
```
## rules
```json
{
  "rules": {
    ".read": true,
    ".write": true,
    "books": {
    	".indexOn": "id"
    }
  }
}
```
```http
GET /books.json HTTP/1.1
Host: react-books-app.firebaseio.com  
User-Agent: PostmanRuntime/7.15.2  
Accept: */*  
Cache-Control: no-cache  
Postman-Token: 8b4cd4fb-4761-4e20-8880-683869e691d2,08eb56f9-7fa5-4477-ae53-1b3556717f06  
Host: react-books-app.firebaseio.com  
Accept-Encoding: gzip, deflate  
Connection: keep-alive  
cache-control: no-cache  
```
```http
GET /books.json?orderBy="id"&amp; equalTo=2 HTTP/1.1
Host: react-books-app.firebaseio.com
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 8512a2f8-5754-4e2b-a828-e8ce42e0d917,4465f97e-166c-4501-9a8d-fcb32078420f
Host: react-books-app.firebaseio.com
Accept-Encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache
```
```http
PUT /books/3.json HTTP/1.1
Host: react-books-app.firebaseio.com
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 52267f06-dbbd-4124-88c8-b80a96a39e76,0d35d79e-7242-4bba-867b-f10c8d5f2428
Host: react-books-app.firebaseio.com
Accept-Encoding: gzip, deflate
Content-Length: 76
Connection: keep-alive
cache-control: no-cache

{
    "id": 4,
    "rating": "2",
    "title": "title using patch request"
}
```
```http
PATCH /books/0.json HTTP/1.1
Host: react-books-app.firebaseio.com
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 8c7f199a-ac33-409a-af57-09b1eafebf25,9292c8bd-70c0-4d51-8e10-417ad1f2a6f9
Host: react-books-app.firebaseio.com
Accept-Encoding: gzip, deflate
Content-Length: 33
Connection: keep-alive
cache-control: no-cache

{
	"title": "new updated title"
}
```
```http
POST /books.json HTTP/1.1  ##=> This creates unique key
Host: react-books-app.firebaseio.com
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 7407d5f8-cf7f-46c3-859f-fc6a178a2552,54a7d15b-f27f-4226-a269-412e61c69dd6
Host: react-books-app.firebaseio.com
Accept-Encoding: gzip, deflate
Content-Length: 60
Connection: keep-alive
cache-control: no-cache

{
    "id": 4,
    "rating": "2",
    "title": "new title"
}
```
```http
DELETE /books/-LmznRxPbzi5zwWcIWP1.json HTTP/1.1
Host: react-books-app.firebaseio.com
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: ac6536b6-fee5-42ec-b548-96ae3033efcb,2ba07223-1118-4c7a-9dd4-c11895a61989
Host: react-books-app.firebaseio.com
Accept-Encoding: gzip, deflate
Content-Length: 
Connection: keep-alive
cache-control: no-cache
```
## Other Tools
- <https://docs.emmet.io/cheat-sheet/>  *Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow*
- <https://reactstrap.github.io/>  *Easy to use React Bootstrap 4 components*
- <https://eslint.org/>  *The pluggable linting utility for JavaScript and JSX*
- <https://github.com/axios/axios>  *Promise based HTTP client for the browser and node.js*
- <https://firebase.google.com/>  *For Database API*