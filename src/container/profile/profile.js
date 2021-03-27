import React from 'react';
import { Helmet } from 'react-helmet';
import Timeline from "../../components/result/timeline";
import ProfileSnippet from "../../components/user/profile";


export default function Profile() {
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <ProfileSnippet isProfile={true} size="300"/>
            <Timeline />
        </div>
    )
}
