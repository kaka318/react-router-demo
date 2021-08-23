import { Layout } from 'antd';
import React from 'react';

import FootPag from '../component/Page3/Pagination'
import PageContent from '../component/Page3/PageContent'
class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    getDatas(msg) {
        this.setState({
            data: msg
        });
    }
    render() {
        return (
            <Layout>
                <FootPag getdata={this.getDatas.bind(this)} />
            </Layout>
        )
    }

}
export default Page3;