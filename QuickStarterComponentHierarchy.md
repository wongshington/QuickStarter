# **React Component Hierarchy**

## Functional Component Hierarchy

* Root
  * App
    * NavBar
    * MainPage
    * Footer

## NavBar

* NavBar
  * Components:
    * SessionButtonsContainer + SessionButtons (LogIn/LogOut and Sign Up)
      * State: session
    * ExploreButtonsContainer + ExploreButtons (Explore Icon and Explore Text Link)
    * SearchButton
    * StartNewProjectButton

## Projects

* ProjectIndexContainer + ProjectIndex
  * Route: /#/projects
  * State: project
  * Components:
    * projectIndexItem
      * State: projects[:id], ui


* ProjectSplashIndexContainer
  * Route: /#/projectsSplash
  * State: project
  * Components:
    * projectSplashIndexItem
      * State: projects[:id], ui


* ProjectOfTheWeekContainer
  * Route: /#/projects/:projectId
  * State: project
  * Components:
    * projectIndexItem
      * State: projects[:id], ui


* ProjectShowContainer + ProjectShow
  * Route: /#/projects/:projectId
  * State: projects[:id], ui


## Session

  * SessionFormContainer + SessionForm
    * Route: /#/login and /#/signup
    * State: errors.login

## CategoriesSearch

* CategoriesIndexContainer + CategoriesIndexItem
  * Route: /#/
  * State: ui
  * Components:
    * CategoriesIndexItem
    * State: none (will be made with separate ajax request after selection)

## NewProjectForm

* ProjectFormContainer
  * Route: /#/projects/new
  * State: project, users[:id], errors.projectForm
  * Components:
    * ProjectForm
    * State: ui

## ProjectShowPage

* ProjectDetailContainer
  * Route: /#/projects/:projectId
  * State: project, projects[:rewards], ui
  * Components:
    * ProjectDetails
    * State: project[:id]
    * RewardsIndexContainer + RewardsIndexItem
    * State: project[:rewards]





<!--  -->
