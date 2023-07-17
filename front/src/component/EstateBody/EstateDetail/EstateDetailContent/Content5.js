import classes from './Content5.module.css';
import MapComponent from '../../../Map/MapComponent';

function Content5 () {
    return (
        <section className={classes.content5_containers}>
            <h2 className={classes.content5_title}>상세 내용</h2>
            <p className={classes.content5_content}>
            눈썹 모델 구해요~
            잔흔 아예 없음 좋구요 
            있더라도 아주 미세하게 있으시면 
            관계없습니다
            예민한 피부이신분들은 피해주세요~
            노쇼 방지 차원에서 예약금 2만원 보내주시고
            그 날 시술 끝나면 자리에서 바로 예약금 2만원과 함께 7만원 드려요~
            본인 얼굴형 , 니즈에 맞춰 최대한 자연스럽게 해드립니다
            </p>
        </section>
    )
}

export default Content5;