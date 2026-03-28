import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

// Default story
export const Default = {
    args: {
        label: 'Click me',
        disabled: false,
    },
};

// Disabled state
export const Disabled = {
    args: {
        label: 'Disabled',
        disabled: true,
    },
};

// Custom label example
export const CustomLabel = {
    args: {
        label: 'Submit',
        disabled: false,
    },
};