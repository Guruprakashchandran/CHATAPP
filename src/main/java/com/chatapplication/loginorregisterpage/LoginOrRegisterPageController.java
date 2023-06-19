package com.chatapplication.loginorregisterpage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chatapp.loginandregistrationverify.LoginServlet;
import com.chatapp.loginandregistrationverify.RegistrationServlet;
//import com.chatapp.loginverify.LoginServlet;
import com.chatapplication.userdetails.User;

public class LoginOrRegisterPageController implements LoginOrRegisterPageModelToControllerCall{

	private LoginOrRegisterPageControllerToViewCall loginOrRegisterPageControllerToViewCall;
	private LoginOrRegisterPageControllerToModelCall loginOrRegisterPageControllerToModelCall;
	private LoginServlet login;
	private RegistrationServlet register;
	public LoginOrRegisterPageController(LoginServlet loginServlet) {
		
		login = loginServlet;
		loginOrRegisterPageControllerToModelCall = new LoginOrRegisterPageModel(this);
	}
	public LoginOrRegisterPageController(RegistrationServlet register) {
		
		this.register = register;
		loginOrRegisterPageControllerToModelCall = new LoginOrRegisterPageModel(this);
	}
//	@Override
	public void setUserDetails(User user) {
		
		loginOrRegisterPageControllerToModelCall.setUserDetails(user);
	}
	@Override
	public void userMobileNoExist() {
		
		register.userMobileNoExist();
	}
	@Override
	public void addedSuccessfully() {
		
		register.addedSuccessfully();
	}
	@Override
	public void userEmailExist() {
		
		loginOrRegisterPageControllerToViewCall.userEmailExist();
	}
	public void checkLogin(User user, HttpServletResponse res, HttpServletRequest req) {
	
		loginOrRegisterPageControllerToModelCall.checkLogin(user,res,req);
	}
	@Override
	public void loginFailed(String msg,HttpServletResponse res) {
		
		login.loginFailed(msg,res);
	}
	@Override
	public void loginSuccess(User user,HttpServletResponse res,HttpServletRequest req) {
		
		login.loginSuccess(user,res,req);
	}
//	@Override
//	public void closeConnection() {
//	
//		loginOrRegisterPageControllerToModelCall.closeConnection();
//	}
}
