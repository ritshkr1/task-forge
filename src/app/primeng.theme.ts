import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// Define the full mapping
export const PrimeNgTFPreset = definePreset(Aura, {
    semantic: {
        // --- Global / Non-Color Properties ---
        transitionDuration: '0.2s',
        disabledOpacity: '0.5',
        // Note: The borderRadius and shadow structure from the previous response is still valid here.
        
        // --- Color Schemes ---
        colorScheme: {
            light: {
                // Backgrounds (using your neutral/surface variables)
                surface: {
                    0: 'var(--bg-primary)',     // Page background
                    50: 'var(--bg-primary)',    // Often the same as 0
                    100: 'var(--card-bg)',      // Component base background
                    200: 'var(--bg-secondary)', // Input/Subtle backgrounds
                    300: 'var(--border-color)', // Default borders
                    400: 'var(--border-light)', // Stronger borders
                    500: 'var(--neutral-300)',  // Gray tone
                    600: 'var(--text-secondary)', // Darker gray tone
                    700: 'var(--text-primary)', // Text color
                    800: 'var(--text-primary)',
                    900: 'var(--text-primary)'
                },
                
                // Primary/Accent Color
                primary: {
                    color: 'var(--accent)',
                    hoverColor: 'var(--accent-light)',
                    activeColor: 'var(--accent-dark)',
                    contrastColor: '#ffffff', // Assuming white contrast on your primary color
                },

                // Text Colors
                text: {
                    color: 'var(--text-primary)',
                    mutedColor: 'var(--text-secondary)',
                    hoverColor: 'var(--text-primary)',
                    hoverMutedColor: 'var(--text-secondary)'
                },

                // Highlight/Selection (for text selection, etc.)
                highlight: {
                    background: 'var(--accent-light)',
                    color: 'var(--text-primary)',
                    focusBackground: 'var(--accent-focus-ring)',
                    focusColor: 'var(--text-primary)'
                },

                // Form Fields (Inputs, Textareas)
                formField: {
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-light)',
                    hoverBorderColor: 'var(--accent-light)',
                    focusBorderColor: 'var(--accent)',
                    invalidBorderColor: 'var(--error-500)',
                    color: 'var(--text-primary)',
                    placeholderColor: 'var(--text-muted)',
                    disabledBackground: 'var(--neutral-100)',
                    disabledColor: 'var(--text-muted)',
                },

                // Lists (Selects, Dropdowns, ListBox)
                list: {
                    option: {
                        focusBackground: 'var(--card-bg-hover)',
                        selectedBackground: 'var(--accent)',
                        selectedColor: '#ffffff',
                        icon: {
                            color: 'var(--text-secondary)',
                            focusColor: 'var(--text-primary)'
                        }
                    },
                },

                // Overlays (Modals, Popovers)
                overlay: {
                    modal: {
                        background: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                    },
                    popover: {
                        background: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                    }
                }
            },
            
            // --- Dark Scheme ---
            dark: {
                // Backgrounds
                surface: {
                    0: 'var(--bg-primary)',
                    50: 'var(--bg-primary)',
                    100: 'var(--card-bg)',
                    200: 'var(--bg-secondary)',
                    300: 'var(--border-color)',
                    400: 'var(--border-light)',
                    500: 'var(--neutral-300)',
                    600: 'var(--text-secondary)',
                    700: 'var(--text-primary)',
                    800: 'var(--text-primary)',
                    900: 'var(--text-primary)'
                },
                
                // Primary/Accent Color
                primary: {
                    color: 'var(--accent)',
                    hoverColor: 'var(--accent-light)',
                    activeColor: 'var(--accent-dark)',
                    contrastColor: '#ffffff', // Assuming white contrast on your primary color
                },

                // Text Colors
                text: {
                    color: 'var(--text-primary)',
                    mutedColor: 'var(--text-secondary)',
                    hoverColor: 'var(--text-primary)',
                    hoverMutedColor: 'var(--text-secondary)'
                },

                // Highlight/Selection
                highlight: {
                    background: 'var(--accent-light)',
                    color: 'var(--text-primary)',
                    focusBackground: 'var(--accent-focus-ring)',
                    focusColor: 'var(--text-primary)'
                },

                // Form Fields
                formField: {
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-light)',
                    hoverBorderColor: 'var(--accent-light)',
                    focusBorderColor: 'var(--accent)',
                    invalidBorderColor: 'var(--error-500)',
                    color: 'var(--text-primary)',
                    placeholderColor: 'var(--text-muted)',
                    disabledBackground: 'var(--neutral-100)',
                    disabledColor: 'var(--text-muted)',
                },

                // Lists
                list: {
                    option: {
                        focusBackground: 'var(--card-bg-hover)',
                        selectedBackground: 'var(--accent)',
                        selectedColor: '#ffffff',
                        icon: {
                            color: 'var(--text-secondary)',
                            focusColor: 'var(--text-primary)'
                        }
                    },
                },

                // Overlays
                overlay: {
                    modal: {
                        background: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                    },
                    popover: {
                        background: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                    }
                }
            }
        }
    }
});