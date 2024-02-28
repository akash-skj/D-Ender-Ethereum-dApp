import React, { useContext } from 'react';
import { TransactionContext } from "../context/TransactionContext";

const Admin = ({ onCreateTender }) => {
    const { handleChangeTitle, handleChangeDesc, handleChangeStartTime, handleChangeEndTime } = useContext(TransactionContext);

    const createTender = () => {
        const newTender = {
            title: // get the title,
            description: // get the description,
            startTime: // get the start time,
            endTime: // get the end time,
        };

        // Pass the new tender data to the parent component
        onCreateTender(newTender);
    };

    return (
        // Your existing JSX for the Admin component
    );
};

export default Admin;
