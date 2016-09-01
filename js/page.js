/**
 * Created by  on 8/31/2016.
 */

//table page limit
$(document).ready(function() {
    //$('#tableData').paging({limit:5});
});

function page(){
    var limit = $('.itemsPerPage').value;
    limit = limit == all? 1000000 : limit;
    $('#tableData').paging({limit:limit});
}

//table sort
$(document).ready(function() { 
        $('#tableData').tablesorter(); 
});    
