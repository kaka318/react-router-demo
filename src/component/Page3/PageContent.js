import { Typography } from 'antd'
function PageContent(props) {
    const { Paragraph } = Typography;
    return (
        <>
            <Paragraph style={{margin:'0 40px'}}>
                {props.data}
            </Paragraph>
        </>
    )
}
export default PageContent;