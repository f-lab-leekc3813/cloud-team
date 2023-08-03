import classes from './categories.module.css';

export default function CategoriesUI(props) {
    return(
    <>
        <div className={classes.container}>
        영역입니다(예림)
        title,price,author,image,publisher,publishedDate,categories
        css 는 카멜케이스로 (ex: content1Text, content1Box)
        </div>
    </>
    )
}