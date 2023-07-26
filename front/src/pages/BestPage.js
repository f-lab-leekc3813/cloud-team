import React, { useState } from 'react';


import Content1 from "../component/BestBody/Content1";
import Content2 from "../component/BestBody/Content2"

function BestPage() {
    const [selectedItemId, setSelectedItemId] = useState("");

    // 옵션을 선택했을 때 호출되는 이벤트 핸들러
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "지역을 선택하세요") {
            setSelectedItemId("");
        } else {
            setSelectedItemId(selectedValue);
        }
    };
    let region;
    if (selectedItemId === "") {
        region = "best";
    } else if (selectedItemId.length === 4) {
        region = selectedItemId[0] + selectedItemId[2];
    } else {
        region = selectedItemId.slice(0, 2);
    }

    return (
        <>
            <Content1 selectedItemId={selectedItemId} handleSelectChange={handleSelectChange} />
            <Content2 selectedItemId={selectedItemId} />
        </>
    )
};

export default BestPage;