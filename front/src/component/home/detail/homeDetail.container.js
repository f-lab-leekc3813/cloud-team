const [data, setData] = useState(null)
const [loading, setLoding] = useState(true)

const location = useLocation();

const [detail, setDetail] = useRecoilState(homeDetail);

const navigate = useNavigate();

const onClickDetail = (event) => {
    const title = event.currentTarget.getAttribute("title")
    const image = event.currentTarget.getAttribute("image")
    const categories = event.currentTarget.getAttribute("categories")
    console.log('여기를 클릭')

    const detailData = {
        title: title,
        image : image,
        categories : categories
    }

    setDetail(detailData)
    console.log(detail)
    navigate(`./detail/${title}`)
}
    
useEffect(() => {
    
    const currentPath = window.location.pathname;
    const extractedValue = currentPath.replace(/^\/categories\//, '').replace(/%20/g, ' ');
    console.log(extractedValue)
    
    const fetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/best/many_books`);
            window.scrollTo({ top: 0, behavior: 'smooth' })
            console.log(response.data);
            setData(response.data)
            setLoding(false)
        } catch (error) {
            console.log('데이터를 받아오지 못했습니다', error)
            setLoding(true)
        }
    }
    fetchData();
}, [window.location.pathname]);

return (
    <HomeUI
        data = {data}
        loading = {loading}
        onClickDetail = {onClickDetail}
     />
)