<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> TimeSheet </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="TimeSheetStyles.css"> 	
</head>
<body>
<div class="container">
		<h1> TimeSheet App </h1>


	<div class="modal" id="Login">
		<div class="modal-dialog">			
			<div class="modal-content">
				<div class="modal-header">
				 <center> <a href="#" class="btn btn-link" class="active" id="Login_Link"> Login </a> |	<a href="#" id="Register_Link" class="btn btn-link"> Register </a> </center>
				</div>
				<div class="modal-body">
						<form action="#" id="RegisterForm" style="display: none;" class="form-horizontal">
							<div class="form-group">
								<label for="FirstName" class="col-sm-4 control-label"> First Name </label>
								<input type="text" class="form-control" id="FirstName" placeholder="First Name">
							</div>
							
							<div class="form-group">
								<label for="LastName" class="col-sm-4 control-label"> LastName Name </label>
								<input type="text" class="form-control" id="LastName" placeholder="Last Name">
							</div>
							
							<div class="form-group">
								<label for="email" class="col-sm-4 control-label"> Email Address </label>
								<input type="text" class="form-control" id="email" placeholder="Email Address">
							</div>
							
							<div class="form-group">
								<label for="reemteremail" class="col-sm-4 control-label"> Re-Enter Email Address </label>
								<input type="text" class="form-control" id="reemteremail" placeholder="Re-Enter Email Address">
							</div>
							
							<div class="form-group">
								<label for="password" class="col-sm-4 control-label"> Password </label>
								<input type="text" class="form-control" id="password" placeholder="Password">
							</div>						
							
							
							<div class="form-group">
								<button type="text" class="btn btn-default col-sm-offset-4" id="Register" onclick="Register_JS()"> Register </button>
							</div>
						</form>
						
						<form action="#" id="LoginForm" style="display: block; class="form-horizontal">
						
						
							<div class="form-group">															
								<label class="control-label"> 
									<span id="registration_failure_label_class">
										A User with this email-Address already exists in our System, Please Login 
									</span>
								</label> 								
							</div>
							
							<div class="form-group">								 
								<label for="email" class="col-sm-4 control-label"> Email Address </label>
								<input type="text" class="form-control" id="email" placeholder="Email Address">
							</div>
							
							<div class="form-group">
								<label for="password" class="col-sm-4 control-label"> Password </label>
								<input type="text" class="form-control" id="password" placeholder="Password">
							</div>			
							
							<div class="form-group">
								<button type="text" class="btn btn-default col-sm-offset-4" id="Login"> Login </button>
							</div>
						</form>
				</div>
			</div>
		</div>		
	</div>
	
	<div>	
		<table class="TimeSheet"> 
			<tr>
				<td> Choose the week </td>
				<td class="Sunday">  Sunday  <div id="sun-date"> </div> </td>
				<td class="Monday">   Monday <div id="mon-date"> </div></td>
				<td class="Tuesday"> Tuesday <div id="tue-date"> </div> </td>
				<td class="Wednesday"> Wednesday <div id="wed-date"> </div> </td>
				<td class="Thursday">Thursday <div id="thu-date"> </div> </td>
				<td class="Friday"> Friday <div id="fri-date"> </div></td>
				<td class="Saturday">  Saturday<div id="sat-date"> </div> </td>
				<td class="Total"> Total </td>
			</tr>
		
			<form name="timesheetform" action="SubmitPage" method="POST">
		
			<tr>
				<td><input type="text" id="datePicker" class="dp"></td> 
				<td><input type="number" name ="hrs0" id="hrs0" class="dp" onkeyup="numValidationsun()" >  </td>
				<td><input type="number" name="hrs1" id="hrs1" class="dp" onkeyup="numValidationmon()" > </td>
				<td> <input type="number" name="hrs2" id="hrs2" class="dp" onkeyup="numValidationtue()" ></td>
				<td> <input type="number" name="hrs3" id="hrs3" class="dp" onkeyup="numValidationwed()" ></td>
				<td><input type="number" name="hrs4" id="hrs4" class="dp" onkeyup="numValidationthu()" > </td>
				<td><input type="number" name="hrs5" id="hrs5" class="dp" onkeyup="numValidationfri()" > </td>
				<td><input type="number" name="hrs6" id="hrs6" class="dp" onkeyup="numValidationsat()"> </td>
				<td> <div class="totdp"><div id="tot-hrs" class="totdp-inner"></div></div></td>
			</tr>		 
		</table>
	</div>
	<br /> <br />
	<input type="submit" value="submit" class="go">
	
	
	
	</form>
	
	</div>
	<script src="js/jquery.js"> </script>
	<script src="js/jquery-ui.js"> </script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="js/script.js">	</script>
</body>
</html>