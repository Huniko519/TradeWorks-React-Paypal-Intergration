import React from 'react';
import HeaderComponent from '../component/Header/Header';
import { PayPalHostedField, PayPalHostedFieldsProvider, PayPalScriptProvider, usePayPalHostedFields} from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "AWnfmz9PcFV1F-VnLhlolk0xnFejJDcAPVBQn2WNl7kgWzutAm26St0cdei-E8TSDc5utKHbVTWgvCP7",
    "data-client-token": "eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiNmE0ZGI2ZWQ5ZWE2NTdjYTYzZWM1MTZiNTExMmQ5NGQxZWI4MWVjNDMxYThjYWRiZTdmMTkxMWQ3Y2EyN2MwMHxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9NjNrdm4zN3Z0MjlxYjRkZiZjcmVhdGVkX2F0PTIwMjItMDItMTBUMDk6NTA6MzUuNDc5WiIsInZlcnNpb24iOiIzLXBheXBhbCJ9LCJwYXlwYWwiOnsiaWRUb2tlbiI6ImV5SnJhV1FpT2lKbE5EQTJOakE0WWpVMFlUazBORGd4WWprMVl6YzFOREkwT0dOak1USXpaaUlzSW5SNWNDSTZJa3BYVkNJc0ltRnNaeUk2SWxKVE1qVTJJbjAuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMMkZ3YVM1ellXNWtZbTk0TG5CaGVYQmhiQzVqYjIwaUxDSmhkRjlvWVhOb0lqb2lhRU5WUTBnMlN6aFNNRWRwWlVoT1gybElaMjlXWnlJc0ltRmpjaUk2V3lKamJHbGxiblFpWFN3aVlYVmtJam9pUVZkdVptMTZPVkJqUmxZeFJpMVdia3hvYkc5c2F6QjRia1psYWtwRVkwRlFWa0pSYmpKWFRtdzNhMmRYZW5WMFFXMHlObE4wTUdOa1pXa3RSVGhVVTBSak5YVjBTMGhpVmxSWFozWkRVRGNpTENKeWIyeGxJam9pVFVWU1EwaEJUbFFpTENKaGRYUm9YM1JwYldVaU9qRTJORFEwT0RZMk16VXNJbUY2SWpvaVoyTndMbk5zWXlJc0ltVjRjQ0k2TVRZME5EUTROelV6Tml3aWMyVnpjMmx2Ymw5cGJtUmxlQ0k2SW5oUGRqRmZhRkZYVVVneE9URTFkVkJhYnpKWVpDMTZSbm90VHlJc0ltbGhkQ0k2TVRZME5EUTROall6Tml3aWFuUnBJam9pVlRKQlFVdE9hVTU1ZDNNNWVWZDVOVTFUVTBkYWNDMTRVVkprVW01cGFWb3hVVW90UlVOUU1FVkdkMWN5WjNJdFNIVmpUSEZJZFdWc1NtZFRNbVJMWlV4S2QybERURXhwY1c5bGFqQTJabHBtTW5FeGJtbzBNM2xzVDJKMWJWZHpaR3RuU0daV2FubDNYM1JIYlVrd1EyZHlSR05mU1hOMmRHSk1XV1p3V0VFaUxDSmpiR2xsYm5SZmFXUWlPaUpCVjI1bWJYbzVVR05HVmpGR0xWWnVUR2hzYjJ4ck1IaHVSbVZxU2tSalFWQldRbEZ1TWxkT2JEZHJaMWQ2ZFhSQmJUSTJVM1F3WTJSbGFTMUZPRlJUUkdNMWRYUkxTR0pXVkZkbmRrTlFOeUo5LlBZQ3FIaTczM3dGVnlxNXlyQ3pOeFdZaWdSZXYycEJwSzljeXA2dXQ5SUNJa2pfQTVETW5oMWlfRGR3Q2JVUjlNcTVtM0hUc0FSQzBqVzlVLXhLUUtwUzZueDl0Y0prS09lUnlXNzFVMXFWb1VVb1dVVGNtSmF3RExKUGt6UFZhMVlabDlpRTg1Z19pc05MNGpRUExtN2xpejBRUjNoNjFJanlrcHA2UVh1ZE1BbzFpUzE1VFBPWWJKa2ZnUXFuOGI3UG96RDVXaEhycXpBQUoxSDZvWFZybFVpNk5fSkRScEtkd0UwMlFCYVUxUkNhUHVlWjY5b1dIYThSazhWQ3RBOWlQZ0ZTZTdvX2lCdFppc3BfbV9ZZVdhWkFMVW5CTEoxSTNzbTNQZWhSek5FRmlRSEhsSHlvanNnbXVNLUFMZXF1eUFuUkdpUlRKb2wyQ2VkVWdHUSIsImFjY2Vzc1Rva2VuIjoiQTIxQUFKZnpuRkNoMDVIV2Yxa0hnSU1YSGVPc3lWOF9MTDc4YTV3NmI5NXRueXlXd2Z4TVE3VV83cHZwcFczVHNWdzhJdUdIeEJlVUhMTm9pdHBCOHp3QnZjVTdDWlZtdyJ9fQ==",
    "components": "hosted-fields",
    "intent": "capture",
    "currency": 'USD'
};
const SubmitPayment = () => {
    // Here declare the variable containing the hostedField instance
    const hostedFields = usePayPalHostedFields();

    const submitHandler = () => {
        if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
        hostedFields
            .submit({
                // The full name as shown in the card and billing address
                cardholderName: "John Doe",
            })
            .then((order) => {
                fetch(
                    "/your-server-side-integration-endpoint/capture-payment-info"
                )
                    .then((response) => response.json())
                    .then((data) => {
                        // Inside the data you can find all the information related to the payment
                    })
                    .catch((err) => {
                        // Handle any error
                    });
            });
    };

    return <button onClick={submitHandler}>Pay</button>;
};
const NotEligible = () => (<div>Your account is not eligible</div>);

export default function CheckOut() {
    return (
        <PayPalScriptProvider options={initialOptions} >
            <HeaderComponent />
            <PayPalHostedFieldsProvider 
            		notEligibleError={<NotEligible />}
                createOrder={() => {
                    // Here define the call to create and order
                    return fetch(
                        "/your-server-side-integration-endpoint/orders"
                    )
                        .then((response) => response.json())
                        .then((order) => order.id)
                        .catch((err) => {
                            // Handle any error
                        });
                }}
            >
                <PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number" }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" }}
                />
                <PayPalHostedField
                    id="expiration-date"
                    hostedFieldType="expirationDate"
                    options={{
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    }}
                />
                <SubmitPayment />
            </PayPalHostedFieldsProvider>
        </PayPalScriptProvider>
    );
}