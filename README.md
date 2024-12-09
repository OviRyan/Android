# FONTHUB - Find Fonts Fast

FONTHUB is a web app designed to help users quickly find and preview fonts. It allows users to search for fonts, view them, and get the necessary CSS code for implementation. Fonts are dynamically loaded from a Google Sheet, making it easy to manage and update the font list.

## Features

- **Search Bar**: Search for fonts by name.
- **Font Preview**: See how fonts look in real-time.
- **Font Details**: Click on a font to view the Google Fonts link and the CSS code.
- **Dynamic Font List**: The font list is fetched from a Google Sheet, allowing easy updates.

## How It Works

1. The app fetches the list of fonts from a publicly accessible Google Sheet in JSON format.
2. Fonts are displayed with their names, categories, and real-time previews.
3. When a user clicks on a font, the app shows the link to the Google Fonts page and the corresponding CSS code for easy integration into projects.

## Getting Started

### Prerequisites

To run this project locally, you will need:
- A modern web browser (Chrome, Firefox, etc.)
- A code editor (e.g., VSCode)

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/ovishkh/FONTHUB.git
    ```
        ```bash
    cd FONTHUB
    ```
   


### Setting Up the Google Sheet

1. **Create a Google Sheet** with the following columns:
    - **Name**: The name of the font.
    - **Category**: The category of the font (e.g., Sans-serif, Monospace, Serif).
    - **Link**: The link to the font on Google Fonts.
    - **CSS Code**: The CSS code for implementing the font (e.g., `font-family: 'Roboto', sans-serif;`).

2. **Publish the Sheet**:
   - Go to **File > Publish to the web** in Google Sheets.
   - Choose the range or the entire document to publish.
   - Copy the generated URL.


### Running the App

1. Open the [FONTHUB](https://ovishkh.github.io/FONTHUB/) link in your web browser.
2. You can start searching for fonts and clicking on them to view the details.

## Customizing the Font List

To add or remove fonts:
- Simply update the Google Sheet with new font entries.
- The app will automatically reflect the changes when reloaded, as it fetches data from the sheet.

## File Structure



## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling the app.
- **JavaScript**: For fetching and displaying fonts dynamically from Google Sheets.
- **Google Sheets API**: For storing and managing the list of fonts.

## Contributing

Feel free to fork the project, make improvements, and submit pull requests. If you find bugs or have feature suggestions, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

