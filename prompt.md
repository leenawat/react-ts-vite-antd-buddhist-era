## ขั้นตอนการติดตั้ง

- สร้างโปรเจคต์ด้วย `npm create vite@latest . -- --template react-ts`
- ติดตั้ง Ant Design: `npm install antd @ant-design/icons`
- ติดตั้ง TailwindCSS: `npm install tailwindcss @tailwindcss/vite`
- ตั้งค่า vite.config.ts
```js
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
})
```
- Import Tailwind CSS at index.css
```css
@import "tailwindcss";
```

- ติดตั้ง postcss และ config `npm install -D @tailwindcss/postcss postcss autoprefixer`
- สร้างไฟล์ postcss.config.js
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

```
- ติดตั้ง dayjs: `npm install dayjs`
- สร้างไฟล์ buddhistLocale.ts
```ts
// buddhistLocale.ts
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import th from 'antd/es/date-picker/locale/th_TH';
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)
dayjs.locale('th')

const buddhistLocale: typeof th = {
  ...th,
  lang: {
    ...th.lang,
    fieldDateFormat: 'DD/MM/BBBB',
    fieldDateTimeFormat: 'DD/MM/BBBB HH:mm',
    yearFormat: 'BBBB',
    cellYearFormat: 'BBBB',
  },
};

export default buddhistLocale;
```
- การใช้งาน
```tsx
// BuddhistCalendarDemo.tsx
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
```