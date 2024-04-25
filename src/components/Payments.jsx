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

    // Function to parse the date string into a sortable format
    const parseDate = (dateString) => {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10) + 2000; // Assuming the year is in 21st century
        return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date constructor
    }

    // Sort payments by date in descending order
    const sortedPayments = bucket.payments.slice().sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA; // Compare dates
    });

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
                    sortedPayments.length > 0 ? sortedPayments.map((payment) => {
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
