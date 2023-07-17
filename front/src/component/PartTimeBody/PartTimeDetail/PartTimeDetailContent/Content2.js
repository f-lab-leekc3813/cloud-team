import classes from './Content2.module.css'

function Content2 () {
    return (
        <section className={classes.content2_section}>
            <h1 className={classes.content2_title}>
                <span className={classes.content2_title1}>마감</span>
                야간운전해주실분~차있음,,20분거리
            </h1>
            <pre className ={classes.content2_where}>
                우리집청과 ・ 
                <span className={classes.content2_where}>작성</span>
            </pre>
            
        </section>
    )
}

export default Content2;