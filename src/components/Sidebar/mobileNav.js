import React from 'react'

function openMenu() {
    const hamburger = document.getElementById("nav-links");

    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
  }

export default openMenu;