// add dynamic work experience fields
function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb?.insertBefore(newNode, weAddButtonOb);
}

// add dynamic Academic qualification fields
function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let aqOb = document.getElementById("aq");
  let aqAddButton = document.getElementById("aqAddButton");

  aqOb?.insertBefore(newNode, aqAddButton);
}

// add dynamic Skill fields
function addNewSsField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ssFied");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter here...");

  let skOb = document.getElementById("skills");
  let ssAddButton = document.getElementById("ssAddButton");

  skOb?.insertBefore(newNode, ssAddButton);
}

async function generateResume(): Promise<void> {
  // Get Elements from input fields
  const nameField = document.getElementById("nameField") as HTMLInputElement;

  // Get template object for nameT1
  const nameT1 = document.getElementById("nameT1") as HTMLElement;
  // Get template object for nameT2
  const nameT2 = document.getElementById("nameT2") as HTMLElement;

  // Check if both elements are found
  if (nameField && nameT1 && nameT2) {
    // Push the value from the input field into the template
    nameT1.innerHTML = nameField.value;
    nameT2.innerHTML = nameField.value;
  } else {
    console.error(
      "Element not found: Ensure 'nameField' and 'nameT1' exist in the DOM."
    );
  }

  // Contact
  // Get value from contact field
  const contactField = document.getElementById(
    "contactField"
  ) as HTMLInputElement;
  // Get template object for contact
  const contactT = document.getElementById("contactT") as HTMLElement;

  // Check if both elements are found
  if (contactField && contactT) {
    // Push the value from the input field into the template
    contactT.innerHTML = contactField.value;
  } else {
    console.error(
      "Element not found: Ensure 'contactField' and 'contactT' exist in the DOM."
    );
  }

  //   Address
  // Get velue from address field
  const addressField = document.getElementById(
    "addressField"
  ) as HTMLInputElement;
  // get template object for address
  const addressT = document.getElementById("addressT") as HTMLElement;

  // Check if both elements are found
  if (addressField && addressT) {
    // Push the value from the input field into the template
    addressT.innerHTML = addressField.value;
  } else {
    console.error(
      "Element not found: Ensure `addressField` and `addressT` exist in the DOM."
    );
  }

  //   FaceBook Link
  // Get velue from address field
  const fbField = document.getElementById("fbField") as HTMLInputElement;
  // get template object for address
  const fbT = document.getElementById("fbT") as HTMLElement;

  //   Check if both elements are found
  if (fbField && fbT) {
    // Push the value from the input field into the template
    fbT.innerHTML = fbField.value;
  } else {
    console.error(
      "Element not found: Ensure `fbField` and `fbT` exist in the DOM."
    );
  }

  //   Email Link
  // Get velue from Instagram field
  const emailField = document.getElementById("emailField") as HTMLInputElement;
  // get template object for Instagram link
  const emailT = document.getElementById("emailT") as HTMLElement;

  //   Check if both elements are found
  if (emailField && emailT) {
    // Push the value from the input field into the template
    emailT.innerHTML = emailField.value;
  } else {
    console.error(
      "Element not found: Ensure `instaField` and `instaT` exist in the DOM."
    );
  }

  //   Linkedin Link
  // Get velue from Linkedin field
  const linkedField = document.getElementById(
    "linkedField"
  ) as HTMLInputElement;
  // get template object for Linkedin link
  const linkedT = document.getElementById("linkedT") as HTMLElement;

  //   Check if both elements are found
  if (linkedField && linkedT) {
    // Push the value from the input field into the template
    linkedT.innerHTML = linkedField.value;
  } else {
    console.error(
      "Element not found: Ensure `linkedField` and `linkedT` exist in the DOM."
    );
  }

  //   Objective
  // Get value form objective field element
  const objectiveField = document.getElementById(
    "objectiveField"
  ) as HTMLInputElement;
  // Get Template object for objective
  const objectiveT = document.getElementById("objectiveT") as HTMLElement;

  // check if both elements are found
  if (objectiveField && objectiveT) {
    // Push the value from the input field into the template
    objectiveT.innerHTML = objectiveField.value;
  } else {
    console.error(
      "Element not found: Ensure `objectiveField` and `objectiveT` exist in the DOM."
    );
  }

  //   Work Experience

  // Get all elements with the class "weField" (input or textarea fields)
  const weFields = document.getElementsByClassName(
    "weField"
  ) as HTMLCollectionOf<HTMLInputElement | HTMLTextAreaElement>;

  // Initialize an empty string to store the list items
  let str: string = "";

  // Iterate through each element in the HTMLCollection
  for (const e of Array.from(weFields)) {
    // Append the value of each field as a list item to the string
    str += `<li> ${e.value} </li>`;
  }

  // Find the element with the ID "weT" and update its innerHTML
  const weT = document.getElementById("weT") as HTMLElement | null;

  if (weT) {
    weT.innerHTML = str; // Update the innerHTML if the element exists
  } else {
    console.error('Element with ID "weT" not found.');
  }

  //   Academic Qualification

  // Get all elements with the class "eqField" (input or textarea fields)
  const eqField = document.getElementsByClassName(
    "eqField"
  ) as HTMLCollectionOf<HTMLInputElement | HTMLTextAreaElement>;

  // Initialize an empty string to store the list items
  let strAq: string = "";

  // Iterate through each element in the HTMLCollection
  for (const e of Array.from(eqField)) {
    // Append the value of each field as a list item to the string
    strAq += `<li> ${e.value} </li>`;
  }
  // Find the element with the ID "aqT" and update its innerHTML
  const aqT = document.getElementById("aqT") as HTMLElement;
  if (aqT) {
    aqT.innerHTML = strAq; // Update the innerHTML if the element exists
  } else {
    console.error('Element with ID "aqT" not found.');
  }

  //   Skills Section

  // Get all elements with the class "ssFied" (input or textarea fields)
  const ssFied = document.getElementsByClassName("ssFied") as HTMLCollectionOf<
    HTMLInputElement | HTMLTextAreaElement
  >;
  // Initialize an empty string to store the list items
  let strSkills: string = "";
  // Iterate through each element in the HTMLCollection
  for (const e of Array.from(ssFied)) {
    // Append the value of each field as a list item to the string
    strSkills += `<li> ${e.value} </li>`;
  }
  // Find the element with the ID "skillsT" and update its innerHTML
  const skillsT = document.getElementById("skillsT") as HTMLElement;
  if (skillsT) {
    skillsT.innerHTML = strSkills; // Update the innerHTML if the element exists
  } else {
    console.error('Element with ID "skillsT" not found.');
  }

  // Code for setting the profile image
  // Get the image input field (photoInput) from the DOM and cast it to HTMLInputElement
  const photoInput = document.getElementById("imgField") as HTMLInputElement;

  // Get the image element (resumePhoto) where the uploaded image will be displayed
  const resumePhoto = document.getElementById(
    "imgTemplate"
  ) as HTMLImageElement;

  // Check if a file is selected in the input field. If yes, get the first file; otherwise, set to null
  const photofile = photoInput.files ? photoInput.files[0] : null;

  // Initialize an empty string to store the base64 representation of the image
  let photoBase64 = "";

  // If a photo is selected (photofile is not null)
  if (photofile) {
    photoBase64 = await fileToBase(photofile);
    localStorage.setItem("imgTemplate", photoBase64);
    resumePhoto.src = photoBase64;
  }

  /**
   * Converts a file (image) to a Base64 string using FileReader.
   * @param file - The image file to be converted.
   * @returns A Promise that resolves to a Base64 string.
   */

  function fileToBase(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // On successful file read, resolve the promise with the Base64 string
      reader.onload = () => resolve(reader.result as string);

      // If an error occurs during file reading, reject the promise
      reader.onerror = reject;

      // Start reading the file as a Data URL (Base64 encoded string)
      reader.readAsDataURL(file);
    });
  }

  // Toggle cv form and cv template options
  // Get the form and template elements by their IDs
  const cvForm = document.getElementById("cv-form") as HTMLElement | null;
  const cvTemplate = document.getElementById(
    "cv-template"
  ) as HTMLElement | null;

  // Check if the elements exist before accessing their style properties
  if (cvForm && cvTemplate) {
    cvForm.style.display = "none"; // Hide the CV form
    cvTemplate.style.display = "block"; // Show the CV template
  } else {
    console.error("One or both elements (cv-form or cv-template) not found.");
  }
}

// Funciton to print resum

function printCV() {
  window.print();
}

// function to edit resume

function editCV() {
  // Get the form and template elements by their IDs
  const cvForm = document.getElementById("cv-form") as HTMLElement | null;
  const cvTemplate = document.getElementById(
    "cv-template"
  ) as HTMLElement | null;

  // Check if the elements exist before accessing their style properties
  if (cvForm && cvTemplate) {
    cvForm.style.display = "block"; // Show the CV form
    cvTemplate.style.display = "none"; // Hide the CV template
  } else {
    console.error("One or both elements (cv-form or cv-template) not found.");
  }
}
