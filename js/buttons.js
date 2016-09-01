/**
 * Created by Hirad on 8/31/2016.
 */

$('.updateButton').click(function(){
    console.log("update button is clicked");
    var id = $(this).next().value;
    location.href="http://198.199.116.102:8000/movies/" + id + "/edit";
});
$('.deleteButton').click(function(event){
    console.log("delete button is clicked");
    var id = $(this).next().value;
    var conf = confirm("Are you sure you want to delete this movie from the database?");
    if(conf){
        location.href="http://198.199.116.102:8000/movies/" + id + "/edit";
    }
    else{
        event.preventDefault();
    }
});