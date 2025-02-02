import { FC, useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { BASE_URL } from "../../data/products.ts";
import axios from 'axios';
import { CartItems } from "../../types/types.ts";

interface PaymentProps {
    onPayment: () => void;
    cartItems: CartItems[];
    user: string;
    totalPrice: number;
}

const Payment: FC<PaymentProps> = ({ onPayment, cartItems, user,totalPrice }) => {
    const [paymentType, setPaymentType] = useState<'card' | 'physical'>('physical');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [address, setAddress] = useState('');

    const handlePayment = async () => {
        try {
            const orderData = {
                user,
                paymentType,
                cardNumber,
                expiryDate,
                address,
                totalPrice,
                cartItems
            };

            const response = await axios.post(`${BASE_URL}/api/facture/generate`, orderData, {
                responseType: 'blob'
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'facture.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            onPayment();
        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Mode de paiement & Livraison</h2>

            {/* Sélection du mode de paiement */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <button
                    className={`w-full p-4 rounded-lg text-left text-white transition-colors duration-300
                                ${paymentType === 'card' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setPaymentType('card')}
                >
                    Paiement par carte
                </button>
                <button
                    className={`w-full p-4 rounded-lg text-left text-white transition-colors duration-300
                                ${paymentType === 'physical' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setPaymentType('physical')}
                >
                    Paiement Physique
                </button>
            </div>

            {/* Champ de paiement par carte */}
            {paymentType === 'card' && (
                <div className="space-y-4 mb-6">
                    <Input
                        type="text"
                        placeholder="Numéro de la carte"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full border-gray-300 focus:ring-indigo-500"
                    />
                    <Input
                        type="text"
                        placeholder="Date d'expiration (MM/AA)"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full border-gray-300 focus:ring-indigo-500"
                    />
                </div>
            )}

            {/* Adresse de livraison */}
            <Input
                type="text"
                placeholder="Adresse de livraison"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-gray-300 focus:ring-indigo-500 mb-6"
            />

            {/* Bouton de validation */}
            <Button
                text="Valider la commande"
                onClick={handlePayment}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300"
            />
        </div>
    );
};

export default Payment;
