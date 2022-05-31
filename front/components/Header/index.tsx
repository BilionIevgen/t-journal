import React from "react";
import Link from "next/link";
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  List,
  ListItem,
  Box,
} from "@material-ui/core";
import Image from "next/image";
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from "@material-ui/icons";
import logo from "../../public/img/logo.svg";
import styles from "./Header.module.scss";
// import { AuthDialog } from '../AuthDialog';
// import { useAppSelector } from '../../redux/hooks';
// import { selectUserData } from '../../redux/slices/user';
// import { PostItem } from '../../utils/api/types';
// import { Api } from '../../utils/api';

export const Header: React.FC = () => {
  //   const userData = useAppSelector(selectUserData);
  //   const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  //   const [posts, setPosts] = React.useState<PostItem[]>([]);

  //   const openAuthDialog = () => {
  //     setAuthVisible(true);
  //   };

  //   const closeAuthDialog = () => {
  //     setAuthVisible(false);
  //   };

  //   React.useEffect(() => {
  //     if (authVisible && userData) {
  //       setAuthVisible(false);
  //     }
  //   }, [authVisible, userData]);

  const handleChangeInput = async (e) => {
    setSearchValue(e.target.value);
    try {
      //   const { items } = await Api().post.search({ title: e.target.value });
      //   setPosts(items);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <Box className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <Image
              height={35}
              width={100}
              className="mr-20"
              src={logo}
              alt="Logo"
            />
          </a>
        </Link>

        <Box className={styles.searchBlock}>
          <SearchIcon />
          <input
            value={searchValue}
            onChange={handleChangeInput}
            placeholder="Поиск"
          />
          {/* {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((obj) => (
                  <Link key={obj.id} href={`/news/${obj.id}`}>
                    <a>
                      <ListItem button>{obj.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )} */}
        </Box>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </Box>
      <Box className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
        />

        {/* {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <Box className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </Box>
        )} */}
      </Box>
      {/* <AuthDialog onClose={closeAuthDialog} visible={authVisible} /> */}
    </Paper>
  );
};
