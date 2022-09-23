const form = document.querySelector("#myForm");
async function handleSubmit(e) {
  e.preventDefault();

  const FORMPREE= 'https://formspree.io/f/mrgrqvbe';

  const status = document.querySelector("#my-form-status");
  const data = new FormData(e.target);
  fetch(FORMPREE, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset();
      status.type='text';
    status.value = "Thanks for your submission!";
  }).catch(error => {
    status.type='text';
    status.value = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
// background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
function happen(result) {
  if(result.checked){
    document.querySelector('#backgrounds').classList.remove('background-dark');
    document.querySelector('#backgrounds').classList.add('background-bright');
  }else{
    document.querySelector('#backgrounds').classList.remove('background-bright');
    document.querySelector('#backgrounds').classList.add('background-dark');
  }
}
