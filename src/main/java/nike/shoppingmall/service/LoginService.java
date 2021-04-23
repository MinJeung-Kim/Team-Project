package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.LoginUser;
import nike.shoppingmall.repository.LoginRepository;


@Service
public class LoginService {
    
    private LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }


    public int checkId(String userId) {
        return loginRepository.checkId(userId);
    }

    public Boolean checkPassword(String userId,String password) {
        return loginRepository.checkPassword(userId,password);
    }

    public List<LoginUser> userInfo(String userId) {
        return loginRepository.userInfo(userId);
    }


}
