# Gmail Clone App

A fully functional Gmail clone built using modern web development tools like React, Redux, Firebase, and Tailwind CSS. The application mimics the core features of Gmail, including authentication, routing, and responsive design.

## Demo

[View the application here](https://sonali-gmail-clone.netlify.app)



## Features

- **Google Authentication**: Integrated Google Sign-In using Firebase for secure and seamless user login.
- **State Management**: Global state managed efficiently using Redux for smooth performance.
- **Routing**: Multi-page navigation implemented with React Router DOM.
- **Real-time Data**: Firebase used for real-time data storage and retrieval.
- **Performance Optimization**: Leveraged Web Vitals to ensure the app runs efficiently.
- **Animations**: Added smooth UI/UX transitions with Framer Motion.
- **Icons**: Used React Icons to enrich the UI.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS, React Router DOM, Framer Motion, React Icons, Web Vitals, React Google Button
- **Backend**: Firebase (Authentication & Database)
- **Deployment**: Firebase Hosting

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sonalisingh30/gmail-clone.git
    ```

2. Navigate into the project directory:
    ```bash
    cd gmail-clone
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a Firebase project and set up Google Authentication.

5. Create a `.env` file in the root directory and add your Firebase configuration:

    ```env
    REACT_APP_API_KEY=your_firebase_api_key
    REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_PROJECT_ID=your_firebase_project_id
    REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_APP_ID=your_firebase_app_id
    ```

6. Start the app:
    ```bash
    npm start
    ```


## Usage

- Sign in using your Google account.
- Access inbox features and navigate through the app using different routes.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.


