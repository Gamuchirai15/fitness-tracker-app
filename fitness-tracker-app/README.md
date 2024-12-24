# Fitness Tracker

## Overview

The **Fitness Tracker** is a web application designed to help users log their workouts, track fitness progress, and explore various exercises. The application allows users to log exercises with sets, reps, and weights, view past workouts, track progress, and discover new exercises via the WGER API. 

This project demonstrates the integration of an external API, user input management, and the creation of a responsive and user-friendly UI using React and TailwindCSS.

## Features

### 1. **Log Workouts**
   - Users can input workout details including exercise name, sets, reps, and weights.
   - Each workout is timestamped for better tracking.

### 2. **Workout History**
   - Displays a history of all logged workouts, organized by date.
   - Users can view detailed logs of each workout, including exercises, sets, reps, and weights.
   - Optional search or filter functionality to view workouts by date or exercise type.

### 3. **Progress Tracking**
   - Visual progress tracking with charts and graphs (using libraries like Chart.js).
   - Metrics such as total weight lifted, average reps per set, and total workouts completed.

### 4. **Fetch Exercise Data**
   - The app fetches exercises from the **WGER API**, displaying exercise names, descriptions, muscle groups, and recommended sets/reps.
   - Exercise details are presented in an organized and visually appealing way.

### 5. **Search Functionality**
   - Users can search for exercises by name or muscle group.
   - Handles scenarios where no exercises are found with a user-friendly message.

### 6. **Responsive UI Design**
   - The application uses **TailwindCSS** to create a responsive design that works well on all screen sizes.
   - The app adapts seamlessly to desktops, tablets, and mobile devices.

### 7. **Error Handling**
   - Comprehensive error handling for network issues, invalid API responses, and missing data, providing clear messages to users.

## Technologies Used

- **React** - Frontend framework for building the user interface.
- **TailwindCSS** - Utility-first CSS framework for styling.
- **WGER API** - API used to fetch exercise data.
- **Fetch API** - For making HTTP requests to external APIs.
- **Chart.js** (optional) - For visualizing workout progress.
