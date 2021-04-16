package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.Customer;
import nike.shoppingmall.repository.MainRepository;

@Service
public class MainService {

    private MainRepository mainRepository;

    @Autowired
    public MainService(MainRepository mainRepository) {
        this.mainRepository = mainRepository;
    }

    public List<Customer> checkPw() {
        return mainRepository.check();
    }
    
}
