// import bootstrap javascript bundle (bootstrap.js, jQuary, popper.js)
import 'bootstrap/dist/js/bootstrap.bundle'
// Import precompiled Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import './../scss/style.scss'

import {Generate} from './generator'

const genButton = document.getElementById("genButton");
genButton.onclick = function(){Generate()};