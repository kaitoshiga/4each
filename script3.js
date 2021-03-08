//-----問１-----//
document.write("■■■");
document.write("問1");
document.write("■■■");
document.write("<br>");
document.write("<br>");

var star1 = "★☆★☆★"; star2 = "☆★☆★☆";
for (var i=1; i<=1; i++) {
    for (var j=0; j<=4; j++) {
        if (j%2==0) {
            document.write(star1);
        }else{
            document.write(star2);
        }
        document.write("<br>");
    }
}
document.write("<br>");

//-----問２-----//
document.write("■■■");
document.write("問2");
document.write("■■■");
document.write("<br>");
document.write("<br>");

var star1 = "☆"; star2 = "★";
for (var i=1; i<=5; i++) {
    for (var j=1; j<=5; j++) {
        if (j==i) {
            document.write(star1);
        }else{
            document.write(star2);
        }
        if (j==5) {
            document.write("<br>");
        }
    }
}
document.write("<br>");

//-----問３-----//
document.write("■■■");
document.write("問3");
document.write("■■■");
document.write("<br>");
document.write("<br>");

var star1="★"; star2="☆";
for (var i=4; i>=0; i--) {
    for (var j=i; j<=4; j++) {
        if (j==4) {
            document.write(star2+"<br>");
        }else{
            document.write(star1);
        }
    }
}
document.write("<br>");