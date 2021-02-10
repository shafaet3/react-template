/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.left}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://newgen-bd.com/"
              target="_blank"
              className={classes.a}
            >
              Newgen Technology Ltd.
            </a>
            &nbsp;All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
