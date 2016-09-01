/**
 * Created by  on 8/31/2016.
 */

//table page limit
$(document).ready(function() {
    $('#tableData').paging({limit:5});
});

//table sort
$(document).ready(function() { 
        $('#tableData').tablesorter(); 
});    
