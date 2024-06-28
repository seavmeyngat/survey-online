function fetchApi2() {
    // const url = new URL("https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers");
    // const params = {
    //     search_created_by: 'Team6'
    // };
    // url.search = new URLSearchParams(params).toString();

    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers?search_created_by=laiheang-seavmey", {
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
        const datas=data.length;
        console.log(datas);
        document.getElementById("demo01").innerHTML= datas;

    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchApi2();
function fetchApi3() {

    // const url = new URL("https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers");
    // const params = {
    //     search_created_by: 'Team6'
    // };
    // url.search = new URLSearchParams(params).toString();

    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers?search_created_by=laiheang-seavmey&search_answer=yes", {
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
        const nYs=data.length;
        console.log(nYs);
        document.getElementById("dem02").innerHTML= nYs;
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchApi3();
function fetchApi4() {
    const grades=document.getElementById("gradeLervel").value;

    // const url = new URL("https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers? search_created_by='vouchh'&search_answer="+grades);
    // const params = {
    //     search_created_by='vouchh'
    // };
    // url.search = new URLSearchParams(params).toString();

    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=laiheang-seavmey&search_answer="+grades, {
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

        let grade=data.length;
        console.log(grade);
        document.getElementById("demo").innerHTML= grade;
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchApi4();


function fetchApi5() {
    const schools=document.getElementById("type-school").value;
    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=laiheang-seavmey&search_answer="+schools, {
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

        let school=data.length;
        console.log(school);
        document.getElementById("demo1").innerHTML= school;
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchApi5();