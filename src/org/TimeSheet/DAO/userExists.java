package org.TimeSheet.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


public class userExists {

	public static String Registration_Success = "Registration_Success";
	public static String Registration_Failure = "Registration_Failure";
	public static String User_Exists = "User_Exists";
	public static userExistsReturn isUserExists(String firstName,String lastName,String emailAddress,String password)
	{
		userExistsReturn UserExistsReturn = new userExistsReturn();
		
		String userExists = User_Exists;
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		 
		Connection connection = null;
		PreparedStatement stmt = null;
			
		
		try {
			
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/TimeSheetApp","root", "iamniru");
				 	
			String st = "select * from UserProfile where EmailAddress = ?";
			stmt = connection.prepareStatement(st);
			stmt.setString(1, emailAddress);
			
     		ResultSet rs = stmt.executeQuery();
			if(rs.next())
			{			
				System.out.println(User_Exists);
				 String user = rs.getString("emailAddress");
				 if(user.toLowerCase().equals(emailAddress.toLowerCase()))
				 {
					 System.out.println("email address is "+user);
					 UserExistsReturn.setUser_Exists(true);
						userExists = User_Exists;
						return UserExistsReturn;
				 }
			}
			else
			{
				String insertSQL = "INSERT into UserProfile (FirstName,LastName,EmailAddress,Password) Values (?,?,?,?)";
				stmt = connection.prepareStatement(insertSQL);
				stmt.setString(1, firstName);
				stmt.setString(2, lastName);
				stmt.setString(3, emailAddress);
				stmt.setString(4, password);
				int insertResult = stmt.executeUpdate();
				if(insertResult>0)
				{
					System.out.println("Registration_Success");
					UserExistsReturn.setRegistration_Success(true);
					userExists = Registration_Success;
				}
				else
				{
					System.out.println("Registration_Failure");
					UserExistsReturn.setRegistration_Failure(true);
					userExists = Registration_Failure;
				}
			
				
			}			
			
		} catch (SQLException e) {
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
		}
			
		finally {
			return UserExistsReturn;
		}
		
	}

}
