import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './SettingsTabs.css'

const { TabPane } = Tabs;

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'SETTINGS',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'USER PERMISSION',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'NOTIFICATION',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'ACCOUNT & SECURITY',
    children: 'Content of Tab Pane 4',
  },
];

const SettingsTab = () => {
  const [activeKey, setActiveKey] = useState('4');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        defaultActiveKey="1"
        size='middle'
        onChange={handleTabChange}
        tabBarGutter={50}
        tabPosition='top'
        type='line'
        className='w-screen px-5'
        style={{ marginBottom: '-1px' }}
      >
        {items.map(item => (
          <TabPane
            key={item.key}
            tab={
              <span
                className='text-[#9BA5B7] text-[11px] font-bold'>
                {item.label}
              </span>
            }
          >
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default SettingsTab;