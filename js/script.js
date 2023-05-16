// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This file contains the JS functions for index.html

const randomPositive = Math.floor(Math.random() * 6) + 1
const randomNegative = Math.floor(Math.random() * -6) + 1

/**
 * This function generates a random positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById('flash1').checked

  if (buttonOnChecked == true) {
    document.getElementById('button-value').innerHTML = 'The random number is: ' + randomPositive
  }
  else {
    document.getElementById('button-value').innerHTML = 'The random number is: ' + randomNegative
  }
}