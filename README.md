# Vouch Digital
# Node.JS Development Task

### How to Install
1. Clone the project into your Workspace.
2. Have a MongoDB Database Called `address-book`.
3. Run the Command `npm run install` to start downloading Dependencies.
4. Run the Command `npm run start` this will build and start the application automatically at `http://localhost:4200/` (Default port is 4200)

## Technology Stack Used
- TypeScript (As Recommended)
- Node.JS
- Express.JS
- MongoDB (As Recommended)


##  API Endpoints

- `http://localhost:4200/` [GET] Hello World Page

### JWT
- For Simplicity, A Simple [GET] Request to `http://localhost:4200/api/gettoken` Will create A JWT and ALSO Save it in Express Session, So Just vist this endpoint once and you are good to go.

### Contacts
- Index (Shows All Contacts) `http://localhost:4200/api/contacts` [GET] 
`REQUIRES JWT`

- Create Contact `http://localhost:4200/api/contacts` [POST]
`REQUIRES JWT` Provide (name, number, address) in Request Body

- Delete Contact `http://localhost:4200/api/contacts/:id` [DELETE]
`REQUIRES JWT`

- Get Contact `http://localhost:4200/api/contacts/:id` [GET]
`REQUIRES JWT`

- Update Contact `http://localhost:4200/api/contacts/:id` [PUT]
`REQUIRES JWT`

ALL Server Responses are delivered in JSON
