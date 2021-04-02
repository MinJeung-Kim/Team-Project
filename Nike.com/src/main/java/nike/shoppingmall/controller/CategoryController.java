package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.Category;
import nike.shoppingmall.service.CategoryService;

@Controller
public class CategoryController {

  private CategoryService categoryService;

  @Autowired
  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @GetMapping("/category")
  public String list(Model model) {
    List<Category> category = categoryService.findCategoryAll();
    model.addAttribute("category", category);

    return "category";
  }
}
