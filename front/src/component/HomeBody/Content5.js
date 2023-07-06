import classes from './Content5.module.css';

const DUMMY_DATA1 = [{
    id: 'p1',
    title: '위닉스제습기',
    price: '50,000원',
    place: '서울 성동구 행당동',
    img:'images/products/product1.png',
    like: '15',
    chat: '3'
},{
    id: 'p2',
    title: 'LG 43인치 UHDtv 팝니다.',
    price: '250,000원',
    place: '경기도 안양시 만안구 안양동',
    img:'images/products/product2.png',
    like: '28',
    chat: '64'
},{
    id: 'p3',
    title: 'lg 레드로 tv',
    price: '50,000원',
    place: '광주 남구 임암동',
    img:'images/products/product3.png',
    like: '21',
    chat: '28'
},{
    id: 'p4',
    title: '아이폰14pro',
    price: '100,000원',
    place: '충남 아산시 배방음',
    img:'images/products/product4.png',
    like: '12',
    chat: '36'
},
]

const DUMMY_DATA2 = [{
    id: 'p1',
    title: '이사가느라 가전 팔아요~! 골라...',
    price: '99원',
    place: '광주 북구 신용동',
    img:'images/products/product5.png',
    like: '28',
    chat: '20'
},{
    id: 'p2',
    title: '발뮤다 더 토트터, 더 오븐 레인지...',
    price: '100,000원',
    place: '경기도 성남시 분당구 이매동',
    img:'images/products/product6.png',
    like: '33',
    chat: '31'
},{
    id: 'p3',
    title: '캠핑테이블',
    price: '10,000원',
    place: '경기도 부천시 중동',
    img:'images/products/product7.png',
    like: '14',
    chat: '15'
},{
    id: 'p4',
    title: '메세타 화목난로',
    price: '30,000원',
    place: '강원도 원주시 단계동',
    img:'images/products/product8.png',
    like: '19',
    chat: '36'
},
]

function Content5 () {
    return(
        <div className={classes.content5_container}>
            <h1 className={classes.content5_title}>중고거래 인기매물</h1>
                <div className={classes.content5_wraper}>
                    <div className={classes.content5_wrap}>
                        <div className={classes.content5_itemRow}>
                                {DUMMY_DATA1.map((item) => {
                                    return(
                                        <div className={classes.item}>
                                            <img className={classes.item_img} src={`${item.img}`} alt = 'content5' />
                                            <h2 className={classes.item_name}>{item.title}</h2>
                                            <h2 className={classes.item_cost}>{item.price}</h2>
                                            <h1 className={classes.item_place}>{item.place}</h1>
                                            <div className={classes.item_chating}>
                                                <span className={classes.item_like}>{`관심 ${item.like}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className={classes.content5_itemRow}>
                                {DUMMY_DATA2.map((item) => {
                                    return(
                                        <div className={classes.item}>
                                            <img className={classes.item_img} src={`${item.img}`} alt = 'content5' />
                                            <h2 className={classes.item_name}>{item.title}</h2>
                                            <h2 className={classes.item_cost}>{item.price}</h2>
                                            <h1 className={classes.item_place}>{item.place}</h1>
                                            <div className={classes.item_chating}>
                                                <span className={classes.item_like}>{`관심 ${item.like}`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className={classes.moreItem_wrap}>
                            <div className={classes.moreItem_btn}>
                                인기매물 더보기
                            </div>
                        </div>
                    </div>
                </div>        
        </div>
    )
};

export default Content5;