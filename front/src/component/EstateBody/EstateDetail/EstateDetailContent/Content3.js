import classes from './Content3.module.css';

function Content3 (props) {
    return(
        <section className = {classes.content3_containers}>
            <h1 className = {classes.content3_title}>눈썹모델구합니다</h1>
            <pre className = {classes.content3_titlebottom}>
                {props.pyung}
                <span>작성</span>
            </pre>
        </section>
    )
}

export default Content3;