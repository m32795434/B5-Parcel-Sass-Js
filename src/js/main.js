//this won't work (individually) because we need to instantiate a Popover.
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

//we need to import the class and instantiate a Popover
// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
