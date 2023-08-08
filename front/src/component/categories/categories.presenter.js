import classes from './categories.module.css';
import React from 'react';

export default function CategoriesUI(props) {

    return (
        <>
            <div className={classes.containers}>
                <div className={classes.listContainers}>
                    {props.loading ?
                        <div> 로딩중</div>
                        :
                        props.data ?
                            (props.data.map((data) => {
                                return (
                                    <div className={classes.listContainer}>
                                        <div className={classes.listUl}>
                                            <div className={classes.listLi}>
                                                <div className={classes.listA}
                                                    onClick={props.onClickDetail}
                                                    categories={data.categories}
                                                    title={data.Title}
                                                    image={data.image}
                                                    profileName={data.profileName}
                                                    publisheDate={data.publisheDate}
                                                    reviewScore={data.reviewScore}
                                                    reviewSummary={data.reviewSummary}
                                                    reviewText={data.reviewText}
                                                    key={data.Title}  >
                                                    <div className={classes.listDiv}>
                                                        <img className={classes.listImg} src={data.image || "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/299600042_380678670861506_5752050165543910974_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MAGEvMFi2eIAX_Smrx3&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBBnjAU2tLU2plnBP5Quz32klNJSZKMB9ngfRmGdzWMvg&oe=64D1F1F3"} alt='책사진' />
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