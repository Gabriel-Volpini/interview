# Food Facilities Challenge (Frontend)

This is a frontend application built to explore mobile food facilities in San Francisco, leveraging public data from SF Open Data. It allows users to search by applicant name, street name, and view the locations on an interactive map.

Check a video preview here: https://www.youtube.com/watch?v=_H8tis2WssU
[![image](https://github.com/user-attachments/assets/fa6e961b-2bf8-4847-9403-096ea0088130)](https://www.youtube.com/watch?v=_H8tis2WssU)


## Features
- Search by applicant name with optional filtering by status
- Search by street name (partial match supported)
- Map view of food trucks using location markers
- List view displaying facility details
- Hovering over list items visually raises the corresponding marker
- Click on the marker open a popup with the name of the place


## Tech Stack
- Framework: React + Vite
- Language: TypeScript
- UI Library: Ant Design
- Styling: styled-components
- Testing: Vitest, React Testing Library
- Package Manager: pnpm

## Architectural and Technical Decisions

### Vite + React + pnpm

Chosen for fast development cycles and efficient package management.

### Ant Design

Enables rapid and consistent UI development.

### Styled Components

Scoped styling for component-level design control.

### Leaflet

Integrated for intuitive geolocation interaction.



## Improvments

### Scaling
- Implement clustering for map markers to improve performance with large datasets
- Add pagination integrated with the backend to avoid storing all data in memory
- Move search functionality to the backend to reduce client-side load

### New Features
- Show the user’s current location on the map
- Display the “Nearest 5 Trucks” based on the user’s geolocation
- Center the map on the selected marker when a user clicks an item in the list
- Improve Marker popup

## Running the Project 
```
pnpm install
pnpm run dev
```

## Testing
```
pnpm run test
```
