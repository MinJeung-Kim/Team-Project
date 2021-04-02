package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.Member;

public interface MemberRepository {
  List<Member> findAll();
}
