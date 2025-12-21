function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value  
    }
    emailjs.send("service_riodep5","template_n48rkyl",parms).then(alert("Email sent successfully!"))

}
 function loadall() {
            const fadeUpElements = document.querySelectorAll('.fade-up-element,.fade-right-element');
            
            // Create Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // Animate skill bars when they become visible
                        if (entry.target.classList.contains('skill')) {
                            const progressBar = entry.target.querySelector('.progress-bar');
                            if (progressBar && progressBar.getAttribute('data-width')) {
                                const width = progressBar.getAttribute('data-width');
                                setTimeout(() => {
                                    progressBar.style.width = width;
                                }, 300);
                            }
                        }
                        
                        // Stop observing after animation is triggered
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -50px 0px' // Adjust trigger point slightly
            });
            
            // Observe all fade-up elements
            fadeUpElements.forEach(element => {
                observer.observe(element);
            });            
}
// Loading animation
document.addEventListener('DOMContentLoaded', async () => {
try {
    const [homeRes,aboutRes,qualityRes,serviceRes,skillRes, projectRes] = await Promise.all([
      fetch('./jsons/home.json').then(r => r.json()),
      fetch('./jsons/about.json').then(r => r.json()),
      fetch('./jsons/quality.json').then(r => r.json()),
      fetch('./jsons/services.json').then(r => r.json()),
      fetch('./jsons/skills.json').then(r => r.json()),
      fetch('./jsons/projects.json').then(r => r.json())
    ]);
    document.getElementById('about_para').innerHTML = aboutRes.about_para;
    document.getElementById('degree').innerHTML = aboutRes.degree;
    document.getElementById('experience').innerHTML = aboutRes.experience;
    document.getElementById('freelance').innerHTML = aboutRes.freelance;
    let qualitycontent = '';
    qualityRes.education.forEach(item => {
      qualitycontent += `
        <div class="position-relative mb-4">
        <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
        <h5 class="font-weight-bold mb-1 fade-up-element delay-2">${item.degrees}</h5>
        <p class="mb-2 fade-up-element delay-3"><strong>${item.institution}</strong> | <small>${item.year}</small></p>
        <p class=" fade-up-element delay-4">${item.description}</p>
                        </div>
    `;
    });
    document.getElementById('education').innerHTML = qualitycontent;
    qualitycontent = '';
    qualityRes.my_exp.forEach(item => {
      qualitycontent += `
        <div class="position-relative mb-4">
        <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
        <h5 class="font-weight-bold mb-1 fade-up-element delay-2">${item.title}</h5>
        <p class="mb-2 fade-up-element delay-3"><strong>${item.organization}</strong> | <small>${item.year}</small></p>
        <p class=" fade-up-element delay-4">${item.description}</p>
                        </div>
    `;
    });
    document.getElementById('my_exp').innerHTML = qualitycontent;
    let skillcontent = '';
    let skillcontent1 = '<div class="col-md-6">';
    let skillcontent2 = '<div class="col-md-6">';
    for(let i=0;i<skillRes.my_skills.length;i++){
        const item = skillRes.my_skills[i];
        const textContent = `
         <div class="skill mb-4 fade-up-element delay-${(i%4)+1}">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">${item.name}</h6>
                        <h6 class="font-weight-bold">${item.proficiency}%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar"
                            style="width: 0%;" data-width="${item.proficiency}%" aria-valuenow="${item.proficiency}" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
        </div>
        `;
        if(i%2){

            skillcontent2 += textContent;
        }
        else{
            skillcontent1 += textContent;
        }
    }
    skillcontent1 += '</div>';
    skillcontent2 += '</div>';
    skillcontent = skillcontent1 + skillcontent2;
    document.getElementById('my_skills').innerHTML = skillcontent;
    let servicecontent = '';
    for(let i=0;i<serviceRes.my_services.length;i++){
        const item = serviceRes.my_services[i];
      servicecontent += `
        <div class="col-lg-4 col-md-6 text-center mb-5 fade-up-element delay-${(i%3)+1}">
                    <div class="d-flex align-items-center justify-content-center mb-4 ">
                        <i class="${item.icon} service-icon bg-primary text-white mr-3"></i>

                        <h4 class="font-weight-bold m-0 fade-right-element delay-${(i%3)+2}">${item.title}</h4>
                    </div>
                    <p class="fade-up-element delay-${(i%3)+2}">${item.description}</p>
        </div>
        `;
}
document.getElementById('my_services').innerHTML = servicecontent;
let projectcontent = '';
for(let i=0;i<projectRes.my_projects.length;i++){
    const item = projectRes.my_projects[i];
  projectcontent += `
    <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
        <div class="position-relative overflow-hidden mb-2 fade-up-element delay-${(i%3)+1}">
            <img class="img-fluid rounded w-100" src="${item.image}" alt="">
            <div class="portfolio-btn bg-primary1 d-flex align-items-center justify-content-center">
                    <a href="${item.link}" 
                    class="text-white" 
                    style="font-size: 60px;"
                    target="_blank">
                    <i class="fab fa-github"></i>
                    </a>
            </div> 
        </div>
        <p style="color: white; font-size: 24px; font-family: 'Schoolbell', cursive; " class="fade-up-element delay-${(i%3)+2}">${item.description}</p>
    </div>
    `;
}
document.getElementById('my_projects').innerHTML = projectcontent;
    loadall();
    } catch (error) {
    console.error('Error loading JSON:', error);
  }
});
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loadingText = document.querySelector('.loading-text');
    const phrases = ["Loading...", "Initializing...", "Almost there...", "!!!...Welcome...!!!"];
    let currentPhrase = 0;
    
    // Animate text changes
    const textInterval = setInterval(() => {
        loadingText.style.opacity = 0;
        setTimeout(() => {
            loadingText.textContent = phrases[currentPhrase];
            loadingText.style.opacity = 1;
            currentPhrase = (currentPhrase + 1) % phrases.length;
        }, 350);
    }, 800);
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        clearInterval(textInterval);
        loading.classList.add('fade-out');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 4000);
});
