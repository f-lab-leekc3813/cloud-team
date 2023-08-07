import classes from './search.module.css';
import React from 'react';

export default function SearchUI(props) {

    return (
        <>
            <div className={classes.containers}>
                <div className={classes.listContainers}>
                    {props.loading ?
                        <div> 정확한 도서명을 입력해 주세요</div>
                        :
                        props.data ?
                            (props.data.map((data) => {
                                return (
                                    <div categories={data.categories} title={data.Title} image={data.image} key={data.Title} className={classes.listContainer}>
                                        <div className={classes.listUl}>
                                            <div className={classes.listLi} onClick={props.onClickDetail}>
                                                <div className={classes.listA}>
                                                    <div className={classes.listDiv}>
                                                        <img className={classes.listImg} src={data.image || "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"} alt='이미지없음' />
                                                    </div>
                                                    <div className={classes.listInfo}>
                                                        <div className={classes.listTitle}>
                                                            {data.Title}
                                                        </div>
                                                        <div className={classes.listCategori}>
                                                            {data.categories}
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* <div className={classes.listJjim}>
                                                    <button type="button" className={classes.Jjim} >

                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (
                                <div>데이터가 없습니다</div>
                            )
                    }
                </div>
            </div>
        </>
    )
}