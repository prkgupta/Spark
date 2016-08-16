var form = document.getElementById("form");
var lang = document.getElementById("lang");

function changeSubmit(){
    switch (lang.value) {
        case "2":
            form.action="color.pl";
            break;
        case "3":
            form.action="http://198.199.116.102:8000/form";
            break;
        default:
            form.action="color.pl";
    }
}

