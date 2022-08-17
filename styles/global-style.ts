import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    html,
    body, * {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    img {
        border: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    * {
        box-sizing: border-box;
    }
`