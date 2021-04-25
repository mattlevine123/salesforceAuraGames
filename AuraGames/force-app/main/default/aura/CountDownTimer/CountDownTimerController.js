({
    startTimer : function(cmp, evt, hlp) {
        let countDownDate = new Date(cmp.get("v.endTime"));

        //update the countdown timer every 1 second
        let timer = setInterval(function(){

            //get todays date and time
            let now = new Date().getTime();

            let distance = countDownDate - now; 

            //time calculations for days, hours, minutes and seconds
            let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //display the result in the element with id = demo
            let timeLeft = hour + "h" + minutes + "m" + seconds + "s";
            cmp.set("v.timeLeft", timeLeft);
        }, 1000);
    }
})