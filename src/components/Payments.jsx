import { Link } from "react-router-dom";
import { Vault, ClockCounterClockwise } from "@phosphor-icons/react";

import PaymentItem from "./PaymentItem";

import addIcon from '../assets/add-icon.svg';

const Payments = ({
    bucket,
}) => {

    const formatName = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    const formatMoney = (money) => {
        return money.toLocaleString('en-US', { minimumFractionDigits: 2 });
    };

    return (
        <div className="w-full flex flex-col items-center justify-start font-sans">
            <div className="text-light text-sm mb-8 flex items-center justify-center my-12">
                <ClockCounterClockwise
                    weight="light"
                    size="100%"
                    className="text-light w-10 h-10"
                />
                <div className="ml-4">History</div>
            </div>
            <div className="flex flex-col items-center justify-between w-full mb-12">
                {
                    bucket.payments.length > 0 ? bucket.payments.map((payment) => {
                        return (
                            <PaymentItem 
                                key={payment.id}
                                date={payment.date}
                                amount={payment.amount}
                                formatMoney={formatMoney}
                            />
                        );
                    }) : <div className="text-light text-center">
                        No Payment History
                    </div>
                }
                <Link
                    to={`/buckets/${formatName(bucket.name)}/new-payment`}
                    className="w-full flex items-center justify-center bg-background pt-2 pb-12 fixed bottom-0 left-0"
                >
                    <img
                        src={addIcon}
                        alt="add icon used for adding a new payment"
                        className="w-12 h-12"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Payments;