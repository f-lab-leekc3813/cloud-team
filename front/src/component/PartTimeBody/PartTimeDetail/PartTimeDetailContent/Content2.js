import classes from './Content2.module.css'

function Content2 (props) {
    return (
        <section className={classes.content2_section}>
            <h1 className={classes.content2_title}>
                <span className={classes.content2_title1}>{props.title_type}</span>
                {props.mainTitle}
            </h1>
            <pre className ={classes.content2_where}>
                {props.m_name} 
                <span className={classes.content2_where}>작성</span>
            </pre>
            
        </section>
    )
}

export default Content2;