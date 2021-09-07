import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Header from '~/components/layout/Header';

const common = {
    components: { Header },
    methods: {
        selectNetwork: action('selectNetwork'),
        explanations: action('explanations'),
    },
    data: () => ({ isExplanationsShown: false }),
};

storiesOf('Layout/Header', module).add('Default', () => ({
    ...common,
    template: '<Header @selectNetwork="selectNetwork" :isExplanationsShown.sync="isExplanationsShown" />',
}));
