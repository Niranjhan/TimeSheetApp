package org.TimeSheet.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SQLTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection connection = null;
		PreparedStatement stmt = null;
			
		
		try {
			
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/TimeSheetApp","root", "iamniru");
				 	
			String st = "select * from UserProfile where EmailAddress = ?";
			stmt = connection.prepareStatement(st);
			stmt.setString(1, "Test2@gmail.com");
			
     		ResultSet rs = stmt.executeQuery();
			if(rs.next())
			{			
				System.out.println("User_Exists");
				 String user = rs.getString("emailAddress");
				 if(user.equals("Test2@gmail.com"))
				 {
					System.out.println("User Exists");
				 }
			}
			else
			{
				
			
				System.out.println("User does not Exists");
			}			
			
		} catch (SQLException e) {
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
		}
	}

}
