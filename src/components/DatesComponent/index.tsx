import * as React from 'react';
import {Calendar, Badge} from 'antd';
import "./DatesComponent.scss"

export default function StaticDatePickerLandscape() {
    // const [value, setValue] = React.useState<Date | string | null>(new Date());
    // const setDate = (e: any) => {
    //     setValue(e);
    // }
    function getListData(value: { date: () => {} }) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    {type: 'warning', content: 'This is warning event.'},
                    {type: 'success', content: 'This is usual event.'},
                ];
                break;
            case 10:
                listData = [
                    {type: 'warning', content: 'This is warning event.'},
                    {type: 'success', content: 'This is usual event.'},
                    {type: 'error', content: 'This is error event.'},
                ];
                break;
            case 15:
                listData = [
                    {type: 'warning', content: 'This is warning event'},
                    {type: 'success', content: 'This is very long usual event。。....'},
                    {type: 'error', content: 'This is error event 1.'},
                    {type: 'error', content: 'This is error event 2.'},
                    {type: 'error', content: 'This is error event 3.'},
                    {type: 'error', content: 'This is error event 4.'},
                ];
                break;
            default:
        }
        return listData || [];
    }

    function dateCellRender(value: any) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(({content, type}: any) => (
                    <li key={content}>
                        <Badge status={type} text={content}/>
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value: { month: () => {} }) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value: any) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    return (
        <div className={"dates--container"}>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
        </div>
    );
}
