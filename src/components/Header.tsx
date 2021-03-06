import React from "react";

import { IonHeader, IonImg } from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const Header: React.FC = () => {
    return (
        <IonHeader className="main-header">
            <div className="main-logo">
                <a href="/">
                    <IonImg className="logo" src="assets/images/logo.svg" />
                </a>
            </div>
        </IonHeader>
        
    );
};

export default Header;