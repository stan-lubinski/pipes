import { Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { UiModule } from '../ui.module';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  imports: [UiModule]
} as Meta<HeaderComponent>;

export const Primary = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {},
};
