const fonts = [
      { 
          name: 'Roboto', 
          category: 'Sans-serif', 
          link: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', 
          cssCode: "font-family: 'Roboto', sans-serif;" 
      },
      { 
            name: 'JetBrains Mono', 
            category: 'Monospace', 
            link: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap', 
            cssCode: "font-family: 'JetBrains Mono', monospace;" 
      },
      { 
          name: 'Open Sans', 
          category: 'Sans-serif', 
          link: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap', 
          cssCode: "font-family: 'Open Sans', sans-serif;" 
      },
      { 
          name: 'Lora', 
          category: 'Serif', 
          link: 'https://fonts.googleapis.com/css2?family=Lora&display=swap', 
          cssCode: "font-family: 'Lora', serif;" 
      },
      { 
          name: 'Merriweather', 
          category: 'Serif', 
          link: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap', 
          cssCode: "font-family: 'Merriweather', serif;" 
      }
  ]; // Sample font data
  
  // Function to display fonts based on search query
  function displayFonts(searchQuery) {
      const previewContainer = document.getElementById('fontPreview');
      previewContainer.innerHTML = ''; // Clear previous results
      const filteredFonts = fonts.filter(font => font.name.toLowerCase().includes(searchQuery.toLowerCase()));
      filteredFonts.forEach(font => {
          const fontCard = document.createElement('div');
          fontCard.className = 'font-card';
          fontCard.innerHTML = `
              <h3 style="font-family: '${font.name}', sans-serif">${font.name}</h3>
              <p>${font.category}</p>
          `;
          fontCard.addEventListener('click', () => displayFontDetails(font));
          previewContainer.appendChild(fontCard);
      });
  }
  
  // Function to display font details when clicked
  function displayFontDetails(font) {
      const fontLink = document.getElementById('fontLink');
      const fontCode = document.getElementById('fontCode');
      
      fontLink.innerHTML = `<strong>Font Link:</strong> <a href="${font.link}" target="_blank">${font.link}</a>`;
      fontCode.innerHTML = `<strong>CSS Code:</strong> <code>${font.cssCode}</code>`;
  }
  
  // Event listener for search input
  document.getElementById('searchBar').addEventListener('input', function() {
      const searchQuery = this.value;
      displayFonts(searchQuery);
  });
  
  // Initial display of all fonts
  displayFonts('');
  