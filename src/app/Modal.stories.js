import Modal from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        onConfirm: { action: 'onConfirm' },
        onCancel: { action: 'onCancel' },
    },
};

// Default story
export const Default = {
    args: {},
};

