import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Typography,
  Card,
  Space,
} from 'antd';
import buddhistLocale from './buddhistLocale';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const BuddhistCalendarDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (_date: any, dateString: string | string[]) => {
    if (typeof dateString === 'string') {
      setSelectedDate(dateString);
    } else {
      setSelectedDate(dateString.join(', '));
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <>
      <h1>ปฏิทินแบบพุทธศักราช</h1>
        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Form disabled
        </Checkbox>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          disabled={componentDisabled}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker locale={buddhistLocale} showTime={{ format: 'HH:mm', minuteStep: 5 }}/>
          </Form.Item>
          <Form.Item label="RangePicker">
            <RangePicker locale={buddhistLocale}/>
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                type="button"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
          <Form.Item label="Slider">
            <Slider />
          </Form.Item>
          <Form.Item label="ColorPicker">
            <ColorPicker />
          </Form.Item>
          <Form.Item label="Rate">
            <Rate />
          </Form.Item>
        </Form>
      </>
    </div>
  );
};

export default BuddhistCalendarDemo;
