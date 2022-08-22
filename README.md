<p align='center'>
	<img src="./images/network-svgrepo-com.svg" width="300px" />
</p>

<h3 align="center">Chat.io</h3>
<p align="center">Real-time Messenger Web Application</p>

### Abstract

A full-stack web application which supports many useful real-time features including:
text messaging, video/voice calling, notifications, and many more.

### Core Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Instructions

1. Create a workspace folder.
    ```sh
    mkdir chat-io
    cd chat-io
    ```
2. Clone the front-end repo (this repo) and back-end repo.
    ```sh
    git clone https://github.com/danielphan-dp/chat-io
    git clone https://github.com/danielphan-dp/chat-io-be
    ```

3. Navigate to the front-end repo. Install Node modules for the front-end.
    ```sh
    cd <path-to-front-end-repo>
    npm install
    ```
4. Navigate to the back-end repo. Install Node modules for the back-end.
    ```sh
    cd <path-to-back-end-repo>
    npm install
    ```
5. Run the back-end, then the front-end in 2 separate Terminal windows. At the moment, it's optimal to
run the processes in 2 separate Terminal windows.
    ```sh
    # inside back-end repo and the associated Terminal window
    npm start
    ```
    ```sh
    # inside front-end repo and the associated Terminal window
    npm start
    ```



The application should be available in [localhost:3000](localhost:3000).

## Usage

### Sign Up
Enter your e-mail, username and chosen password (ideally a strong password).
<p align="center">
  <img src="./images/register/register-1.png" alt="register-image" width="90%" />
</p>

The submit button should be available immediately after valid input is entered.

<p align="center">
  <img src="./images/register/register-2.png" alt="register-image" width="90%" />
</p>

You are all set at this point!

### Sign In

Enter your registered credentials, and you will be automatically redirected to the dashboard page.

<p align="center">
  <img src="./images/sign-in/sign-in-1.png" alt="sign-in-image" width="90%" />
</p>

<p align="center">
  <img src="./images/sign-in/sign-in-2.png" alt="sign-in-image" width="90%" />
</p>

The server will provide promt when invalid credentials are entered.

<p align="center">
  <img src="./images/sign-in/sign-in-3.png" alt="sign-in-image" width="90%" />
</p>

<p align="center">
  <img src="./images/sign-in/sign-in-4.png" alt="sign-in-image" width="90%" />
</p>

### Dashboard UI
<p align="center">
  <img src="./images/dashboard/dashboard-1.png" alt="dashboard-image" width="90%" />
</p>

### Send Friend Request
<p align="center">
  <img src="./images/add-friend/add-friend-1.png" alt="dashboard-image" width="90%" />
</p>

<p align="center">
  <img src="./images/add-friend/add-friend-2.png" alt="dashboard-image" width="90%"/>
</p>

Your friend request will be updated in real-time to the other user!

<p align="center">
  <img src="./images/add-friend/add-friend-3.png" alt="dashboard-image" width="90%"/>
</p>

### Accept Friend Request

<p align="center">
  <img src="./images/add-friend/add-friend-4.png" alt="dashboard-image" width="90%"/>
</p>

### Text Message

<p align="center">
  <img src="./images/send-message/send-message-1.png" alt="dashboard-image" width="90%"/>
</p>

### Video Calling

### Video Call Rooms

### Screen sharing


### Features

- [x] Real-time text messaging, video calling, and updates
- [x] Friends invitation system
- [x] User ability to control different video and audio sources
- [x] Compatible with screen sharing
- [x] User sign up and sign in system
- [x] Server-side and client-side invalid form information inputs handling
- [x] Compatible with multiple browsers (Chrome, Edge, Firefox, and Opera)
- [ ] GUI Themes and Modes (Dark, Light, Solarized, etc.)
- [ ] Chat Message Cells of Different Content Types
  - [ ] Markdown and LaTeX Cells
  - [ ] Code Cells (with Syntax Highlighting)

