import classes from "./Like.module.css";

export default function LikeUI(props) {

    return (
        <div className={classes.modal} onClick={props.close} >
            <div className ={classes.likeModal} onClick={props.handleClose}>
                <div>도희건님의 찜 목록</div>
                <h1>리스트 쭈루루루룩</h1>
            </div>
        </div>
    )
}