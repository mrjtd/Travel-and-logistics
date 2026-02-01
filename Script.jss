// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const quoteTabs = document.querySelectorAll('.quote-tab');
const quoteForm = document.getElementById('quoteForm');
const quoteResult = document.getElementById('quoteResult');
const trackingForm = document.querySelector('.tracking-form');
const trackBtn = document.getElementById('trackBtn');
const trackingResult = document.getElementById('trackingResult');
const trackingNumberInput = document.getElementById('trackingNumber');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classL
