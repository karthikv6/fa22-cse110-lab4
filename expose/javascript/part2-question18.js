function printNumbers() {

    let timerId = setInterval(function() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
    },1000);
}
  

printnumbers();
  