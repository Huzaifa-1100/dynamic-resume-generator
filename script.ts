// Function to add dynamic work experience fields
function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb?.insertBefore(newNode, weAddButtonOb);
}

// Function to add dynamic Academic qualification fields
function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "eqField", "mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let aqOb = document.getElementById("aq");
  let aqAddButton = document.getElementById("aqAddButton");

  aqOb?.insertBefore(newNode, aqAddButton);
}

// Function to add dynamic Skill fields
function addNewSsField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "ssFied", "mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let skOb = document.getElementById("skills");
  let ssAddButton = document.getElementById("ssAddButton");

  skOb?.insertBefore(newNode, ssAddButton);
}

// Validation function
function validateInput(id: string, message: string): boolean {
  const element = document.getElementById(id) as HTMLInputElement;
  if (!element || !element.value.trim()) {
    alert(`Please enter ${message}`);
    element?.focus();
    return false;
  }
  return true;
}

// Validate email format
function validateEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Main function to generate resume with validation
async function generateResume(): Promise<void> {
  // Validation checks
  if (!validateInput("nameField", "your name")) return;
  if (!validateInput("contactField", "contact number")) return;
  if (!validateInput("emailField", "your email")) return;

  const emailField = document.getElementById("emailField") as HTMLInputElement;
  if (emailField && !validateEmail(emailField.value)) {
    alert("Please enter a valid email address");
    emailField.focus();
    return;
  }

  // Get Elements from input fields
  const nameField = document.getElementById("nameField") as HTMLInputElement;
  const nameT1 = document.getElementById("nameT1") as HTMLElement;
  const nameT2 = document.getElementById("nameT2") as HTMLElement;

  // Push validated name
  if (nameField && nameT1 && nameT2) {
    nameT1.innerHTML = nameField.value;
    nameT2.innerHTML = nameField.value;
  }

  // Contact
  const contactField = document.getElementById("contactField") as HTMLInputElement;
  const contactT = document.getElementById("contactT") as HTMLElement;

  if (contactField && contactT) {
    contactT.innerHTML = contactField.value;
  }

  // Address
  const addressField = document.getElementById("addressField") as HTMLInputElement;
  const addressT = document.getElementById("addressT") as HTMLElement;

  if (addressField && addressT) {
    addressT.innerHTML = addressField.value;
  }

  // Email
  const emailT = document.getElementById("emailT") as HTMLElement;
  if (emailField && emailT) {
    emailT.innerHTML = emailField.value;
  }

  // Objective
  const objectiveField = document.getElementById("objectiveField") as HTMLInputElement;
  const objectiveT = document.getElementById("objectiveT") as HTMLElement;

  if (objectiveField && objectiveT) {
    objectiveT.innerHTML = objectiveField.value;
  }

  // Skills, Academic Qualifications, and Work Experience sections remain unchanged
  // Insert your existing logic here

  // Profile Image Handling and Form Display Toggle
  const photoInput = document.getElementById("imgField") as HTMLInputElement;
  const resumePhoto = document.getElementById("imgTemplate") as HTMLImageElement;
  const photofile = photoInput.files ? photoInput.files[0] : null;

  if (photofile) {
    const photoBase64 = await fileToBase(photofile);
    localStorage.setItem("imgTemplate", photoBase64);
    resumePhoto.src = photoBase64;
  }

  const cvForm = document.getElementById("cv-form") as HTMLElement | null;
  const cvTemplate = document.getElementById("cv-template") as HTMLElement | null;

  if (cvForm && cvTemplate) {
    cvForm.style.display = "none"; // Hide form
    cvTemplate.style.display = "block"; // Show template
  }
}

// Utility function to convert image to Base64
function fileToBase(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
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
  const cvForm = document.getElementById("cv-form") as HTMLElement | null;
  const cvTemplate = document.getElementById("cv-template") as HTMLElement | null;

  if (cvForm && cvTemplate) {
    cvForm.style.display = "block";
    cvTemplate.style.display = "none";
  }
}
