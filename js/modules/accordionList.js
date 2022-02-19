export default function accordionList(){
    const accordionDts = document.querySelectorAll(".js-accordion dt")
    if (accordionDts.length) {
        const activeClass= 'active';

        accordionDts[0].classList.add(activeClass);
        accordionDts[0].nextElementSibling.classList.add(activeClass);
        
        accordionDts.forEach(item => {
            
            item.addEventListener("click", activeAccordion);
        })
        
        function activeAccordion(){
            this.nextElementSibling.classList.toggle(activeClass);
            this.classList.toggle(activeClass);
        }
    }
}

