# Milan Registration Form

This is a web application that allows users to register for the Milan event by filling out a registration form. The form includes fields for full name, phone number, hostel block, interested events, and email. Users can also sign in with their Google account to automatically populate the email field.

## Prerequisites

1. A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge)
2. A text editor or an Integrated Development Environment (IDE) of your choice

## Getting Started

1. Clone the repository or download the project files.
2. Open the project folder in your text editor or IDE.

## Dependencies

This project uses the following dependencies:

- Firebase (for Google authentication)
- Google Fonts (for the Poppins font)

The Firebase and Google Fonts dependencies are loaded directly from their respective Content Delivery Networks (CDNs) using `<script>` and `<link>` tags in the HTML file (`task.html`). No additional installation or configuration is required for these dependencies.

## Configuring Google Auth

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project or use an existing one.
2. In the project's settings, scroll down to the "Your apps" section and click on the Web icon (</>).
3. Register a new web app by providing a nickname and checking the "Also set up Firebase Hosting for this app" checkbox.
4. In the next step, you can skip the "Install Firebase Hosting" section by clicking "Next".
5. Copy the Firebase configuration object provided in the final step.
6. In the `login.js` file, replace the existing `firebaseConfig` object with the configuration object you copied from the Firebase Console.

```javascript
const firebaseConfig = {
 // Paste your Firebase configuration object here
};
