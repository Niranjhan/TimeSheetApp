package org.TimeSheet.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Login {
	
	public static String canUserLogin(String userName,String Password)
	{
		String canUserLogin = "false";
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		 
		Connection connection = null;
		PreparedStatement stmt = null;
		
		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/TimeSheetApp","root", "iamniru");
				 	
			String st = "select * from UserProfile where UserName = ?";
			stmt = connection.prepareStatement(st);
			stmt.setString(1, userName);
			
     		ResultSet rs = stmt.executeQuery();
			if(rs.next())
			{				
				 String userNameRetrieved = rs.getString("UserName");
				 String passwordRetrieved = rs.getString("Password");			 
				 if(userNameRetrieved.equals(userName))
				 {
					 if(passwordRetrieved.equals(Password))
					 canUserLogin = "true";
				 }
			}						
		} catch (SQLException e) {
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
		}
		return canUserLogin;
	}


}
