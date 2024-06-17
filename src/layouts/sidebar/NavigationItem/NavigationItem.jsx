import { ListItem, Box, List, useTheme } from "@mui/material";
import DropdownItem from "./DropdownItem";
import NavItemButton from "./NavItemButton";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationItem = ({
  text,
  icon,
  link,
  dropdownItems,
  active,
  setActive,
  userRole,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const normalizeText = (text) => {
    return text.toLowerCase().replace(/[\s_-]/g, "");
  };
  const lcText = normalizeText(text);

  //FIXME : This can cause issue with nested item
  const isActive = pathname === pathname.startsWith(`${link}/`) ? lcText : "";

  const isDropdown = dropdownItems && dropdownItems.length > 0;
  const navButtonBackgroundColor =
    theme.palette.mode === "dark" ? "#37404a" : "#e9eaeb";

  const onToggleDropdown = () => {
    if (isDropdown) {
      setActive(active === lcText ? "" : lcText);
    } else {
      onItemClick();
    }
  };

  const onItemClick = () => {
    navigate(link);
    setActive(lcText);
  };

  return (
    <Box>
      <ListItem
        key={text}
        sx={{
          textAlign: "center",
        }}
      >
        <NavItemButton
          text={text}
          icon={icon}
          lcText={lcText}
          theme={theme}
          active={isActive}
          navButtonBackgroundColor={navButtonBackgroundColor}
          isDropdown={isDropdown}
          onToggleDropdown={onToggleDropdown}
        />
      </ListItem>
      <List sx={{ px: 2, py: 0 }}>
        {isDropdown &&
          active === lcText &&
          dropdownItems.map(({ text: itemText, link: itemLink }) => (
            <DropdownItem
              key={itemText}
              itemText={itemText}
              itemLink={itemLink}
              active={active}
              setActive={setActive}
            />
          ))}
      </List>
    </Box>
  );
};

export default NavigationItem;
