import { Home } from '../component/Home';
import { homedata } from '../data/homepage';
import { Layout } from 'antd'
export default function HomePage() {
    const { Content } = Layout;
    return (
        <Content
            style={{width:'100%', minHeight: 280, background: 'white',display:'flex',justifyContent:'center',alignItems:'center'}}
        >
           <div>
           {
                homedata.map((data, index) => (
                    <Home key={index} school={data.school} degree={data.degree} link={data.link} year={data.year} margin={50}/>
                    
                    ))
            }
           </div>
        </Content>
    )
}