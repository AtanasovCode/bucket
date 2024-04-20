import { Vault, ClockCounterClockwise } from "@phosphor-icons/react";

import addIcon from '../assets/add-icon.svg';

const Payments = ({
    bucket,
}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center font-sans">
            <div className="text-light text-sm mb-8 flex items-center justify-center">
                <ClockCounterClockwise 
                    weight="light"
                    size="100%"
                    className="text-light w-8 h-8"
                />
                <div className="ml-4">History</div>
            </div>
            {
                bucket.payments.map((payment) => {
                    return (
                        <div className="flex items-center justify-between mb-4
                            w-[85%] sm:w-[60%] md:w-[50%] lg:w-[35%]
                        ">
                            <div className="flex items-center justify-center">
                                <Vault
                                    weight="light"
                                    size="100%"
                                    className="w-8 h-8 text-accent inline-block"
                                />
                                <div className="text-light ml-6">
                                    {payment.date}
                                </div>
                            </div>
                            <div className="font-mono text-lg text-accent text-right">
                                {payment.amount} $
                            </div>
                        </div>
                    );
                })
            }
            <div className="w-full flex items-center justify-center">
                <img 
                    src={addIcon}
                    alt="add icon used for adding a new payment"
                    className="w-12 h-12 mt-6"
                />
            </div>
        </div>
    );
}

export default Payments;