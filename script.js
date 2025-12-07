function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value  
    }
    emailjs.send("service_riodep5","template_n48rkyl",parms).then(alert("Email sent successfully!"))

}
document.addEventListener('DOMContentLoaded', function() {
            const fadeUpElements = document.querySelectorAll('.fade-up-element');
            
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
});
