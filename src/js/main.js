import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
const popers = document.querySelectorAll('[data-bs-toggle="popover"]');
Array.from(popers).forEach((pop)=>{
    new bootstrap.Popover(pop)
})