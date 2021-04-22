package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.InCart;
import nike.shoppingmall.repository.InCartRepository;

@Service
public class InCartService {

    private final InCartRepository inCartRepository;

    @Autowired
    public InCartService(InCartRepository inCartRepository) {
        this.inCartRepository = inCartRepository;
    }

    public List<InCart> findInCartAll() {
        return inCartRepository.findAll();
    }
}
