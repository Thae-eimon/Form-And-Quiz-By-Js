const quizdata=[
    {
        question:"Which one is the first search engine in internet?",
        a:"Google",
        b:"Archie",
        c:"Altavista",
        d:"WAIS",
        correct:"b",
    },
    {
        question:"Which one is the first web browser invented in 1990",
        a:"Internet Explorer",
        b:"Mosaic",
        c:"Mozilla",
        d:"Nexus",
        correct:"d",
    },
    {
        question:"Which of the following is not an operating system?",
        a:"DOS",
        b:"Mac",
        c:"C",
        d:"Linux",
        correct:"c",
    },
    {
        question:"Where is the headquter of Microsoft office located",
        a:"Texas",
        b:"New York",
        c:"California",
        d:"Washington",
        correct:"d",
    }

]

// console.log(quizdata);
//UI
const quiz=document.getElementById('quiz');
// const questions= document.getElementById('question');
const questions=document.querySelector('#question');
const answerels=document.querySelectorAll('.answer');
const labels=document.querySelectorAll('li');
const stat=document.getElementById('stat');

// console.log(labels);

// console.log(answers);

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
// const e_text=document.getElementById('e_text');
const submitbtn=document.getElementById('submit');

let currentquiz =0;
let score=0;

function loadquiz(){
    deselectanswer();
    const currentquizdata = quizdata[currentquiz];
    // console.log(currentquizdata);
    question.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
    // e_text.innerText=currentquizdata.e;
    stat.innerHTML="Question"+' '+(currentquiz+1)+' '+"of" +' '+ quizdata.length;
    

}
loadquiz();

function deselectanswer(){
    answerels.forEach((answerel)=>answerel.checked=false);
}

function  getselected(){
    let answer;

    answerels.forEach((answerel)=>{
        //console.log(answerel);

        if(answerel.checked){
            answer=answerel.id;
        }
    });
    return answer;
}
function checkanswer(){
    const answerbank=document.querySelector('.answerbank');
    const answers=document.getElementById('answerel');
    const scoreboard=document.querySelector('.scoreboard');
    const ans=document.getElementById('ans');
    answerbank.style.display="block";
    scoreboard.style.display="block";
    ans.style.display="block";
    
    for(let a=0;a< quizdata.length;a++){
        var list=document.createElement('li');
        list.innerHTML=quizdata[a].correct;
        answers.appendChild(list);
    }
    


}
submitbtn.addEventListener('click',()=>{

 
    let answer=getselected();
    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if(currentquiz < quizdata.length){
            loadquiz();
        }else{
            quiz.innerHTML=`
            <div class="scoreboard">
            <h2>Your Score<br/> ${score}/ ${quizdata.length} </h2>
            <button onclick="location.reload()">Back To Quiz</button>
            <button onclick="checkanswer()" id="check">Check Answer</button>
             <div class="answerbank">
            <h2 id="ans">Answers:</h2>
            <ol type="1" id="answerel">
        
            </ol>
        </div>     
            
            
`;
        }

    }


})






   
        // console.l