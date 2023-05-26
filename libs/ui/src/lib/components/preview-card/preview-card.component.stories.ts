import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { PreviewCardComponent } from './preview-card.component';

export default {
  title: 'PreviewCardComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterModule.forRoot([]), ButtonComponent],
    }),
  ],
  component: PreviewCardComponent,
} as Meta<PreviewCardComponent>;

export const Primary = {
  render: (args: PreviewCardComponent) => ({
    props: args,
  }),
  args: {},
};
