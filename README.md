# e-commerce

## REST API
All end point routes start with http://localhost:3000

## `/users` end point

### **Register New User**
Register new user to the database

| Route | HTTP | Header(s) |
|---|---|---|
|`/users/register`|POST|`none`|

Body : 

    name: String (Required)
    password: String (Required)
    email : String (Required) (Unique)

Success : 

    status: 201
    message: 'New user created'

error : 

    status: 404
    message: 'data not found'


### **Login User**
Login with user info

| Route | HTTP | Header(s) |
|---|---|---|
|`/users/login`|POST|`none`|

Body : 

    email: String (Required)
    password: String (Required)

Success : 

    status: 200
    message : 'Login Successful
    data: 'token'

error :

    status: 404
    message: 'data not found'


## `/products` end point
### **Create Product**
Create new product into the database

| Route | HTTP | Header(s) |
|---|---|---|
|`/products`|POST|`token`|

Body : 

    name: String (Required)
    price: Number (Required)
    image: File (Required)
    stock Number (Required)

success : 

    status : 201
    message : 'New product created'

error :

    status: 404
    message : 'data not found'


### **Find Products**
Find all user's products
| Route | HTTP | Header(s) |
|---|---|---|
|`/products`|GET|`token`|

Body : 

    none

success : 

    status: 200
    message: 'all user's data'

error: 

    status: 404
    message: 'data not found'

### **Find All Products**
Find all products in the database
| Route | HTTP | Header(s) |
|---|---|---|
|`/products/all`|GET|`token`|

Body: 

    none

success :

    status: 200
    message: 'all products'

error : 

    status: 404
    message: 'data not found'

### **Update product**
Update product in the database
| Route | HTTP | Header(s) |
|---|---|---|
|`/products/:id`|PUT|`token`|

Body : 

    name: String (Required)
    price: Number (Required)
    image: File (Required)
    stock Number (Required)

success : 

    status: 200
    message: 'update successfull'

error: 

    status: 404
    message: 'data not found'


### **Delete Product**
Delete product in the database

| Route | HTTP | Header(s) |
|---|---|---|
|`/products/:id`|DELETE|`token`|

Body : 

    none

success : 

    status: 200
    message: 'delete successfull'

error: 

    status: 404
    message: 'data not found'
