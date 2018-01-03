$(document).ready(function(){
	//when the button is clicked, run
	$('#Search').click(function(){
		//build search URL
		var term=$('#Term').val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ term +"&format=json&callback=?";
	
		$.ajax({
			type:"GET",
			url:url,
			async: false,
			dataType: "json",
			success: function(data){
				$('#Results').html('');
         		 for(var i=0;i<data[1].length;i++)
         		 {
         		 	$("#Results").append("<div><div class='field'><a target='blank' href= "+data[3][i]+"><h3>"+data[1][i]+"</h3></a><p>"+data[2][i]+"</p></div></div><br>");
         		 }
        $("#Term").val('');
			},
			error: function(errorMessage){
				alert("Error");
			}

		});


	});
	$("#Term").keypress(function(e){
			if(e.which==13){
				$("#Search").click();
			}
		})

});