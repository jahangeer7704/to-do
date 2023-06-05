document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
  
 Appinit()
    
  }
});


const Appinit=()=>{

  let input = document.getElementById("input");
  let ul = document.getElementById("ul");
  let save = document.getElementsByClassName("save");
  let body = document.getElementsByTagName("body");

  //dynamic element when user click on save button without any content
  //alert on the center page
  let alerts = document.createElement("div");

  alerts.className = "alert";
  alerts.style.cssText =
    "position:absolute;top:40%;left:50%;transform:translate(-50% ,-50%);filter:blur(-20px);";
  alerts.innerHTML = "There Is Nothing To Save";
  //save button help to sav ethe Job in the input feild
  save[0].addEventListener("click", () => {
    if (input.value == "") {
      alerts.style.display = "flex";
      body[0].append(alerts);
      //blur the body when alert exist
      body[0].children[1].style.cssText = "filter:blur(20px)";

      body[0].children[0].style.cssText = "filter:blur(20px)";
      alertf();
    }
    //when there is a content i crate li and a div and a span and pushes content of input into div
    //then the li is appended on the ul
    else {
      let li = document.createElement("li");
      li.className = "li";
      let div = document.createElement("div");
      let span = document.createElement("span");

      span.innerHTML = "X";
      div.innerHTML = input.value;

      li.append(div);
      li.append(span);
      ul.append(li);
      input.value = "";
      saver();
    }
  });
  //when user click on that dynamic alert tag it make that to display none and remove body blur
  const alertf = () => {
    alerts.addEventListener("click", () => {
      alerts.style.display = "none";
      body[0].children[1].style.cssText = "filter:blur(0px)";

      body[0].children[0].style.cssText = "filter:blur(0px)";
    });
  };
  //when user click on div or span element make the li-img tag toggle
  //when user clicks on span it make parent element(li) is removed
  ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI" || event.target.tagName === "DIV") {
      if (event.target.tagName === "DIV") {
        event.target.parentElement.classList.toggle("li-img");
        saver();
      }
      event.target.classList.toggle("li-img");
      saver();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saver();
    }
  });
  //using localstaorage i can save the value of user according to their state
  //when user add ,remove ,check like data are stored
  //this storage type is local storage
  const saver = () => {
    localStorage.setItem("values", ul.innerHTML);
  };
  //here the content are retrived when the page is reloaded or login again
  const shows = () => {
    ul.innerHTML = localStorage.getItem("values");
  };
  shows();

}