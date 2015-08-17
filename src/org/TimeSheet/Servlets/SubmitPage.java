package org.TimeSheet.Servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SubmitPage
 */
@WebServlet("/SubmitPage")
public class SubmitPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SubmitPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String x = request.getParameter("hrs0");
		
		System.out.println(x);
	/*		int[] hrs = new int[7];
		for(int i=0;i<hrs.length;i++)
		{
			hrs[i] = Integer.parseInt(request.getParameter("hrs"+i));
		}
		System.out.println(hrs); */
		PrintWriter out = response.getWriter(); 
		out.println("<html><body> Hello </body> </html>");
	}

}
