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
// Loading animation
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loadingText = document.querySelector('.loading-text');
    const phrases = ["Loading...", "Initializing...", "Almost there...", "Welcome!"];
    let currentPhrase = 0;
    
    // Animate text changes
    const textInterval = setInterval(() => {
        loadingText.style.opacity = 0;
        setTimeout(() => {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            loadingText.textContent = phrases[currentPhrase];
            loadingText.style.opacity = 1;
        }, 300);
    }, 800);
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        clearInterval(textInterval);
        loading.classList.add('fade-out');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loading.style.display = 'none';
            // Trigger any animations that should start after page load
            // const fadeElements = document.querySelectorAll('.fade-up-element');
            // fadeElements.forEach(el => {
            //     el.classList.add('visible');
            // });
        }, 500);
    }, 2000);
});
