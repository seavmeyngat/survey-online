// document.forms[0].addEventListener("submit", submitForm);




function submitForm(event) {
    event.preventDefault();

    var errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    let fullname = document.getElementById('fullname');
    // console.log(fullname);

    var email = document.getElementById('email');

    // var gradeLevel = document.querySelector('input[name="fav_language"]:checked');
    let levels=[];
    const level=document.getElementsByName('fav_language');
    for(let i=0;i<level.length;i++){
        if(level[i].checked){
            levels.push(level[i].value);
        }
    }


    // var schoolType = document.querySelector('input[name="type-school"]:checked');
    let schoolType=[];
    const school=document.getElementsByName('type-school');
    for(let i=0;i<school.length;i++){
        if(school[i].checked){
            schoolType.push(school[i].value);
        }
    }

    // var interestWebDev = document.querySelector('input[name="s1-01"]:checked');
    let interestWebDev=[];
    const interestWebDevs=document.getElementsByName('s1-01');
    for(let i=0;i<interestWebDevs.length;i++){
        if(interestWebDevs[i].checked){
            interestWebDev.push(interestWebDevs[i].value);
        }
    }

    // var prevExperience = document.querySelector('input[name="s1-02"]:checked');
    let prevExperience=[];
    const prevExperiences=document.getElementsByName('s1-02');
    for(let i=0;i<prevExperiences.length;i++){
        if(prevExperiences[i].checked){
            prevExperience.push(prevExperiences[i].value);
        }
    }
    var experienceDescription = document.getElementById('exampleFormControlTextarea1').value.trim();
    // var interestAspects = [];
    // document.querySelectorAll('input[name="aspect"]:checked').forEach(checkbox => {
    //     interestAspects.push(checkbox.nextElementSibling.innerText.trim());
    // });
    let interestAspects=[];
    const interestAspect=document.getElementsByName('aspect');
    for(let i=0;i<interestAspect.length;i++){
        if(interestAspect[i].checked){
            interestAspects.push(interestAspect[i].value);
        }
    }
    var otherInterestAspect = document.querySelector('.other').value.trim();
    // var familiarityActivePedagogy = document.querySelector('input[name="s2-01"]:checked');
    let familiarityActivePedagogy=[];
    const familiarityActivePedagogys=document.getElementsByName('s1-02');
    for(let i=0;i<familiarityActivePedagogys.length;i++){
        if(familiarityActivePedagogys[i].checked){
            familiarityActivePedagogy.push(familiarityActivePedagogys[i].value);
        }
    }

    var understandingActivePedagogy = document.getElementById('exampleFormControlTextarea2').value;
    // var participatedActivePedagogy = document.querySelector('input[name="s3-01"]:checked');
    let participatedActivePedagogy=[];
    const participatedActivePedagogys=document.getElementsByName('s1-02');
    for(let i=0;i<participatedActivePedagogys.length;i++){
        if(participatedActivePedagogys[i].checked){
            participatedActivePedagogy.push(participatedActivePedagogys[i].value);
        }
    }


    var experienceActivePedagogy = document.getElementById('exampleFormControlTextarea3').value.trim();


    // var learningPreferences = [];
    // document.querySelectorAll('input[name="aspect1"]:checked').forEach(checkbox => {
    //     learningPreferences.push(checkbox.nextElementSibling.innerText.trim());
    // });
    let learningPreferences=[];
    const learningPreference=document.getElementsByName('aspect1');
    for(let i=0;i<learningPreference.length;i++){
        if(learningPreference[i].checked){
            learningPreferences.push(learningPreference[i].value);
        }
    }


    var otherLearningPreference = document.querySelector('.other').value.trim();

    // var learningEnvironment = [];
    // document.querySelectorAll('input[name="aspect2"]:checked').forEach(checkbox => {
    //     learningEnvironment.push(checkbox.nextElementSibling.innerText.trim());
    // });
    let learningEnvironment=[];
    const learningEnvironments=document.getElementsByName('aspect2');
    for(let i=0;i<learningEnvironments.length;i++){
        if(learningEnvironments[i].checked){
            learningEnvironment.push(learningEnvironments[i].value);
        }
    }
    var otherLearningEnvironment = document.querySelector('.other').value.trim();

    // var peerInteraction = document.querySelector('input[name="s5-01"]:checked');
    let peerInteraction=[];
    const peerInteractions=document.getElementsByName('s5-01');
    for(let i=0;i<peerInteractions.length;i++){
        if(peerInteractions[i].checked){
            peerInteraction.push(peerInteractions[i].value);
        }
    }

    // var instructorFeedback = document.querySelector('input[name="s6-01"]:checked');
    let instructorFeedback=[];
    const instructorFeedbacks=document.getElementsByName('s6-01');
    for(let i=0;i<instructorFeedbacks.length;i++){
        if(instructorFeedbacks[i].checked){
            instructorFeedback.push(instructorFeedbacks[i].value);
        }
    }

    // var goalsAchieve = [];
    // document.querySelectorAll('input[name="goals-achieve"]:checked').forEach(checkbox => {
    //     goalsAchieve.push(checkbox.nextElementSibling.innerText.trim());
    // });
    let goalsAchieve=[];
    const goalsAchieves=document.getElementsByName('goals-achieve');
    for(let i=0;i<goalsAchieves.length;i++){
        if(goalsAchieves[i].checked){
            goalsAchieve.push(goalsAchieves[i].value);
        }
    }

    var otherGoalsAchieve = document.querySelector('.other').value.trim();
    var webDevelopmentHelp = document.getElementById('exampleFormControlTextarea4').value.trim();
    let technologies =document.getElementById('exampleFormControlTextarea7').value.trim();


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

    if (!levels) {
        errorMessage.innerText = 'Please select your current grade level.';
        return false;
    }

    if (!schoolType) {
        errorMessage.innerText = 'Please select the type of school.';
        return false;
    }
    if (!interestWebDev) {
        errorMessage.innerText = 'Please select the interestEWebDev.';
        return false;
    }
    if (!prevExperience) {
        errorMessage.innerText = 'Please select the previous experience.';
        return false;
    }
    if (!experienceDescription) {
        errorMessage.innerText = 'Please complate Experience Description.';
        return false;
    }
    if (!interestAspects) {
        errorMessage.innerText = 'Please check interest aspects.';
        return false;
    }
    if (!familiarityActivePedagogy) {
        errorMessage.innerText = 'Please check familiar with the concept of active pedagogy .';
        return false;
    }
    if (!understandingActivePedagogy) {
        errorMessage.innerText = 'Please complete understanding Active Pedagogy.';
        return false;
    }
    if (!participatedActivePedagogy) {
        errorMessage.innerText = 'Please check participated Active Pedagogy.';
        return false;
    }
    if (!experienceActivePedagogy) {
        errorMessage.innerText = 'Please check experience Active Pedagogy.';
        return false;
    }
    if (!learningPreferences) {
        errorMessage.innerText = 'Please check learning Preferences.';
        return false;
    }
    if (!learningEnvironment) {
        errorMessage.innerText = 'Please check learning Enviroment.';
        return false;
    }
    if (!peerInteraction) {
        errorMessage.innerText = 'Please select peer interaction.';
        return false;
    }
    if (!instructorFeedback) {
        errorMessage.innerText = 'Please check instructor Feedback.';
        return false;
    }
    if (!goalsAchieve) {
        errorMessage.innerText = 'Please check goal achieve.';
        return false;
    }
    if (!webDevelopmentHelp) {
        errorMessage.innerText = 'Please complete webDevelopmentHelp.';
        return false
    }
    if (!improvementSuggestions) {
        errorMessage.innerText = 'Please complete improvment suggestion.';
        return false;
    }
    if (!additionalComments) {
        errorMessage.innerText = 'Please complete additional comments.';
        return false;

   


    console.log('Full Name:', fullname.value);
    console.log('email:', email.value);
    console.log('Current Grade Level:', levels);
    console.log('Type of School:', schoolType);


    console.log('Interest in Web Development:', interestWebDev );
    console.log('Previous Experience with Web Development:', prevExperience );
    console.log('Experience Description:', experienceDescription);
    console.log('Aspects of Web Development Interest:', interestAspects.join(', '));
    if (otherInterestAspect) {
        console.log('Other Aspect of Web Development Interest:', otherInterestAspect);
    }

    console.log('Familiarity with Active Pedagogy:', familiarityActivePedagogy);
    console.log('Understanding of Active Pedagogy:', understandingActivePedagogy);
    console.log('Participation in Active Pedagogy:', participatedActivePedagogy);
    console.log('Experience with Active Pedagogy:', experienceActivePedagogy);


    console.log('Learning Preferences:', learningPreferences.join(', '));
    if (otherLearningPreference) {
        console.log('Other Learning Preference:', otherLearningPreference);
    }

    console.log('Learning Environment:', learningEnvironment.join(', '));
    if (otherLearningEnvironment) {
        console.log('Other Learning Environment:', otherLearningEnvironment);
    }

    console.log('Peer Interaction:', peerInteraction );
    console.log('Instructor Feedback:', instructorFeedback );

    console.log('Goals to Achieve:', goalsAchieve.join(', '));
    if (otherGoalsAchieve) {
        console.log('Other Goals to Achieve:', otherGoalsAchieve);
    }
    console.log('How Web Development Skills will Help:', webDevelopmentHelp);
    console.log("technology",technologies);

    console.log('Improvement Suggestions:', improvementSuggestions);
    console.log('Additional Comments:', additionalComments);


        console.log('Navigating to thank you page...');

        let data = [];
        for (let i = 1; i <= 21; i++) {
            data.push({
                fullname: fullname.value,
                email: email.value,
                question_id: i,
                created_by: "laiheang-seavmey",

            });
        }
        console.log(fullname);
        data[0].answer = [fullname.value];
        data[1].answer = [email.value];
        data[2].answer=levels;
        data[3].answer = schoolType;
        data[4].answer = interestWebDev;
        data[5].answer = prevExperience;
        data[6].answer = [experienceDescription];
        data[7].answer = interestAspects;
        data[8].answer = familiarityActivePedagogy;
        data[9].answer = [understandingActivePedagogy];
        data[10].answer = participatedActivePedagogy;
        data[11].answer = [experienceActivePedagogy];
        data[12].answer =  learningPreferences;
        data[13].answer = learningEnvironment;
        data[14].answer = peerInteraction;
        data[15].answer = instructorFeedback;
        data[16].answer = goalsAchieve;
        data[17].answer = [webDevelopmentHelp];
        data[18].answer = [technologies];
        data[19].answer = [improvementSuggestions];
        data[20].answer = [additionalComments];
        console.log(data);
        saveDataToAPI(data);
        
        
        
    
        return true;
        
}

document.getElementById('myForm').addEventListener('submit', submitForm);

function clearForm() {
    document.getElementById('myForm').reset();
    document.getElementById('error-message').innerText = '';
}




function saveDataToAPI(data) {


    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
        method: "POST",
        body: JSON.stringify({ answers: data }),
        headers: {
            "x-secret-key": "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
            "Content-Type": "application/json"
        },

    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = '/page-thanks/idex.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}
