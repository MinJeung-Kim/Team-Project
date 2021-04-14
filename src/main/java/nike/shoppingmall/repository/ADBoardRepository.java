package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.ADBoard;

public interface ADBoardRepository {
    List<ADBoard> findAll();

    List<ADBoard> findById(int boardNum);
}


