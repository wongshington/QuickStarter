# Routes

## API Endpoints

### users
* POST /api/users - sign up

### projects
* GET /api/projects -returns projects based on param input data
* GET /api/projects/:projectId -returns specific project
* POST /api/project - creates new project
* PATCH /api/project/:projectId -edits specific project
* DELETE /api/project/:projectId -deletes specific project

### rewards
* GET /api/rewards/:projectId -returns rewards associated with specific project
* POST /api/rewards/ -creates a new reward
* DELETE /api/rewards -deletes a reward

***

### Frontend Routes
* /login
* /signup
* /projects - project feed, homepage
* /projects/new - create a project
* /projects/:projectId - project show
* /projects/:projectId/edit - update a project
