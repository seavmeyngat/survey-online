document.forms[0].addEventListener("submit", submitForm);




function submitForm(event) {
    event.preventDefault();

    var errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';  

    var fullname = document.getElementById('fullname').value.trim();
   
    var email = document.getElementById('email').value.trim();

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
    document.querySelectorAll('input[name="aspect1"]:checked').forEach(checkbox => {
        learningPreferences.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherLearningPreference = document.querySelector('.other').value.trim();

    var learningEnvironment = [];
    document.querySelectorAll('input[name="aspect2"]:checked').forEach(checkbox => {
        learningEnvironment.push(checkbox.nextElementSibling.innerText.trim());
    });
    var otherLearningEnvironment = document.querySelector('.other').value.trim();

    var peerInteraction = document.querySelector('input[name="s5-01"]:checked');
    var instructorFeedback = document.querySelector('input[name="s6-01"]:checked');

    var goalsAchieve = [];
    document.querySelectorAll('input[name="goals-achieve"]:checked').forEach(checkbox => {
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

    if (!email) {
        errorMessage.innerText = 'Please enter a valid email.';
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
    if(!interestWebDev){
        errorMessage.innerText='Please select the interestEWebDev.';
        return false;
    }
    if(!prevExperience){
        errorMessage.innerText='Please select the previous experience.';
        return false;
    }
    if(!experienceDescription){
        errorMessage.innerText='Please complate Experience Description.';
        return false;
    }
    if(!interestAspects){
        errorMessage.innerText='Please check interest aspects.';
        return false;
    }
    if(!familiarityActivePedagogy){
        errorMessage.innerText='Please check familiar with the concept of active pedagogy .';
        return false;
    }
    if(!understandingActivePedagogy){
        errorMessage.innerText='Please complete understanding Active Pedagogy.';
        return false;
    }
   if(!participatedActivePedagogy){
    errorMessage.innerText='Please check participated Active Pedagogy.';
    return false;
   }
   if(!experienceActivePedagogy){
    errorMessage.innerText='Please check experience Active Pedagogy.';
    return false;
   }
   if(!learningPreferences){
    errorMessage.innerText='Please check learning Preferences.';
    return false;
   }
   if(!learningEnvironment){
    errorMessage.innerText='Please check learning Enviroment.';
    return false;
   }
   if(!peerInteraction){
    errorMessage.innerText='Please select peer interaction.';
    return false;
   }
   if(!instructorFeedback){
    errorMessage.innerText='Please check instructor Feedback.';
    return false;
   }
   if(!goalsAchieve){
    errorMessage.innerText='Please check goal achieve.';
    return false;
   }
   if(!webDevelopmentHelp){
    errorMessage.innerText='Please complete webDevelopmentHelp.';
    return false
   }
   if(!improvementSuggestions){
    errorMessage.innerText='Please complete improvment suggestion.';
    return false;
   }
   if(!additionalComments){
    errorMessage.innerText='Please complete additional comments.';
    return false;
   }

    
    console.log('Full Name:', fullname);
    console.log('email:', email);
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


    // window.location.href = '/page-thanks/idex.html';

    return true;
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!submitForm(event)) {
       
        event.preventDefault();
        console.log('Please complete the form correctly before submitting.');
    } else {
        
        console.log('Navigating to thank you page...');
     
        window.location.href = '/page-thanks/idex.html';
    }
});

function clearForm() {
    document.getElementById('myForm').reset();
    document.getElementById('error-message').innerText = '';  
}