import { LeftMenu } from "../components/LeftMenu";
import { Post } from "../components/Post";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className='wrapper'>
            <div className="leftSide">
                <LeftMenu/>
            </div>
            <div className="content">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="rightSide"></div>
        </div>
    );
}
