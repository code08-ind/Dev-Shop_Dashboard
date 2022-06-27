import React from 'react';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


const Calender = () => {
    const onDragStart = (arg) => {
        arg.navigation.enable = true;
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Calendar" />
            <ScheduleComponent
                height="650px"
                selectedDate={new Date(2021, 0, 10)}
                eventSettings={{ dataSource: scheduleData }}
                dragStart={onDragStart}
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    );
};

export default Calender;