const labels=document.querySelectorAll('.form-control label');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cfmpassword=document.getElementById('cfmpassword');
const form=document.getElementById('form');

labels.forEach(label=>{

    label.innerHTML=label.innerText
    .split('')
    .map((letter,index)=>
    `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('');

})
function showerror(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control error";

    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
function showsuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control succsess";

    
}
function getselected(inputarr){
    inputarr.forEach(function(input){
        if(input.value===''){
            showerror(input);
        }else{
            showsuccess(input);
        }
    })
    

}
function checkvalidemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value)){
        showsuccess(input)
    }
    else{
        showerror(input,"Hmm.. that doesn't look like an email address ");
    }
}
function passwordlength(input,min,max){
    if(input.value.length  < min){
        showerror(input,`Password must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`Password must be ${max} characters`);
    }
    else{
        showsuccess(input);
    }
}
form.addEventListener('submit',(e)=>{

    getselected([email,password]);
    checkvalidemail(email);
    passwordlength(password,6,20);
    e.preventDefault();
})

const btn=document.querySelector('.btn');
const container=document.querySelector('.container');

form.addEventListener('mouseenter',()=>{
    container.classList.add('rotate');
    
})

