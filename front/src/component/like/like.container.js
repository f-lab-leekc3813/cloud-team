
import LikeUI from "./Like.presenter"

export default function LikePage(props) {

    const handleClose = (e) => {
        e.stopPropagation();
    }
    
    return (
        <>
        {props.isOpen ?
            <LikeUI close = {props.close}
            handleClose = {handleClose}
             />
         : null
        }
        </>
    )
}