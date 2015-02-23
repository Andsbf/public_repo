$(document).ready(function() {
	
	console.log("Script included!");

	$("#main img").click(function(){
		$(this).css("display", "none");
		// $(this).fadeOut(1000);
	});

	$("#upbar li").click(function(){
		alert('Comming soon...');
		
	});

	$('input[name=checkListItem]').keydown(function(event){    

		if(event.keyCode==13){
    	$("form").on('submit',function(){return false;}); //Stop Refreshing after hit "Enter"
    	var toAdd = $('input[name=checkListItem]').val();
		 //Avoiding empty entries
		 if (toAdd !== ""){  
		 	$("#Ingredients ul").append('<li>'+ toAdd +'</li>');
		 	$("#Directions span").append(toAdd +", ") 
		 	alert('Hum...Sounds delicious...Please notice that your ingredients have also been added to the directions');
		 	$('input[placeholder="Ingredient name!"]').val("");
		 }
		}
	});

	$("#button").click(function(){	

		var toAdd = $('input[name=checkListItem]').val();
	 //Avoiding empty entries
	 	if (toAdd !== ""){  
	 		$("#Ingredients ul").append('<li>'+ toAdd +'</li>');
	 		$("#Directions span").append(toAdd +", ") 
	 		alert('Hum...Sounds delicious...Please notice that your ingredients have also been added to the directions');
	 		$('input[placeholder="Ingredient name!"]').val("");
	 	}
	});

	var print_mode = false;

	$("#Directions h4").click(function(){	
		print_mode = !(print_mode);
		
		if (print_mode) {
			$('#main').hide();
			$("#upbar").hide();
			$("#addSection").hide();
			$("#Directions h4").html("Click to return to Web mode!");
		}
		else  {
			$('#main').show();
			$("#upbar").show();
			$("#addSection").show();
			$("#Directions h4").html("View print version of this recipe!");
		};
	});

});

