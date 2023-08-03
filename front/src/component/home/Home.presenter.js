
import classes from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


export default function HomeUI() {
  return (
    <>
        <div className={classes.containers}>
            <div className={classes.container}>
                <Carousel style={{ animation: 'slide 3s infinite' }}>
                    <Carousel.Item>  
                        <img className={classes.slideImage} src="/images/bestseller/bestseller1.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="images/bestseller/bestseller2.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="images/bestseller/bestseller3.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <section className={classes.content1_recommend1}>
          <div className={classes.content1_recommend2}>
            <span className={classes.content1_toplist1}>
              이번달 베스트 셀러 TOP 10 {'>'}
            </span>
          </div>
          <br/>
          <div className={classes.content_box}>
              <div className={classes.content1_firstbox}>
                <div className={classes.content1_recommend3}>
                  <div className={classes.content1_recommend4}>
                    <div className={classes.content1_list1}>
             
                      <img className={classes.content1_listimage1} src="/images/bestseller/bestseller3.jpg" alt="wallpaper" />
         
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={classes.content1_list2}>
                      <span className={classes.content1_toptext1}>1</span>
                    </div>
                    <div className={classes.content1_list3}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                      <span className={classes.content1_toptext2}>세이노의 가르침</span>
              
                    </div>
                    <div className={classes.content1_list3}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img className={classes.content1_rankimage1} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                    </div>
                    <div className={classes.content1_list4}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className={classes.content1_ranknumber1}>1</span>
                    </div>
                  </div>
                </div>
              </div>
                <div className={classes.content1_recommend5}>
                  <div className={classes.content1_recommend6}>
                    <div className={classes.content1_list4}>
        
                      <img className={classes.content1_listimage2} src="/images/bestseller/bestseller1.jpg" alt="wallpaper" />
           
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={classes.content1_list5}>
                      <span className={classes.content1_toptext3}>2</span>
                    </div>
                    <div className={classes.content1_list6}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
                      <span className={classes.content1_toptext4}>문과 남자의 과학 공부</span>
              
                    </div>
                    <div className={classes.content1_list7}>
                      <img className={classes.content1_rankimage2} src="/images/bestseller/rankdown.jpg" alt="wallpaper" />
                    </div>
                    <div className={classes.content1_list8}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className={classes.content1_ranknumber2}>1</span>
                    </div>
                  </div>
              </div>
              <div className={classes.content1_recommend7}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext5}>3</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_toptext6}>최애의 아이 11</span>
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage3} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber3}>1</span>
                </div>
              </div>
              <div className={classes.content1_recommend8}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext5}>4</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
                  <span className={classes.content1_toptext6}>아주 희미한 빛으로도</span>
         
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage4} src="/images/bestseller/rankdown.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber4}>1</span>
                </div>
              </div>
              <div className={classes.content1_recommend9}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext7}>5</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
                  <span className={classes.content1_toptext8}>도둑맞은 집중력</span>
           
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage5} src="/images/bestseller/rankdown.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber5}>1</span>
                </div>
              </div>
              <div className={classes.content1_recommend10}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext9}>6</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                  <span className={classes.content1_toptext10}>스튜디오 지브리 입체건축...</span>
       
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage6} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber6}>4</span>
                </div>
                <div className={classes.content1_recommend11}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext11}>7</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
                  <span className={classes.content1_toptext12}>스파이 패밀리 11</span>
     
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage7} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber7}>1</span>
                </div>
                </div>
              <div className={classes.content1_recommend12}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext13}>8</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
                  <span className={classes.content1_toptext14}>최적의 공부 뇌</span>
        
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage8} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber8}>1</span>
                </div>
                </div>
              <div className={classes.content1_recommend13}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext15}>9</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
                  <span className={classes.content1_toptext16}>브랜드 설계자</span>
     
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage9} src="/images/bestseller/rankup.jpg" alt="wallpaper" />
                </div>
                 <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber9}>17</span>
                </div>
                </div>
              <div className={classes.content1_recommend14}>
                <div className={classes.content1_list9}>
                  <span className={classes.content1_toptext17}>10</span>
                </div>
                <div className={classes.content1_list10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                  <span className={classes.content1_toptext18}>역행자 확장판</span>
       
                </div>
                <div className={classes.content1_list11}>
                  <img className={classes.content1_rankimage10} src="/images/bestseller/rankdown.jpg" alt="wallpaper" />
                </div>
                <div className={classes.content1_list12}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={classes.content1_ranknumber10}>3</span>
                </div> 
              </div> 
            </div>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_recommend1}>
          <div className={classes.content1_recommend2}>
            <span className={classes.content1_toplist1}>
              믿고 보는 구름 에디터 추천작  {'>'}
            </span>
          </div>
          <div className={classes.content1_beWhyrequest}>
            <div className={classes.content1_bewhy1}>
        
                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage1.jpg" alt="wallpaper" />
             
            </div>
            <div className={classes.content1_bewhyblank}></div>
            <div className={classes.content1_bewhy1}>
  
                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage2.jpg" alt="wallpaper" />
   
            </div>
            <div className={classes.content1_bewhyblank}></div>
            <div className={classes.content1_bewhy1}>
   
                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage3.png" alt="wallpaper" />
              
            </div>
          </div>
          <br/>
          <div className={classes.content1_recommend2}>
            <span className={classes.content1_toplist1}>
              실시간 인기 콘텐츠  {'>'}
            </span>
          </div>
          <div className={classes.content1_beWhyrequest}>
            <div className={classes.content1_bewhy1}>
              
                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage4.png" alt="wallpaper" />
    
            </div>
            <div className={classes.content1_bewhyblank}></div>
            <div className={classes.content1_bewhy1}>
              
                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage5.jpg" alt="wallpaper" />
    
            </div>
            <div className={classes.content1_bewhyblank}></div>
            <div className={classes.content1_bewhy1}>

                <img className={classes.content1_bewhyimage1} src="/images/bestseller/bewhyimage6.png" alt="wallpaper" />

            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_container120}>
            <div className={classes.content1_container220}>
                <div className={classes.content1_container320}>
                    <div className={classes.content1_container420}>
                        <h3 className={classes.content1_container520}>
                            <div className={classes.content1_text120}>제휴 브랜드</div>
                        </h3>
                        <div className={classes.content1_container620}>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image120} src = 'images/bestseller/brand1.png' alt = '사진' />
                                &nbsp;&nbsp;&nbsp;&nbsp;                
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image220} src = 'images/bestseller/brand2.png' alt = '사진' />
                                &nbsp;&nbsp;&nbsp;&nbsp;                
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image320} src = 'images/bestseller/brand3.png' alt = '사진' />
                                &nbsp;&nbsp;&nbsp;&nbsp;                
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image420} src = 'images/bestseller/brand4.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image520} src = 'images/bestseller/brand5.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image620} src = 'images/bestseller/brand6.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image720} src = 'images/bestseller/brand7.png' alt = '사진' />
                                &nbsp;&nbsp;&nbsp;&nbsp;                
                            </span>
                            <br/>
                            <br/>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image820} src = 'images/bestseller/brand8.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image920} src = 'images/bestseller/brand9.png' alt = '사진' />   
                                &nbsp;&nbsp;&nbsp;&nbsp;             
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1020} src = 'images/bestseller/brand10.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1120} src = 'images/bestseller/brand11.png' alt = '사진' />
                                &nbsp;&nbsp;&nbsp;&nbsp;                
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1220} src = 'images/bestseller/brand12.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1320} src = 'images/bestseller/brand13.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1420} src = 'images/bestseller/brand14.png' alt = '사진' />   
                                &nbsp;&nbsp;&nbsp;&nbsp;             
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1520} src = 'images/bestseller/brand15.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <br/>
                            <br/>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1620} src = 'images/bestseller/brand16.png' alt = '사진' />   
                                &nbsp;&nbsp;&nbsp;&nbsp;             
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1720} src = 'images/bestseller/brand17.png' alt = '사진' />     
                                &nbsp;&nbsp;&nbsp;&nbsp;           
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1820} src = 'images/bestseller/brand18.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image1920} src = 'images/bestseller/brand19.png' alt = '사진' />    
                                &nbsp;&nbsp;&nbsp;&nbsp;            
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2020} src = 'images/bestseller/brand20.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2120} src = 'images/bestseller/brand21.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2220} src = 'images/bestseller/brand22.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <br/>
                            <br/>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2320} src = 'images/bestseller/brand23.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2420} src = 'images/bestseller/brand24.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2520} src = 'images/bestseller/brand25.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2620} src = 'images/bestseller/brand26.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2720} src = 'images/bestseller/brand27.png' alt = '사진' />    
                                &nbsp;&nbsp;&nbsp;&nbsp;            
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2820} src = 'images/bestseller/brand28.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image2920} src = 'images/bestseller/brand29.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3020} src = 'images/bestseller/brand30.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <br/>
                            <br/>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3120} src = 'images/bestseller/brand31.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3220} src = 'images/bestseller/brand32.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3320} src = 'images/bestseller/brand33.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3420} src = 'images/bestseller/brand34.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3520} src = 'images/bestseller/brand35.png' alt = '사진' />  
                                &nbsp;&nbsp;&nbsp;&nbsp;              
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3620} src = 'images/bestseller/brand36.png' alt = '사진' /> 
                                &nbsp;&nbsp;&nbsp;&nbsp;               
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3720} src = 'images/bestseller/brand37.png' alt = '사진' />   
                                &nbsp;&nbsp;&nbsp;&nbsp;             
                            </span>
                            <span className={classes.content1_brand1}>
                                <img className={classes.content1_image3820} src = 'images/bestseller/brand38.png' alt = '사진' />      
                                &nbsp;&nbsp;&nbsp;&nbsp;          
                            </span>        
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className={classes.content1_container1}>
            <div className={classes.content1_flexContainer}>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container3}>
                    <span className={classes.content_text1}>고객센터</span>
                </div>
                <div className={classes.content_container4}>
                    <span className={classes.content_text2}>010-2538-6595</span>
                </div>
                <div className={classes.content_container5}>
                    <span className={classes.content_text3}>평일 09:00 ~ 18:00 <br/> 주말/공휴일 휴무</span>
                </div>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container7}>
                    <span className={classes.content_text4}>입금계좌</span>
                </div>
                <div className={classes.content_container8}>
                    <span className={classes.content_text5}>3333-09-5847103</span>
                </div>
                <div className={classes.content_container9}>
                    <span className={classes.content_text6}>카카오뱅크 | 예금주: 장경빈 <br/> E-MAIL : iamsicoura@naver.com</span>
                </div>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text7}>1:1문의</span>
                    <br/>
                    <span className={classes.content_text8}>궁금하신 사항을 문의해주세요.</span>
                </div>
                <div className={classes.content_container11}>
                    <span className={classes.content_text9}>블로그 & SNS</span>
                    <br/>
                    <span className={classes.content_text10}>
                      구름 북플 &nbsp;  &nbsp; &nbsp; &nbsp; 구름 서재<br/> 구름 트위터 &nbsp;  &nbsp; 구름 페이스북 <br/>구름 인스타그램 <br/>
                    </span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <br/>
                </div>
                <div className={classes.content1_blank}></div>
                <div className={classes.content1_flexItem}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text11}>웹 & 모바일</span>
                    <br/>
                    <span className={classes.content_text12}>Open API <br/> 모바일/앱</span>
                </div>
                <div className={classes.content_container11}>
                    <span className={classes.content_text13}>출판사, 판매자 안내</span>
                    <br/>
                    <span className={classes.content_text14}>제휴 & 마케팅 안내 <br/> 출판사/공급사 안내</span>
                </div>
                </div>
                <div className={classes.content1_blank2}>
                    <br/>
                </div>
            </div>
            </section>   
            <br/>
            <br/>
            <section className={classes.content1_container12}>
                <div className={classes.content1_container20}>
                    <span className={classes.content_text15}>회사소개 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이용약관 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침</span>
                </div>
                <div className={classes.content1_userwrap}>
                  <img className={classes.content1_image10} src='images/bestseller/library.jpg' alt='photo' />
                  <div className={classes.image_text_overlay}>
                    <div className={classes.content1_text10}>
                      <p>구름 대표 &nbsp;  : &nbsp; 이경찬 &nbsp; | &nbsp; 사업자 등록번호 &nbsp; : &nbsp; 123-45-67890</p>

                      <p>통신판매업번호 &nbsp; : &nbsp; 제2023-동구제봉로92-1234</p>

                      <p>전화&nbsp; : &nbsp; 070-1234-5678 &nbsp; | &nbsp; 개인정보관리자 &nbsp; : &nbsp; 도희권</p>

                      <p>광주 동구 제 92(대성학원) 3층 10강의실</p>

                      <p>E-MAIL &nbsp; : &nbsp; iamdoxoak@naver.com</p>
                      <br/>
                      <br/>
                      <p>Hosting by (주) 구름 Copyright@ GB. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </section>  
          </>
  );
}