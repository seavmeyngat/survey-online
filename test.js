const apiUrl = 'https://wmad-survey-backend.vercel.app/api/form-answers/submit';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('GET Response:', response);

    if (!response.ok) {
      throw new Error(`GET request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  })
  .then(data => {
    console.log('Data from GET request:', data);
  })
//   .catch(error => {
//     console.error('GET Error:', error.message);
//   });
