const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tel = urlParams.get('tel');
document.getElementById("tel").innerHTML = tel;