
$(document).ready(function() {
    // JQUERY UI SELECT
    $("table.sortable-js").each(function () {
		$(this).tablesorter();
	});

	// TABLE TR DRAGGABLE
	$("table.draggable-js tbody").each(function () {
		$(this).sortable({
			// CHANGE INPUT VALUE AFTER SORTING IS DONE
			update: function(){
				$(this).children("tbody > tr").each(function(){
					var row = $(this).index() + 1; // first is 0, could work as well tho
					$(this).find("input.js-order").val(row);
				});
			}
		});
		$(this).disableSelection();
		
	});
});