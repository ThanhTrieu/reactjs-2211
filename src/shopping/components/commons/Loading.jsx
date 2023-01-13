import React from "react";
import { Skeleton } from 'antd';

const LoadingData = () => {
    // tao hieu ung loading data
    return <Skeleton active />
}
export default React.memo(LoadingData);