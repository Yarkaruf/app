import React from "react";
import Router from "next/router";
import { NextPageContext } from "next";

const redirect = (to: string | ((url: string) => string)) =>
  class extends React.Component {
    static async getInitialProps({ req, res }: NextPageContext) {
      if (res) {
        res.writeHead(302, {
          Location: typeof to === "function" ? to(req?.url!) : to
        });
        res.end();
      } else {
        Router.push(typeof to === "function" ? to(Router.asPath) : to);
      }
      return {};
    }
  };

export default redirect;
