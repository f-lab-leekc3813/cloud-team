import classes from './Content1.module.css'


function Content1(){
    return(
        <section className={classes.content1_containers}>
            <div className={classes.content1_container}>
                <div className={classes.content1_container1}>
                    <h1 className={classes.content1_container2}>
                        <strong>복비없이 투명한</strong>
                        <br/>
                        <strong>부동산 직거래</strong>
                    </h1>

                    <p className={classes.content1_container3}>
                        이웃이 살던 집, 당근마켓에서

                        <br/>
                        편하게 직거래해보세요
                    </p>
                </div>
                <div className={classes.content1_container4}>
                    <span className={classes.content1_container5}>
                        <img className={classes.content1_container6} src = 'images/estate/house.png' alt = '사진' />                
                    </span>
                </div>
            </div>
        </section>

    
    )
}

export default Content1;