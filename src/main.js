import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './project-name';

$(document).ready(function () {
  $('#poem').submit(function(event){
    event.preventDefault();
    const str1 = $('input#line1').val();
    const str2 = $('input#line2').val();
    const str3 = $('input#line3').val();
  })

});