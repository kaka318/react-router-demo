import { Pagination, Layout, PageHeader } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';

import { page3data } from '../../data/page3'
import PageContent from './PageContent';
class FootPag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
        }
    }
    onPageChange = (page) => {
        this.setState({
            current: page,
        }
        );
    }
    goBack = () => {
        if (this.state.current > 1) {
            this.setState({
                current: this.state.current - 1
            })
        }
    }
    render() {
        const { Content, Footer } = Layout;
        let result = page3data.find((item) => item.index === this.state.current).content;
        return (
            <>
                <Header style={{background:'white',height:'auto'}}>
                    <PageHeader
                        className='site-page-header'
                        onBack={this.goBack}
                        title='Go Back'
                        subTitle='This is subtitle'
                    />
                </Header>
                <Content style={{background:'white'}}>
                    <PageContent data={result} />
                </Content>
                <Footer style={{background:'white'}}>
                    <Pagination
                        current={this.state.current}
                        total={85}
                        showSizeChanger
                        showQuickJumper
                        onChange={this.onPageChange}
                        showTotal={total => `Total ${total} items`}
                    />
                </Footer>

            </>
        )
    }

}
export default FootPag;