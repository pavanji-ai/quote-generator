# Javascript Quote Generator

A simple and elegant web application that displays random inspirational quotes with a single click.

## Features

- **Random Quote Display**: Click the "New Quote" button to get a random inspirational quote
- **Attribution**: Each quote includes the name of the person who said it
- **Responsive Design**: Clean and user-friendly interface
- **Lightweight**: Built with vanilla JavaScript, HTML, and CSS

## Project Structure

```
quote-generator/
├── index.html      # Main HTML file
├── project1.js     # JavaScript logic for quote generation
├── style.css       # CSS styling
├── img/            # Image assets
└── README.md       # Project documentation
```

## How It Works

1. The application loads with a default quote displayed
2. Click the **"New Quote"** button to display a random quote from the collection
3. Each quote is paired with its author's name
4. Continue clicking to explore different quotes

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and layout
- **Vanilla JavaScript**: Quote selection logic and DOM manipulation
- **Font Awesome**: Icons (optional)
- **Google Fonts**: Roboto font family

## Installation

1. Clone the repository:
```bash
git clone https://github.com/pavanji-ai/quote-generator.git
```

2. Navigate to the project directory:
```bash
cd quote-generator
```

3. Open `index.html` in your web browser

## Usage

Simply open the application in any modern web browser and click the "New Quote" button to display random quotes.

## Adding More Quotes

To add more quotes to the application, edit the `quotes` array in `project1.js`:

```javascript
const quotes=[
  {
    quote:"Your quote here",
    person:'Author Name'
  },
  // Add more quotes following this format
];
```

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- Add more quotes to the collection
- Implement share functionality (Twitter, Facebook, etc.)
- Add copy to clipboard feature
- Add categories/filters for quotes
- Implement local storage to track favorite quotes
- Add animations and transitions

## License

This project is open source and available under the MIT License.

## Author

Created by Pavanji AI

---

Feel free to fork this repository and contribute improvements!
