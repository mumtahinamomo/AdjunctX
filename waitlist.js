document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waitlistForm");
    const formMessage = document.getElementById("formMessage");
  
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
  
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const role = form.role.value;
  
        formMessage.textContent = "Submitting...";
  
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxi7KLgKabKHRDvTCYCngyjTQmWJ2MrR0d2x9_MWglCP8FjUzaNMrWOwAT707pJ7kiD/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, role })
          });
  
          form.reset();
          formMessage.textContent = "Successfully received! You're on the AdjunctX waitlist.";
        } catch (error) {
          console.error("Error submitting form:", error);
          formMessage.textContent = "Network error. Please check your connection and try again.";
        }
    });
  }
});
  