package org.RESTApi.Services;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.TimeSheet.DAO.userExists;

@Path("Registration")
public class Registration {

	@GET
	@Path("/{FirstName}/{LastName}/{EmailAddress}/{Password}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getReturn(@PathParam("FirstName") String firstName,@PathParam("LastName") String lastName,@PathParam("EmailAddress") String emailAddress,@PathParam("Password") String password)
	{	System.out.println("Entered resource");	
		return Response.status(200).entity(userExists.isUserExists(firstName,lastName,emailAddress,password)).build();
	}	
}
