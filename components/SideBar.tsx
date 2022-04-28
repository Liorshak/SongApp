import NextImage from "next/image";
import NextLink from "next/link";
import { usePlaylist } from '../lib/hooks';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  // Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playLists = new Array(50).fill(1).map((_, i) => `PlayList ${i + 1}`);

const SideBar = () => {
  const {playlists}=usePlaylist()
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      color="gray"
      paddingX="5px"
    >
      <Box paddingY="20px">
        <Box width="120px" paddingX="20px" marginBottom="20px">
          <NextImage src="/logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay color="white">
                      <ListIcon as={menu.icon} marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay color="white">
                      <ListIcon as={menu.icon} marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginLeft="20px" width="80%" color="gray.800" />
      </Box>
      <Box overflowY="auto" height="66%" paddingX="20px">
        <List spacing={2}>
          {playlists.map((playlist) => (
            <ListItem key={playlist.id}>
              <LinkBox>
                <NextLink href={{
                  pathname: '/playlist/[id]',
                  query:{id: playlist.id},
                } }passHref>
                  <LinkOverlay>{playlist.name}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
export default SideBar;
