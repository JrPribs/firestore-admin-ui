# Firestore Admin UI Requirements

This document outlines the requirements for a web-based Firestore admin UI, based on an existing React prototype. The new application will be built with Angular and use Firebase for authentication.

## 1. Core Functionality

### 1.1. Project Management

*   **Add New Firebase Projects:** Users must be able to add new Firebase projects to the application.
    *   Project configuration can be provided manually (API key, auth domain, etc.) or by uploading a JSON configuration file.
    *   Users can also connect to a project using a service account key for admin access.
*   **Project Sidebar:** A sidebar will display a list of all added projects.
    *   The active project will be highlighted.
    *   Users can switch between projects by clicking on them in the sidebar.
*   **Delete Projects:** Users must be able to remove projects from the application.

### 1.2. Tabbed Interface

*   The application will use a tabbed interface to allow users to work on multiple tasks at once.
*   Each tab will represent a specific view, such as a collection, a query, or the authentication page.
*   Users can open, close, and switch between tabs.

## 2. Feature Set

### 2.1. Firestore Data Viewing

*   **Collection Viewer:** Users can browse Firestore collections and documents.
*   **Data Views:** Data can be displayed in multiple formats:
    *   **Table View:** A paginated, sortable, and filterable table view of documents in a collection.
    *   **Tree View:** A hierarchical view of a document's data.
    *   **JSON View:** A raw JSON view of a document's data.

### 2.2. Querying

*   **Query Builder:** A user-friendly interface for building Firestore queries.
    *   Users can specify the collection path.
    *   Users can add `where` clauses with various operators (`==`, `!=`, `<`, `<=`, `>`, `>=`, `array-contains`, etc.).
    *   Users can add `orderBy` clauses for sorting results.
    *   Users can specify a limit for the number of documents to return.
*   **JavaScript Query Editor:** An editor for writing custom queries using the Firebase Admin SDK (or the client-side SDK).
*   **Query Results:** Query results will be displayed in the data viewer.

### 2.3. Authentication Management

*   **User List:** Display a list of all users in the Firebase project.
    *   The list will be searchable and paginated.
    *   Each user will have a detail view showing their UID, email, display name, photo URL, and other properties.
*   **User Management:**
    *   Add new users.
    *   Edit existing users.
    *   Disable/enable users.
    *   Delete users.
*   **Sign-in Methods:** A view for managing authentication providers (Google, Facebook, etc.).

### 2.4. Settings

*   **Project Settings:** A view for displaying the current project's configuration.
*   **Security Rules:** An editor for viewing and modifying Firestore security rules.
*   **Application Settings:** A view for configuring application-level settings, such as the theme, default query limit, etc.

## 3. Technical Requirements

*   **Framework:** Angular
*   **Backend:** Firebase
    *   **Authentication:** Firebase Authentication will be used to manage user access to the application itself.
    *   **Firestore:** The application will interact with the user's own Firestore instance.
*   **UI:** The UI should be clean, modern, and responsive.
