//-----問１-----//
var box1 = "■"; var box2 = "■";
for (var i=0; i<3; i++) {
    document.write(box1);
}
document.write("問1");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    
    }
}
var star = "★";
for (var e=1; e<=5; e++) {
    document.write(star);
    if(e==5) {
        document.write("<br>");
    }
}
document.write("<br>");

//-----問２-----//
var box1 = "■"; var box2 = "■";
for (var i=0; i<3; i++) {
    document.write(box1);
}
document.write("問2");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    }
}
var star1 = "★";
for (var i=0; i<2; i++) {
    for (var j=0; j<=2; j++) {
        document.write(star1);
        if(j==2) {
            document.write("<br>");
        }
    }
}
document.write("<br>");

//-----問３-----//
var box1 = "■"; var box2 = "■";
for (var i=0; i<3; i++) {
    document.write(box1);
}
document.write("問3");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    }
}
var star = "★";
for (var i=0; i<4; i++) {
    for (var j=0; j<=4; j++) {
        document.write(star);
        if(j==4) {
            document.write("<br>");
        }
    }
}
document.write("<br>");

//-----問４-----//
var box1 = "■"; var box2 = "■";
for (var i=1; i<=3; i++) {
    document.write(box1);
}
document.write("問4");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    }
}
var star = ["★","☆"];
for (var i=1; i<=3; i++) {
    for (var j=0; j<=2; j++) {
        if (j%2==0) {
            document.write(star[0]);
            if (j==2) {
                document.write("<br>");
            }else{
                document.write(star[1]);
            }
        }
    }
}
document.write("<br>");

//-----問５-----//
var box1 = "■"; var box2 = "■";
for (var i=1; i<=3; i++) {
    document.write(box1);
}
document.write("問5");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    }
}
var star = ["★","☆"];
for (var i=1; i<=4; i++) {
    for (var j=0; j<=4; j++) {
        if (j%2==0) {
            document.write(star[0]);
            if (j==4) {
                document.write("<br>");
            }else{
                document.write(star[1]);
            }
        }
    }
}
document.write("<br>");

//-----問６-----//
var box1 = "■"; var box2 = "■";
for (var i=1; i<=3; i++) {
    document.write(box1);
}
document.write("問6");
for (var a=0; a<3; a++) {
    document.write(box2);
        if(a==2) {
            document.write("<br>");
    }
}
var star = "★";
for (var i=4; i>=0; i--) {
    for (var j=i; j<=4; j++) {
        document.write(star);
        if(j==4) {
            document.write("<br>");
        }
    }
}
document.write("<br>");