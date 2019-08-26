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
Find all products
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


## `/images` end point
### **Upload image**
Upload image to Google Cloud Storage
| Route | HTTP | Header(s) |
|---|---|---|
|`/images`|POST|`none`|

Body:

    image: file

success: 

    status: 200
    message: 'upload success'
    data: link

error: 

    status: 404
    message: 'data not found'


## `/carts` end point
### **Create Cart**
Create new Cart

| Route | HTTP | Header(s) |
|---|---|---|
|`/carts`|POST|`token`|

Body: 

    none

success: 

    status: 201
    data: {userId, products}

error: 

    status: 404
    message: 'data not found'

### **ADD product to cart**
Add new product to cart with id on params

| Route | HTTP | Header(s) |
|---|---|---|
|`/carts/:id`|PATCH|`token`|

Body: 

    none

success: 

    status: 200
    data: {userId, products}

error: 

    status: 404
    message: 'data not found'

### **Delete product from cart**
Delete products with id from params

| Route | HTTP | Header(s) |
|---|---|---|
|`/carts/:id/remove`|PATCH|`token`|

Body: 

    none

success: 

    status: 200
    data: {userId, products}

error: 

    status: 404
    message: 'data not found'

### **Get Cart**
Get user cart data

| Route | HTTP | Header(s) |
|---|---|---|
|`/carts`|GET|`token`|

Body :

    none

success: 

    status: 200
    data: {userId, products: [productId]}

error: 

    status: 404
    message: 'data not found'

### **Get one Cart**
Get one user cart data

| Route | HTTP | Header(s) |
|---|---|---|
|`/carts/one`|GET|`token`|

Body :

    none

success: 

    status: 200
    data: {userId, products}

error: 

    status: 404
    message: 'data not found'