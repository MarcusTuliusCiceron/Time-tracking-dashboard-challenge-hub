
const dailyButton = document.querySelector('.daily_btn');
const weeklyButton = document.querySelector('.weekly_btn');
const monthlyButton = document.querySelector('.monthly_btn');

const workTime = document.querySelector('.work_time');
const playTime = document.querySelector('.play_time');
const studyTime = document.querySelector('.study_time');
const exerciseTime = document.querySelector('.exercise_time');
const socialTime = document.querySelector('.social_time');
const careTime = document.querySelector('.care_time');

const workPrevious = document.querySelector('.work_previous');
const playPrevious = document.querySelector('.play_previous');
const studyPrevious = document.querySelector('.study_previous');
const exercisePrevious = document.querySelector('.exercise_previous');
const socialPrevious = document.querySelector('.social_previous');
const carePrevious = document.querySelector('.care_previous');

const timeArray = [workTime, playTime, studyTime, exerciseTime, socialTime, careTime];
const previousArray = [workPrevious, playPrevious, studyPrevious, exercisePrevious, socialPrevious, carePrevious];

let currentScale = 'daily';
let myRequest = new Request("data.json")
let extractedData;



function Myfunction(scale, request){
    fetch(request).then(function(resp){
        return resp.json();
    }).then(function(data){
        if (scale == 'daily'){

            for (let i = 0; i < timeArray.length; i++) {
                timeArray[i].textContent = data[i].timeframes.daily.current + " hrs";
                previousArray[i].textContent = "Last day - " + data[i].timeframes.daily.previous + " hrs";
              } 
        }
        else if (scale == 'weekly'){
            
            for (let i = 0; i < timeArray.length; i++) {
                timeArray[i].textContent = data[i].timeframes.weekly.current + " hrs";
                previousArray[i].textContent = "Last week - " + data[i].timeframes.weekly.previous + " hrs";
              } 
            
        }
        else if (scale == 'monthly'){
            
            for (let i = 0; i < timeArray.length; i++) {
                timeArray[i].textContent = data[i].timeframes.monthly.current + " hrs";
                previousArray[i].textContent = "Last month - " + data[i].timeframes.monthly.previous + " hrs";
              } 
            
        }
        
    }).catch(error =>{
        console.log(error);
    })
}

window.onload = () =>{
    Myfunction(currentScale, myRequest);
}



dailyButton.addEventListener('click', () =>{  
    console.log('clicked !');
    currentScale = "daily";
    Myfunction(currentScale, myRequest);
    dailyButton.classList.add('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.remove('active');
})

weeklyButton.addEventListener('click', () =>{  
    console.log('clicked !');
    currentScale = "weekly";
    Myfunction(currentScale, myRequest);
    dailyButton.classList.remove('active');
    weeklyButton.classList.add('active');
    monthlyButton.classList.remove('active');
})

monthlyButton.addEventListener('click', () =>{  
    console.log('clicked !');
    currentScale = "monthly";
    Myfunction(currentScale, myRequest);
    dailyButton.classList.remove('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.add('active');
})


