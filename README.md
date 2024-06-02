# Milan Registration Form

This is a web application that allows users to register for the Milan event. The application includes a registration form with fields for name, phone number, hostel block, interested events, and email. Users can also sign in with their Google account.

## Prerequisites

Before running the application locally, make sure you have the following installed:

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge)
- A local web server (e.g., Live Server extension for Visual Studio Code, or any other local server setup)

## Getting Started

1. Clone the repository or download the project files to your local machine.
2. Open the project folder in your preferred code editor or IDE.

## Running the Application

1.Open the project folder in your code editor or IDE.
2.If you're using a local web server like Live Server, right-click on the task.html file and select "Open with Live Server" or the equivalent option for your local server setup.
3.If you're not using a local web server, you can open the task.html file directly in your web browser. However, please note that the Google Sign-In functionality may not work properly due to browser security restrictions.

## Usage
1.Fill out the registration form with your name, phone number, hostel block, and interested events.
2.Enter your email address or click the "Sign in with Google" button to authenticate with your Google account.
3.Once you have entered all the required information, click the "Submit" button to submit the registration form.
4.If all the form fields are valid, you will see a success message. Otherwise, you will be prompted to correct any invalid fields.

## Form Validation

The script.js file contains the validateForm function, which is responsible for validating the form fields before submission. The function checks the following:

- Full Name: Ensures that the full name field is not empty.
- Email: Validates the email format using a regular expression.
- Phone Number: Validates the phone number format using a regular expression (expected format: XXX-XXX-XXXX).
- Hostel Block: Ensures that a hostel block is selected.
- Interested Events: Ensures that at least one interested event is selected.

If any of the validation checks fail, an appropriate alert message is displayed, and the form submission is prevented.

## Google Authentication

The login.js file handles the Google authentication process using the Firebase Authentication SDK. It creates an instance of the Firebase app, initializes the Google Auth Provider, and sets up a click event listener for the "Sign in with Google" button.
When the user clicks the "Sign in with Google" button, the signInWithPopup function is called, which opens a pop-up window for the user to authenticate with their Google account. Upon successful authentication, the user's email is automatically populated in the email field of the registration form, and an alert is displayed with the user's email.

## Configuring Google Auth

To enable the Google Sign-In functionality, you need to follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the project settings, navigate to the "Authentication" section and enable the "Google" sign-in method.
3. In the project settings, navigate to the "Web" section under "Firebase Hosting" and register a new web app.
4. Copy the provided configuration object (it should look like this):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
This README file provides instructions on how to run the application locally, configure Google Auth using Firebase, and use the registration form with Google Sign-In functionality.




