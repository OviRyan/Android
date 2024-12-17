let fontsData = [];
let hideTimeout = null;

// Fetch and Parse CSV
fetch('source/fonts.csv')
    .then(response => response.text())
    .then(data => {
        fontsData = parseCSV(data);
        displayFonts(fontsData);
    })
    .catch(error => console.error('Error loading CSV:', error));

// Parse CSV into Objects
function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index] ? values[index].trim() : '';
            return obj;
        }, {});
    });
}

// Display Fonts
function displayFonts(fonts) {
    const previewContainer = document.getElementById('fontPreview');
    previewContainer.innerHTML = '';

    fonts.forEach((font) => {
        const card = document.createElement('div');
        card.className = 'font-card';
        card.style.fontFamily = font['CSS Code'] || 'inherit';
        card.innerHTML = `
            <h3>${font.Name}</h3>
            <p>${font.Category || 'Uncategorized'}</p>
        `;
        card.addEventListener('click', () => showFloatingPreview(font));
        previewContainer.appendChild(card);
    });
}




// Show Floating Font Preview
function showFloatingPreview(font) {
    const floatingPreview = document.getElementById('floatingPreview');

    // Update content with a table
    floatingPreview.innerHTML = `
        <h2>Font Details: ${font.Name}</h2>
        <table>
            <tr>
                <th>Font Name</th>
                <td>${font.Name}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>${font.Category}</td>
            </tr>
            <tr>
                <th>CSS Code</th>
                <td><code>${font['CSS Code']}</code></td>
            </tr>
            <tr>
                <th>Font Link</th>
                <td>
                    <button class="copy-link-btn" onclick="copyLink('${font.Link}')">Copy Link</button>
                </td>
            </tr>
        </table>
        <button class="close-btn" onclick="closePreview()">X</button>
    `;

    // Add class to slide up
    floatingPreview.classList.add('show');

    // Auto-hide after 1 minute
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        floatingPreview.classList.remove('show');
    }, 60000); // Hide after 1 minute
}

// Close the Floating Preview
function closePreview() {
    const floatingPreview = document.getElementById('floatingPreview');
    floatingPreview.classList.remove('show');
}

// Copy the Font Link to Clipboard
function copyLink(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('Font link copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}
