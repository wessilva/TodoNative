// src/utils/theme.js
export const COLORS = {
    // Cores principais (azuis)
    primary100: '#51bdf9',
    primary200: '#48AADC',
    primary300: '#4E5CDC',
    primary400: '#6254FA',

    // Cores neutras (pretos/cinzas)
    neutral100: '#000000',
    neutral200: '#1A1A1A',
    neutral300: '#252525',
    neutral400: '#333333',
    neutral500: '#4D4D4D',

    // Cores de destaque (cinzas claros)
    muted100: '#DEDEDE',
    muted200: '#DFDFDF',

    // Cores de feedback (vermelhos)
    feedback100: '#FF5353',
};

// Classes de utilidade para estilos comuns
export const TEXT_STYLES = {
    h1: 'text-2xl font-bold text-neutral-100 font-inter',
    h2: 'text-xl font-bold text-neutral-100 font-inter',
    h3: 'text-lg font-bold text-neutral-100 font-inter',
    body: 'text-base text-neutral-100 font-inter',
    small: 'text-sm text-neutral-200 font-inter',
    caption: 'text-xs text-neutral-300 font-inter',
};

// Estilos para componentes comuns
export const COMPONENT_STYLES = {
    container: 'flex-1 bg-neutral-100 p-4',
    card: 'bg-neutral-200 rounded-lg p-4 shadow',
    primaryButton: 'bg-primary-200 py-3 px-6 rounded-lg',
    secondaryButton: 'bg-neutral-300 py-3 px-6 rounded-lg',
    input: 'bg-neutral-200 py-2 px-4 rounded border border-neutral-300',
};