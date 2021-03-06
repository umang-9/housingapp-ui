import React, { useEffect, useRef, useState } from 'react';

import { 
    IonContent, 
    IonPage, 
    IonGrid, 
    IonRow,
    IonCol, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonSlides, 
    IonSlide, 
    IonSelect,
    IonSelectOption,
    IonNote,
    IonItem,
    IonIcon
} from '@ionic/react';

import { FormProvider, useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { close } from "ionicons/icons";

import HeaderMain from '../components/Header-main';
import Footer from '../components/Footer';
import FooterMobile from '../components/Footer-mobile';
import DashboardSidebar from '../components/Dahsboard-sidebar';

import '@ionic/react/css/ionic-swiper.css';
import '@ionic/react/css/flex-utils.css';
import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const AddNewProperty: React.FC = () => {
    const mySlides = useRef<any>(null);

    const [city, setCity] = useState<string>(); 

    const contentRef = useRef<HTMLIonContentElement | null>(null);
    const scrollToTop= () => {
        contentRef.current && contentRef.current.scrollToTop();
    };

    const methods = useForm();
    const { register, trigger, handleSubmit, control, setValue, getValues, formState: { errors } } = methods;

    useEffect(() => {
        mySlides.current.lockSwipes(true);
    });

    const next = async (fields: any) => {
        const result = await trigger(fields);
        if (!result) return;
        await mySlides.current.lockSwipes(false);
        await mySlides.current.slideNext();
        await mySlides.current.lockSwipes(true);
        scrollToTop();
    };

    const prev = async () => {
        await mySlides.current.lockSwipes(false);
        await mySlides.current.slidePrev();
        await mySlides.current.lockSwipes(true);
    };
    
        
    const onSubmit = (data: any) => {
        console.log(data);
    };


    return (
    <IonPage>

         <HeaderMain />

         <IonContent className="dashboard-wrapper" ref={contentRef} scrollEvents={true} fullscreen>

            <IonGrid className="dashboard-main-grid add-proepry-wrapper">
                <IonRow className="ion-justify-content-between dashboard-main-row">

                    {/* sidebar start  */}
                    <DashboardSidebar />
                    {/* sidebar end  */}
                        
                    <IonCol className="dashboard-content" size="12" sizeMd="12" sizeLg="6" sizeXl="4">
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <IonSlides pager={true} options={slideOpts} ref={mySlides}>
                                    <IonSlide>
                                        <IonGrid>
                                            <IonRow className="ion-justify-content-center">
                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Property Name</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="text"
                                                        {...register('propertyName', {
                                                            required: 'Property name is a required field'
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="propertyName"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Property Name Suffix (3 Characters)</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="text"
                                                        {...register('propertyNameSuffix', {
                                                            required: 'Property name suffix is a required field',
                                                            pattern: {
                                                                value: /^[A-Z]{3}$/i,
                                                                message: 'Property name suffix should only contain characters and it should not more than 3 characters.'
                                                            }
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="propertyNameSuffix"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Address</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="text"
                                                        {...register('propertyAddress', {
                                                            required: 'Address is a required field'
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="propertyAddress"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">City</IonLabel>
                                                    <Controller
                                                        render={({ field }) => (
                                                        <IonSelect
                                                            mode="md"
                                                            placeholder=""
                                                            value={field.value}
                                                            onIonChange={e => setValue('city', e.detail.value)}
                                                        >
                                                            <IonSelectOption value="city1">City 1</IonSelectOption>
                                                            <IonSelectOption value="city2">City 2</IonSelectOption>
                                                            <IonSelectOption value="city3">City 3</IonSelectOption>
                                                            <IonSelectOption value="city4">City 4</IonSelectOption>
                                                            <IonSelectOption value="city5">City 5</IonSelectOption>
                                                        </IonSelect>
                                                        )}
                                                        control={control}   
                                                        name="city"
                                                        rules={{ required: 'Please select city' }}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="city"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Province/State</IonLabel>
                                                    <Controller
                                                        render={({ field }) => (
                                                        <IonSelect
                                                            mode="md"
                                                            placeholder=""
                                                            value={field.value}
                                                            onIonChange={e => setValue('state', e.detail.value)}
                                                        >
                                                            <IonSelectOption value="state1">State 1</IonSelectOption>
                                                            <IonSelectOption value="state2">State 2</IonSelectOption>
                                                            <IonSelectOption value="state3">State 3</IonSelectOption>
                                                            <IonSelectOption value="state4">State 4</IonSelectOption>
                                                            <IonSelectOption value="state5">State 5</IonSelectOption>
                                                        </IonSelect>
                                                        )}
                                                        control={control}   
                                                        name="state"
                                                        rules={{ required: 'Please select State' }}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="state"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Country</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="text"
                                                        {...register('country', {
                                                            required: 'Country name is a required field'
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="country"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Postal code</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="text"
                                                        {...register('postalCode', {
                                                            required: 'Property name suffix is a required field',
                                                            pattern: {
                                                                value: /^[A-Z0-9]{6}$/i,
                                                                message: 'Please enter a valid postal code.'
                                                            }
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="postalCode"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                {/* <IonCol  size="12" sizeMd="12" sizeLg="6" sizeXl="6" className="form-field sign-up-btn">
                                                    <IonButton expand="block" shape="round" fill="outline" onClick={() => next(['propertyName','propertyNameSuffix', 'propertyAddress', 'city', 'state', 'country', 'postalCode'])}>
                                                        Continue
                                                    </IonButton>
                                                </IonCol> */}

                                                <IonCol  size="12" sizeMd="12" sizeLg="6" sizeXl="6" className="form-field sign-up-btn">
                                                    <IonButton expand="block" shape="round" fill="outline" onClick={() => next([])}>
                                                        Continue
                                                    </IonButton>
                                                </IonCol>

                                            </IonRow>
                                        </IonGrid>
                                    </IonSlide>

                                    <IonSlide>
                                        <IonGrid>
                                            <IonRow className="ion-justify-content-center">

                                                <IonNote>Roughly estimate the number of apartments per floor in your building. After generating the building, you will be able to specifically change the layout per floor if some floor do not have the same number of apartments.</IonNote>

                                                <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="margin-right-auto form-filed">
                                                    <IonLabel className="form-lable">Number of Floors</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="number"   
                                                        {...register('numberOfFloors', {
                                                            required: 'Please mention number of floors.',
                                                            pattern: {
                                                                value: /\d{3}$/i,
                                                                message: 'Invalid floor number'
                                                             }
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="numberOfFloors"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-filed">
                                                    <IonLabel className="form-lable">Number of Apartments per Floor</IonLabel>
                                                    <IonInput
                                                        mode="md"
                                                        type="number"   
                                                        {...register('numberOfApartments', {
                                                            required: 'Please mention number of Apartments per floor.',
                                                            pattern: {
                                                                value: /^[0-9]{3}$/i,
                                                                message: 'Invalid number of apartments per floor'
                                                             }
                                                        })}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="numberOfApartments"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                <IonCol size="12" className="form-field">
                                                    <IonLabel className="form-lable">Units Number Format</IonLabel>
                                                    <Controller
                                                        render={({ field }) => (
                                                        <IonSelect
                                                            mode="md"
                                                            placeholder=""
                                                            value={field.value}
                                                            onIonChange={e => setValue('unitesNumberFormat', e.detail.value)}
                                                        >
                                                            <IonSelectOption value="101">101</IonSelectOption>
                                                            <IonSelectOption value="102">102</IonSelectOption>
                                                            <IonSelectOption value="103">103</IonSelectOption>
                                                            <IonSelectOption value="104">104</IonSelectOption>
                                                            <IonSelectOption value="105">105</IonSelectOption>
                                                        </IonSelect>
                                                        )}
                                                        control={control}   
                                                        name="unitesNumberFormat"
                                                        rules={{ required: 'Please select Units Number Formate' }}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="unitesNumberFormat"
                                                        as={<div className="error-message" style={{ color: 'red' }} />}
                                                    />
                                                </IonCol>

                                                {/* <IonCol  size="12" sizeMd="12" sizeLg="6" sizeXl="6" className="form-field sign-up-btn">
                                                    <IonButton expand="block" shape="round" fill="outline" onClick={() => next(['numberOfFloors', 'numberOfApartments', 'unitesNumberFormat'])}>
                                                        Continue
                                                    </IonButton>
                                                </IonCol> */}

                                                <IonCol  size="12" sizeMd="12" sizeLg="6" sizeXl="6" className="form-field sign-up-btn">
                                                    <IonButton expand="block" shape="round" fill="outline" onClick={() => next([])}>
                                                        Continue
                                                    </IonButton>
                                                </IonCol>

                                            </IonRow>
                                        </IonGrid>
                                    </IonSlide>

                                    <IonSlide>

                                        <div>
                                            <IonNote>You are almost done adding the property to your account. To customize a floor, select a floor from the dropdown menu, then add, remove or change the apartment number format to match the ones that you own.</IonNote>

                                            <div className="generated-floor-box">
                                                <IonGrid>
                                                    <IonRow className="ion-justify-content-center">
                                                        <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="form-field margin-right-auto">
                                                            <IonLabel className="form-lable">Choose a floor</IonLabel>
                                                            <Controller
                                                                render={({ field }) => (
                                                                <IonSelect
                                                                    mode="md"
                                                                    placeholder=""
                                                                    // value={field.value}
                                                                    value="5"
                                                                    onIonChange={e => setValue('chooseFloor', e.detail.value)}
                                                                >
                                                                    <IonSelectOption value="5">5</IonSelectOption>
                                                                    <IonSelectOption value="6">6</IonSelectOption>
                                                                    <IonSelectOption value="7">7</IonSelectOption>
                                                                    <IonSelectOption value="8">8</IonSelectOption>
                                                                    <IonSelectOption value="9">9</IonSelectOption>
                                                                </IonSelect>
                                                                )}
                                                                control={control}   
                                                                name="chooseFloor"
                                                                rules={{ required: 'Please choose floor' }}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="unitesNumberFormat"
                                                                as={<div className="error-message" style={{ color: 'red' }} />}
                                                            />
                                                        </IonCol>

                                                        <IonCol size="12" className="form-field">
                                                            <IonLabel className="form-lable">Add, rename or delete apartment:</IonLabel>
                                                            <IonGrid>
                                                                <IonRow className="ion-justify-content-start">
                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"501"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"502"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"503"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"504"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"505"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info">
                                                                            <IonButton fill="clear">
                                                                                <IonIcon icon={close} />
                                                                            </IonButton>
                                                                            <IonInput mode="md" type="text" value={"506"}></IonInput>
                                                                        </div>
                                                                    </IonCol>

                                                                    <IonCol size="6" sizeMd="4" sizeLg="4" sizeXl="4" className="">
                                                                        <div className="apartment-info add-unit-button">
                                                                            <IonButton className="" fill="clear">
                                                                                <IonLabel>Add a Unit</IonLabel>
                                                                            </IonButton>
                                                                            
                                                                        </div>
                                                                    </IonCol>
                                                                </IonRow>
                                                            </IonGrid>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonGrid>   
                                            </div>

                                            <IonGrid>
                                                <IonRow className="ion-justify-content-center">                     <IonCol size="12" sizeMd="12" sizeLg="6" sizeXl="6"     className="form-field sign-up-btn">
                                                        <IonButton type="submit" expand="block" shape="round" fill="outline">
                                                                Submit
                                                        </IonButton>
                                                    </IonCol>

                                                </IonRow>
                                            </IonGrid>
                                        </div>

                                    </IonSlide>

                                </IonSlides>
                            </form>
                        </FormProvider>
                    </IonCol>

                    {/* dashboar posts start */}
                    <IonCol  className="dashboard-posts" size="12" sizeMd="12" sizeLg="3" sizeXl="2">
                            
                    </IonCol>
                    {/* dashboar post end */}

                </IonRow>
            </IonGrid>

            <Footer />

        </IonContent>

        
        <FooterMobile />

    </IonPage>
    );
};

export default AddNewProperty;