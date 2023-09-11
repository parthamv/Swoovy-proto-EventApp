# My Events App Documentation

Welcome to the documentation for the My Events App! This app allows users to view tech events, filter them based on location and date, and access detailed information about each event. Here's a step-by-step guide to understanding and running the project:

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation and Running the App](#installation-and-running-the-app)
3. [Project Structure](#project-structure)
4. [Components Overview](#components-overview)
5. [Data Management](#data-management)
6. [Design Choices](#design-choices)
7. [Future Enhancements](#future-enhancements)

### 1. Prerequisites <a name="prerequisites"></a>

Ensure you have the following installed:

- Node.js (version 14+ recommended)
- npm (generally included with Node.js)

### 2. Installation and Running the App <a name="installation-and-running-the-app"></a>

1. Clone the repository:

```bash
git clone [repository-link]
```

2. Navigate to the project directory:

```bash
cd [repository-name]
```

3. Install the required dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

### 3. Project Structure <a name="project-structure"></a>

The application follows a standard React project structure, with additional directories for Redux management.

- `components`: Contains reusable UI components.
- `pages`: Contains the main views or screens.
- `services`: Holds the async functions used for data fetching.
- `store`: Contains Redux setup including actions, reducers, and the store configuration.

### 4. Components Overview <a name="components-overview"></a>

1. **EventCard**: Represents an individual event with a cover image, title, and description.
2. **EventModal**: A modal popup displaying detailed information about an event when clicked.
3. **Filters**: Provides dropdowns for location and date to filter displayed events.
4. **Footer**: A footer component showcasing social media icons and relevant links.
5. **HomePage**: The landing page with a welcome message and a description of the app.
6. **EventsPage**: Displays a list of events and provides filters for narrowing down the event list.

### 5. Data Management <a name="data-management"></a>

1. The app uses Redux Toolkit for state management.
2. `eventsService`: Contains the asynchronous action to fetch events.
3. `eventsSlice`: Defines the slice of the store dedicated to events and provides reducers.
4. `store`: Configures the Redux store and combines all reducers.
5. `rootReducer`: Combines the app's reducers.

### 6. Design Choices <a name="design-choices"></a>

- **Ant Design**: The app utilizes the Ant Design component library for UI components, ensuring a consistent and polished UI.
  
- **Responsive Design**: The app layout adapts to different screen sizes using Ant Design's Grid System (Row and Col components).

- **Theming**: The app follows a dark theme with strategic use of colors to highlight key components and ensure readability.

- **ProLayout**: Used for the main application layout, providing easy-to-navigate sidebars and other layout features.

### 7. Future Enhancements <a name="future-enhancements"></a>

1. **User Authentication**: Implement user sign-up and login to allow personalized event recommendations.
2. **Event Creation**: Allow users to create and manage their events.
3. **RSVP Feature**: Enable users to RSVP to events, helping event organizers plan better.
4. **Real-time Notifications**: Integrate WebSockets to provide real-time updates for new events or changes to existing events.

---

Thank you for going through the documentation for the My Events App. If you have any questions or face issues, please refer to the app's GitHub repository for more details or to raise issues.
