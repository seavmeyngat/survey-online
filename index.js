document.forms[0].addEventListener("submit", submitForm);

//         function submitForm(event) {
//             event.preventDefault();
//             const fullName = document.getElementById("fullname").value;
//             console.log(fullName);
//             const age = document.getElementById("age").value;
//             console.log(age)
//         }


function submitForm(event) {
    event.preventDefault();

    var errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';  // Clear previous error message

    var fullname = document.getElementById('fullname').value.trim();
    console.log(fullname);
    var age = document.getElementById('age').value.trim();
    console.log(age);
    var gradeLevel = document.querySelector('input[name="fav_language"]:checked');
    var schoolType = document.querySelector('input[name="type-school"]:checked');

    var interestWebDev = document.querySelector('input[name="s1-01"]:checked');
    var prevExperience = document.querySelector('input[name="s1-02"]:checked');
    var experienceDescription = document.getElementById('exampleFormControlTextarea1').value.trim();
    var interestAspects = [];
    document.querySelectorAll('input[name="aspect"]:checked').forEach(checkbox => {
        interestAspects.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherInterestAspect = document.querySelector('.other').value.trim();
    var familiarityActivePedagogy = document.querySelector('input[name="s2-01"]:checked');
    var understandingActivePedagogy = document.getElementById('exampleFormControlTextarea2').value.trim();
    var participatedActivePedagogy = document.querySelector('input[name="s3-01"]:checked');
    var experienceActivePedagogy = document.getElementById('exampleFormControlTextarea3').value.trim();


    var learningPreferences = [];
    document.querySelectorAll('input[id^="flexCheckDefault5"]:checked').forEach(checkbox => {
        learningPreferences.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherLearningPreference = document.querySelector('.other').value.trim();

    var learningEnvironment = [];
    document.querySelectorAll('input[id^="flexCheckDefault10"]:checked').forEach(checkbox => {
        learningEnvironment.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherLearningEnvironment = document.querySelector('.other').value.trim();

    var peerInteraction = document.querySelector('input[name="s5-01"]:checked');
    var instructorFeedback = document.querySelector('input[name="s6-01"]:checked');

    var goalsAchieve = [];
    document.querySelectorAll('input[id^="flexCheckDefault13"]:checked').forEach(checkbox => {
        goalsAchieve.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherGoalsAchieve = document.querySelector('.other').value.trim();
    var webDevelopmentHelp = document.getElementById('exampleFormControlTextarea4').value.trim();

    var improvementSuggestions = document.getElementById('exampleFormControlTextarea5').value.trim();
    var additionalComments = document.getElementById('exampleFormControlTextarea6').value.trim();




    if (!fullname || fullname.length < 3) {
        errorMessage.innerText = 'Name must be at least 3 characters long.';
        return false;
    }

    if (!age || age <= 0) {
        errorMessage.innerText = 'Please enter a valid age.';
        return false;
    }

    if (!gradeLevel) {
        errorMessage.innerText = 'Please select your current grade level.';
        return false;
    }

    if (!schoolType) {
        errorMessage.innerText = 'Please select the type of school.';
        return false;
    }

    
    console.log('Full Name:', fullname);
    console.log('Age:', age);
    console.log('Current Grade Level:', gradeLevel.value);
    console.log('Type of School:', schoolType.value);


    console.log('Interest in Web Development:', interestWebDev ? interestWebDev.nextElementSibling.innerText.trim() : 'Not answered');
    console.log('Previous Experience with Web Development:', prevExperience ? prevExperience.nextElementSibling.innerText.trim() : 'Not answered');
    console.log('Experience Description:', experienceDescription);
    console.log('Aspects of Web Development Interest:', interestAspects.join(', '));
    if (otherInterestAspect) {
        console.log('Other Aspect of Web Development Interest:', otherInterestAspect);
    }

    console.log('Familiarity with Active Pedagogy:', familiarityActivePedagogy ? familiarityActivePedagogy.nextElementSibling.innerText.trim() : 'Not answered');
    console.log('Understanding of Active Pedagogy:', understandingActivePedagogy);
    console.log('Participation in Active Pedagogy:', participatedActivePedagogy ? participatedActivePedagogy.nextElementSibling.innerText.trim() : 'Not answered');
    console.log('Experience with Active Pedagogy:', experienceActivePedagogy);


    console.log('Learning Preferences:', learningPreferences.join(', '));
    if (otherLearningPreference) {
        console.log('Other Learning Preference:', otherLearningPreference);
    }

    console.log('Learning Environment:', learningEnvironment.join(', '));
    if (otherLearningEnvironment) {
        console.log('Other Learning Environment:', otherLearningEnvironment);
    }

    console.log('Peer Interaction:', peerInteraction ? peerInteraction.nextElementSibling.innerText.trim() : 'Not answered');
    console.log('Instructor Feedback:', instructorFeedback ? instructorFeedback.nextElementSibling.innerText.trim() : 'Not answered');

    console.log('Goals to Achieve:', goalsAchieve.join(', '));
    if (otherGoalsAchieve) {
        console.log('Other Goals to Achieve:', otherGoalsAchieve);
    }
    console.log('How Web Development Skills will Help:', webDevelopmentHelp);

    console.log('Improvement Suggestions:', improvementSuggestions);
    console.log('Additional Comments:', additionalComments);


    window.location.href = '/page-thanks/index.html';

    return true;
}

function clearForm() {
    document.getElementById('myForm').reset();
    document.getElementById('error-message').innerText = '';  
}