import React from 'react';
import {
  Form, Input, Button, Select,
} from 'antd';
import { injectIntl } from 'react-intl';

import { withClick } from '../Constants/ClickContext';

const ContactForm = ({ intl, click }) => {
  const { Option } = Select;
  const layout = {
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };
  const [form] = Form.useForm();

  return (
    <Form {...layout} form={form} name="control-hooks">
      <Form.Item name="name" rules={[{ required: true }]}>
        <Input placeholder={intl.formatMessage({ id: 'name' })} />
      </Form.Item>
      <Form.Item name="contact" rules={[{ required: true }]}>
        <Input placeholder={intl.formatMessage({ id: 'phone_or_mail' })} />
      </Form.Item>

      <Form.Item name="gender" rules={[{ required: true }]}>
        <Select placeholder={intl.formatMessage({ id: 'delay' })} allowClear>
          <Option value="male">{intl.formatMessage({ id: 'asap' })}</Option>
          <Option value="female">
            {intl.formatMessage({ id: 'before_next_week' })}
          </Option>
          <Option value="other">
            {intl.formatMessage({ id: 'no_urgent' })}
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) => (getFieldValue('gender') === 'other' ? (
          <Form.Item
            name="customizeGender"
            label="Customize Gender"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        ) : null)}
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={click.incrementClick}>
          {intl.formatMessage({ id: 'submit' })}
          {' '}
          {click.counter}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withClick(injectIntl(ContactForm));
