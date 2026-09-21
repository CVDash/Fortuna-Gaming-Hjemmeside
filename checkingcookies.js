 function clearOutputDoOnce() {
    const output = document.getElementById("do-once");
    output.textContent = "";
  }

  function resetOnce() {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie =
      "cookierememberclose=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
  
    const output = document.getElementById("reset-once");
    output.textContent = "> Reset!";
  }
  
  function clearOutputResetOnce() {
    const output = document.getElementById("reset-once");
    output.textContent = "";
  }




function checkACookieExists() {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("cookierememberclose="))
  ) {
    const output = document.getElementById("a-cookie-existence");
    output.textContent = '> The cookie exists';
  } else {
    const output = document.getElementById("a-cookie-existence");
    output.textContent = '> The cookie does not exist';
  }
}

function clearOutputACookieExists() {
  const output = document.getElementById("a-cookie-existence");
  output.textContent = "";
}





function clearASpecificValueOfTheCookie() {
  const output = document.getElementById("a-specific-value-of-the-cookie");
  output.textContent = "";
} 