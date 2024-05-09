# CMS CRUD App

This is a simple Content Management System (CMS) application that allows users to perform CRUD operations on content entries.

## Features

- **Create**: Add new content entries with details such as title, description, and date.
- **Read**: View a list of existing content entries with their details.
- **Update**: Modify the details of existing content entries.
- **Delete**: Remove content entries from the system.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Getting Started

1. **Clone the repository**:

    ```
    git clone https://github.com/your-username/cms-crud-app.git
    ```

2. **Install dependencies**:

    ```
    cd cms-crud-app
    npm install
    ```

3. **Set up the database**:

    - Create a MySQL database named `cms_db`.
    - Import the database schema from `database/schema.sql`.

4. **Configure environment variables**:

    - Create a `.env` file in the root directory.
    - Define the following environment variables:

    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=cms_db
    ```

5. **Start the server**:

    ```
    npm start
    ```

6. **Launch the application**:

    Open your web browser and navigate to `http://localhost:3000` to access the CMS CRUD application.

## Usage

- **Create**: Click on the "Add Content" button to create a new content entry. Fill in the required details and click "Save".
- **Read**: View the list of existing content entries on the homepage.
- **Update**: Click on the "Edit" button next to a content entry to modify its details. Update the fields and click "Save".
- **Delete**: Click on the "Delete" button next to a content entry to remove it from the system.

## License

This project is licensed under the [MIT License](LICENSE).
