import { Meta } from '@storybook/angular';
import { PreviewCardComponent } from './preview-card.component';

export default {
  title: 'PreviewCardComponent',
  component: PreviewCardComponent,
} as Meta<PreviewCardComponent>;

export const Primary = {
  render: (args: PreviewCardComponent) => ({
    props: args,
  }),
  args: {},
};
