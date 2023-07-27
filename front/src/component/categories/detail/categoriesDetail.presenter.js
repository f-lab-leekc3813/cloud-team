import classes from './categoriesDetail.module.css';

export default function CategoriesDetailUI(props) { 
    return (<>
    <div className={classes.container}>
        HTML 영역입니다(지송)
        title,price,author,image,publisher,publishedDate,categories
        description,reviewsSummary,reviewText
        css 는 카멜케이스로 (ex: content1Text, content1Box)
    </div>
    </>)
}