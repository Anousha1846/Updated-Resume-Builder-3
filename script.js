var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//initializing the variables
var resumeForm = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumeContent = document.getElementById("resumeContent");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeDateOfBirth = document.getElementById("resumeDateOfBirth");
var resumeEducationDegree = document.getElementById("resumeEducationDegree");
var resumeEducationInstitution = document.getElementById("resumeEducationInstitution");
var resumeEducationYear = document.getElementById("resumeEducationYear");
var resumeWorkExperienceJobTitle = document.getElementById("resumeWorkExperienceJobTitle");
var resumeWorkExperienceCompany = document.getElementById("resumeWorkExperienceCompany");
var resumeWorkExperienceDuration = document.getElementById("resumeWorkExperienceDuration");
var resumeSkillsProfessional = document.getElementById("resumeSkillsProfessional");
var resumeSkillsSoft = document.getElementById("resumeSkillsSoft");
var resumeSkillsMore = document.getElementById("resumeSkillsMore");
var editResume = document.getElementById("editResume");
var shareLinkButton = document.getElementById("shareLinkButton");
var downloadResumePDF = document.getElementById("downloadResumePDF");
resumeForm.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name1, email, phone, dateOfBirth, degree, institution, year, jobTitle, company, duration, professionalSkills, softSkills, addMoreSkills, photoInput, photoFile, photoBase64;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name1 = document.getElementById("name1").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                dateOfBirth = document.getElementById("dateofBirth").value;
                degree = document.getElementById("degree").value;
                institution = document.getElementById("institution").value;
                year = document.getElementById("year").value;
                jobTitle = document.getElementById("jobTitle").value;
                company = document.getElementById("company").value;
                duration = document.getElementById("duration").value;
                professionalSkills = document.getElementById("professionalSkills").value;
                softSkills = document.getElementById("softSkills").value;
                addMoreSkills = document.getElementById("addMoreSkills").value;
                photoInput = document.getElementById("photo");
                photoFile = photoInput.files ? photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                localStorage.setItem("resumePhoto", photoBase64);
                resumePhoto.src = photoBase64;
                _b.label = 2;
            case 2:
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumePage.classList.remove("hidden");
                // Add content and apply bold styling using class
                resumeName.textContent = name1;
                resumeEmail.innerHTML = "\uD83D\uDCE7 <span class=\"bold\">EMAIL ADDRESS:</span> ".concat(email);
                resumePhone.innerHTML = "\uD83D\uDCDE <span class=\"bold\">PHONE NO: </span> ".concat(phone);
                resumeDateOfBirth.innerHTML = "\uD83D\uDCC5 <span class=\"bold\">DATE OF BIRTH:</span> ".concat(dateOfBirth);
                // Education section
                resumeEducationDegree.innerHTML = "<span class=\"bold\">DEGREE:</span> ".concat(degree);
                resumeEducationInstitution.innerHTML = "<span class=\"bold\">INSTITUTION:</span> ".concat(institution);
                resumeEducationYear.innerHTML = "<span class=\"bold\">YEAR:</span> ".concat(year);
                // Work experience section
                resumeWorkExperienceJobTitle.innerHTML = "<span class=\"bold\">JOB TITLE:</span> ".concat(jobTitle);
                resumeWorkExperienceCompany.innerHTML = "<span class=\"bold\">COMPANY:</span> ".concat(company);
                resumeWorkExperienceDuration.innerHTML = "<span class=\"bold\">DURATION:</span> ".concat(duration);
                // Skills section
                resumeSkillsProfessional.innerHTML = "<span class=\"bold\">PROFESSIONAL SKILLS:</span> ".concat(professionalSkills);
                resumeSkillsSoft.innerHTML = "<span class=\"bold\">SOFT SKILLS:</span> ".concat(softSkills);
                resumeSkillsMore.innerHTML = "<span class=\"bold\">ADD MORE SKILLS:</span> ".concat(addMoreSkills);
                return [2 /*return*/];
        }
    });
}); });
//fileToBase64 function
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
