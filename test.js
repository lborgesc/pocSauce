let btnNext = document.querySelector('#btnNext');
const btnClean = document.querySelector('#btnClean');
let valid = true;

btnNext.addEventListener('click', ()  =>{
    let sections = document.querySelector('#fristForm');
    let divs = sections.querySelectorAll('div');
    console.log(divs);
    //let inputForm = divs.querySelectorAll('input');
        handleError(inputForm);         
        
        if(!valid){
            handleNextPage()
        }
})

function handleNextPage(){
    const btnPrevious = document.querySelector('#btnPrevious');
    const page = document.querySelector('.page');
    const btnSend = document.querySelector('#btnSend');
    let sections = document.querySelectorAll('section');


    btnPrevious.classList.remove('active');
    btnSend.classList.remove('active');
    btnNext.classList.add('active');
    page.innerHTML = "2/2";

    sections.forEach(section => {
                
        if(!section.classList.contains('endForm')){
            section.classList.toggle('active');
        }
    })
}

function handleError(sections) {
    let inputForm = sections.querySelectorAll('input');
    let checkbox = sections.querySelectorAll('.checkbox');

        
        for(let errorText of sections.querySelectorAll('.error-text')){
            errorText.remove();
        }
  
        inputForm.forEach(input =>{
            if(input.getAttribute('type') === 'text' || input.getAttribute('type') === 'date'){
                if(!input.value){
                    createError(input, `Esse campo não pode estar vazio.`);
                    valid = false;
                }else{
                    valid = true; 
                }
            }            
        })

        checkbox.forEach(check => {
            const checkInput = check.querySelectorAll('input');
            const lastInput = check.querySelectorAll('.lastInput');

            let cont = 0;
                    
            checkInput.forEach(inputBox => {
                if (inputBox.checked === true) {
                    cont++;   
                };
            })
            
            if (cont <= 0) {

                lastInput.forEach(last => {
                    createError(last, `Esse campo não pode estar vazio.`);
                    valid = false;
                })                  
            }else{
                valid = true; 
            }
        })  
        
}

function createError(field, error){
    const div = document.createElement('div');
    div.innerHTML = error;
    div.classList.toggle('error-text');
    field.insertAdjacentElement('afterend', div)
}





btnClean.addEventListener('click', () => {
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if(!section.classList.contains('active')){
            cleanForm(section);
        }
    })
})

function cleanForm(section) {
    let inputForm = section.querySelectorAll('input');
    
    inputForm.forEach(input =>{ 
        input.value = '';
        input.checked = false;
        clearError();
    })    
}

function clearError() {
    const clearDiv = document.querySelectorAll('.error-text');
    clearDiv.forEach(div => {
        div.innerHTML = '';
    })
}