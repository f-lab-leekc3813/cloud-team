import classes from './Detail2.module.css';
import dummy from '../../../data/neighborhoodData/detail2.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Detail2 () {
    return(
        <ul className={classes.containers}>
            {dummy.data.map((data) => {
                return(
                <Card key={data.id} style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={data.image}  />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.review}
                    </Card.Text>
                <Button variant="primary">확인하기</Button>
                </Card.Body>
            </Card>
                )
            })}
        </ul>
    )
}

export default Detail2;