'use strict';

var form = document.getElementById('carForm');
var table= document.getElementById('carTable');
var data= [];



function Car(make, model, year, new_car) {
  this.make=make;
  this.model=model;
  this.year=year;
  this.new_car=new_car;
}

function formData(event) {
  event.preventDefault();

  var make=event.target.make.value;
  var model=event.target.model.value;
  var year=event.target.year.checked;
  var new_car=event.target.new_car.value;

  data.push(new Car(make, model, year, new_car));
  createTable();
  form.reset();
}

function createTable() {
  var row;
for (var i = 0; i < data.length; i++) {
  row = document.createElement('tr');
  row.innerHTML = '<td>' + data[i].make + '</td>' +
    '<td>' + data[i].model + '</td>' +
    '<td>' + data[i].year + '</td>' +
    '<td>' + data[i].new_car + '</td>'
}

table.appendChild(row);
}

form.addEventListener('submit', formData);
