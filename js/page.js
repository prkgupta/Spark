/**
 * Created by  on 8/31/2016.
 */

//table page limit
$(document).ready(function() {
    //$('#tableData').paging({limit:5});
});

function page(){
    var pageLimit = $('.itemsPerPage').value;
    pageLimit = pageLimit == 'all'? 1000000 : pageLimit;
    console.log("limit is " + pageLimit);
    $('#tableData').paging({limit:pageLimit});
}

//table sort
$(document).ready(function() { 
        $('#tableData').tablesorter(); 
});    
