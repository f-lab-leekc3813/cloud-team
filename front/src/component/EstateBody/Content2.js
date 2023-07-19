import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import classes from './Content2.module.css';

function Content2 () {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/croll/estate_page');
          const responseData = response.data;

          const halfwayIndex = Math.ceil(responseData.length / 2);
          const slicedData1 = responseData.slice(0, halfwayIndex);
          const slicedData2 = responseData.slice(halfwayIndex);

          setData1(slicedData1);
          setData2(slicedData2);

          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <section className={classes.content2_containers}>
            <h2 className={classes.content2_title}>
                인기 부동산 직거래 게시글
            </h2>
            <div className={classes.content2_container}>
                {data1.map((data) => {
                    return(
                        <div key={data.id} className={classes.content2_box}>
                            <Link to={`/estate/${data.name}`}>
                                <article className={classes.content2_box1}>
                                     <div className={classes.content2_boximage}>
                                         <span className={classes.content2_boxspan} >
                                             <img className={classes.content2_img1}src={data.image} alt='사진' />
                                         </span>
                                     </div>
                                     <div className={classes.content2_boxcontent}>
                                         <div className={classes.content2_boxname}>
                                             {data.name}
                                         </div>
                                         <div className={classes.content2_boxregion}>
                                             {data.region}
                                         </div>
                                         <div className={classes.content2_boxinfo1}>
                                             {data.info1}
                                         </div>
                                     </div>
                                </article>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className={classes.content2_secondcontainer}>
                <div className={classes.content2_insidecontainer2}>
                    <span className={classes.content2_insidecontainer3} >
                        <img className={classes.content2_img2} src="/images/estate/secondhouse.png" alt='사진' />
                    </span>
                </div>
                <div className={classes.content2_insidecontainer4}>
                    <h1 className={classes.content2_insidetext}>
                        복비 없이 투명한 부동산 직거래 구름마켓 내 근처 탭에서 바로 찾아보세요!
                    </h1>
                </div>
                <span className={classes.content2_button}  type="button">
                    앱 다운로드 하기
                </span>
            </div>
            <div className={classes.content2_container}>
                {data2.map((data) => {
                    return(
                        <div key={data.id} className={classes.content2_box}>
                            <Link to={`/estate/${data.name}`}>
                           <article className={classes.content2_box1}>
                                <div className={classes.content2_boximage}>
                                    <span className={classes.content2_boxspan} >
                                        <img className={classes.content2_img1}src={data.image} alt='사진' />
                                    </span>
                                </div>
                                <div className={classes.content2_boxcontent}>
                                    <div className={classes.content2_boxname}>
                                        {data.name}
                                    </div>
                                    <div className={classes.content2_boxregion}>
                                        {data.region}
                                    </div>
                                    <div className={classes.content2_boxinfo1}>
                                        {data.info1}
                                    </div>
                                </div>
                           </article>
                           </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Content2;