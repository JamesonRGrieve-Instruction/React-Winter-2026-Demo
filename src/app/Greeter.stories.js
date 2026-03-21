import { fn } from 'storybook/test';

import Greeter from './Greeter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const defaultStory = {
    title: 'Demo/Greeter',
    component: Greeter,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onChangeCallback: fn() },
};
export default defaultStory;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        name: "John Doe",
        profession: "Bus Driver",
        age: 40
    },
};


