package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.InCart;

public interface InCartRepository {
    List<InCart> findAll();
}
