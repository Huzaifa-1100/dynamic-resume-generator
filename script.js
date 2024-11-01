"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to add dynamic work experience fields
function addNewWeField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb === null || weOb === void 0 ? void 0 : weOb.insertBefore(newNode, weAddButtonOb);
}
// Function to add dynamic Academic qualification fields
function addNewAqField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let aqOb = document.getElementById("aq");
    let aqAddButton = document.getElementById("aqAddButton");
    aqOb === null || aqOb === void 0 ? void 0 : aqOb.insertBefore(newNode, aqAddButton);
}
// Function to add dynamic Skill fields
function addNewSsField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "ssFied", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let skOb = document.getElementById("skills");
    let ssAddButton = document.getElementById("ssAddButton");
    skOb === null || skOb === void 0 ? void 0 : skOb.insertBefore(newNode, ssAddButton);
}
// Validation function
function validateInput(id, message) {
    const element = document.getElementById(id);
    if (!element || !element.value.trim()) {
        alert(`Please enter ${message}`);
        element === null || element === void 0 ? void 0 : element.focus();
        return false;
    }
    return true;
}
// Validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Main function to generate resume with validation
function generateResume() {
    return __awaiter(this, void 0, void 0, function* () {
        // Validation checks
        if (!validateInput("nameField", "your name"))
            return;
        if (!validateInput("contactField", "contact number"))
            return;
        if (!validateInput("emailField", "your email"))
            return;
        const emailField = document.getElementById("emailField");
        if (emailField && !validateEmail(emailField.value)) {
            alert("Please enter a valid email address");
            emailField.focus();
            return;
        }
        // Get Elements from input fields
        const nameField = document.getElementById("nameField");
        const nameT1 = document.getElementById("nameT1");
        const nameT2 = document.getElementById("nameT2");
        // Push validated name
        if (nameField && nameT1 && nameT2) {
            nameT1.innerHTML = nameField.value;
            nameT2.innerHTML = nameField.value;
        }
        // Contact
        const contactField = document.getElementById("contactField");
        const contactT = document.getElementById("contactT");
        if (contactField && contactT) {
            contactT.innerHTML = contactField.value;
        }
        // Address
        const addressField = document.getElementById("addressField");
        const addressT = document.getElementById("addressT");
        if (addressField && addressT) {
            addressT.innerHTML = addressField.value;
        }
        // Email
        const emailT = document.getElementById("emailT");
        if (emailField && emailT) {
            emailT.innerHTML = emailField.value;
        }
        // Objective
        const objectiveField = document.getElementById("objectiveField");
        const objectiveT = document.getElementById("objectiveT");
        if (objectiveField && objectiveT) {
            objectiveT.innerHTML = objectiveField.value;
        }
        // Skills, Academic Qualifications, and Work Experience sections remain unchanged
        // Insert your existing logic here
        // Profile Image Handling and Form Display Toggle
        const photoInput = document.getElementById("imgField");
        const resumePhoto = document.getElementById("imgTemplate");
        const photofile = photoInput.files ? photoInput.files[0] : null;
        if (photofile) {
            const photoBase64 = yield fileToBase(photofile);
            localStorage.setItem("imgTemplate", photoBase64);
            resumePhoto.src = photoBase64;
        }
        const cvForm = document.getElementById("cv-form");
        const cvTemplate = document.getElementById("cv-template");
        if (cvForm && cvTemplate) {
            cvForm.style.display = "none"; // Hide form
            cvTemplate.style.display = "block"; // Show template
        }
    });
}
// Utility function to convert image to Base64
function fileToBase(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
// Print Resume Function
function printCV() {
    window.print();
}
// Edit Resume Function
function editCV() {
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    if (cvForm && cvTemplate) {
        cvForm.style.display = "block";
        cvTemplate.style.display = "none";
    }
}
