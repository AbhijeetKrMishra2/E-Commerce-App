E-Commerce Application :: 
Welcome to the E-Commerce project! This is an E-Commerce web application designed to provide an enjoyable shopping experience for customers. As a student developer, I'll guide you through the key functions and properties used in this application.

Project Overview :
Register option is provided for new users and Sign in for already Registered users.Then only we can go onto the home page of the E-Commerce application.
E-Commerce  is a web application built using React and Firebase. It allows users to explore products, add them to their cart, and complete purchases. The application employs modern React concepts and Firebase services to deliver a seamless shopping experience.

Key Functions :-
User Authentication
The application includes user registration and login functionalities using Firebase Authentication. This enables users to create accounts, log in, and maintain their session securely.

Product Listing and Filtering
The home page of the application displays a list of available products. Users can search for products by name and apply filters based on price and categories. This is achieved by implementing a search function and utilizing a sidebar for filtering.

Shopping Cart Management
Users can add products to their shopping cart, adjust quantities, and remove items. The cart page displays the added products along with their quantities. The application utilizes Firebase Firestore to store and manage cart data.

Order History
The application maintains a record of user orders. The orders page showcases the products users have purchased and the corresponding order dates.

React Context and Hooks
React Context is used for managing user authentication state and product data across different components. The useContext(), useState(), and useEffect() hooks are employed to ensure efficient state management and data updates.

Routing
Navigation within the application is managed using react-router-dom. Different routes are established for the home page, cart page, orders page, and more.

Additional Features (Optional)
For enhanced user experience, optional features include displaying loading states using the react-spinners library and showcasing toast messages for async actions and errors with the react-toastify library.

Project Structure :
The project follows a modular structure:-

src directory: Contains components, contexts, hooks, and utility functions.
public directory: Holds static assets and the main index.html file.
Getting Started


To start working on the E-Commerce  project, follow these steps :-

Navigate to the project directory: cd E-Commerce App
Install dependencies: npm install
Start the development server: npm start
Run the build command : npm run build

Conclusion :-
Thank you for exploring E-Commerce Application! This project showcases my ability to implement user authentication, manage state with React Hooks, integrate Firebase services, and design a user-friendly E-Commerce application. 


The application can be viewed live at (Hosted Website Link) :- https://e-commerce-website-reactjs-frontend.netlify.app/cart