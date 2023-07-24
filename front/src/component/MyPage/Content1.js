import Button from 'react-bootstrap/Button';

import classes from './Content1.module.css'
import dummy3 from '../../data/MyPageData/Content1.json'
import dummy4 from '../../data/MyPageData/Content2.json'

function Content1(){
    return(
        <section className={classes.content1_container1}>
        <div className={classes.content1_containe2}>
            <div className={classes.content1_container2}>
                <h1 className={classes.content1_container3}>
                    <div className={classes.content1_container9}>
                        <img className={classes.header_image1} src='/images/cloudlogo.jpg' alt='로고' />
                        <p1 className={classes.content1_container10}>
                            구름마켓
                        </p1>
                        <img className={classes.header_image2} src='/images/cloudlogo.jpg' alt='로고' />
                    </div>
                <span className={classes.content1_container5}>
                    <img className={classes.content1_container6} src = 'images/mypage/human.png' alt = '사진' />                
                </span>
                <p1 className={classes.content1_container7}>
                    경빈
                </p1>
                <div className={classes.content1_container11}>
                    <p>iamdoxoak@naver.com</p>
                </div>
                </h1>
                <div className={classes.content1_container14}>
                    <p1 className={classes.content1_text1}>
                    기본정보
                    </p1>

                </div>
                <div className={classes.content1_container12}>
                    <img className={classes.content1_image3} src='images/mypage/phone.jpg' alt='휴대전화' />
                    <span className={classes.content1_container13}>
                        휴대전화 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +82 10-2***-6***
                    </span>
                    <span className={classes.content1_container20} button id="realty_app_download" type="button">
                        수정
                    </span>
                </div>
                <br/>
                <div className={classes.content1_container12}>
                    <img className={classes.content1_image3} src='images/mypage/email.jpg' alt='휴대전화' />
                    <span className={classes.content1_container13}>
                        이메일 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ia******@n*******.com
                    </span>
                    <span className={classes.content1_container20} button id="realty_app_download" type="button">
                        수정
                    </span>
                </div>
                <br/>
                <div className={classes.content1_container12}>
                    <img className={classes.content1_image3} src='images/mypage/address.jpg' alt='휴대전화' />
                    <span className={classes.content1_container13}>
                        배송지 관리 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 광주광역시 북구 군왕로311
                    </span>
                    <span className={classes.content1_container20} button id="realty_app_download" type="button">
                        수정
                    </span>
                </div>
                <div className={classes.content1_container15}>
                <span className={classes.content1_container16} button id="realty_app_download" type="button">
                        회원탈퇴 {">"}
                    </span>
                </div>
            </div>
        </div>
        <div className={classes.content1_container17}>
            <div className={classes.content1_container18}>
                <div className={classes.content1_container19}>
                    <div className={classes.content1_container24}>
                        <img className={classes.content1_image4} src='images/mypage/delivery.png' alt='배송' />
                        <br/>
                        <span className={classes.content1_text2} button id="realty_app_download" type="button">
                        주문ㆍ배송
                        </span>
                    </div>
                </div>
                <div className={classes.content1_container21}>
                    <div className={classes.content1_container24}>
                        <img className={classes.content1_image4} src='images/mypage/couponlogo.png' alt='쿠폰' />
                        <br/>
                        <span className={classes.content1_text3} button id="realty_app_download" type="button">
                        보유 쿠폰
                        </span>
                    </div>
                </div>
                <div className={classes.content1_container22}>
                    <div className={classes.content1_container24}>
                        <img className={classes.content1_image5} src='images/mypage/basket.png' alt='장바구니' />
                        <br/>
                        <span className={classes.content1_text4} button id="realty_app_download" type="button">
                        장바구니
                        </span>
                    </div>
                </div>
                <div className={classes.content1_container23}>
                    <div className={classes.content1_container24}>
                        <img className={classes.content1_image6} src='images/mypage/humann.png' alt='배송' />
                        <br/>
                        <span className={classes.content1_text5} button id="realty_app_download" type="button">
                        구매 내역
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.content1_container26}>
                <p1 className={classes.content1_text6}>
                    최근 본 상품
                </p1>
            </div>
            <div className={classes.content1_container27}>
                <p1 className={classes.content1_text6}>
                    찜한 상품
                </p1>
            </div>
            <div className={classes.content1_container25}>
            {dummy3.data.map((data) => {
                    return(
                        <div key={data.id} className={classes.content2_box}>
                           <article className={classes.content2_box1}>
                                <div className={classes.content2_boximage}>
                                    <span className={classes.content2_boxspan} >
                                        <img className={classes.content2_img1}src={data.image} alt='사진' />
                                    </span>
                                </div>
                                <div className={classes.content2_boxcontent}>
                                    <div className={classes.content2_boxname}>
                                        {data.name}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxinfo1}>
                                        {data.info1}
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
            </div>
            <div className={classes.content1_container28}>
            {dummy4.data.map((data) => {
                    return(
                        <div key={data.id} className={classes.content2_box}>
                           <article className={classes.content2_box1}>
                                <div className={classes.content2_boximage}>
                                    <span className={classes.content2_boxspan} >
                                        <img className={classes.content2_img1}src={data.image} alt='사진' />
                                    </span>
                                </div>
                                <div className={classes.content2_boxcontent}>
                                    <div className={classes.content2_boxname}>
                                        {data.name}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxinfo1}>
                                        {data.info1}
                                    </div>
                                </div>
                           </article>
                        </div>
                    )
                })}
                <Button variant="warning" style={{marginRight : '5px', fontSize : '12px'}}>찜</Button>
            </div>
        </div>
    </section>
    );
}

export default Content1;
