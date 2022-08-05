<p align='center'>
	<img src="./images/network-svgrepo-com.svg" width="300px" />
</p>

<h3 align="center">
	Chat.io
</h3>

<p align="center">
	A web application to help you stay connected.
</p>
<p align="center">In real-time!</p>

## About The Project

A full-stack web application that support many useful real-time features including:
text messaging, video/voice calling, notifications, and many more.
Available in your local machine in just a few simple set-up steps.

### Core Technologies

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

- ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

- ![WebRTC](https://a11ybadges.com/badge?logo=webrtc)

- ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Getting Started

### Workspace Set-up

- Create a new folder in local machine. This will be the root folder storing both the front-end and back-end of the project (which are maintained in separate repos).

  ```sh
  mkdir <WORKSPACE-NAME>
  ```

- Clone the front-end repository. The front-end repository is this repo.

  ```sh
  git clone <FRONT-END-REPOSITORY-LINK>
  ```

- Clone the back-end repository. To access the back-end repository, click [here](https://github.com/danielphan-dp/messanging-platform-server).

  ```sh
  git clone <BACK-END-REPOSITORY-LINK>
  ```

### Installation

- From the workspace folder, go to the front-end directory and install necessary packages.

  ```sh
  cd <FOLDER-OF-FRONT-END-REPO>
  npm install
  ```

- From the workspace folder, go to the back-end directory and install necessary packages.

  ```sh
  cd <FOLDER-OF-BACK-END-REPO>
  npm install
  ```

### Run

To test the features, it is the best to run the front-end and the back-end in two separate terminals.

- Start a new terminal window, go to the back-end folder, and run the server.

  ```sh
  cd <FOLDER-OF-BACK-END-REPO>
  npm start
  ```

- Start a new terminal window, go the to the front-end folder, and run the front-end dev server.

  ```sh
  cd <FOLDER-OF-FRONT-END-REPO>
  npm start
  ```

- The application should be available in `localhost:3000`.

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


## Features

- [x] Real-time text messaging, video calling, and updates
- [x] Friends invitation system
- [x] User ability to control different video and audio sources
- [x] Compatible with screen sharing
- [x] User sign up and sign in system
- [x] Server-side and client-side invalid form information inputs handling
- [x] Compatible with multiple browsers (Chrome, Edge, Firefox, and Opera)

### Planned Features

- [ ] GUI Themes and Modes (Dark, Light, Solarized, etc.)
- [ ] Chat Message Cells of Different Content Types
  - [ ] Markdown and LaTeX Cells
  - [ ] Code Cells (with Syntax Highlighting)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project

2. Create your Feature Branch

   ```sh
   git checkout -b feature/<YOUR-AMAZING-PROPOSED-FEATURE>
   ```

3. Commit your Changes

   ```sh
   git commit -m <YOUR-COMMIT-MESSAGE>
   ```

4. Push to the Branch

   ```sh
   git commit -m 'git push origin feature/<YOUR-AMAZING-PROPOSED-FEATURE>'
   ```

5. Open a Pull Request

## Acknowledgments

In Progress... Check back soon!
