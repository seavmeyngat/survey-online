function fetchApi() {
    const url = new URL("https://wmad-survey-backend.vercel.app/api/form-answers/question/12/answers");
    const params = {
        search_created_by: 'Team6'
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Request failed!');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchApi();
