import classes from './Content6.module.css'

function Content6 () {
    return (
        <section className={classes.content6_section}>
            <h1 className={classes.content6_title}>주소</h1>
            <div className={classes.content6_map}>
                지도가 들어갈 예정입니다.
            </div>
            <address className={classes.content6_address}>
                인천 서구 이음2로 29
            </address>
        </section>
    )
}

export default Content6;