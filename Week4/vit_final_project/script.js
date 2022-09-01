var commentBox = document.getElementById("addComment");
var commentPostButton = document.getElementById("addCommentButton");
var feedContainer = document.getElementById("feedContainer");
var signInBtn = document.getElementById("signInBtn");
var profilePic = document.getElementById("myProfile");
var subscribe = document.getElementById("emailBtn");
var emailInput = document.getElementById("userEmail");
var slides = document.querySelectorAll(".slide-ana>div");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var isLoggedIn = false;
var slideLength = slides.length;

for (var index = 0; index < slides.length; index++) {
  const element = slides[index];
  element.style.transform = "translateX(" + 100 * index + "%)";
}
var loop = 0 + 1000 * slideLength;

// Event Listeners
signInBtn.addEventListener("click", authHandler);
commentPostButton.addEventListener("click", addPostHandler);
subscribe.addEventListener("click", addEmail);
next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
commentPostButton.disabled = isLoggedIn;

function addPostHandler() {
  var postComment = commentBox.value;
  if (isLoggedIn) {
    var newComment = generatePostComment(postComment);
    feedContainer.prepend(newComment);
  } else {
    alert("Please Sign In to Post a Comment");
  }
  commentBox.value = "";
}

function addEmail() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.match(validRegex)) {
    createDiv();
    emailInput.value = "";
  } else {
    alert("Invalid email address! \n Please enter a valid email address!");
    emailInput.value = "";
  }
}

function authHandler() {
  var defaultAvatar = "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg";

  if (signInBtn.innerText === "Sign-In" && profilePic.src === defaultAvatar) {
    signInBtn.classList.replace("bg-green-800", "bg-orange-400");
    signInBtn.classList.replace("hover:bg-green-600", "hover:bg-orange-300");
    signInBtn.innerText = "Sign Out";
    profilePic.src = "https://www.pngall.com/wp-content/uploads/2/Chip-And-Dale-PNG-Image.png";
    isLoggedIn = true;
  } else {
    signInBtn.innerText = "Sign-In";
    signInBtn.classList.replace("bg-orange-400", "bg-green-800");
    signInBtn.classList.replace("hover:bg-orange-300", "hover:bg-green-600");
    profilePic.src = defaultAvatar;
    isLoggedIn = false;
  }
}

function generatePostComment(postComment) {
  var commentContainer = document.createElement("div");
  commentContainer.classList.add("w-full", "rounded", "shadow-lg", "bg-slate-200", "border-2", "border-solid", "border-black");
  var commentAuthor = document.createElement("p");
  commentAuthor.classList.add("font-bold", "text-xl", "pl-4");
  commentAuthor.innerText = "The Dark Knight";
  var commentBody = document.createElement("p");
  commentBody.classList.add("bg-white", "pl-8");
  commentBody.innerText = postComment;
  var commentTime = document.createElement("p");
  commentTime.classList.add("italic", "pl-8", "text-right", "text-sm", "pr-4");
  commentTime.innerText = `Posted On: ${new Date().toDateString("MMM dd, YYYY")}`;
  commentContainer.prepend(commentAuthor, commentBody, commentTime);
  return commentContainer;
}

function createDiv() {
  var footer = document.getElementById("footer");
  var subDiv = document.getElementById("subscribe");
  var alertDiv = document.createElement("div");
  var spanTag = document.createElement("span");
  var svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var titleTag = document.createElement("title");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  var alertClasses = ["flex", "justify-center", "items-center", "w-1/2", "h-16", "bg-red-100", "text-center", "border", "border-red-400", "text-red-700", "p-2", "rounded", "absolute", "-bottom-3/4"];
  var spanClasses = ["absolute", "top-0", "bottom-0", "right-0", "px-4", "py-3"];
  var svgClasses = ["fill-current", "h-6", "w-6", "text-red-500"];

  var subText = document.createTextNode(
    "You have successfully been added to our subscriber list!");
  var titleText = document.createTextNode("Close");

  svgTag.classList.add(...svgClasses);
  svgTag.setAttribute("viewbox", "0 0 20 20");
  svgTag.setAttribute("role", "button");
  path.setAttribute("d", "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z");
  spanTag.classList.add(...spanClasses);
  alertDiv.classList.add(...alertClasses);
  alertDiv.setAttribute("role", "alert");

  titleTag.appendChild(titleText);
  svgTag.appendChild(path);
  svgTag.appendChild(titleTag);
  spanTag.appendChild(svgTag);
  alertDiv.appendChild(spanTag);
  alertDiv.appendChild(subText);

  footer.insertBefore(alertDiv, subDiv);
}

function goNext() {
  loop++;
  for (var index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * (index - (loop % slideLength)) + "%)";
  }
}

function goPrev() {
  loop--;
  for (var index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * (index - (loop % slideLength)) + "%)";
  }
}
