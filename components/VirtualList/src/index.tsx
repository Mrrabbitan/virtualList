

import React from 'react';

const VirtualTable = () =>{
    return (<>
        <BaseTable
        {...props}
        dataSource={props.dataSource}
        columns={[multiSelect({
          primaryKey: 'userId',
          keys: seleKeys,
          onChange: (keys: string, rows: any, action: any) => {
            setSeleKeys(keys);
            rowSelectionOnChange(keys, rows, action);
            props.rowSelection.onSelect(keys, undefined, rows)
            props.rowSelection.onSelectAll(keys, undefined, rows)
          },
        })({ columns: props.columns, dataSource: props.dataSource }), ...virtualColumn(), virtalManMadeColumn()]}
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