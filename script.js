// form Submit
const form = document.querySelector('.news-form')

form.addEventListener("submit", async (evt)=>{
    evt.preventDefault(); 

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });

    if (response.ok) {
      alert("Thanks for subscribing! 📩");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
})