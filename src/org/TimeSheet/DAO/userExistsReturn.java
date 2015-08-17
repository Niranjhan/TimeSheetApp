package org.TimeSheet.DAO;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class userExistsReturn {

	private boolean Registration_Success;
	private boolean Registration_Failure;
	private boolean User_Exists;
	public boolean isRegistration_Success() {
		return Registration_Success;
	}
	public void setRegistration_Success(boolean registration_Success) {
		Registration_Success = registration_Success;
	}
	public boolean isRegistration_Failure() {
		return Registration_Failure;
	}
	public void setRegistration_Failure(boolean registration_Failure) {
		Registration_Failure = registration_Failure;
	}
	public boolean isUser_Exists() {
		return User_Exists;
	}
	public void setUser_Exists(boolean user_Exists) {
		User_Exists = user_Exists;
	}
	
	
}
