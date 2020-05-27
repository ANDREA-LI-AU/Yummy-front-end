import React from 'react';

import { UploadOutlined } from '@ant-design/icons';
import {Button, Space, Upload, Popconfirm } from 'antd';

export default function UploadFile(){
    return (
        <Space>
        <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm 
        title="Are you sure you want to upload this?" 
        okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
      </Space>
    )
}

