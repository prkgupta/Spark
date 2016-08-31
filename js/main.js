var form = document.getElementById("form");
var lang = document.getElementById("lang");

function changeSubmit(){
    switch (lang.value) {
        case "2":
            form.action="cgi-bin/color.pl";
            break;
        case "3":
            form.action="http://198.199.116.102:8000/form";
            break;
        default:
            form.action="color.php";
    }
}

var sessionForm = document.getElementById("sessionForm");

function changeSubmitForSession(){
    switch (lang.value) {
        case "2":
            sessionForm.action="cgi-bin/session.pl";
            break;
        case "3":
            sessionForm.action="http://198.199.116.102:8000/sessionForm";
            break;
        default:
            sessionForm.action="session.php";
    }
}

$('updateButton').click(function(){
    var id = $(this).next().value;
    location.href="http://198.199.116.102:8000/movies/" + id + "/edit";
});