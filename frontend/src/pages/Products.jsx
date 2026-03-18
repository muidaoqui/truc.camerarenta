import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';

const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = newValue => {
        setInputValue(newValue);
    };
    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{ margin: '0 16px' }}
                    value={inputValue}
                    onChange={onChange}
                    formatter={(value) => `${value} M`}
                    parser={(value) => value.replace(" M", "")}
                />
            </Col>
        </Row>
    );
};

function Products() {


    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl text-center font-bold mb-6">
                Tất cả sản phẩm
            </h1>
            <div className="">
                {/*filter*/}
                <div>
                    <h2>Lọc sản phẩm</h2>
                    <div className="flex gap-4 mt-4">
                        <Space style={{ width: '100%' }} vertical>
                            <IntegerStep />
                        </Space>
                        <select className="border border-gray-300 rounded px-4 py-2">
                            <option value="">Loại thiết bị</option>
                            <option value="camera">Camera</option>
                            <option value="lens">Lens</option>
                            <option value="accessory">Phụ kiện</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border p-4 rounded hover:shadow-lg transition">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/248322/Camera-DJI-Osmo-Pocket-2-Black-400x400.jpg"
                                alt="DJI Osmo Pocket 2"
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-lg font-semibold mt-2">
                                DJI Osmo Pocket 2
                            </h2>
                            <p className="text-gray-500 mt-1">
                                Giá: 9.990.000 VND
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;