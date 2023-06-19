package com.chatapp.loginandregistrationverify;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.chatapplication.userdetails.*;
import com.chatapplication.loginorregisterpage.*;

public class RegistrationServlet extends HttpServlet{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private HttpServletRequest req = null;
	private HttpServletResponse res = null;
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

		PrintWriter out = null;
		LoginOrRegisterPageController loginOrRegisterPageController = null;
		try {
			
			out = res.getWriter();
			String userName = req.getParameter("userName");
			String userMobileNo = req.getParameter("userMobileNo");
			String userEmailId = req.getParameter("userEmailId");
			String userDateOfBirth = req.getParameter("userDateOfBirth");
			String userAge = req.getParameter("userAge");
			String userAbout = req.getParameter("userAbout");
			String userPassword = req.getParameter("userPassword");
			User user = new User(userName,userMobileNo,userEmailId,Integer.parseInt(userAge),userDateOfBirth,userPassword,"",userAbout);
			this.req = req;
			this.res = res;
			loginOrRegisterPageController = new LoginOrRegisterPageController(this);
			loginOrRegisterPageController.setUserDetails(user);
//			System.out.println(userName+" "+userMobileNo+" "+userEmailId+" "+userDateOfBirth+" "+userAge+" "+userAbout+" "+userPassword);
		} catch (Exception e) {

			System.out.println("Did't Get Data!!!");
		}
		finally {
			
			out.close();
		}
	}

	public void userMobileNoExist() {

		PrintWriter out = null;
		try {
			
			out = res.getWriter();
			res.setContentType("text/plain");
			out.write("User Mobile Number or Email Id Already Exist!!!");
		} catch (Exception e) {

			System.out.println("Wrong Output!!!");
		}
		finally {
			
			out.close();
		}
	}

	public void addedSuccessfully() {

		PrintWriter out = null;
		try {
			
			out = res.getWriter();
			res.setContentType("text/plain");
			out.write("Registered Successfully!!!");
		} catch (Exception e) {

			System.out.println("Wrong Output!!!");
		}
		finally {
			
			out.close();
		}
	}
}
