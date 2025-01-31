import { FC, useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

interface PaymentProps {
    onPayment: () => void
}

const Payment: FC<PaymentProps> = ({ onPayment }) => {
    const [paymentType, setPaymentType] = useState<'card' | 'physical'>('physical')
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [address4, setAddress4] = useState('');
    const [address5, setAddress5] = useState('');

    const handlePayment = () => {
        onPayment();
    }

    return (
        <div className='bg-white rounded-md shadow-md p-4'>
            <h2 className="text-xl font-bold mb-4">Mode de paiement - livraison</h2>
            <div className="flex gap-5 ">
                <div className='w-1/2'>
                    <button className={`p-2 rounded-md mb-2 w-full hover:bg-gray-100 text-left ${paymentType === 'card' ? 'bg-gray-200' : ''}`} onClick={() => setPaymentType('card')}>Paiement par carte</button>
                    {paymentType === 'card' && (
                        <div className='mb-4'>
                            <Input type='text' placeholder='numéro de la carte' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className='mb-2' />
                            <Input type='text' placeholder='Date expire' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                        </div>
                    )}
                </div>
                <div className='w-1/2 relative'>
                    <button className={`p-2 rounded-md mb-2 w-full hover:bg-gray-100 text-left ${paymentType === 'physical' ? 'bg-gray-200' : ''}`} onClick={() => setPaymentType('physical')}>Paiement Physique </button>
                    {paymentType === 'physical' && (
                        <div className='absolute top-1/2 right-0 transform -translate-y-1/2'>✓</div>
                    )}
                </div>
            </div>
            <div className='mb-4 flex gap-2'>
                <Input type='text' placeholder='Address' value={address1} onChange={(e) => setAddress1(e.target.value)} className="w-1/5" />
                <Input type='text' placeholder='' value={address2} onChange={(e) => setAddress2(e.target.value)} className="w-1/5" />
                <Input type='text' placeholder='' value={address3} onChange={(e) => setAddress3(e.target.value)} className="w-1/5" />
                <Input type='text' placeholder='' value={address4} onChange={(e) => setAddress4(e.target.value)} className="w-1/5" />
                <Input type='text' placeholder='' value={address5} onChange={(e) => setAddress5(e.target.value)} className="w-1/5" />

            </div>
            <div className='flex justify-center'>
                <Button text='VALIDER' onClick={handlePayment} />
            </div>
        </div>
    );
};

export default Payment;