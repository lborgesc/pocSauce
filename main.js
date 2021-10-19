function validForm() {
    const inputForm = document.querySelectorAll('input');
    const btnSend = document.querySelector('#btnSend');
    const checkbox = document.querySelectorAll('.checkbox')

    btnSend.addEventListener('click', () => {
        cleanForm()
        handleError()   
    })

   

    function clearError() {
        const clearDiv = document.querySelectorAll('.error-text');
        clearDiv.forEach(div => {
            div.innerHTML = '';
        })
    }

    nextForm()
    function nextForm() {
        const btnNext = document.querySelector('#btnNext');
        const btnPrevious = document.querySelector('#btnPrevious');
        
        const sections = document.querySelectorAll('section');
        const divs = document.querySelectorAll('div');

        btnNext.addEventListener('click', () => {   
            handleError()
            divs.forEach(div =>{
                console.log(div.classList.contains('error-text'));
                if(!div.classList.contains('error-text')){
                    btnPrevious.classList.toggle('active');
                    btnSend.classList.toggle('active');
                    btnNext.classList.toggle('active');
                    page.innerHTML = "2/2";

                    sections.forEach(section => {
                
                        if(!section.classList.contains('endForm')){
                            section.classList.toggle('active');
                        }
                    })
                }
            })
            
            
        })

        btnPrevious.addEventListener('click', () => {
            btnPrevious.classList.toggle('active');
            btnSend.classList.toggle('active');
            btnNext.classList.toggle('active');
            page.innerHTML = "1/2";

            sections.forEach(section => {
                
                if(!section.classList.contains('endForm')){
                    section.classList.toggle('active');
                }
            })        
        })
    }

    function handleError() {
        
            inputForm.forEach(input =>{
                if(input.getAttribute('type') === 'text' || input.getAttribute('type') === 'date'){
                    if(!input.value){
                        createError(input, `Esse campo não pode estar vazio.`)
                    }
                };            
            })
        
             
        
    }

    function createError(field, error){
        const div = document.createElement('div');
        div.innerHTML = error;
        div.classList.toggle('error-text');
        field.insertAdjacentElement('afterend', div)
    }


    cleanForm()
    function cleanForm() {
        const btnClean = document.querySelector('#btnClean');

        btnClean.addEventListener('click', () => {
            inputForm.forEach(input =>{ 
                input.value = '';
                input.checked = false;
                clearError();
            })
        })
    }
}

validForm();

