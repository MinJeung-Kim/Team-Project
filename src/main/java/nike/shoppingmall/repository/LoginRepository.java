package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.LoginUser;

public interface LoginRepository {
    
    int checkId(String userId);
    Boolean checkPassword(String userId,String password); 

    List<LoginUser> userInfo(String userId);
}
