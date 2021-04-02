package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.Category;

public interface CategoryRepository {
  List<Category> findAll();
}
