import { 
   IonContent, 
   IonPage, 
   IonLabel, 
   IonInput, 
   IonButton, 
   IonGrid, 
   IonRow, 
   IonCol,  
} from '@ionic/react';

import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import Header from '../components/Header';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

const ForgetPassword: React.FC = () => {

   const methods = useForm();
   const { register, handleSubmit, formState: { errors } } = methods;

   const onSubmit = (data: any) => {
      console.log(data);
   };
   
   return (
      <IonPage>

         <Header />

         <IonContent fullscreen>
            <IonGrid>
                <IonRow className="login-form-row">
                     <IonCol size="10" sizeMd="6" sizeLg="4">
                        <FormProvider {...methods}>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <h2>Reset Password</h2>
                              <p>Enter the email assosicated with your account and we'll send you an email with instruction to reset your password.</p>

                              <IonLabel className="form-lable ion-margin-top" >Email Address:</IonLabel>
                              {/* <IonInput className="ion-margin-top" placeholder="Email"/> */}
                              <IonInput
                                 mode="md"
                                 type="email"
                                 // placeholder="Email"
                                 {...register('email', {
                                    required: 'Email is a required',
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                    }
                                 })}
                              />
                              <ErrorMessage
                                 errors={errors}
                                 name="email"
                                 as={<div className="error-message" style={{ color: 'red' }} />}
                              />

                              <IonButton type="submit" className="ion-margin-top" expand="block" shape="round" fill="outline" >
                                 Send
                              </IonButton>

                              <div  className="back-to-login ion-text-right">
                                 <a href="/">Back to Login page</a>
                              </div>

                           </form>
                        </FormProvider>
                    </IonCol>

                </IonRow>
            </IonGrid>
         </IonContent>

      </IonPage>
   );
};

export default ForgetPassword;