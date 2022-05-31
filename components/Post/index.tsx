import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import styles from "./Post.module.scss";

export const  Post: React.FC = () => {
    return (
        <Paper elevation={0} className='p-20' classes={{root: styles.paper}}>
            <Typography className={styles.title} variant="h5"> Some text</Typography>
            <Typography className="mt-15 mb-15"> Some text</Typography>
            <Image height={300} width={600}  src="https://media-cdn.tripadvisor.com/media/photo-s/11/b2/85/d8/praga.jpg" alt=""/>
        </Paper>

    );
}  