package org.TimeSheet.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DAO {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
			System.out.println("Hello");
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				System.out.println("Where is your MySQL JDBC Driver?");
				e.printStackTrace();
				return;
			}
		 
			Connection connection = null;
			PreparedStatement stmt = null;
			try {
				connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/TimeSheetApp","root", "iamniru");
				//stmt = (PreparedStatement) connection.createStatement();
				String lastCrawlDate = "2014-01-28";
				Date utilDate = new SimpleDateFormat("yyyy-MM-dd").parse(lastCrawlDate);
				java.sql.Date startDate = new java.sql.Date(utilDate.getTime());
				 	
				String st = "Insert into TimeSheet (Date,Hours)"+"values (?,?)";
				stmt = connection.prepareStatement(st);
				
				stmt.setDate(1,startDate);
				stmt.setInt(2,6);
				
				stmt.execute();
				//stmt.executeUpdate(st);
			} catch (SQLException | ParseException e) {
				System.out.println("Connection Failed! Check output console");
				e.printStackTrace();
				return;
			}
		 
			if (connection != null) {
				
				System.out.println("You made it, take control your database now!");
			} else {
				System.out.println("Failed to make connection!");
			}
		  }
	}


