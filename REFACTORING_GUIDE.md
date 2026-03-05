# Clean Vibez VIP - Refactored Structure

## Project Organization

This project has been refactored to keep each section and its CSS in respective folders for better maintainability and modularity.

### Folder Structure

```
cleanVibez/
├── index.html                          # Main entry point
├── HomePage.html                       # Original homepage (kept for reference)
├── assets/
│   ├── css/
│   │   ├── vars.css                   # CSS variables and utilities
│   │   ├── style.css                  # Global styles and base layout
│   │   └── booking-widget.css         # Shared booking widget styles
│   └── img/                           # All images
├── sections/                          # Organized sections
│   ├── header/
│   │   ├── header.html
│   │   └── header.css
│   ├── hero/
│   │   ├── hero.html
│   │   └── hero.css
│   ├── services/
│   │   ├── services.html
│   │   └── services.css
│   ├── story/
│   │   ├── story.html
│   │   └── story.css
│   ├── destinations/
│   │   ├── destinations.html
│   │   └── destinations.css
│   ├── booking-cta/
│   │   ├── booking-cta.html
│   │   └── booking-cta.css
│   ├── why-us/
│   │   ├── why-us.html
│   │   └── why-us.css
│   ├── vibe/
│   │   ├── vibe.html
│   │   └── vibe.css
│   ├── faq/
│   │   ├── faq.html
│   │   └── faq.css
│   ├── testimonials/
│   │   ├── testimonials.html
│   │   └── testimonials.css
│   └── footer/
│       ├── footer.html
│       └── footer.css
```

## How to Use

1. **Global Styles**: Import global styles from `assets/css/` in your HTML head
2. **Section Styles**: Each section's CSS is imported as a separate stylesheet
3. **Section Files**: Each section HTML is kept in its own folder with its corresponding CSS

## CSS Import Order

The stylesheets should be imported in the following order to maintain proper cascading:

1. `vars.css` - CSS variables
2. `style.css` - Global styles
3. Individual section CSS files
4. `booking-widget.css` - Shared component styles

## Benefits

- **Easy Maintenance**: Find and edit styles for a specific section quickly
- **Modularity**: Each section is self-contained with its HTML and CSS
- **Scalability**: Add new sections by simply creating a new folder
- **Reusability**: Components like booking-widget can be shared across sections
- **Better Organization**: Developers can easily locate section-specific code

## Integration Notes

- All image paths are relative to the root directory (`./assets/img/`)
- CSS custom properties are defined in `vars.css`
- Base layout classes are in `style.css`
- Section-specific selectors use ID and class combinations for specificity
