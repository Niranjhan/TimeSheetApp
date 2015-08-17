package org.RESTApi.Services;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.TimeSheet.DAO.userExists;

@Path("Login")
public class Login {

	@POST
	@Path("/{userName}/{password}")
	public String isLogin(@PathParam("userName") String userName, @PathParam("password") String password)
	{
		return org.TimeSheet.DAO.Login.canUserLogin(userName, password);
		
	}
}
