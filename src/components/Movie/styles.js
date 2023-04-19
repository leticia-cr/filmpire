import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "5px 0",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "150px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "250px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
