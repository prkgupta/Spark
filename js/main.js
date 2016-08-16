var form = document.getElementById("form");
var lang = document.getElementById("lang");

function changeSubmit(){
    switch (lang.value) {
        case "2":
            form.action="color.pl";
            break;
        case "3":
            form.action="/form";
            break;
        default:
            form.action="color.pl";
    }
}

