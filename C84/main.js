function my_keydown(e)
{
    keyPressed = e.KeyCode;
    console.log(keyPressed);
    if((keyPressed>=97&&keyPressed<=122)||(keyPressed>=65&&keyPressed<=90)){
    alphabetkey();
    document.getElementById("d1").innerHTML="You pressed Alphabet Key";
    console.log("alphabetkey");
    }
}
function alphabetkey(){
    img_image="Alpkey.png";
    add();
}