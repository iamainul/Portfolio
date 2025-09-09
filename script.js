function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phone = "9532801786"; // your WhatsApp number
  const link = `https://wa.me/${phone}?text=${text}`;
  window.open(link, "_blank");
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formAction = "https://formsubmit.co/ainulhaq0003@gmail.com"; // your email
  const formData = new FormData(form);
  fetch(formAction, { method: "POST", body: formData })
    .then(() => { alert("Email sent successfully!"); form.reset(); })
    .catch(() => { alert("Failed to send email."); });
}
