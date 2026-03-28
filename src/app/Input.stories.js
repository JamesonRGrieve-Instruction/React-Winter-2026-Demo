import Input from './Input';

export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'onChange' },
        validate: { action: 'validate' },
    },
};

// Default story
export const Default = {
    args: {
        value: '',
    },
};


// Custom label example
export const Value = {
    args: {
        value: 'Some Text',
    },
};