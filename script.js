function getFormvalue() {
    //Write your code here
	function getFormvalue(event) {
  event.preventDefault(); // Prevent form reload

  const firstName = document.forms["userForm"]["fname"].value.trim();
  const lastName = document.forms["userForm"]["lname"].value.trim();

  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
    return;
  }

  alert(`${firstName} ${lastName}`);
}

}
