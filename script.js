var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}

var randomSolution = [
  "The highest efficient way of escaping away from the control of tech moguls is deleting all social apps on your phone. Even though it might sounds very difficult to do so, you will benefit much once you make such a decision. Before you delete the apps, you can notify all your friends about your leave and tell them about alternative ways of reaching you. Then, just DELETE APPS. It might be difficult to adjust to such a change in the beginning, but if you can overcome the uneasiness in the first month, you will be good. Remember, social media is not the huge portion of your life. You can do this. ",

  "Social media brings you much joy on internet, so why don’t reality? Beyond scrolling the phone and viewing information, we can also develop our new hobbies in real life. To get rid of the control of those tech moguls, you can find something new to play with. Maybe try reading books that you wanted to read, playing with your pets, and going outside. Discovering new hobbies and achieving some goals would make you feel you can do anything. ",

  "For many of the times, you did not play social media intentionally. Instead, the trigger that caused you to open social media apps might be a sudden short spare time or the frustration from your work. Your normal habit to deal with these situations would be opening social media apps and play for a long time that you did not realize. Therefore, in order to escape the condition of being programmed by the social media, we can develop our awareness of our situations. We can practice meditation to increase our awareness sensibility. By realizing that we are playing the phone due to a typical situation, we would develop the power to face that situation rather than passively use social media to escape from reality. ",

  "A practical way of avoiding social media control is turning off notifications. For many times, it is the notifications that caused us to stop our ongoing task and open the social media. However, most of the notifications from social media is news that telling what is going on right now in the world, which is not highly relevant to our daily activities. Therefore, you can turn off the notifications on social media to help you concentrate more on your own task. "
];

var executeButton;
var outputLines;
var inputElement;

document.addEventListener("DOMContentLoaded", function(){

  executeButton = document.getElementById("executeButton");
  outputLines = document.getElementById("outputText");
  inputElement = document.getElementById("Input");

  executeButton.addEventListener("click", function(){
    generateLine();
  });
});

function generateLine(){
  var currentInputText = inputElement.value;
  var randomLineIndex = Math.floor(Math.random()*randomSolution.length);
  outputLines.innerText = currentInputText + " " + ", here is your receipe:" + " " + randomSolution[randomLineIndex];
  newstyleOutput();
}
