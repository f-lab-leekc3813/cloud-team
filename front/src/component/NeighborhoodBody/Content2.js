import react, {useState} from 'react';


import classes from './Content2.module.css';
import Detail1 from './NeighborhoodDetail/Detail1'
import Detail2 from './NeighborhoodDetail/Detail2';

const content2_list = [{
    id: '1',
    content: '전체'
},{
    id: '2',
    content: '식당'
},{
    id: '3',
    content: '카페'
},{
    id: '4',
    content: '용달/이사'
},{
    id: '5',
    content: '뷰티/미용'
},{
    id: '6',
    content: '헬스/필라테스/요가'
}
]

function Content2 () {
    const [content,setContent] = useState('');

    const hadleClinkButton = (e) => {
        setContent(e.target.value);
        console.log(content);
    }

    return (
        <div className={classes.content2_container}>
            <section className = {classes.content2_main1}>
                <h2 className={classes.content2_title}>
                    다양한 동네가게를 볼 수 있어요
                </h2>
                <div className={classes.contant2_listbar} >
                    <ul className ={classes.content2_ul}>
                        {content2_list.map((content) => {
                            return(
                            <li key={content.id} value={content.id} className = {classes.content2_listitem}>
                                <button className = {classes.content2_item} onClick={hadleClinkButton} value={content.id}>
                                    {content.content}
                                </button>
                            </li>
                            )
                        })} 
                    </ul>
                    <Detail1 />
                </div>
            </section>
            <section className = {classes.content2_main2}>
                <h6 className={classes.main2_title}>
                    동네 이웃이 남긴
                    <br className={classes.main2_titleline} />
                    후기를 찾아보세요
                </h6>
            </section>
            <Detail2 />
        </div>
    )
}

export default Content2;