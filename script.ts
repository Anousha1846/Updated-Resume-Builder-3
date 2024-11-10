
//initializing the variables
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement ;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeDateOfBirth = document.getElementById("resumeDateOfBirth") as HTMLParagraphElement;
const resumeEducationDegree = document.getElementById("resumeEducationDegree") as HTMLParagraphElement;
const resumeEducationInstitution = document.getElementById("resumeEducationInstitution") as HTMLParagraphElement;
const resumeEducationYear = document.getElementById("resumeEducationYear") as HTMLParagraphElement;

const resumeWorkExperienceJobTitle = document.getElementById("resumeWorkExperienceJobTitle") as HTMLParagraphElement;
const resumeWorkExperienceCompany = document.getElementById("resumeWorkExperienceCompany") as HTMLParagraphElement;
const resumeWorkExperienceDuration = document.getElementById("resumeWorkExperienceDuration") as HTMLParagraphElement;

const resumeSkillsProfessional = document.getElementById("resumeSkillsProfessional") as HTMLParagraphElement;
const resumeSkillsSoft = document.getElementById("resumeSkillsSoft") as HTMLParagraphElement;
const resumeSkillsMore = document.getElementById("resumeSkillsMore") as HTMLParagraphElement;

const editResume = document.getElementById("editResume") as HTMLButtonElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;
const downloadResumePDF = document.getElementById("downloadResumePDF") as HTMLButtonElement;

resumeForm.addEventListener("submit", async (event:Event)=>{
    event.preventDefault()

//collecting the data
const name1 = (document.getElementById("name1") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const dateOfBirth = (document.getElementById("dateofBirth") as HTMLInputElement).value;
const degree = (document.getElementById("degree") as HTMLInputElement).value;
const institution = (document.getElementById("institution") as HTMLInputElement).value;
const year = (document.getElementById("year") as HTMLInputElement).value;
const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
const company = (document.getElementById("company") as HTMLInputElement).value;
const duration = (document.getElementById("duration") as HTMLInputElement).value;
const professionalSkills = (document.getElementById("professionalSkills") as HTMLInputElement).value;
const softSkills = (document.getElementById("softSkills") as HTMLInputElement).value;
const addMoreSkills = (document.getElementById("addMoreSkills") as HTMLInputElement).value;

//fetching photo
const photoInput = (document.getElementById("photo") as HTMLInputElement);
const photoFile = photoInput.files? photoInput.files[0]:null;

let photoBase64 = '';

//personal information
if(photoFile){
    photoBase64 = await fileToBase64(photoFile);
    localStorage.setItem("resumePhoto", photoBase64);
    resumePhoto.src = photoBase64;
}
document.querySelector(".container")?.classList.add("hidden");
resumePage.classList.remove("hidden");
// Add content and apply bold styling using class
resumeName.textContent = name1;
resumeEmail.innerHTML = `📧 <span class="bold">EMAIL ADDRESS:</span> ${email}`;
resumePhone.innerHTML = `📞 <span class="bold">PHONE NO: </span> ${phone}`;
resumeDateOfBirth.innerHTML = `📅 <span class="bold">DATE OF BIRTH:</span> ${dateOfBirth}`;

// Education section
resumeEducationDegree.innerHTML = `<span class="bold">DEGREE:</span> ${degree}`;
resumeEducationInstitution.innerHTML = `<span class="bold">INSTITUTION:</span> ${institution}`;
resumeEducationYear.innerHTML = `<span class="bold">YEAR:</span> ${year}`;

// Work experience section
resumeWorkExperienceJobTitle.innerHTML = `<span class="bold">JOB TITLE:</span> ${jobTitle}`;
resumeWorkExperienceCompany.innerHTML = `<span class="bold">COMPANY:</span> ${company}`;
resumeWorkExperienceDuration.innerHTML = `<span class="bold">DURATION:</span> ${duration}`;

// Skills section
resumeSkillsProfessional.innerHTML = `<span class="bold">PROFESSIONAL SKILLS:</span> ${professionalSkills}`;
resumeSkillsSoft.innerHTML = `<span class="bold">SOFT SKILLS:</span> ${softSkills}`;
resumeSkillsMore.innerHTML = `<span class="bold">ADD MORE SKILLS:</span> ${addMoreSkills}`;


})

//fileToBase64 function
function fileToBase64(file:File):Promise<string>{
    return new Promise((resolve,reject)=>{
        const reader = new FileReader()
        reader.onload= () =>resolve(
            reader.result as string
        )
        reader.onerror = reject;
        reader.readAsDataURL(file)
    })
}



