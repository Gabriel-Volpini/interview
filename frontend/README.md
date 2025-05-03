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



## Critique

### What I Would Have Done Differently With More Time
- Refined the list layout and overall UI styling
- Tokenized the theme using the Catppuccin palette for consistency and maintainability
- Built a more complete application structure, including a header and footer
- Created a CRUD page to add, remove, and edit list items
- Designed a dynamic background using blob shapes to make the interface more visually engaging
- Implemented ordering/sorting functionality in the list
- Added both vertical and horizontal scrolling to the list to ensure all dataset fields are viewable
- Improve Marker popup

### What Are the Trade-Offs I Have Made
- Used Leaflet instead of Google Maps:
  - Leaflet is open-source and easier to set up (no API key required), but it’s generally slower and may lack data for more specific or remote locations compared to Google Maps.
- Chose a more opinionated UI library instead of something like @shadcn/ui or a custom design system:
  - While less customizable, it allowed for faster development using pre-built components that are functional and visually appealing out of the box.
- Stored all data in memory:
  - This simplified the development process by avoiding the need to set up a backend or an API to serve the data. However, it directly impacts performance and is not scalable for larger datasets.
  - I chose not to integrate with the backend to keep the setup simple and easy to work and review. Managing two separate services could have added unnecessary complexity to the challenge.

### What are the things you left out?
From the challenge requirements — nothing was left out. However, there are a few features I would have liked to include to enhance the overall experience:
- Show the user’s current location on the map
- Display the “Nearest 5 Trucks” based on the user’s geolocation
- Center the map on the selected marker when a user clicks an item in the list


### What Are the Problems With My Implementation, and How I’d Solve Them for Scalability
- Too many map markers can negatively impact performance.
  - FIX: Implement marker clustering to efficiently handle large datasets without overloading the map 
- All data is currently stored in memory, which isn’t scalable
  - FIX: Add pagination integrated with the backend to fetch only the necessary data per request, improving memory usage and responsiveness
- Search is handled on the frontend, requiring all data to be loaded client-side
  - FIX: Move the search functionality to the backend to minimize client-side processing and eliminate the need to preload the entire dataset 


## Running the Project 
```
pnpm install
pnpm run dev
```
or
```
npm install
npm run dev
```

## Testing
```
pnpm run test
```
or
```
npm run test
```



