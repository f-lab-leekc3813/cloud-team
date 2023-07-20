import React, { useState } from 'react';

import Content1 from "../component/BestBody/Content1";
import Content2 from "../component/BestBody/Content2"

function BestPage () {
    const [selectedItemId, setSelectedItemId] = useState("");

    // 옵션을 선택했을 때 호출되는 이벤트 핸들러
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedItemId(selectedValue);
    };

    return (
        <>
            <Content1 selectedItemId={selectedItemId} handleSelectChange={handleSelectChange}/>
            <Content2 selectedItemId={selectedItemId}/>
        </>
    )
};

export default BestPage;