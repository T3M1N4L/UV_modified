var styles = `
   :root {
/* Colours */
    --Color1: #9c37ff !important;
    --Color1Hover: rgba(156,55,255,0.9) !important;
    --Color1Watched: rgba(156,55,255,0.4) !important;
    --Color2: #4c66ff !important;
    --Color2Hover: rgba(76,102,255,0.9) !important;
    --Color3: #42ffa9 !important;
    --Color3Hover: rgba(66,255,169,0.9) !important;
    --Font: monospace !important;
  }
  .dark-theme body,
  .no-theme body,
  .light-theme body,
  .dark-theme .pure-g,
  .no-theme .pure-g,
  .light-theme .pure-g,
  .dark-theme .pure-form legend,
  .no-theme .pure-form legend,
  .light-theme .pure-form legend {
    background: #000 !important;
    color: #fff !important;
  }
  .dark-theme a:not(.navbar .index-link),
  .no-theme a:not(.navbar .index-link),
  .light-theme a:not(.navbar .index-link),
  .dark-theme a:active:not(.navbar .index-link),
  .no-theme a:active:not(.navbar .index-link),
  .light-theme a:active:not(.navbar .index-link),
  .dark-theme a:visited:not(.navbar .index-link),
  .no-theme a:visited:not(.navbar .index-link),
  .light-theme a:visited:not(.navbar .index-link),
  .dark-theme summary,
  .no-theme summary,
  .light-theme summary,
  .dark-theme a:not([data-id]) > .icon,
  .no-theme a:not([data-id]) > .icon,
  .light-theme a:not([data-id]) > .icon,
  .dark-theme a:link:not(.pure-button):not(.channel-owner),
  .no-theme a:link:not(.pure-button):not(.channel-owner),
  .light-theme a:link:not(.pure-button):not(.channel-owner) {
    color: #ccc !important;
  }
  .dark-theme footer a,
  .no-theme footer a,
  .light-theme footer a {
    color: #ccc  !important;
  }
  .dark-theme a:hover,
  .no-theme a:hover,
  .light-theme a:hover,
  .dark-theme footer a:hover,
  .no-theme footer a:hover,
  .light-theme footer a:hover,
  .dark-theme summary:hover,
  .no-theme summary:hover,
  .light-theme summary:hover,
  .dark-theme a:not([data-id]) > .icon:hover,
  .no-theme a:not([data-id]) > .icon:hover,
  .light-theme a:not([data-id]) > .icon:hover {
    color: #b3b3b3  !important;
  }
  .dark-theme .pure-form input[type="color"],
  .no-theme .pure-form input[type="color"],
  .light-theme .pure-form input[type="color"],
  .dark-theme .pure-form input[type="date"],
  .no-theme .pure-form input[type="date"],
  .light-theme .pure-form input[type="date"],
  .dark-theme .pure-form input[type="datetime-local"],
  .no-theme .pure-form input[type="datetime-local"],
  .light-theme .pure-form input[type="datetime-local"],
  .dark-theme .pure-form input[type="datetime"],
  .no-theme .pure-form input[type="datetime"],
  .light-theme .pure-form input[type="datetime"],
  .dark-theme .pure-form input[type="email"],
  .no-theme .pure-form input[type="email"],
  .light-theme .pure-form input[type="email"],
  .dark-theme .pure-form input[type="month"],
  .no-theme .pure-form input[type="month"],
  .light-theme .pure-form input[type="month"],
  .dark-theme .pure-form input[type="number"],
  .no-theme .pure-form input[type="number"],
  .light-theme .pure-form input[type="number"],
  .dark-theme .pure-form input[type="password"],
  .no-theme .pure-form input[type="password"],
  .light-theme .pure-form input[type="password"],
  .dark-theme .pure-form input[type="tel"],
  .no-theme .pure-form input[type="tel"],
  .light-theme .pure-form input[type="tel"],
  .dark-theme .pure-form input[type="text"],
  .no-theme .pure-form input[type="text"],
  .light-theme .pure-form input[type="text"],
  .dark-theme .pure-form input[type="time"],
  .no-theme .pure-form input[type="time"],
  .light-theme .pure-form input[type="time"],
  .dark-theme .pure-form input[type="url"],
  .no-theme .pure-form input[type="url"],
  .light-theme .pure-form input[type="url"],
  .dark-theme .pure-form input[type="week"],
  .no-theme .pure-form input[type="week"],
  .light-theme .pure-form input[type="week"],
  .dark-theme .pure-form select,
  .no-theme .pure-form select,
  .light-theme .pure-form select,
  .dark-theme .pure-form textarea,
  .no-theme .pure-form textarea,
  .light-theme .pure-form textarea {
    box-shadow: transparent 0px 1px 3px inset !important;
    border: transparent !important;
    border-radius: 18px !important;
    background-color: #1a1a1a !important;
    color: #fff !important;
  }
  .dark-theme .pure-button-primary,
  .no-theme .pure-button-primary,
  .light-theme .pure-button-primary,
  .dark-theme .pure-button-secondary,
  .no-theme .pure-button-secondary,
  .light-theme .pure-button-secondary,
  .dark-theme .pure-button-primary:focus,
  .no-theme .pure-button-primary:focus,
  .light-theme .pure-button-primary:focus,
  .dark-theme .pure-button-secondary:focus,
  .no-theme .pure-button-secondary:focus,
  .light-theme .pure-button-secondary:focus {
    border: transparent !important;
    background-color: #1a1a1a  !important;
    color: #fff  !important;
  }
  .dark-theme .pure-button-primary:hover,
  .no-theme .pure-button-primary:hover,
  .light-theme .pure-button-primary:hover,
  .dark-theme .pure-button-secondary:hover,
  .no-theme .pure-button-secondary:hover,
  .light-theme .pure-button-secondary:hover {
    background-color: #404040  !important;
    color: #fff  !important;
  }
  .dark-theme input[type="checkbox"],
  .no-theme input[type="checkbox"],
  .light-theme input[type="checkbox"],
  .dark-theme input[type="checkbox"]:before,
  .no-theme input[type="checkbox"]:before,
  .light-theme input[type="checkbox"]:before,
  .dark-theme input[type="checkbox"]:checked:before,
  .no-theme input[type="checkbox"]:checked:before,
  .light-theme input[type="checkbox"]:checked:before,
  .dark-theme input[type='radio'],
  .no-theme input[type='radio'],
  .light-theme input[type='radio'],
  .dark-theme input[type='radio']:before,
  .no-theme input[type='radio']:before,
  .light-theme input[type='radio']:before,
  .dark-theme input[type='radio']:checked:before,
  .no-theme input[type='radio']:checked:before,
  .light-theme input[type='radio']:checked:before {
    color: #fff !important;
  }
  .dark-theme input[disabled],
  .no-theme input[disabled],
  .light-theme input[disabled] {
    background-color: rgba(26,26,26,0.5) !important;
  }
  .dark-theme input[type="checkbox"]:checked,
  .no-theme input[type="checkbox"]:checked,
  .light-theme input[type="checkbox"]:checked,
  .dark-theme input[type='radio']:checked,
  .no-theme input[type='radio']:checked,
  .light-theme input[type='radio']:checked {
    background-color: #404040  !important;
  }
  .dark-theme input[type='range'],
  .no-theme input[type='range'],
  .light-theme input[type='range'] {
    background-color: #1a1a1a !important;
  }
  .dark-theme p,
  .no-theme p,
  .light-theme p,
  .dark-theme p.video-data:hover,
  .no-theme p.video-data:hover,
  .light-theme p.video-data:hover {
    color: #fff !important;
  }
  .dark-theme a.feed-menu-item.pure-menu-heading,
  .no-theme a.feed-menu-item.pure-menu-heading,
  .light-theme a.feed-menu-item.pure-menu-heading {
    color: #ccc !important;
  }
  .dark-theme a[href^="/watch?v="] p:not(.length):hover,
  .no-theme a[href^="/watch?v="] p:not(.length):hover,
  .light-theme a[href^="/watch?v="] p:not(.length):hover {
    color: #e6e6e6 !important;
  }
  .dark-theme .watched,
  .no-theme .watched,
  .light-theme .watched {
    background-color: #1a1a1a !important;
    color: #fff !important;
  }
  .dark-theme .length,
  .no-theme .length,
  .light-theme .length,
  .dark-theme p.length,
  .no-theme p.length,
  .light-theme p.length {
    color: #fff !important;
    background-color: #1a1a1a !important;
  }
  .dark-theme p.channel-name,
  .no-theme p.channel-name,
  .light-theme p.channel-name {
    color: #ccc !important;
  }
  .dark-theme p.channel-name:hover,
  .no-theme p.channel-name:hover,
  .light-theme p.channel-name:hover {
    color: #b3b3b3 !important;
  }
  .dark-theme #filters-box,
  .no-theme #filters-box,
  .light-theme #filters-box {
    background: #000  !important;
  }
  .dark-theme .pure-form input[type="search"],
  .no-theme .pure-form input[type="search"],
  .light-theme .pure-form input[type="search"] {
    border: transparent !important;
    background-color: #1a1a1a !important;
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-big-play-button .vjs-icon-placeholder,
  .no-theme .video-js .vjs-big-play-button .vjs-icon-placeholder,
  .light-theme .video-js .vjs-big-play-button .vjs-icon-placeholder {
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-control-bar,
  .no-theme .video-js .vjs-control-bar,
  .light-theme .video-js .vjs-control-bar,
  .dark-theme .video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
  .no-theme .video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
  .light-theme .video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    background-color: #000 !important;
    color: #fff !important;
  }
  .dark-theme .video-js button:hover,
  .no-theme .video-js button:hover,
  .light-theme .video-js button:hover {
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-menu li.vjs-menu-item:focus,
  .no-theme .video-js .vjs-menu li.vjs-menu-item:focus,
  .light-theme .video-js .vjs-menu li.vjs-menu-item:focus,
  .dark-theme .video-js .vjs-menu li.vjs-menu-item:hover,
  .no-theme .video-js .vjs-menu li.vjs-menu-item:hover,
  .light-theme .video-js .vjs-menu li.vjs-menu-item:hover {
    background-color: var(--Color1Hover) !important;
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-menu li.vjs-selected,
  .no-theme .video-js .vjs-menu li.vjs-selected,
  .light-theme .video-js .vjs-menu li.vjs-selected,
  .dark-theme .video-js .vjs-menu li.vjs-selected:focus,
  .no-theme .video-js .vjs-menu li.vjs-selected:focus,
  .light-theme .video-js .vjs-menu li.vjs-selected:focus,
  .dark-theme .video-js .vjs-menu li.vjs-selected:hover,
  .no-theme .video-js .vjs-menu li.vjs-selected:hover,
  .light-theme .video-js .vjs-menu li.vjs-selected:hover {
    background-color: var(--Color1) !important;
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-share__short-link,
  .no-theme .video-js .vjs-share__short-link,
  .light-theme .video-js .vjs-share__short-link,
  .dark-theme .video-js .vjs-share__btn,
  .no-theme .video-js .vjs-share__btn,
  .light-theme .video-js .vjs-share__btn,
  .dark-theme .video-js .vjs-share__short-link-wrapper,
  .no-theme .video-js .vjs-share__short-link-wrapper,
  .light-theme .video-js .vjs-share__short-link-wrapper {
    font-family: sans-serif !important;
    background-color: #1a1a1a !important;
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-close-button,
  .no-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-close-button,
  .light-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-close-button,
  .dark-theme .video-js .vjs-share__subtitle,
  .no-theme .video-js .vjs-share__subtitle,
  .light-theme .video-js .vjs-share__subtitle,
  .dark-theme .video-js .vjs-share__title,
  .no-theme .video-js .vjs-share__title,
  .light-theme .video-js .vjs-share__title {
    font-family: sans-serif !important;
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-modal-dialog-content,
  .no-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-modal-dialog-content,
  .light-theme .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-modal-dialog-content,
  .dark-theme .video-js .vjs-modal-dialog,
  .no-theme .video-js .vjs-modal-dialog,
  .light-theme .video-js .vjs-modal-dialog {
    background: #000 !important;
  }
  .dark-theme .video-js .vjs-modal-dialog .vjs-modal-dialog-content,
  .no-theme .video-js .vjs-modal-dialog .vjs-modal-dialog-content,
  .light-theme .video-js .vjs-modal-dialog .vjs-modal-dialog-content,
  .dark-theme .video-js .vjs-modal-dialog,
  .no-theme .video-js .vjs-modal-dialog,
  .light-theme .video-js .vjs-modal-dialog,
  .dark-theme .video-js .vjs-modal-dialog-content,
  .no-theme .video-js .vjs-modal-dialog-content,
  .light-theme .video-js .vjs-modal-dialog-content {
    background: #000  !important;
  }
  .dark-theme .video-js .vjs-text-track-settings legend,
  .no-theme .video-js .vjs-text-track-settings legend,
  .light-theme .video-js .vjs-text-track-settings legend {
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-icon-placeholder,
  .no-theme .video-js .vjs-icon-placeholder,
  .light-theme .video-js .vjs-icon-placeholder,
  .dark-theme .video-js .vjs-icon-share,
  .no-theme .video-js .vjs-icon-share,
  .light-theme .video-js .vjs-icon-share {
    color: #fff !important;
  }
  .dark-theme .video-js .vjs-play-progress,
  .no-theme .video-js .vjs-play-progress,
  .light-theme .video-js .vjs-play-progress,
  .dark-theme .video-js .vjs-volume-level,
  .no-theme .video-js .vjs-volume-level,
  .light-theme .video-js .vjs-volume-level {
    color: #fff !important;
  }
  .dark-theme .video-js.player-style-invidious .vjs-play-progress,
  .no-theme .video-js.player-style-invidious .vjs-play-progress,
  .light-theme .video-js.player-style-invidious .vjs-play-progress {
    background-color: var(--Color1) !important;
  }
  .dark-theme #subscribe,
  .no-theme #subscribe,
  .light-theme #subscribe,
  .dark-theme #subscribe:hover,
  .no-theme #subscribe:hover,
  .light-theme #subscribe:hover {
    color: #000  !important;
  }
  .dark-theme body a.channel-owner,
  .no-theme body a.channel-owner,
  .light-theme body a.channel-owner,
  .dark-theme body a.channel-owner:hover,
  .no-theme body a.channel-owner:hover,
  .light-theme body a.channel-owner:hover,
  .dark-theme .channel-owner:visited,
  .no-theme .channel-owner:visited,
  .light-theme .channel-owner:visited,
  .dark-theme .channel-owner .icon.ion.ion-md-checkmark-circle,
  .no-theme .channel-owner .icon.ion.ion-md-checkmark-circle,
  .light-theme .channel-owner .icon.ion.ion-md-checkmark-circle {
    color: #000  !important;
  }
  .dark-theme #subscribe,
  .no-theme #subscribe,
  .light-theme #subscribe,
  .dark-theme #subscribe:hover,
  .no-theme #subscribe:hover,
  .light-theme #subscribe:hover {
    color: #fff  !important;
  }
  .dark-theme body a.channel-owner,
  .no-theme body a.channel-owner,
  .light-theme body a.channel-owner,
  .dark-theme body a.channel-owner:hover,
  .no-theme body a.channel-owner:hover,
  .light-theme body a.channel-owner:hover,
  .dark-theme .channel-owner:visited,
  .no-theme .channel-owner:visited,
  .light-theme .channel-owner:visited,
  .dark-theme .channel-owner .icon.ion.ion-md-checkmark-circle,
  .no-theme .channel-owner .icon.ion.ion-md-checkmark-circle,
  .light-theme .channel-owner .icon.ion.ion-md-checkmark-circle {
    color: #fff  !important;
  }
  .dark-theme input,
  .no-theme input,
  .light-theme input,
  .dark-theme select,
  .no-theme select,
  .light-theme select,
  .dark-theme textarea,
  .no-theme textarea,
  .light-theme textarea {
    background-color: #1a1a1a !important;
    color: #fff !important;
  }
  .dark-theme ::-webkit-scrollbar,
  .no-theme ::-webkit-scrollbar,
  .light-theme ::-webkit-scrollbar {
    background-color: #1a1a1a !important;
  }
  .dark-theme ::-webkit-scrollbar-thumb,
  .no-theme ::-webkit-scrollbar-thumb,
  .light-theme ::-webkit-scrollbar-thumb {
    background-color: #404040 !important;
  }
  .dark-theme ::selection,
  .no-theme ::selection,
  .light-theme ::selection {
    background-color: #fff  !important;
    color: #404040  !important;
  }
  .dark-theme hr,
  .no-theme hr,
  .light-theme hr,
  .dark-theme .pure-form legend,
  .no-theme .pure-form legend,
  .light-theme .pure-form legend,
  .dark-theme .pure-form-aligned legend,
  .no-theme .pure-form-aligned legend,
  .light-theme .pure-form-aligned legend,
  .dark-theme .underlined,
  .no-theme .underlined,
  .light-theme .underlined {
    border-color: #1a1a1a !important;
  }
  .dark-theme span#volume-value,
  .no-theme span#volume-value,
  .light-theme span#volume-value {
    color: #fff !important;
  }
  .dark-theme ::placeholder,
  .no-theme ::placeholder,
  .light-theme ::placeholder {
    color: #fff !important;
  }
  .dark-theme .pure-form input[type="color"],
  .no-theme .pure-form input[type="color"],
  .light-theme .pure-form input[type="color"],
  .dark-theme .pure-form input[type="date"],
  .no-theme .pure-form input[type="date"],
  .light-theme .pure-form input[type="date"],
  .dark-theme .pure-form input[type="datetime-local"],
  .no-theme .pure-form input[type="datetime-local"],
  .light-theme .pure-form input[type="datetime-local"],
  .dark-theme .pure-form input[type="datetime"],
  .no-theme .pure-form input[type="datetime"],
  .light-theme .pure-form input[type="datetime"],
  .dark-theme .pure-form input[type="email"],
  .no-theme .pure-form input[type="email"],
  .light-theme .pure-form input[type="email"],
  .dark-theme .pure-form input[type="month"],
  .no-theme .pure-form input[type="month"],
  .light-theme .pure-form input[type="month"],
  .dark-theme .pure-form input[type="number"],
  .no-theme .pure-form input[type="number"],
  .light-theme .pure-form input[type="number"],
  .dark-theme .pure-form input[type="password"],
  .no-theme .pure-form input[type="password"],
  .light-theme .pure-form input[type="password"],
  .dark-theme .pure-form input[type="tel"],
  .no-theme .pure-form input[type="tel"],
  .light-theme .pure-form input[type="tel"],
  .dark-theme .pure-form input[type="text"],
  .no-theme .pure-form input[type="text"],
  .light-theme .pure-form input[type="text"],
  .dark-theme .pure-form input[type="time"],
  .no-theme .pure-form input[type="time"],
  .light-theme .pure-form input[type="time"],
  .dark-theme .pure-form input[type="url"],
  .no-theme .pure-form input[type="url"],
  .light-theme .pure-form input[type="url"],
  .dark-theme .pure-form input[type="week"],
  .no-theme .pure-form input[type="week"],
  .light-theme .pure-form input[type="week"],
  .dark-theme .pure-form input[type="search"],
  .no-theme .pure-form input[type="search"],
  .light-theme .pure-form input[type="search"],
  .dark-theme .pure-form select,
  .no-theme .pure-form select,
  .light-theme .pure-form select,
  .dark-theme .pure-form textarea,
  .no-theme .pure-form textarea,
  .light-theme .pure-form textarea {
    border: 1px solid #404040  !important;
  }
  .dark-theme input[type='range']::-webkit-slider-thumb,
  .no-theme input[type='range']::-webkit-slider-thumb,
  .light-theme input[type='range']::-webkit-slider-thumb {
    border-right: 1px solid #404040  !important;
  }
  .dark-theme input[type="checkbox"],
  .no-theme input[type="checkbox"],
  .light-theme input[type="checkbox"],
  .dark-theme input[type='radio'],
  .no-theme input[type='radio'],
  .light-theme input[type='radio'],
  .dark-theme input[type='range'],
  .no-theme input[type='range'],
  .light-theme input[type='range'] {
    border: 1px solid #404040  !important;
  }
  .dark-theme .pure-button-primary,
  .no-theme .pure-button-primary,
  .light-theme .pure-button-primary,
  .dark-theme .pure-button-primary:focus,
  .no-theme .pure-button-primary:focus,
  .light-theme .pure-button-primary:focus,
  .dark-theme .pure-button-primary:hover,
  .no-theme .pure-button-primary:hover,
  .light-theme .pure-button-primary:hover,
  .dark-theme .pure-button-secondary,
  .no-theme .pure-button-secondary,
  .light-theme .pure-button-secondary,
  .dark-theme .pure-button-secondary:focus,
  .no-theme .pure-button-secondary:focus,
  .light-theme .pure-button-secondary:focus,
  .dark-theme .pure-button-secondary:hover,
  .no-theme .pure-button-secondary:hover,
  .light-theme .pure-button-secondary:hover {
    border: 1px solid #404040  !important;
  }
  .dark-theme #subscribe,
  .no-theme #subscribe,
  .light-theme #subscribe,
  .dark-theme #subscribe:hover,
  .no-theme #subscribe:hover,
  .light-theme #subscribe:hover,
  .dark-theme a.channel-owner,
  .no-theme a.channel-owner,
  .light-theme a.channel-owner,
  .dark-theme a.channel-owner:hover,
  .no-theme a.channel-owner:hover,
  .light-theme a.channel-owner:hover {
    border: 1px solid var(--Color2)  !important;
  }
  .pure-button-primary,
  .pure-button-secondary {
    padding: 0.5em 1em !important;
    margin: 0px !important;
    border-radius: 18px  !important;
  }
  input[type="checkbox"],
  input[type='radio'] {
    border-radius: 6px !important;
    height: 1.3em !important;
    width: 1.3em !important;
    cursor: pointer !important;
    position: relative !important;
    vertical-align: middle !important;
    -webkit-appearance: none !important;
    -webkit-transition: 0.1s !important;
  }
  input[type='radio'] {
    border-radius: 50% !important;
  }
  input[type="checkbox"]:checked:before {
    content: '✔' !important;
  }
  input[type="checkbox"]:before,
  input[type="checkbox"]:checked:before,
  input[type='radio']:before,
  input[type='radio']:checked:before {
    border-radius: 6px !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    line-height: 1.3em !important;
    text-align: center !important;
  }
  .pure-u-lg-1-5 #continue {
    margin-left: 3px !important;
  }
  input[type='range']::-webkit-slider-thumb {
    width: 15px !important;
    border-radius: 15px !important;
    -webkit-appearance: none !important;
    height: 15px !important;
    background: #404040 !important;
    box-shadow: -80px 0 0 75px #404040 !important;
  }
  input[type='range'] {
    cursor: pointer !important;
    overflow: hidden !important;
    -webkit-appearance: none !important;
    border-radius: 1em !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 15px !important;
    -webkit-appearance: none !important;
  }
@media screen and (min-width: 48em) {
    .pure-u-md-1-6,
    .pure-u-md-1-12,
    .pure-u-md-4-24,
    .pure-u-md-20-24,
    .pure-u-md-12-24 {
      width: 0%  !important;
    }
}
  .pure-u-1.pure-u-md-2-24 {
    width: 0% !important;
  }
  #comments {
    max-width: 100% !important;
  }
  html,
  body,
  .pure-g [class*="pure-u"] {
    font-family: var(--Font) !important;
    font-size: 11pt !important;
  }
  img,
  div.watched-overlay {
    border-radius: 18px !important;
  }
  div.watched-indicator {
    border-radius: 0 0 18px 18px !important;
  }
  div.watched-overlay {
    background-color: var(--Color1Watched) !important;
  }
  div.watched-indicator {
    background-color: var(--Color1) !important;
  }
  #searchbox {
    border: transparent !important;
  }
  .watched {
    border-radius: 18px !important;
  }
  .length,
  p.length {
    padding: 5px 8px 5px 8px !important;
    right: 0.4em !important;
    bottom: -0.6em !important;
    font-size: 11pt !important;
    border-radius: 18px !important;
  }
  .dark-theme .navbar .index-link,
  .no-theme .navbar .index-link,
  .light-theme .navbar .index-link,
  .dark-theme .pure-menu-heading,
  .no-theme .pure-menu-heading,
  .light-theme .pure-menu-heading {
    color: var(--Color1) !important;
  }
  .dark-theme .navbar .index-link:hover,
  .no-theme .navbar .index-link:hover,
  .light-theme .navbar .index-link:hover {
    color: var(--Color1Hover)  !important;
  }
  .dark-theme i.icon.ion-md-headset,
  .no-theme i.icon.ion-md-headset,
  .light-theme i.icon.ion-md-headset {
    color: var(--Color2)  !important;
  }
  .dark-theme i.icon.ion-md-headset:hover,
  .no-theme i.icon.ion-md-headset:hover,
  .light-theme i.icon.ion-md-headset:hover {
    color: var(--Color2Hover)  !important;
  }
  .dark-theme i.icon.ion-logo-youtube,
  .no-theme i.icon.ion-logo-youtube,
  .light-theme i.icon.ion-logo-youtube {
    color: var(--Color1)  !important;
  }
  .dark-theme i.icon.ion-logo-youtube:hover,
  .no-theme i.icon.ion-logo-youtube:hover,
  .light-theme i.icon.ion-logo-youtube:hover {
    color: var(--Color1Hover)  !important;
  }
  .dark-theme i.icon.ion-md-jet,
  .no-theme i.icon.ion-md-jet,
  .light-theme i.icon.ion-md-jet {
    color: var(--Color3)  !important;
  }
  .dark-theme i.icon.ion-md-jet:hover,
  .no-theme i.icon.ion-md-jet:hover,
  .light-theme i.icon.ion-md-jet:hover {
    color: var(--Color3Hover)  !important;
  }
  #filters-apply {
    text-align: right !important;
  }
  .pure-form input[type="search"] {
    box-shadow: transparent !important;
    border-radius: 18px !important;
    margin: 0px !important;
  }
  .pure-g:not(.h-box) > .pure-u-md-1-4 .h-box,
  .pure-g:not(.searchbar) > .searchbar,
  .pure-form-aligned {
    border-radius: 18px !important;
    padding: 12px !important;
    transition: all 0.2s !important;
  }
  .h-box {
    padding-left: 1.1em !important;
    padding-right: 1.1em !important;
  }
  .pure-g:not(.h-box) > .pure-u-md-1-4 .h-box:hover {
    transform: scale(1.025) !important;
    transition: all 0.2s !important;
    opacity: 1 !important;
    z-index: 99999 !important;
  }
  .video-js .vjs-big-play-button {
    border-radius: 18px !important;
    background-color: var(--Color1)  !important;
    border: 0em solid transparent !important;
    font-size: 4.5em !important;
    top: 50% !important;
    left: 50% !important;
    margin-top: -0.81666em !important;
    margin-left: -1.5em !important;
  }
  .video-js .vjs-volume-level {
    border-radius: 18px !important;
    background-color: var(--Color1)  !important;
  }
  .video-js .vjs-control-bar,
  .video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    font-family: sans-serif !important;
    opacity: 1 !important;
    border-radius: 18px 18px 0 0 !important;
    left: 0.5% !important;
    right: 0.5% !important;
    width: 99% !important;
    margin-bottom: 0.5% !important;
  }
  .video-js .vjs-control-bar {
    border-radius: 18px !important;
  }
  .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-modal-dialog-content,
  .video-js .vjs-modal-dialog {
    width: 80% !important;
    height: 80% !important;
    top: 10% !important;
    left: 10% !important;
    border-radius: 18px !important;
  }
  .video-js .vjs-share__social_fbFeed,
  .video-js .vjs-share__social_tw,
  .video-js .vjs-share__social_reddit,
  .video-js .vjs-share__social_mail,
  .video-js .vjs-share__social_email,
  .video-js .vjs-share__short-link,
  .video-js .vjs-share__btn,
  .video-js .vjs-share__short-link-wrapper {
    border-radius: 18px !important;
  }
  .video-js .vjs-share__social_fbFeed {
    background-color: var(--Color1) !important;
  }
  .video-js .vjs-share__social_tw {
    background-color: var(--Color3) !important;
  }
  .video-js .vjs-share__social_reddit {
    background-color: var(--Color2) !important;
  }
  .video-js .vjs-share__social_mail,
  .video-js .vjs-share__social_email {
    background-color: var(--Color1) !important;
  }
  .video-js .vjs-videojs-share_open .vjs-modal-dialog .vjs-close-button::before {
    display: none !important;
  }
  .pure-u-md-20-24 {
    width: 94%  !important;
    max-width: 95em  !important;
    margin: auto !important;
  }
  .player-dimensions.vjs-fluid {
    padding-top: 56.25%  !important;
  }
  #player-container {
    transition: all 0.2s !important;
    padding-bottom: 54.7%  !important;
  }
@media screen and (max-width: 48em) {
    #player-container {
      padding-bottom: 47%  !important;
      margin-bottom: 8% !important;
    }
}
@media screen and (max-width: 95em) {
    #player-container {
      margin-bottom: 6% !important;
      margin-left: -3.2% !important;
      margin-right: -3.2% !important;
    }
}
@media screen and (max-width: 767px) {
    #player-container {
      margin-bottom: 15% !important;
    }
}
  .pure-g:not(.h-box) > .pure-u-md-1-4 .h-box {
    margin: 5px !important;
  }
@media screen and (min-width: 64em) {
    .pure-u-lg-3-5 .title {
      margin: 0px !important;
    }
}
@media screen and (max-width: 767px) {
    h1 {
      margin: 0.67em 0 !important;
    }
}
  #subscribe {
    border-radius: 18px !important;
    background-color: var(--Color1)  !important;
    float: right !important;
    padding: 7.5px !important;
/*margin-top: -55px !important;*/
  }
  #subscribe:hover {
    background-color: var(--Color1Hover)  !important;
  }
  select#download_widget {
    font-weight: bold !important;
    max-width: 350px  !important;
    margin-top: 10px !important;
  }
  .pure-form-stacked .pure-button-primary {
    margin-top: 5px !important;
  }
  input,
  select,
  textarea {
    font-family: sans-serif !important;
    border: 0px !important;
    border-radius: 18px !important;
  }
  .channel-profile > img {
    width: 36px  !important;
    margin-right: 6px !important;
    height: auto !important;
  }
  .pure-u-md-2-24 > img {
    width: 36px  !important;
    height: auto !important;
  }
  .pure-u-md-2-24 {
    max-width: 46px !important;
  }
  ::-webkit-scrollbar {
    width: 15px !important;
  }
  .icon.ion-ios-heart.creator-heart-small-container {
    color: var(--Color1) !important;
  }
  body a.channel-owner {
    background-color: var(--Color1) !important;
    padding: 4px 8px !important;
    border-radius: 18px !important;
  }
  body a.channel-owner:hover {
    background-color: var(--Color1Hover) !important;
  }
  .pure-u-md-20-24 > .h-box > img {
    border-radius: 18px !important;
    margin: 5px !important;
    opacity: 1 !important;
    transition: all 0.2s !important;
  }
  .pure-g .pure-u-1 .pure-md-1-3 {
    margin-bottom: 0.5em !important;
  }
  hr {
    margin: 1.3em 0 !important;
  }
  .pure-form legend {
    text-align: center !important;
    margin-bottom: 1.3em !important;
    padding: 1.3em !important;
  }
  .pure-form-aligned .pure-control-group label,
  .pure-form-aligned .pure-control-group a,
  .pure-form-aligned .pure-control-group input {
    text-align: left  !important;
    margin: 6px !important;
  }
  .pure-form-aligned .pure-control-group select {
    margin: 0px 0px 0px 6px !important;
  }
  .pure-form-aligned .pure-controls {
    margin: 0px !important;
    text-align: right !important;
  }
  #max_results {
    width: 209.783px !important;
  }
@media screen and (max-width: 1280px) {
    .pure-form-aligned .pure-control-group label,
    .pure-form-aligned .pure-control-group a,
    .pure-form-aligned .pure-controls {
      padding: 0px !important;
    }
}
  .pure-g:not(.h-box) > .pure-u-md-1-4 .h-box:hover {
    box-shadow: 0px 1px 20px rgba(0,0,0,0.3) !important;
  }
  #player-container {
    box-shadow: 0px 10px 17px rgba(0,0,0,0.3) !important;
  }
  .pure-u-md-20-24 > .h-box > img {
    box-shadow: 0px 1px 13px rgba(0,0,0,0.3) !important;
  }
`

var styleSheet = document.createElement("style")
styleSheet.textContent = styles
document.head.appendChild(styleSheet)
