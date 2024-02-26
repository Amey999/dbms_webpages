// Replace YOUR_GOOGLE_API_KEY with your actual Google API key
const apiKey = 'AIzaSyAqHmu-jTw2ghIfwEr1D0CNOK2x3TE_sxI';

function convertText() {
    const inputLanguage = document.getElementById('inputLanguage').value;
    const outputLanguage = document.getElementById('outputLanguage').value;
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Please enter some text for conversion.');
        return;
    }

    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: inputText,
            source: inputLanguage,
            target: outputLanguage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        const outputText = data.data.translations[0].translatedText;
        document.getElementById('outputText').value = outputText;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during language conversion. Please try again.');
    });
}
