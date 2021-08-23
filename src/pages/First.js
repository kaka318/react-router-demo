import { Layout, Image } from 'antd';
export default function First() {
    const { Header, Content, Footer } = Layout;
    return (
        <div style={{ display: "flex", height: '100%', width: '100%', alignItems: "center", justifyContent: "center",background:'white'}}>
            <div>
                <Header style={{ background: 'white' }}>
                    <h1>This is a Test Page</h1>
                </Header>
                <Content style={{ padding: "0 20px" }}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Content>
                <Footer style={{ background: "white" }}>
                    <h1>HaA HaA HaA HaA HaA</h1>
                </Footer>
            </div>
        </div>
    )
}