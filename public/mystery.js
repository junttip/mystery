/**
 * Created by leppalaan on 17.7.2017.
 */

var mysteeriX = 9;
var i = 0;

function napinTehtava () {
    console.log(i);
    for(i=0; i<mysteeriX; i++) {
        document.getElementById(i).classList.remove("hidden");
    }
}
