function findReactComponent(dom) {//finds the messagebox
    for (var key in dom)
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            return comp;
        }
    return null;
};
var inputComponent = findReactComponent(document.getElementsByClassName('block-compose')[0]); // get the react component for the chat input
var chat = inputComponent.props.chat;

// the date to which you are counting from today
var countDownDate = new Date("Oct 2, 2017 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	//sends the message every hour at 00
	if(minutes == 0 && seconds == 0){
    if(days >= 0){
      chat.sendMessage("▀▄ " + days + ":Days  " + hours + ":Hours▄▀");
      chat.sendMessage("✈ █ Some message █ ✈");
    }
  }
  // If the count down is finished, write some text
  /*if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "End of time :)";
  }*/
}, 1000);

chat.sendMessage("Script v3.6 is running have a nice day :)");
