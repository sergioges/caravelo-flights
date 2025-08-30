# Flight Subscription Management - Vue 3 Application

This project was created with Vite and Vue 3 using script setup syntax. It provides a flight subscription management interface for Caravelo, featuring multilingual support, quota management, and API response simulation.

## Main Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build

## Technologies & Dependencies

- **Vue 3**: Frontend framework with Composition API
- **Vite**: Fast build tool and development server
- **Vuetify 3**: Material Design component framework
- **Pinia**: State management solution
- **Vue I18n**: Internationalization
- **Material Design Icons**: Icon library via the `mdi` class

## Features

- **Multilingual Support**: Switch between English and Spanish
- **Flight Quota Management**: Add or remove flights from a subscriber
- **HTTP Response Simulation**: Test different API response codes
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure
- `src/`: Main source code
  - `components/`: Vue components
    - `QuotaManager.vue`: Flight quota management modal
    - `HttpCodeSelector.vue`: HTTP response code selector
    - `LanguageSelector.vue`: Language toggle component
  - `locales/`: Internationalization files
    - `en.json`: English translations
    - `es.json`: Spanish translations
  - `stores/`: Pinia state management
    - `quotes.js`: Flight quota state and logic
  - `main.js`: Application entry point
  - `App.vue`: Root component
  - `style.css`: Global styles

## Modal Functionality

The QuotaManager modal provides an interface for adjusting a subscriber's flight quota:

1. **Opening the Modal**: Click the "Edit flights" button to open the modal
2. **Flight Quantity**: Adjust the number of flights (0-3) using number input
3. **Reason Selection**: 
   - When adding flights: Shows reasons for adding flights
   - When removing flights: Shows reasons for removing flights
4. **Validation**:
   - Flight quantity must be between 0 and 3
   - A reason must be selected before saving
5. **API Interaction**: 
   - Uses the selected HTTP code to simulate API responses
   - Shows success or error messages via snackbar notifications
6. **State Management**: 
   - Uses Pinia for state management
   - Tracks original quota value to detect changes

---

For more information, see the official documentation for [Vue 3](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/), [Pinia](https://pinia.vuejs.org/), and [Material Design Icons](https://pictogrammers.github.io/@mdi/font/).
