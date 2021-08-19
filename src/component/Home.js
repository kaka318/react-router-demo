
import {Divider} from 'antd';
export const Home = (props) => {
    return(
        <div>
            <p style={{margin:`0 ${props.margin}px`}}>
                <h3>
                    {props.school}
                </h3>
                <p>
                    {props.degree}
                </p>
                <a href={props.link}>{props.link}</a>
                <div>{props.year}</div>
            </p>
            <Divider></Divider>
        </div>
    )
}