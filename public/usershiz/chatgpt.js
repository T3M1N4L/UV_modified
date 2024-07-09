var styles = `
   /* cyrillic-ext */
  @import url('https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github-dark.min.css');
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2) format('woff2');
    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwhsk.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwhsk.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwhsk.woff2) format('woff2');
    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwhsk.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* [0] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.0.woff2) format('woff2');
    unicode-range: U+1f1e6-1f1ff;
  }
  /* [1] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.1.woff2) format('woff2');
    unicode-range: U+200d, U+2620, U+26a7, U+fe0f, U+1f308, U+1f38c, U+1f3c1, U+1f3f3-1f3f4, U+1f6a9, U+e0062-e0063, U+e0065, U+e0067, U+e006c, U+e006e, U+e0073-e0074, U+e0077, U+e007f;
  }
  /* [2] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.2.woff2) format('woff2');
    unicode-range: U+23, U+2a, U+30-39, U+a9, U+ae, U+200d, U+203c, U+2049, U+20e3, U+2122, U+2139, U+2194-2199, U+21a9-21aa, U+23cf, U+23e9-23ef, U+23f8-23fa, U+24c2, U+25aa-25ab, U+25b6, U+25c0, U+25fb-25fe, U+2611, U+2622-2623, U+2626, U+262a, U+262e-262f, U+2638, U+2640, U+2642, U+2648-2653, U+2660, U+2663, U+2665-2666, U+2668, U+267b, U+267e-267f, U+2695, U+269b-269c, U+26a0, U+26a7, U+26aa-26ab, U+26ce, U+26d4, U+2705, U+2714, U+2716, U+271d, U+2721, U+2733-2734, U+2747, U+274c, U+274e, U+2753-2755, U+2757, U+2764, U+2795-2797, U+27a1, U+27b0, U+27bf, U+2934-2935, U+2b05-2b07, U+2b1b-2b1c, U+2b55, U+3030, U+303d, U+3297, U+3299, U+fe0f, U+1f170-1f171, U+1f17e-1f17f, U+1f18e, U+1f191-1f19a, U+1f201-1f202, U+1f21a, U+1f22f, U+1f232-1f23a, U+1f250-1f251, U+1f310, U+1f3a6, U+1f3b5-1f3b6, U+1f3bc, U+1f3e7, U+1f441, U+1f499-1f49c, U+1f49f-1f4a0, U+1f4a2, U+1f4ac-1f4ad, U+1f4b1-1f4b2, U+1f4b9, U+1f4db, U+1f4f2-1f4f6, U+1f500-1f50a, U+1f515, U+1f518-1f524, U+1f52f-1f53d, U+1f549, U+1f54e, U+1f5a4, U+1f5e8, U+1f5ef, U+1f6ab, U+1f6ad-1f6b1, U+1f6b3, U+1f6b7-1f6bc, U+1f6be, U+1f6c2-1f6c5, U+1f6d0-1f6d1, U+1f6d7, U+1f6dc, U+1f7e0-1f7eb, U+1f7f0, U+1f90d-1f90e, U+1f9e1, U+1fa75-1fa77, U+1faaf;
  }
  /* [3] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.3.woff2) format('woff2');
    unicode-range: U+231a-231b, U+2328, U+23f0-23f3, U+2602, U+260e, U+2692, U+2694, U+2696-2697, U+2699, U+26b0-26b1, U+26cf, U+26d1, U+26d3, U+2702, U+2709, U+270f, U+2712, U+fe0f, U+1f302, U+1f321, U+1f392-1f393, U+1f3a9, U+1f3bd, U+1f3ee, U+1f3f7, U+1f3fa, U+1f451-1f462, U+1f484, U+1f489-1f48a, U+1f48c-1f48e, U+1f4a1, U+1f4a3, U+1f4b0, U+1f4b3-1f4b8, U+1f4bb-1f4da, U+1f4dc-1f4f1, U+1f4ff, U+1f50b-1f514, U+1f516-1f517, U+1f526-1f529, U+1f52c-1f52e, U+1f550-1f567, U+1f56f-1f570, U+1f576, U+1f587, U+1f58a-1f58d, U+1f5a5, U+1f5a8, U+1f5b1-1f5b2, U+1f5c2-1f5c4, U+1f5d1-1f5d3, U+1f5dc-1f5de, U+1f5e1, U+1f5f3, U+1f6aa, U+1f6ac, U+1f6bd, U+1f6bf, U+1f6c1, U+1f6cb, U+1f6cd-1f6cf, U+1f6d2, U+1f6e0-1f6e1, U+1f6f0, U+1f97b-1f97f, U+1f9af, U+1f9ba, U+1f9e2-1f9e6, U+1f9ea-1f9ec, U+1f9ee-1f9f4, U+1f9f7-1f9ff, U+1fa71-1fa74, U+1fa79-1fa7b, U+1fa86, U+1fa91-1fa93, U+1fa96, U+1fa99-1faa0, U+1faa2-1faa7, U+1faaa-1faae;
  }
  /* [4] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.4.woff2) format('woff2');
    unicode-range: U+265f, U+26bd-26be, U+26f3, U+26f8, U+fe0f, U+1f004, U+1f0cf, U+1f380-1f384, U+1f386-1f38b, U+1f38d-1f391, U+1f396-1f397, U+1f399-1f39b, U+1f39e-1f39f, U+1f3a3-1f3a5, U+1f3a7-1f3a9, U+1f3ab-1f3b4, U+1f3b7-1f3bb, U+1f3bd-1f3c0, U+1f3c5-1f3c6, U+1f3c8-1f3c9, U+1f3cf-1f3d3, U+1f3f8-1f3f9, U+1f47e, U+1f4e2, U+1f4f7-1f4fd, U+1f52b, U+1f579, U+1f58c-1f58d, U+1f5bc, U+1f6f7, U+1f6f9, U+1f6fc, U+1f93f, U+1f941, U+1f945, U+1f947-1f94f, U+1f9e7-1f9e9, U+1f9f5-1f9f6, U+1fa70-1fa71, U+1fa80-1fa81, U+1fa83-1fa85, U+1fa87-1fa88, U+1fa94-1fa95, U+1fa97-1fa98, U+1faa1, U+1faa9;
  }
  /* [5] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.5.woff2) format('woff2');
    unicode-range: U+2693, U+26e9-26ea, U+26f1-26f2, U+26f4-26f5, U+26fa, U+26fd, U+2708, U+fe0f, U+1f301, U+1f303, U+1f306-1f307, U+1f309, U+1f310, U+1f3a0-1f3a2, U+1f3aa, U+1f3cd-1f3ce, U+1f3d5, U+1f3d7-1f3db, U+1f3df-1f3e6, U+1f3e8-1f3ed, U+1f3ef-1f3f0, U+1f488, U+1f492, U+1f4ba, U+1f54b-1f54d, U+1f5fa-1f5ff, U+1f680-1f6a2, U+1f6a4-1f6a8, U+1f6b2, U+1f6d1, U+1f6d5-1f6d6, U+1f6dd-1f6df, U+1f6e2-1f6e5, U+1f6e9, U+1f6eb-1f6ec, U+1f6f3-1f6f6, U+1f6f8, U+1f6fa-1f6fb, U+1f9bc-1f9bd, U+1f9ed, U+1f9f3, U+1fa7c;
  }
  /* [6] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.6.woff2) format('woff2');
    unicode-range: U+2615, U+fe0f, U+1f32d-1f330, U+1f336, U+1f33d, U+1f345-1f37f, U+1f382, U+1f52a, U+1f942-1f944, U+1f950-1f96f, U+1f99e, U+1f9aa, U+1f9c0-1f9cb, U+1fad0-1fadb;
  }
  /* [7] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.7.woff2) format('woff2');
    unicode-range: U+200d, U+2600-2601, U+2603-2604, U+2614, U+2618, U+26a1, U+26c4-26c5, U+26c8, U+26f0, U+2728, U+2744, U+2b1b, U+2b50, U+fe0f, U+1f300, U+1f304-1f305, U+1f308, U+1f30a-1f30f, U+1f311-1f321, U+1f324-1f32c, U+1f331-1f335, U+1f337-1f33c, U+1f33e-1f344, U+1f3d4, U+1f3d6, U+1f3dc-1f3de, U+1f3f5, U+1f400-1f43f, U+1f490, U+1f4a7, U+1f4ab, U+1f4ae, U+1f525, U+1f54a, U+1f573, U+1f577-1f578, U+1f648-1f64a, U+1f940, U+1f980-1f9ae, U+1f9ba, U+1fa90, U+1faa8, U+1fab0-1fabd, U+1fabf, U+1face-1facf, U+1fae7;
  }
  /* [8] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.8.woff2) format('woff2');
    unicode-range: U+200d, U+2640, U+2642, U+2695-2696, U+26f7, U+26f9, U+2708, U+2764, U+fe0f, U+1f33e, U+1f373, U+1f37c, U+1f384-1f385, U+1f393, U+1f3a4, U+1f3a8, U+1f3c2-1f3c4, U+1f3c7, U+1f3ca-1f3cc, U+1f3eb, U+1f3ed, U+1f3fb-1f3ff, U+1f466-1f478, U+1f47c, U+1f481-1f483, U+1f486-1f487, U+1f48b, U+1f48f, U+1f491, U+1f4bb-1f4bc, U+1f527, U+1f52c, U+1f574-1f575, U+1f57a, U+1f645-1f647, U+1f64b, U+1f64d-1f64e, U+1f680, U+1f692, U+1f6a3, U+1f6b4-1f6b6, U+1f6c0, U+1f6cc, U+1f91d, U+1f926, U+1f930-1f931, U+1f934-1f93a, U+1f93c-1f93e, U+1f977, U+1f9af-1f9b3, U+1f9b8-1f9b9, U+1f9bc-1f9bd, U+1f9cc-1f9cf, U+1f9d1-1f9df, U+1fa82, U+1fac3-1fac5;
  }
  /* [9] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.9.woff2) format('woff2');
    unicode-range: U+200d, U+261d, U+2620, U+2639-263a, U+2665, U+270a-270d, U+2728, U+2763-2764, U+2b50, U+fe0f, U+1f31a-1f31f, U+1f32b, U+1f383, U+1f389, U+1f3fb-1f3ff, U+1f440-1f450, U+1f463-1f465, U+1f479-1f47b, U+1f47d-1f480, U+1f485, U+1f48b-1f48c, U+1f493-1f49f, U+1f4a4-1f4a6, U+1f4a8-1f4ab, U+1f4af, U+1f525, U+1f573, U+1f590, U+1f595-1f596, U+1f5a4, U+1f5e3, U+1f600-1f644, U+1f648-1f64a, U+1f64c, U+1f64f, U+1f90c-1f925, U+1f927-1f92f, U+1f932-1f933, U+1f970-1f976, U+1f978-1f97a, U+1f9a0, U+1f9b4-1f9b7, U+1f9bb, U+1f9be-1f9bf, U+1f9d0, U+1f9e0-1f9e1, U+1fa75-1fa79, U+1fac0-1fac2, U+1fae0-1fae6, U+1fae8, U+1faf0-1faf8;
  }
  /* [10] */
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.10.woff2) format('woff2');
    unicode-range: U+200d, U+2194-2195, U+2640, U+2642, U+26d3, U+27a1, U+fe0f, U+1f344, U+1f34b, U+1f3c3, U+1f3fb-1f3ff, U+1f426, U+1f468-1f469, U+1f4a5, U+1f525, U+1f642, U+1f6b6, U+1f7e9, U+1f7eb, U+1f9af, U+1f9bc-1f9bd, U+1f9ce, U+1f9d1-1f9d2;
  }
  /* arabic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EFD-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* hebrew */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* arabic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EFD-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* hebrew */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  body {
    --google-font-color-notocoloremoji: colrv1;
  }
  html {
    --accent-1: #9768ff;
    --accent-2: #39ffad;
    scroll-behavior: smooth;
    scrollbar-face-color: #040404;
    scrollbar-base-color: #040404;
    scrollbar-3dlight-color: #040404;
    scrollbar-highlight-color: #040404;
    scrollbar-track-color: #000;
    scrollbar-arrow-color: #000;
    scrollbar-shadow-color: #040404;
    scrollbar-dark-shadow-color: #040404;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #060606;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #060606;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-corner {
    background-color: #060606;
  }
  ::-webkit-resizer {
    background-color: #060606;
  }
  .dark,
  html.ZnJ1aXRqdWljZQ.dark {
    --text-primary: #e7dcff;
    --text-secondary: #a29ab3;
    --text-tertiary: #8b8499;
    --text-quaternary: #746e80;
    --text-error: #f93a37;
    --main-surface-primary: #000000;
    --main-surface-secondary: #000000;
    --main-surface-tertiary: #000000;
    --sidebar-surface-primary: #000000;
    --sidebar-surface-secondary: #000000;
    --sidebar-surface-tertiary: #000000;
    --border-light: rgba(231, 220, 255, 0.1);
    --border-medium: rgba(231, 220, 255, 0.15);
    --border-heavy: rgba(231, 220, 255, 0.2);
    --border-xheavy: rgba(231, 220, 255, 0.25);
  }
  .dark .popover {
    --text-primary: #e7dcff !important;
    --text-secondary: #a29ab3 !important;
    --text-tertiary: #8b8499 !important;
    --text-quaternary: #746e80 !important;
    --main-surface-primary: #000000 !important;
    --main-surface-secondary: #000000 !important;
    --main-surface-tertiary: #000000 !important;
    --sidebar-surface-primary: #000000 !important;
    --sidebar-surface-secondary: #000000 !important;
    --sidebar-surface-tertiary: #000000 !important;
  }
  /*
.dark {
 --text-primary:var(--gray-100);
 --text-secondary:var(--gray-300);
 --text-tertiary:var(--gray-400);
 --text-quaternary:var(--gray-500);
 --text-error:var(--red-500);
 --border-light:hsla(0,0%,100%,.1);
 --border-medium:hsla(0,0%,100%,.15);
 --border-heavy:hsla(0,0%,100%,.2);
 --border-xheavy:hsla(0,0%,100%,.25);
 --main-surface-primary:var(--gray-800);
 --main-surface-secondary:var(--gray-750);
 --main-surface-tertiary:var(--gray-700);
 --sidebar-surface-primary:var(--gray-900);
 --sidebar-surface-secondary:var(--gray-800);
 --sidebar-surface-tertiary:var(--gray-750);
 --link:#7ab7ff;
 --link-hover:#5e83b3
}
html.ZnJ1aXRqdWljZQ.dark {
 --text-secondary:var(--gray-400);
 --text-tertiary:var(--gray-500);
 --text-quaternary:var(--gray-600);
 --text-error:#f93a37;
 --surface-error:249 58 55
}
*/
  .juice\:pb-0.pb-3\.5.px-3.flex-col.w-full.h-full.flex > .items-center.h-14.justify-between.flex span:first-child {
    display: none !important;
  }
  .dark .dark\:border-gray-700 {
    border-color: var(--border-medium);
  }
  button.dark\:bg-gray-700 {
    background: var(--main-surface-secondary) !important;
    border: none;
  }
  .btn.relative.btn-primary {
    background: var(--text-primary);
  }
  .flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary {
    visibility: visible !important;
    width: 260px !important;
    padding-top: 1rem;
  }
  .hover\:bg-token-sidebar-surface-secondary.juice\:font-normal.juice\:gap-2\.5.font-medium.px-2.bg-token-sidebar-surface-primary.rounded-lg.gap-2.items-center.h-10.flex.group .flex-shrink-0.w-6.h-6 {
    display: none;
  }
  .bg-token-main-surface-primary.font-semibold.p-2.h-14.z-10.justify-between.items-center.flex.mb-1\.5.juice\:p-3.top-0.sticky {
    background: transparent;
    height: fit-content;
  }
  .flex-col.flex > button {
    background: transparent !important;
  }
  :host,
  html {
    font-family: 'Rubik', sans-serif, 'Noto Color Emoji', 'FiraCode Nerd Font' !important;
  }
  code,
  pre {
    font-family: 'JetBrains Mono', 'Noto Color Emoji', monospace, 'Rubik', sans-serif, 'Noto Color Emoji', 'FiraCode Nerd Font' !important;
  }
  textarea#prompt-textarea {
    margin: 0 0.5rem;
  }
  textarea#prompt-textarea::placeholder {
    color: var(--text-tertiary) !important;
    opacity: 1;
  }
  textarea#prompt-textarea::-ms-input-placeholder {
    color: var(--text-tertiary) !important;
  }
  .juice\:-ml-3.empty\:hidden.gap-3.flex.mt-1 > .flex.p-1.rounded-xl.justify-start.items-center > .text-token-text-secondary.rounded-lg.justify-center.items-center.flex.z-10 {
    z-index: 0 !important;
  }
  div:has(> div > textarea#prompt-textarea) button {
    background: transparent;
    color: var(--text-primary);
  }
  div:has(> div > textarea#prompt-textarea) button:disabled {
    color: var(--text-tertiary);
  }
  div:has(> div > textarea#prompt-textarea) button:nth-child(3) {
    background: var(--text-primary);
    color: var(--main-surface-primary);
  }
  div:has(> div > textarea#prompt-textarea) button:nth-child(3):disabled {
    background: var(--text-secondary);
  }
  main > div > div.flex-1.overflow-hidden {
    overflow: visible;
  }
  main > div > div.w-full {
    position: sticky;
    bottom: 0;
  }
  main > div > div.w-full > div.px-3 {
    padding-top: 1.5rem;
    background: linear-gradient(transparent, var(--main-surface-primary) 30%);
  }
  main > div > div.w-full > div.px-2 {
    background: var(--main-surface-primary);
  }
  div.group:nth-child(2) {
    z-index: 100 !important;
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary {
    background: var(--main-surface-secondary);
    justify-content: center;
    margin: 0;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem !important;
    min-width: 100%;
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary > div.grow {
    flex-grow: 0 !important;
    font-weight: bold;
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary:hover {
    background: var(--main-surface-tertiary);
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary .flex.gap-3.juice\:gap-2 button {
    visibility: visible;
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary > svg {
    height: 1.2rem;
  }
  nav button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary::before {
    content: 'New Chat';
    font-weight: bold;
    margin: 0 0.5rem;
  }
  span:has(> button.h-10.rounded-lg.text-token-text-secondary.focus-visible\:bg-token-sidebar-surface-secondary) {
    position: -webkit-sticky !important;
    position: sticky !important;
    z-index: 30 !important;
    background: linear-gradient(var(--sidebar-surface-primary) 70%, transparent);
    min-width: 100%;
    margin: 0;
    padding: 0.5rem !important;
    top: -0.5rem !important;
    left: -0.5rem !important;
    margin-bottom: -1rem !important;
    padding-bottom: 1.5rem !important;
  }
  nav,
  nav * {
    -ms-overflow-style: none !important;
    scrollbar-width: auto;
    scrollbar-color: rgba(231, 220, 255, 0.1) transparent;
  }
  nav::-webkit-scrollbar,
  nav *::-webkit-scrollbar {
    display: none;
  }
  nav span:has(> button) {
    width: 100%;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
  }
  .juice\:bg-token-sidebar-surface-primary.juice\:z-20.juice\:top-0.juice\:sticky {
    position: relative !important;
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3 {
    flex-direction: column;
    max-width: unset;
    min-width: 100%;
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3 div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3 svg {
    color: #9768ff !important;
    height: 1rem !important;
    width: auto;
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3 button {
    flex-direction: row;
    flex-grow: 1;
    width: auto;
    padding: 0.5rem 3rem;
    font-size: 1rem !important;
    align-items: center;
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3 div.text-gray-600 {
    color: var(--text-secondary);
  }
  .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3::before {
    text-align: center;
    content: "ChatGPT";
    font-size: 2rem;
    font-weight: bold;
    color: #39ffad;
    margin-bottom: 5rem;
    margin-top: 0;
  }
  div:has( > .justify-center.items-stretch.flex-wrap.max-w-3xl.flex.mt-12.mx-3) {
    margin-top: 0;
  }
  .text-token-text-primary.justify-center.items-center.flex-col.h-full.flex > svg {
    margin-top: auto;
    height: 5rem;
    width: auto;
    color: #9768ff;
    margin-left: 2rem;
  }
  .text-token-text-primary.justify-center.items-center.flex-col.h-full.flex > div {
    margin-top: auto;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  nav .relative.mt-5.empty\:mt-0.empty\:hidden.juice\:first\:mt-0.juice\:last\:mb-5 ol li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary) !important;
  }
  nav .relative.mt-5.empty\:mt-0.empty\:hidden.juice\:first\:mt-0.juice\:last\:mb-5 ol li > div {
    background: var(--sidebar-surface-secondary);
    border-radius: 1rem;
  }
  nav .relative.mt-5.empty\:mt-0.empty\:hidden.juice\:first\:mt-0.juice\:last\:mb-5 ol li div.juice\:group-hover\:w-10.group-hover\:from-60\%.group-hover\:w-20.from-0\%.w-8.group-hover\:from-token-sidebar-surface-secondary.from-token-sidebar-surface-primary.rtl\:bg-gradient-to-r.rtl\:left-0.ltr\:bg-gradient-to-l.ltr\:right-0.to-transparent.top-0.bottom-0.absolute {
    --tw-gradient-from: var(--sidebar-surface-secondary) var(--tw-gradient-from-position);
  }
  .absolute.bottom-0.top-0.to-transparent.ltr\:right-0.ltr\:bg-gradient-to-l.rtl\:left-0.rtl\:bg-gradient-to-r.from-token-sidebar-surface-primary.from-token-sidebar-surface-primary.can-hover\:group-hover\:from-token-sidebar-surface-secondary.w-8.from-0\%.can-hover\:group-hover\:w-20.can-hover\:group-hover\:from-60\%.juice\:can-hover\:group-hover\:w-10 {
    background: linear-gradient(90deg, transparent, var(--sidebar-surface-secondary)) !important;
  }
  .focus-visible\:outline-0.focus-visible\:bg-token-main-surface-secondary.hover\:bg-token-main-surface-secondary.rounded-lg.justify-center.items-center.w-10.h-10.flex {
    border-radius: 10px;
    height: auto;
    width: auto;
    background: var(--main-surface-secondary);
  }
  .focus-visible\:outline-0.focus-visible\:bg-token-main-surface-secondary.hover\:bg-token-main-surface-secondary.rounded-lg.justify-center.items-center.w-10.h-10.flex > div {
    width: 3rem;
    height: auto;
  }
  .focus-visible\:outline-0.focus-visible\:bg-token-main-surface-secondary.hover\:bg-token-main-surface-secondary.rounded-lg.justify-center.items-center.w-10.h-10.flex img {
    width: 100% !important;
    height: 100% !important;
  }
  .focus-visible\:outline-0.focus-visible\:bg-token-main-surface-secondary.hover\:bg-token-main-surface-secondary.rounded-lg.justify-center.items-center.w-10.h-10.flex:hover {
    filter: brightness(1.1);
  }
  div.px-2 {
    visibility: hidden;
    padding: 4px !important;
  }
  *[class*="bg-gray-50"] {
    color: white !important;
    background-color: #000 !important;
    background-image: none !important;
  }
  *[class*="bg-gray-100"] {
    color: #eee !important;
    background-color: hsl(0, 0%, 10%) !important;
    background-image: none !important;
  }
  *[class*="bg-gray-700"] {
    background-color: #000 !important;
    background-image: none !important;
  }
  *[class*="bg-gray-800"] {
    background-color: hsl(0, 0%, 3%) !important;
    background-image: none !important;
  }
  *[class*="bg-gray-850"] {
    background-color: #000 !important;
    background-image: none !important;
  }
  *[class*="bg-gray-900"] {
    color: #bbb;
    background-color: #000 !important;
    background-image: none !important;
  }
  *[class*="border-gray"] {
    border: none;
  }
  *[class*="bg-vert-dark-gradient"] {
    background: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(20px);
  }
  *[class*="bg-gradient-to-l"] {
    background-image: none;
  }
  .markdown *[class*="bg-"] {
    background-color: hsl(0, 0%, 0%) !important;
    background-image: none !important;
  }
  *:has(> #prompt-textarea) {
    background-color: hsl(0, 0%, 0%) !important;
  }
  #prompt-textarea ~ button {
    background-color: unset !important;
  }
  .dark .btn-neutral {
    background-color: hsl(0, 0%, 0%) !important;
    border: none;
  }
  div.text-sm div.w-full > div > div > div:nth-child(1) > div > div > div,
  div.text-sm div.w-full > div > div > div:nth-child(1) > div > div > div div:has(svg),
  div.text-sm div.w-full > div > div > div:nth-child(1) > div img,
  div.text-sm div.w-full > div > div > div:nth-child(1) > div > div > div div svg {
    width: 1.8rem !important;
    height: 1.8rem !important;
    border-radius: 10px !important;
  }
  .mb-5.text-2xl.font-semibold {
    visibility: hidden !important;
  }
`

var styleSheet = document.createElement("style")
styleSheet.textContent = styles
document.head.appendChild(styleSheet)
