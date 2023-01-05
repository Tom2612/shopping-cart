# Shopping Cart App

This project is about working with React Router alongside TDD.

## Technologies used

React, HTML, CSS, JS, Jest

## Learning Process

TDD, whilst initially difficult, is actually fun and can almost gamify coding. However, learning how to access all the different components on a page got very tedious and really slowed down my production as I had to basically learn this alongside writing the code for the project.

React Router seems like an easy to use and strong router option. Whilst I am used to express and doing routes in there, I can see the functionality benefits of having it all on the client-side ready to go.

I wanted to get the bare bones of a working cart before styling anything. I went for a class heavy approach this time and did find that quite a bit more challenging than normal. Usually styling is very natural and comes quite quickly at the end of the process, but with the multiple components to keep track of, the process was that little bit longer.

Ultimately, I have a firm grasp on useState, useEffect, Router and some very basic testing principles for React apps, however another few more projects written where I force myself to TDD is still needed at this point.

## New features 1

Added a new features branch to work on changing the products to the top 20 sci-fi books. Had a small issue deploying it to gh-pages as the index route wasn't showing as home. Fixed this using HashRoute instead of BrowserRoute. 

New features I want to add now: 

- Dedicated cart overlay where you can see what products you've added and adjust quantities.
- More routes for different book genres.
- Mobile design.
- User authentication and basket storage.
- End-to-end application.

## 4/1/23

Been spending the past few weeks learning how to incorporate firebase into projects, particularly authentication and user accounts. The idea will be to have users save their basket between sessions. 

Most recent changes have been creating a SignUp component that allows users to sign in with email and password. This is working and linked up to firebase. 

New things I am learning by doing this:
- useContext to provide my authentication to all components rather than as props. Principles of prop drilling.
- Setting up private routes (need to include).
- useNavigate to automatically redirect users when signed up.
- BaaS systems (firebase in this case).

I then decided App.js didn't need to store the whole app functionality, and so I have put it in the Shop.js component. App.js now controls the routes and passing authentication down to the different components.

## 5/1/23

Just finished adding basic user authentication. You can now signup, signin and logout. I have protected routes using a PrivateRoute component that automatically redirects you to login if a user is not present. 

Need to style these components and then work can begin on adding Firestore to the project to save a user's cart and retrieve that info. next time they login.