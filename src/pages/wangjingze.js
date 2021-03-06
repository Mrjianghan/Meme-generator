
import React from 'react'
import { Template } from '../components/template';
const config = {
    "name": "王境泽",
    "url": "/wangjingze/",
    "gif": "/template/wangjingze.gif",
    "config": [
        {
            "default": "我王境泽就是饿死",
            "startTime": 0,
            "endTime": 1.34
        },
        {
            "default": "死外边，从这里跳下去",
            "startTime": 1.56,
            "endTime": 3.1
        },
        {
            "default": "也不会吃你们一点东西",
            "startTime": 3.20,
            "endTime": 4.64
        },
        {
            "default": "真香",
            "startTime": 4.89,
            "endTime": 5.93
        }
    ]
}
export { config };

export default () => (
    <Template element={config} />
)
