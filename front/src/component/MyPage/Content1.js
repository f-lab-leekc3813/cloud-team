import classes from './Content1.module.css'
import dummy1 from '../../data/EstateData/Content1.json'

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
                    <p1 className={classes.content1_container16}>
                        회원탈퇴 {">"}
                    </p1>
                </div>
            </div>
            <div className={classes.content1_jjim4}>
            <h2 className={classes.content2_title}>
                인기 부동산 직거래 게시글
            </h2>
            <div className={classes.content2_jjim}>
                {dummy1.data.map((data) => {
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
        </div>
    </div>
    </section>
    );
}

export default Content1;
