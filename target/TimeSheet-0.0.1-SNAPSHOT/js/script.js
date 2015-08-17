	$(window).load(function(){	
      $('#Login').modal('show');
    });
	
	
	 $('#Login_Link').click(function(e) {
		$("#LoginForm").delay(100).fadeIn(100);
 		$("#RegisterForm").fadeOut(100);
		$('#Register_Link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#Register_Link').click(function(e) {
		$("#RegisterForm").delay(100).fadeIn(100);
 		$("#LoginForm").fadeOut(100);
		$('#Login_Link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});


    $('#datePicker').datepicker();

	$('#datePicker').change(function() {
		var day;
		var datepicker_val = $("#datePicker").val();
		var date_chosen=new Date(datepicker_val);	

		switch(date_chosen.getDay())
			{
	
				case 0:
					document.getElementById("sun-date").innerHTML = date_chosen.getDate();
    		    	document.getElementById("mon-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	 		    	    
   				break;
  			  
  			    case 1: 
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 1)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();			    
    		    break;
        	  
   			   case 2:
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 2)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();		
               break;
               case 3:
               
               		document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 3)).getDate();
    		    	document.getElementById("mon-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();		
               break;
    			case 4:
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 4)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();		
               
        		break;
    		
    			case 5:
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 5)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();		
               
       		 	break;
       		 	
    			case 6:
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 6)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
 	       		break;
    		
    			case 7:
        			document.getElementById("sun-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() - 7)).getDate();
    		    	document.getElementById("mon-date").innerHTML =  new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();
    		    	document.getElementById("tue-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("wed-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("thu-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("fri-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
    		    	document.getElementById("sat-date").innerHTML = new Date(date_chosen.setDate(date_chosen.getDate() + 1)).getDate();	
       	  		 break;
			}
			});
			
			function numValidationsun()
			{
				var id = document.getElementById("hrs0");
				numValidation(id);
			}
			
			function numValidationmon()
			{
				var id = document.getElementById("hrs1");
				numValidation(id);
			}
	
			function numValidationtue()
			{
				var id = document.getElementById("hrs2");
				numValidation(id);
			}

			function numValidationwed()
			{
				var id = document.getElementById("hrs3");
				numValidation(id);
			}

			function numValidationthu()
			{
				var id = document.getElementById("hrs4");
				numValidation(id);
			}

			function numValidationfri()
			{
				var id = document.getElementById("hrs5");
				numValidation(id);
			}
			
			function numValidationsat()
			{
				var id = document.getElementById("hrs6");
				numValidation(id);
			}
		
			function sumTotal()
			{
				var total=0,i;
				var hrs=[];
				hrs[0]=Number(document.getElementById("hrs0").value);
				hrs[1]=Number(document.getElementById("hrs1").value);
				hrs[2]=Number(document.getElementById("hrs2").value);
				hrs[3]=Number(document.getElementById("hrs3").value);
				hrs[4]=Number(document.getElementById("hrs4").value);
				hrs[5]=Number(document.getElementById("hrs5").value);
				hrs[6]=Number(document.getElementById("hrs6").value);
				document.getElementById("tot-hrs").innerHTML=hrs[0]+hrs[1]+hrs[2]+hrs[3]+hrs[4]+hrs[5]+hrs[6];
			}
			function numValidation(id) {
 		   	    var x = id;
				var y = x.value;
				if(Number(y)<0 || !y.match(/^\d+/) || Number(y)>24 )
					{
						x.value="";	
					}
				sumTotal();	
			}
		
			var xmlHttpRequest;
			if(window.XMLHttpRequest)
			{
			xmlHttpRequest = new XMLHttpRequest();
			}
			else if(window.ActiveXObject)
			{
			xmlHttpRequest = new ActiveXObject("MICROSOFT.XMLHTTP");
			}
			
			function Register_JS()
			{
			var firstName,lastName,emailAddress,password;
			firstName =$("#FirstName").val();
			lastName = $("#LastName").val();
			emailAddress = $("#email").val();
			password = $("#password").val();	
			var url = "http://localhost:8080/TimeSheet/webapi/Registration/"+firstName+"/"+lastName+"/"+emailAddress+"/"+password;
			
			 $.get("http://localhost:8080/TimeSheet/webapi/Registration/"+$("#FirstName").val()+"/"+$("#LastName").val()+"/"+$("#email").val()+"/"+$("#password").val(), function(data, status){
		            alert('Hi');
		        }).done(function() {
		            alert( "second success" );
		        })
		        .fail(function() {
		          alert( "error" );
		        });
			
			/*
			xmlHttpRequest.open("GET", "http://localhost:8080/TimeSheet/webapi/Registration/"+$("#FirstName").val()+"/"+$("#LastName").val()+"/"+$("#email").val()+"/"+$("#password").val(), true);
			xmlHttpRequest.onreadystatechange = receiveMessageServer_Register_JS;
			xmlHttpRequest.send();*/
			}
			
			function receiveMessageServer_Register_JS()
			{				
				alert('Hi2');
				if(xmlHttpRequest.readyState==4 && xmlHttpRequest.status==200)
				{
					alert('Inside');
					if( xmlHttpRequest.responseText ==null)
						{
						alert('it is null');
						}
					var str =  xmlHttpRequest.status;
					alert('Inside'+xmlHttpRequest.status);
					var str2 =  xmlHttpRequest.responseText;
					alert("Response is"+str2);
					
				}
			}
