import {Meta} from '@storybook/react';
import TextInput, {
  TextInputProps,
} from '../../../../components/atoms/TextInput';

export default {
  title: 'Components/Atoms/Input',
  component: TextInput,
} as Meta;

const Template = (args: TextInputProps) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
