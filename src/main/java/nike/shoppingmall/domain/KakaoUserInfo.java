package nike.shoppingmall.domain;


public class KakaoUserInfo {

    private Integer id;
    private String connected_at;
    private Properties properties;
    private Kakao_account kakao_account;
    
    public Integer getId() {
    return id;
    }
    
    public void setId(Integer id) {
    this.id = id;
    }
    
    public String getConnected_at() {
    return connected_at;
    }
    
    public void setConnected_at(String connected_at) {
    this.connected_at = connected_at;
    }
    
    public Properties getProperties() {
    return properties;
    }
    
    public void setProperties(Properties properties) {
    this.properties = properties;
    }
    
    public Kakao_account getKakao_account() {
    return kakao_account;
    }
    
    public void setKakao_account(Kakao_account kakao_account) {
    this.kakao_account = kakao_account;
    }

    public class Properties {

        private String nickname;
        private String profile_image;
        private String thumbnail_image;
        
        public String getNickname() {
        return nickname;
        }
        
        public void setNickname(String nickname) {
        this.nickname = nickname;
        }
        
        public String getProfile_image() {
        return profile_image;
        }
        
        public void setProfile_image(String profile_image) {
        this.profile_image = profile_image;
        }
        
        public String getThumbnail_image() {
        return thumbnail_image;
        }
        
        public void setThumbnail_image(String thumbnail_image) {
        this.thumbnail_image = thumbnail_image;
        }
        
    }

    public class Kakao_account {

        private Boolean profile_needs_agreement;
        private Profile profile;
        private Boolean has_email;
        private Boolean email_needs_agreement;
        private Boolean has_gender;
        private Boolean gender_needs_agreement;
        private String gender;
        
        public Boolean getProfile_needs_agreement() {
        return profile_needs_agreement;
        }
        
        public void setProfile_needs_agreement(Boolean profile_needs_agreement) {
        this.profile_needs_agreement = profile_needs_agreement;
        }
        
        public Profile getProfile() {
        return profile;
        }
        
        public void setProfile(Profile profile) {
        this.profile = profile;
        }
        
        public Boolean getHas_email() {
        return has_email;
        }
        
        public void setHas_email(Boolean has_email) {
        this.has_email = has_email;
        }
        
        public Boolean getEmail_needs_agreement() {
        return email_needs_agreement;
        }
        
        public void setEmail_needs_agreement(Boolean email_needs_agreement) {
        this.email_needs_agreement = email_needs_agreement;
        }
        
        public Boolean getHas_gender() {
        return has_gender;
        }
        
        public void setHas_gender(Boolean has_gender) {
        this.has_gender = has_gender;
        }
        
        public Boolean getGender_needs_agreement() {
        return gender_needs_agreement;
        }
        
        public void setGender_needs_agreement(Boolean gender_needs_agreement) {
        this.gender_needs_agreement = gender_needs_agreement;
        }
        
        public String getGender() {
        return gender;
        }
        
        public void setGender(String gender) {
        this.gender = gender;
        }

        public class Profile {

            private String nickname;
            private String thumbnail_image_url;
            private String profile_image_url;
            
            public String getNickname() {
            return nickname;
            }
            
            public void setNickname(String nickname) {
            this.nickname = nickname;
            }
            
            public String getThumbnail_image_url() {
            return thumbnail_image_url;
            }
            
            public void setThumbnail_image_url(String thumbnail_image_url) {
            this.thumbnail_image_url = thumbnail_image_url;
            }
            
            public String getProfile_image_url() {
            return profile_image_url;
            }
            
            public void setProfile_image_url(String profile_image_url) {
            this.profile_image_url = profile_image_url;
            }
            
        }
        
    }
    
}


