const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const emails = urlParams.get('emails');
document.getElementById("emails").innerHTML = decodeURIComponent(emails);