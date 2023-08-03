import LikeUI from "./Like.presenter.js";
import { useRecoilState } from "recoil";
import { LikeState } from "../../store/LikeState.js";

export default function LikePage(props) {

    const [like, setLikeState] = useRecoilState(LikeState);

    const handleClose = (e) => {
        e.stopPropagation();
    }
    
    return (
        <>
        {props.isOpen ?
            <LikeUI 
            close = {props.close}
            handleClose = {handleClose}
            like = {like}
             />
         : null
        }
        </>
    )
}