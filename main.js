document.getElementById("wa").addEventListener('click',(event) => {
    event.preventDefault();
    let message ="Hello Cyber Lord, I’d love to collaborate with you! Let’s create something amazing. 😎"
    let whatsappUrl = "https://wa.me/2349068321361?text=" + encodeURIComponent(message);
    window.location.href= whatsappUrl;
  })