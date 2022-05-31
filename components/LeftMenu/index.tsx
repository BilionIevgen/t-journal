import { Box, Button } from "@material-ui/core";
import { WhatshotOutlined, MessageOutlined, TrendingUpOutlined } from "@material-ui/icons";
import styles from "./LeftMenu.module.scss";

export const  LeftMenu: React.FC = () => {
    return (
        <Box className={styles.menu}>
            <ul>
                <li>
                    <Button><WhatshotOutlined/>Лента</Button>
                </li>
                <li>
                    <Button><MessageOutlined/>Сообщения</Button>
                </li>
                <li>
                    <Button><TrendingUpOutlined/>Рейтинг</Button>
                </li>
            </ul>
        </Box>

    );
}  