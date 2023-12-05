# NoSQL Challenge: Social Network API

## Description

Developed for a social media startup, the Social Network API leverages a NoSQL database, specifically MongoDB, to efficiently manage large amounts of unstructured data. This project facilitates social interactions online, allowing users to share thoughts, respond to friends' thoughts, and maintain a friends list. Key technologies include Express.js for routing, MongoDB for the database, and Mongoose as the ODM. This backend API showcases the foundational elements utilized in many full-stack social networking platforms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)
- [License](#license)

## Installation

To get started:

1. Clone the repository from [GitHub](https://github.com/grayd500/Social-Network-API-Challenge).
2. Ensure Node.js is installed on your system.
3. Run `npm install` to install dependencies like Express.js and Mongoose.
4. Make sure MongoDB is installed and operational on your device.

## Usage

Follow these steps to use the API:

1. Launch the server using `node server.js` or `npm start`.
2. Use Insomnia or a similar tool to interact with the API, testing routes for users, thoughts, reactions, and friend lists.
3. Utilize GET, POST, PUT, and DELETE requests to manage the various entities and their interactions within the network.

## Demo

View a [walkthrough video](https://share.vidyard.com/watch/jHM9P97C14XDioJ76Da79P) demonstrating the functionality of this API, including testing of routes and database interactions.

## Credits

This project was developed by [David Gray](https://github.com/grayd500).

A special acknowledgment to ChatGPT-4, provided by OpenAI, for assistance in developing code snippets and refining the README.md file for this project.

Acknowledgments to online resources and tutorials that aided in this project's development, including:
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

## License

This project is distributed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## Features

- RESTful API routes for managing users, thoughts, friend lists, and reactions.
- MongoDB and Mongoose for efficient data handling.
- Scalable structure for handling large volumes of unstructured data.

## How to Contribute

Interested in contributing? Follow these steps:

1. Fork the [repository](https://github.com/grayd500/Social-Network-API-Challenge).
2. Create a new branch for your feature or fix.
3. Commit your changes with detailed messages.
4. Push your changes and open a pull request.

For more information, refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

To ensure continuous quality and reliability:

1. Set up a testing environment like Jest.
2. Run `npm test` to execute the test suite.
3. Review test results and adjust the code as needed.

Ensure to include tests for any new features or code changes to maintain the integrity of the API.
