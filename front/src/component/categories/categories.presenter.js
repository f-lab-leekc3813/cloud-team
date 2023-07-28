import classes from './categories.module.css';
import { Carousel } from 'react-bootstrap';

export default function CategoriesUI(props) {
    return(
    <>
        <div className={classes.containers}>
            <div className={classes.container}>
                <Carousel>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide01.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>운영진이 추천하는 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide02.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 인기 많은 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.slideImage} src="/images/categori/slide03.jpg" alt="wallpaper" />
                        <Carousel.Caption>
                        <h3>가장 찜이 많은 책</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </>
    )
}