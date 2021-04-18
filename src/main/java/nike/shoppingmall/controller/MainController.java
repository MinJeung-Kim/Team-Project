package nike.shoppingmall.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import nike.shoppingmall.domain.Customer;
import nike.shoppingmall.domain.KakaoUserInfo;
import nike.shoppingmall.domain.OAuthToken;
import nike.shoppingmall.service.MainService;

@Controller
public class MainController {

  private MainService mainService;

  @Autowired
  public MainController(MainService mainService) {
    this.mainService = mainService;
  }
  @GetMapping("/")
  public String root(Model model) {
    List<Customer> login = mainService.checkPw();
    model.addAttribute("login", login);

    return "index";
  }

  @GetMapping("/index.html")
  public String index() {
    return "index.html";
  }

  //카카오로그인
  @GetMapping("/kakaoLogin")
  public String kakaoLogin(String code) {

    //토큰
    RestTemplate rt = new RestTemplate();
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

    MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
    params.add("grant_type","authorization_code");
    params.add("client_id","b047c29fb14178a1f60fa3f94821e5fc");
    params.add("redirect_uri","http://localhost:9090/kakaoLogin");
    params.add("code",code);

    HttpEntity<MultiValueMap<String,String>> kakaoTokenRequest = new HttpEntity<>(params,headers);

    ResponseEntity<String> response = rt.exchange(
      "https://kauth.kakao.com/oauth/token",
      HttpMethod.POST,
      kakaoTokenRequest,
      String.class);

      ObjectMapper objectMapper = new ObjectMapper();
      OAuthToken oauthToken = null;
      try{
        oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
      }catch (JsonMappingException e) {
        e.printStackTrace();
      }catch(JsonProcessingException e) {
        e.printStackTrace();
      }

      System.out.println("카카오 엑세스 토큰 : "+oauthToken.getAccess_token());

      //사용자 정보

    RestTemplate rt3 = new RestTemplate();
    HttpHeaders headers3 = new HttpHeaders();
    headers3.add("Authorization", "Bearer "+oauthToken.getAccess_token());
    headers3.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

    HttpEntity<MultiValueMap<String,String>> kakaoUserInfo = new HttpEntity<>(headers3);

    ResponseEntity<String> response3 = rt3.exchange(
    "https://kapi.kakao.com/v2/user/me",
    HttpMethod.POST,
    kakaoUserInfo,
    String.class);

    ObjectMapper objectMapper2 = new ObjectMapper();
    KakaoUserInfo userInfo = null;
    try{
      userInfo = objectMapper2.readValue(response3.getBody(), KakaoUserInfo.class);
    }catch (JsonMappingException e) {
      e.printStackTrace();
    }catch(JsonProcessingException e) {
      e.printStackTrace();
    }

    System.out.println("현재 로그인된 아이디:"+userInfo.getId());


      
    return "redirect:/";
  }

  //카톡 로그아웃
  @RequestMapping(value = "/KakaoLogout")
  public String KakaoLogout(HttpSession session) {

    //로그아웃
    RestTemplate rt2 = new RestTemplate();
    HttpHeaders headers2 = new HttpHeaders();
    headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

    HttpEntity<MultiValueMap<String,Object>> kakaoLogout = new HttpEntity<>(headers2);

    ResponseEntity<String> response2 = rt2.exchange(
      "https://kapi.kakao.com/v1/user/logout",
      HttpMethod.POST,
      kakaoLogout,
      String.class);

      return "redirect:/";
  }
  

}
