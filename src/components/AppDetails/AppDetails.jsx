import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
    const id = useParams();
    return (
        <div>
            Id is {JSON.stringify(id)}
        </div>
    );
};

export default AppDetails;