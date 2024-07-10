var styles = `
:root {
        color-scheme: light dark;
    }

    html {
        --font-family: system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        "Helvetica Neue",
        Arial,
        "Noto Sans",
        sans-serif,
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji";
        --primary: #8534ff;
        --primary-alt: #000;
        --primary-alt-dark: #7a6e64;
        --text-color: #a3a5aa;
        --text-color-alt: #a57562;
        --link-color: #a3a5aa;
        --table-bg: #232323;
        --body-bg: #262626;
        --line-color: #828282;
        --border-color: #f6f6ef;
        --border-radius: 4px;
        --smaller: 0.8em;

        font-size: 16px;
        color: var(--text-color);
    }

    @media (prefers-color-scheme: dark) {
        html {
            --text-color: #a3a5aa;
            --link-color: #7462a5;
            --text-color-alt: #a3a5aa;
            --text-color-subtext: #d7bdff;
            --primary-alt: #1b1b1c;
            --primary-alt-dark: #c891ff;
            --hover-color: #44475a;
            --border-color: #161617;
            --table-bg: #060606;
            --body-bg: #000;
        }
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-border-horizontal-spacing: 0;
        -webkit-border-vertical-spacing: 0;
        font-family: var(--font-family) !important;
    }

    body {
        padding: 20px 40px 50px;
        background-color: var(--body-bg);
    }

    @media (max-width: 750px) {
        body {
            padding: 0;
        }
    }

    body > center {
        position: relative
    }

    table {
        width: 100%
    }

    td {
        font-size: 1rem;
    }

    br {
        padding: 0;
    }

    /* hide consecutive <br> tags */
    br:has(+input),
    br + br {
        display: none;
    }

    i {}

    font[size="1"] {
        font-size: var(--smaller);
    }

    a,
    a:link {
        color: var(--link-color);
    }

    a:visited {
        color: var(--text-color-alt);
    }


    form {
        padding: 0;
        max-width: 700px;
    }

    textarea,
    input:not([type="submit"]) {
        border: none;
        background-color: var(--primary-alt);
        max-width: 100%;
        border-radius: var(--border-radius);
        box-shadow: 0 0 2px var(--primary-alt-dark);
        padding: calc(var(--smaller)/2) var(--smaller);
        margin: 0 calc(var(--smaller)/2);
    }

    textarea:focus,
    input:not([type="submit"]):focus {
        background-color: var(--table-bg);
    }

    /* button style */
    form input[type="submit"],
    a.morelink {
        display: inline-flex;
        align-items: center;
        padding: calc(var(--smaller) / 2) var(--smaller);
        margin: 0.75rem 0.25rem 0;
        border-radius: var(--border-radius);
        border: none;
        background-color: var(--primary-alt);
        color: var(--primary-alt-dark) !important;
        box-shadow: 0 0 2px var(--primary-alt-dark);
        line-height: var(--smaller);
        font-size: var(--smaller);
        text-decoration: none !important;
        text-transform: capitalize;
        letter-spacing: 0.2px;
        cursor: pointer;
    }

    form input[type="submit"]:hover,
    a.morelink:hover {
        text-decoration: underline !important;
    }

    /* --- LOGIN / CREATE ACCOUNT --*/
    html:not([op]) body {
        background-color: var(--table-bg);
    }

    html:not([op]) b {
        display: inline-block;
        margin-top: 1rem;
    }

    a[href="forgot"] {
        display: inline-block;
        margin-top: -1rem;
        padding: 0.75rem;
        color: var(--text-color-alt) !important;
        font-style: italic;
        text-decoration: none;
        font-size: var(--smaller);
    }

    /* --- USER PROFILE --- */
    html[op="user"] #pagespace + tr table {
        padding: 9.75rem;
        max-width: 700px;
    }

    html[op="user"] td table:has(.athing) td {
        padding: 0.25rem;
        width: 100%;
    }

    /* field labels */
    html[op="user"] td table:has(.athing) tr td:first-child {
        width: auto;
        min-width: 120px;
        padding-right: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    /* --- TABLE / LAYOUT --- */
    #hnmain {
        max-width: 1000px;
        overflow: hidden;
        background: var(--table-bg);
        border-radius: var(--border-radius);
        box-shadow: 0 0 6px -3px var(--primary-alt-dark);
    }

    /* only add padding for parent table cells */
    #hnmain > tbody > tr:not(:first-child):not(:has(.yclinks)) > td:has([class]) {
        padding: 1rem;
        width: 100%;
    }

    .morespace {
        display: none;
    }

    .morespace + tr td {
        padding: 0.5rem 0;
    }

    .spacer {
        height: 1rem !important;
    }

    /* error message shown if not logged in when making comment */
    html[op="x"] #hnmain > tbody > tr:last-child td {
        color: transparent;
    }

    /* --- HEADER --- */
    td[bgcolor="#ff6600"] {
        background: linear-gradient(#0a0a0a, #0a0a0a);
    }

    td[bgcolor="#000000"] {
        background: linear-gradient(#111111, #2c2b2a);
    }

    td[bgcolor]:has(.hnname) {
        padding: 0.5rem 1rem;
    }
    img[src="y18.svg"]{
        filter: saturate(5) grayscale(1) contrast(10) !important;
        border-radius:5px !important;

    }

    td[bgcolor]:has(.hnname) > table td {
        height: auto !important;
        line-height: 1rem !important;
        vertical-align: middle;
    }

    .pagetop {
        color: #29ffad;
        line-height: 1;
        font-weight: 500;
        font-size: var(--smaller);
        padding: 0 0.5rem;
    }

    .pagetop a,
    .pagetop a:visited {
        color: #cbcaff;
    }

    .pagetop a:hover,
    .sitebit a:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }

    .sitebit a:hover {
        text-decoration-color: var(--primary);
    }

    /* 'hacker news' title */
    .hnname {
        margin-right: 0.5rem;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 500;
    }

    .hnname a:hover {
        text-decoration: none !important;
    }

    #me {
        font-weight: 600;
        font-style: italic;
    }

    #karma {
        font-size: var(--smaller);
        line-height: 1rem;
        display: inline-flex;
        align-items: center;
        cursor: grabbing;
    }

    /* can't remember what this was supposed to hide */
    span:not([class])[id]:not(#karma) {
        display: none;
    }

    /* --- ARTICLE --- */
    .rank {
        color: var(--text-color-alt);
        font-weight: 500;
    }

    .title {
        font-size: 1rem;
        vertical-align: middle;
        overflow: unset;
    }

    .title .titleline a {
        padding-inline: 5px;
    }

    .title .titleline a:hover {
        background-color: var(--hover-color);

        border-radius: 5px;
    }

    .title .titleline {
        width: 100%;
        font-weight: 500;
        display: inline-flex;
        justify-content: space-between;
    }

    /* transparent parantheses around url */
    .titleline .sitebit {
        color: transparent;
    }

    .titleline .sitebit:before {
        content: '➹';
        font-size: 1rem;
        color: var(--text-color-alt);
    }

    .subtext span.subline,
    .subtext span.subline a {
        display: inline-block;
        color: var(--text-color-subtext);
        font-size: 0.9rem;
        padding: 2px 0;
        padding-inline: 5px;
    }

    .subtext span.subline a:visited {
        color: var(--text-color-alt);
    }

    .subtext span.subline a:hover {
        background-color: var(--hover-color);

        border-radius: 5px;
    }

    .subtext .score {
        color: var(--text-color-subtext);
        font-weight: 600;
        border-radius: var(--border-radius);
    }

    /* ---- COMMENT PAGE ---- */
    table.itemlist,
    table.fatitem,
    table.comment-tree {
        /*padding: 1em;*/
        position: relative;
    }

    table.fatitem {
        padding-bottom: 0.75rem;
        margin-bottom: 0.75rem;
        border-bottom: 2px solid var(--primary-alt);
    }

    td.default {
        width: 100%;
        position: relative;
        padding: 0;
        font-size: 0.95rem;
    }



    .toptext,
    form[action="comment"] {
        padding: 2rem 0;
        margin: 1em 0 0;
    }

    /* comment: header/author/etc */
    .comhead {
        font-size: var(--smaller);
        border-radius: var(--border-radius);
        color: var(--text-color-alt);
    }

    a.hnuser {
        font-weight: 500;
    }

    .comment {
        font-size: 0.95rem;
        color: var(--text-color);
        margin: 0 4 4rem;
        padding: 0.4rem 0.8rem;
    }

    .c00,
    .c00 a:link {
        color: var(--text-color);
    }

    .reply {
        margin-top: 0.8rem;
        text-transform: capitalize;
    }

    .reply u,
    .reply a:link,
    .reply a:visited {
        color: var(--text-color-alt);
    }

    /* --- UPVOTE/DOWNVOTE LINKS --- */
    .votelinks {
        position: relative;
        text-align: center;
        padding: 0;
        --icon-size: 1rem;
    }

    .votelinks center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--table-bg);
        padding: 0 0.25rem;
    }

    .votelinks a.nosee {
        visibility: visible;
        font-weight: bold;
    }

    .votearrow {
        background: none;
        margin: 0;
        width: auto;
        height: auto;
        transform: unset !important;
    }

    .votearrow:before {
        width: 1rem;
        height: 1rem;
        padding: 1px;
        display: block;
        line-height: 1;
        font-size: 0.8em;
        text-align: center;
        border-radius: 50%;
        color: var(--text-color-alt);
    }

    .votearrow[title="upvote"]:before {
        content: '↑';
    }

    .votearrow[title="downvote"]:before {
        content: '↓';
    }

    html[op="news"] .votearrow:before,
    .votelinks a:hover > .votearrow:before,
    .votelinks a.nosee > .votearrow:before {
        color: var(--primary);
    }

    /* ---- FOOTER ---- */
    #hnmain > tbody > tr:has(.yclinks) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        transform: translateY(100%);
        z-index: 99;
        padding: 1rem 0;
    }

    /* footer: hide orange horizontal bar above footer */
    #hnmain > tbody > tr:has(.yclinks) table {
        display: none;
    }

    .yclinks {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--text-color-alt);
        font-size: 0.4rem;
        line-height: 0.4rem;
    }

    .yclinks a:link,
    form[action="//hn.algolia.com/"] {
        color: var(--text-color-alt);
        font-size: 0.8rem;
        text-transform: uppercase;
    }

    .yclinks a:hover {
        text-decoration: underline;
    }
`

var styleSheet = document.createElement("style")
styleSheet.textContent = styles
document.head.appendChild(styleSheet)
