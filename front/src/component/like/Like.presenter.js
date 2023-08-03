import classes from "./Like.module.css";

export default function LikeUI(props) {

    return (
        <div className={classes.modal} onClick={props.close} >
            <div className ={classes.likeModal} onClick={props.handleClose}>
                <div>도희건님의 찜 목록 profileName</div>
                {props.like.map(
                    (like) => {
                    return (<div key={like.title}>{like.title}</div>)
                })}
            </div>
        </div>
    )
}