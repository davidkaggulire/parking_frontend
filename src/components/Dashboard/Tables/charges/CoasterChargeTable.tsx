import React from 'react'
import GeneralTable from '../GeneralTable';
import { COLUMNS } from './ChargeColumns';


const CoasterChargeTable = (props: any) => {
    return <GeneralTable columns={COLUMNS} data={props.data} />;
}

export default CoasterChargeTable