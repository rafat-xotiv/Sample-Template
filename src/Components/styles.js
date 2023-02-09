import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    padding: "50px ",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "right",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: "50px 0",
  },
});

export default useStyles;
