//function for opening nav
function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.height = "100%";
			//document.body.style.backgroundColor = "green";
		} else {
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 

//function for opening nav
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.height = "0%";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.height = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 


//function for features tab
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("features-item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//function for frequently asked questions
function openFaq(evnt, faqName) {
	var i, faqanswer, faqheader;
	faqanswer = document.getElementsByClassName("faq-answer");
	for (i = 0; i < faqanswer.length; i++) {
		faqanswer[i].style.display = "none";
	}

	faqheader = document.getElementsByClassName("faq-header");
	for (i = 0; i < faqheader.length; i++ ) {
		faqheader[i].className = faqheader[i].className.replace(" active", "");
	}

	document.getElementById(faqName).style.display =  "block";
	evnt.currentTarget.className += " active";
}

//form validation
const email = document.getElementById("email");
const error = document.querySelector(".error");
function validate() {
	var isError = false;
	var errMessage = '';
	if (email.value === "" || email.value.match(/.*\@.*\.\w{2,3}/g) === null){
    isError = true;
    errMessage += "Whoops! Make sure its an email";
  }
  if (isError) {
    error.textContent = errMessage;
		error.style.backgroundColor = "#fa5757";
		email.style.border = "1px solid #fa5757";
    email.style.color = "#fa5757";
		email.classList.add("input-icon");
    return false;
  } else {
		email.style.color = "none";
		email.value = "";
		email.classList.remove("input-icon");
		email.style.border = "";
		error.textContent = "your submission has been received";
		error.style.backgroundColor = "green";
    return true;
  }
}