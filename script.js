
var gradients = [
	{
		gradient: "linear-gradient(to right, #232526, #414345)",
		colors: "#232526"
	},
	{
		gradient: "linear-gradient(to right, #5c258d, #4389a2)",
		colors: "#5c258d"
	},
	{
		gradient: "linear-gradient(to right, #4776e6, #8e54e9)",
		colors: "#4776e6"
	}, 
	{
		gradient: "linear-gradient(to right, #16222a, #3a6073)",
		colors: "#16222a"
	}, 
	{
		gradient: "linear-gradient(to right, #ff8008, #ffc837)",
		colors: "#ff8008"
	}, 
	{
		gradient: "linear-gradient(to right, #eb3349, #f45c43)",
		colors: "#eb3349"
	}, 
	{
		gradient: "linear-gradient(to right, #4cb8c4, #3cd3ad)",
		colors: "#4cb8c4"
	},
	{
		gradient: "linear-gradient(to right, #1d2b64, #f8cdda)",
		colors: "#1d2b64"
	},
	{
		gradient: "linear-gradient(to right, #1a2980, #26d0ce)",
		colors: "#1a2980"
	},
	{
		gradient: "linear-gradient(to right, #aa076b, #61045f)",
		colors: "#aa076b"
	}
];


var data = [];

	$(document).ready(function(){
		var x = Math.floor(Math.random() * 10)
	$('body').css("background-image", gradients[x].gradient);

        $('#search').click(function(){
            $.ajax({
                url: 'http://en.wikipedia.org/w/api.php',
                data: { action: 'query', list: 'search', srsearch: $("input[type=text]").val(), format: 'json' },
                dataType: 'jsonp',
                success: processResult
            });
        });
	})
	

     

   
  function processResult(apiResult){
  
  	data = [];
  	var str ="";
     for (var i = 0; i < apiResult.query.search.length; i++){
    	var url = "https://en.wikipedia.org/?curid=" + apiResult.query.search[i].pageid;
    	 str +="<a href='" + url + "' target='_blank'>"; 	
     		str += '<div class="well">';
     		str += '<p>'+apiResult.query.search[i].snippet+'</p>'
     		str += '</div></a>'
       
     }

     str += "</ul>"
     
    $("#result").html(str);
      

  }

