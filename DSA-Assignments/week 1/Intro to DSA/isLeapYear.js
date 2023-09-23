function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function checkLeapYear() {
  const year = prompt("Please enter a year");
  if (!year) {
    prompt("Please enter a year");
    return;
  }
  return alert(isLeapYear(year) ? "Yes" : "No");
}

checkLeapYear();

// Time complexity: O(1)
// Space complexity: O(1)
