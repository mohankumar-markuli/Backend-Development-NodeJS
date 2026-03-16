- Gets the list of the courses aand details
- Gets the details of the course named 1234
- creates the course with the provided details
- Modifies the information of the course with the provided details
- Gets the average ratings of all the students for the course 1234

### Example ====> GET http://localhost:8080/api/v1/courses/{i}

GET - method
http - protocal
localhost - domain name
8080 - port number
api - application context name
v1 - version
courses - resource name
{i} - properties


base_url - http://localhost:8080/api/
api endpoint - v1/courses/{i}

### Gets the list of the courses aand details
GET /v1/courses

wrong api calls
GET /api/v1/courses/list (Don't need list)
GET /api/courses (missing V1)
GET /api/v1/course/getAll 
(no veed for getAll and use just a noun and plural noune resources only)

### gets the details of the course id 1234
GET base_url/v1/courses/{id}:id

## creates the course with the provided details
POST base_url/v1/courses
    {body}

### Modifies the information of the course with the provided details
PUT base_url/v1/courses/{id}
    {body}

PUT ----> replace the resourse
PATCH ----> update a part of the resource (mostly used)

PATCH base_url/api/v1/courses/:courseId
    {body}

### Gets the average ratings of all the students for the course 1234
GET base_url/v1/courses/{id}?field=average

GET base_url/v1/courses/{id}:id/ratings?stat=average  --->acceptable
GET base_url/v1/courses/{id}:id/ratings?aggregate=avg --->acceptable

GET base_url/v1/courses/{id}:id/average_rating --->acceptable
