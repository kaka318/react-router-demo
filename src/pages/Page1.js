import { Card } from 'antd'
import { aboutData } from '../data/page1';
export default function Third() {
    const { Meta } = Card;
    return (
        <div style={{ display: "flex",width:'100%', background: 'white', alignItems: "center", justifyContent: "center"}}>
            <div style={{width:'70%'}}>
                {aboutData.map((data, index) => (
                    <Card key={index}
                        hoverable
                        style={{ width: '100%', marginTop: 40 }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                ))}

            </div>
        </div>
    )
}