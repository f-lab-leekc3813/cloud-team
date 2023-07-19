import classes from './Content5.module.css'

function Content5 (props) {
    return (
        <section className={classes.content5_section}>
            <h2 className={classes.content5_title}>상세내용</h2>
            <p className={classes.content5_content}>
            {props.info}
            </p>
        </section>
    )
}

export default Content5;