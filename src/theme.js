export const darkTheme = {
    // --- Core Backgrounds ---
    '--bg-primary': '#1d2125',
    '--bg-secondary': '#161a1d',
    '--bg-tertiary': '#22272b',
    '--neutral-100': '#293038',
    '--neutral-200': '#1d2125',
    '--neutral-300': '#39424a',

    // --- Surfaces / Cards ---
    '--card-bg': '#22272b',
    '--card-bg-hover': '#2c333a',

    // --- Borders ---
    '--border-color': '#39424a',
    '--border-light': '#454f59',

    // --- Text ---
    '--text-primary': '#dcdfe4',
    '--text-secondary': '#8c9bab',
    '--text-muted': '#626f86',

    // --- Accents ---
    '--accent': '#579dff',
    '--accent-light': '#8c9bab',
    '--accent-dark': '#0c66e4',
    '--accent-focus-ring': 'rgba(87, 157, 255, 0.4)',

    // --- Semantic / Status Colors ---
    '--success-500': '#4bce97',
    '--error-500': '#ff7452',
    '--warning-500': '#ffc400',

    '--success-bg': '#1c3329',
    '--success-text': '#4bce97',
    '--error-bg': '#3f1515',
    '--error-text': '#f87171',
    '--warning-bg': '#33240e',
    '--warning-text': '#f5cd47',
    '--info-bg': '#102445',
    '--info-text': '#579dff',
    '--todo-bg': '#2c333a',
    '--todo-text': '#9fadbc',

    // --- Derived/Dependent Variables ---
    // Note: Since JS objects cannot reference other keys directly like CSS,
    // we manually set the values here.
    '--content': '#dcdfe4',      /* var(--text-primary) */
    '--content-light': '#8c9bab', /* var(--text-secondary) */
    '--shadow': '0 2px 4px rgba(0, 0, 0, 0.2)', /* var(--shadow-soft) */

    // --- Dimensions (Non-color values) ---
    '--header-height': '56px',
    '--radius': '3px',
    '--radius-sm': '4px',
    '--radius-lg': '8px',
    '--shadow-soft': '0 2px 4px rgba(0, 0, 0, 0.2)',
    '--shadow-deep': '0 8px 16px rgba(0, 0, 0, 0.4)',
};

export const lightTheme = {
    // --- Core Backgrounds (Dark inverse) ---
    '--bg-primary': '#f0f2f5',
    /* App Background / Sidebar (Very light gray) */
    '--bg-secondary': '#ffffff',
    /* Canvas / Main Content (White) */
    '--bg-tertiary': '#ffffff',
    /* Headers / Cards (White) */
    '--neutral-100': '#ebecf0',
    /* Kanban column background / Modal header/footer (Light gray) */
    '--neutral-200': '#f7f8f9',
    /* Modal input background (Off-white) */
    '--neutral-300': '#c1c7d0',
    /* Modal input border (Medium light gray) */

    // --- Surfaces / Cards (Dark inverse) ---
    '--card-bg': '#ffffff',
    /* Card Background (White) */
    '--card-bg-hover': '#f0f2f5',
    /* Card Hover (Slightly lighter gray) */

    // --- Borders (Dark inverse) ---
    '--border-color': '#e5e5e5',
    /* Structure borders */
    '--border-light': '#dfe1e6',
    /* Input borders */

    // --- Text (Dark inverse) ---
    '--text-primary': '#172b4d',
    /* High contrast text (Dark Blue/Black) */
    '--text-secondary': '#5e6c84',
    /* Secondary text (Medium Gray) */
    '--text-muted': '#8993a4',
    /* Muted text (Lighter Gray) */

    // --- Accents (Adjusted for contrast on light background) ---
    '--accent': '#0052cc',
    /* Primary Action Blue (Darker Blue) */
    '--accent-light': '#42526e',
    /* Used for modal close hover (Medium dark gray) */
    '--accent-dark': '#0047b3',
    /* Button hover (Slightly darker blue) */
    '--accent-focus-ring': 'rgba(0, 82, 204, 0.4)',
    /* Focus ring color with transparency */

    // --- Semantic / Status Colors (Adjusted for contrast on light background) ---
    '--success-500': '#00875a',
    /* Green Text for done status (Darker Green) */
    '--error-500': '#de3500',
    /* Red Text for high priority/todo status (Darker Red/Orange) */
    '--warning-500': '#ff991f',
    /* Yellow Text for in progress/medium priority (Darker Yellow/Orange) */

    // --- Status Backgrounds/Text (Dark inverse) ---
    '--success-bg': '#e3fcef',
    '--success-text': '#006644',
    '--error-bg': '#ffebe6',
    '--error-text': '#bf2600',
    '--warning-bg': '#fffae6',
    '--warning-text': '#b35c00',
    '--info-bg': '#e6f4ff',
    '--info-text': '#0052cc',
    '--todo-bg': '#ebecf0',
    '--todo-text': '#42526e',

    // --- Derived/Dependent Variables (Manually set) ---
    '--content': '#172b4d',      /* var(--text-primary) */
    '--content-light': '#5e6c84', /* var(--text-secondary) */
    '--shadow': '0 1px 2px rgba(9, 30, 66, 0.15)', /* var(--shadow-soft) */

    // --- Dimensions (Non-color values - remain the same) ---
    '--header-height': '56px',
    '--radius': '3px',
    '--radius-sm': '4px',
    '--radius-lg': '8px',
    '--shadow-soft': '0 1px 2px rgba(9, 30, 66, 0.15)',
    '--shadow-deep': '0 4px 8px rgba(9, 30, 66, 0.25)',
};