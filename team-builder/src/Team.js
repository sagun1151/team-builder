import React from 'react';
import styled from "styled-components";

export default function Team (props) {
    const { data } = props;

    if(!data){
        return <h3>Fetching team</h3>
    }

    return (
        <div className="Team container">
            <h2>{data.name}</h2>;
            <p>Email: {data.email}</p>
            <p>Role: {data.role}</p>
        </div>
    )
}