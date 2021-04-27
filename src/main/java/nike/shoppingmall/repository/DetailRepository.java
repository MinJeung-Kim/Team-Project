package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.Detail;

public interface DetailRepository {
    List<Detail>  findAll();
}
