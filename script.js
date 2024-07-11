document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cv-form');
    const cvPreviewContainer = document.getElementById('cv-preview-container');
    const cvPreview = document.getElementById('cv-preview');
    const downloadButton = document.getElementById('download-cv');
    const deletePictureButton = document.getElementById('delete-picture');
    const pictureInput = document.getElementById('picture');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateCV();
        cvPreviewContainer.style.display = 'block';
    });

    deletePictureButton.addEventListener('click', () => {
        pictureInput.value = '';
    });

    function generateCV() {
        const name = document.getElementById('name').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const picture = document.getElementById('picture').files[0];
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const personalWebsite = document.getElementById('personalWebsite').value;
        const linkedin = document.getElementById('linkedin').value;
        const github = document.getElementById('github').value;
        const languages = document.getElementById('languages').value;
        const skills = document.getElementById('skills').value;
        const aboutMe = document.getElementById('aboutMe').value;
        const fontStyle = document.getElementById('fontStyle').value;
        const fontSize = document.getElementById('fontSize').value + 'px';
        const bgColor = document.getElementById('bgColor').value;
        const fontColor = document.getElementById('fontColor').value;

        let pictureURL = "";
        if (picture) {
            pictureURL = URL.createObjectURL(picture);
        }

        let cvContent = `
            <div style="background-color: ${bgColor}; color: ${fontColor}; font-family: ${fontStyle}; font-size: ${fontSize};">
                <div class="two-columns">
                    <div>
                        ${pictureURL ? `<img src="${pictureURL}" alt="Profile Picture">` : ''}
                         ${phone ? `<p>Phone: ${phone}</p>` : ''}
                        ${email ? `<p>Email: ${email}</p>` : ''}
                    </div>
                    <div>
                        <h1>${name}</h1>
                        <h2>${jobTitle}</h2>
                       
                        ${address ? `<p>Address: ${address}</p>` : ''}
                        ${personalWebsite ? `<p>Website: ${personalWebsite}</p>` : ''}
                        ${linkedin ? `<p>LinkedIn: ${linkedin}</p>` : ''}
                        ${github ? `<p>GitHub: ${github}</p>` : ''}
                    </div>
                </div>
                ${languages ? `<h2>Languages</h2><p>${languages}</p>` : ''}
                ${skills ? `<h2>Skills</h2><p>${skills}</p>` : ''}
                ${aboutMe ? `<h2>About Me</h2><p>${aboutMe}</p>` : ''}
                ${getWorkExperience()}
                ${getProjects()}
                ${getEducation()}
                ${getCertifications()}
                ${getReferences()}
                ${getAdditionalFields()}
            </div>
        `;

        cvPreview.innerHTML = cvContent;
    }

    function getWorkExperience() {
        const workExperienceContainer = document.getElementById('work-experience-container');
        if (workExperienceContainer.children.length === 0) return '';
        let workExperiences = '<h2>Work Experience</h2>';
        workExperienceContainer.querySelectorAll('.work-experience').forEach(work => {
            const date = work.querySelector('.workDate').value;
            const companyName = work.querySelector('.companyName').value;
            const workTitle = work.querySelector('.workTitle').value;
            const workDetails = work.querySelector('.workDetails').value;
            workExperiences += `
                <p><strong>${date}</strong><br>
                ${companyName}<br>
                ${workTitle}<br>
                ${workDetails}</p>
            `;
        });
        return workExperiences;
    }

    function getProjects() {
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer.children.length === 0) return '';
        let projects = '<h2>Projects</h2>';
        projectsContainer.querySelectorAll('.project').forEach(project => {
            const projectTitle = project.querySelector('.projectTitle').value;
            const projectSkills = project.querySelector('.projectSkills').value;
            const projectDetails = project.querySelector('.projectDetails').value;
            projects += `
                <p><strong>${projectTitle}</strong><br>
                Skills Used: ${projectSkills}<br>
                ${projectDetails}</p>
            `;
        });
        return projects;
    }

    function getEducation() {
        const educationContainer = document.getElementById('education-container');
        if (educationContainer.children.length === 0) return '';
        let education = '<h2>Education</h2>';
        educationContainer.querySelectorAll('.education').forEach(edu => {
            const university = edu.querySelector('.university').value;
            const subject = edu.querySelector('.subject').value;
            const educationFromTo = edu.querySelector('.educationFromTo').value;
            const grade = edu.querySelector('.grade').value;
            education += `
                <p><strong>${university}</strong><br>
                Subject: ${subject}<br>
                From - To: ${educationFromTo}<br>
                Grade: ${grade}</p>
            `;
        });
        return education;
    }

    function getCertifications() {
        const certificationsContainer = document.getElementById('certifications-container');
        if (certificationsContainer.children.length === 0) return '';
        let certifications = '<h2>Certifications</h2>';
        certificationsContainer.querySelectorAll('.certification').forEach(cert => {
            const certificationTitle = cert.querySelector('.certificationTitle').value;
            const certificationDates = cert.querySelector('.certificationDates').value;
            const provider = cert.querySelector('.provider').value;
            certifications += `
                <p><strong>${certificationTitle}</strong><br>
                Dates: ${certificationDates}<br>
                Provider: ${provider}</p>
            `;
        });
        return certifications;
    }

    function getReferences() {
        const referencesContainer = document.getElementById('references-container');
        if (referencesContainer.children.length === 0) return '';
        let references = '<h2>References</h2>';
        referencesContainer.querySelectorAll('.reference').forEach(ref => {
            const referenceName = ref.querySelector('.referenceName').value;
            const referencePost = ref.querySelector('.referencePost').value;
            const referencePhone = ref.querySelector('.referencePhone').value;
            const referenceEmail = ref.querySelector('.referenceEmail').value;
            references += `
                <p><strong>${referenceName}</strong><br>
                ${referencePost}<br>
                Phone: ${referencePhone}<br>
                Email: ${referenceEmail}</p>
            `;
        });
        return references;
    }

    function getAdditionalFields() {
        const additionalFieldsContainer = document.getElementById('additional-fields-container');
        if (additionalFieldsContainer.children.length === 0) return '';
        let additionalFields = '<h2>Additional Fields</h2>';
        additionalFieldsContainer.querySelectorAll('.additional-field').forEach(field => {
            const additionalFieldTitle = field.querySelector('.additionalFieldTitle').value;
            const additionalFieldDetails = field.querySelector('.additionalFieldDetails').value;
            additionalFields += `
                <p><strong>${additionalFieldTitle}</strong><br>
                ${additionalFieldDetails}</p>
            `;
        });
        return additionalFields;
    }

    /*downloadButton.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');

        html2canvas(cvPreview).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 595.28;
            const pageHeight = 841.89;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;

            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            doc.save('1minutecv.pdf');
        });
    });*/

    downloadButton.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const cvPreview = document.getElementById('cv-preview');
    
        // Get dimensions of the preview element
        const previewWidthPx = cvPreview.offsetWidth;
        const previewHeightPx = cvPreview.offsetHeight;
    
        // Convert pixel dimensions to millimeters (assuming 96 DPI)
        const pxToMm = (px) => {
            const mmPerInch = 25.4;
            const dpi = 96;
            return (px * mmPerInch) / dpi;
        };
    
        const previewWidthMm = pxToMm(previewWidthPx);
        const previewHeightMm = pxToMm(previewHeightPx);
    
        html2canvas(cvPreview).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
    
            // Create a jsPDF document with the same dimensions as the preview
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [previewWidthMm, previewHeightMm]
            });
    
            doc.addImage(imgData, 'PNG', 0, 0, previewWidthMm, previewHeightMm);
            doc.save('cv.pdf');
        });
    });
    
    

    function addSection(containerId, className, html) {
        const container = document.getElementById(containerId);
        const section = document.createElement('div');
        section.classList.add(className);
        section.innerHTML = html;
        container.appendChild(section);
        container.style.display = 'block';
    }

    document.getElementById('add-work-experience').addEventListener('click', () => {
        addSection('work-experience-container', 'work-experience', `
            <div class="form-section">
                <label for="workDate">Date:</label>
                <input type="date" class="workDate" name="workDate">
            </div>
            <div class="form-section">
                <label for="companyName">Company Name / City / Country:</label>
                <input type="text" class="companyName" name="companyName">
            </div>
            <div class="form-section">
                <label for="workTitle">Title:</label>
                <input type="text" class="workTitle" name="workTitle">
            </div>
            <div class="form-section">
                <label for="workDetails">Details:</label>
                <textarea class="workDetails" name="workDetails"></textarea>
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.getElementById('add-project').addEventListener('click', () => {
        addSection('projects-container', 'project', `
            <div class="form-section">
                <label for="projectTitle">Title:</label>
                <input type="text" class="projectTitle" name="projectTitle">
            </div>
            <div class="form-section">
                <label for="projectSkills">Skills Used:</label>
                <input type="text" class="projectSkills" name="projectSkills">
            </div>
            <div class="form-section">
                <label for="projectDetails">Details:</label>
                <textarea class="projectDetails" name="projectDetails"></textarea>
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.getElementById('add-education').addEventListener('click', () => {
        addSection('education-container', 'education', `
            <div class="form-section">
                <label for="university">University:</label>
                <input type="text" class="university" name="university">
            </div>
            <div class="form-section">
                <label for="subject">Subject:</label>
                <input type="text" class="subject" name="subject">
            </div>
            <div class="form-section">
                <label for="educationFromTo">From - To:</label>
                <input type="text" class="educationFromTo" name="educationFromTo">
            </div>
            <div class="form-section">
                <label for="grade">Grade:</label>
                <input type="text" class="grade" name="grade">
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.getElementById('add-certification').addEventListener('click', () => {
        addSection('certifications-container', 'certification', `
            <div class="form-section">
                <label for="certificationTitle">Title:</label>
                <input type="text" class="certificationTitle" name="certificationTitle">
            </div>
            <div class="form-section">
                <label for="certificationDates">Issue Date - End Date:</label>
                <input type="text" class="certificationDates" name="certificationDates">
            </div>
            <div class="form-section">
                <label for="provider">Provider:</label>
                <input type="text" class="provider" name="provider">
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.getElementById('add-reference').addEventListener('click', () => {
        addSection('references-container', 'reference', `
            <div class="form-section">
                <label for="referenceName">Name:</label>
                <input type="text" class="referenceName" name="referenceName">
            </div>
            <div class="form-section">
                <label for="referencePost">Post / Company:</label>
                <input type="text" class="referencePost" name="referencePost">
            </div>
            <div class="form-section">
                <label for="referencePhone">Phone:</label>
                <input type="text" class="referencePhone" name="referencePhone">
            </div>
            <div class="form-section">
                <label for="referenceEmail">Email:</label>
                <input type="email" class="referenceEmail" name="referenceEmail">
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.getElementById('add-additional-field').addEventListener('click', () => {
        addSection('additional-fields-container', 'additional-field', `
            <div class="form-section">
                <label for="additionalFieldTitle">Field Title:</label>
                <input type="text" class="additionalFieldTitle" name="additionalFieldTitle">
            </div>
            <div class="form-section">
                <label for="additionalFieldDetails">Field Details:</label>
                <textarea class="additionalFieldDetails" name="additionalFieldDetails"></textarea>
            </div>
            <button type="button" class="delete-section">Delete</button>
        `);
    });

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('delete-section')) {
            const parent = e.target.parentElement;
            const container = parent.parentElement;
            parent.remove();
            if (container.children.length === 0) {
                container.style.display = 'none';
            }
        }
    });
});
