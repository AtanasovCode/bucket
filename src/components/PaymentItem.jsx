import { Vault } from "@phosphor-icons/react";

const PaymentItem = ({
    date,
    amount,
    formatMoney,
}) => {
    return (
        <div
            className="flex items-center justify-between mb-4
                            w-[85%] sm:w-[60%] md:w-[50%] lg:w-[35%]
                        ">
            <div className="flex items-center justify-center">
                <Vault
                    weight="light"
                    size="100%"
                    className="w-8 h-8 text-accent inline-block"
                />
                <div className="text-light ml-6">
                    {date}
                </div>
            </div>
            <div className="font-mono text-lg text-accent text-right">
                {formatMoney(parseFloat(amount))} $
            </div>
        </div>
    );
}

export default PaymentItem;