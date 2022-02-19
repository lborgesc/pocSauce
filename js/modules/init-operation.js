export default function initOperation() {
    const operation = document.querySelector("[data-hours]");
    const hoursOpetarions = operation.dataset.hours.split(',').map(Number);
    const dateObj = new Date; 
    const hoursNow = dateObj.getHours();
    
    
    if (hoursNow >= hoursOpetarions[0] && hoursNow < hoursOpetarions[1]) operation.classList.add('open');
}