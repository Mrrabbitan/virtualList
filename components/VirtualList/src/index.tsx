

import React from 'react';
import { BaseTable } from 'ali-react-table'
const VirtualTable = (props) =>{
    const { loading, dataSource, columns, length } = props
    
    return (<>
        <BaseTable
            {...props}
            dataSource={dataSource}
            columns={columns}
            primaryKey="userId"
            style={{
            '--header-bgcolor': '#fafafa',
            '--header-color': 'rgba(0, 0, 0, 0.85)',
            clear: 'both',
            width: 'auto',
            height: length * 63 + 35 > 600 ? 600 : length * 65 + 50,
            overflow: 'auto',
            }}
            isStickyHeader
            stickyTop={0}
            useVirtual
            isLoading={loading}
        />
    </>)
}

export default VirtualTable