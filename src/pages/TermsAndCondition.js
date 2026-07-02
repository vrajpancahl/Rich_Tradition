import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Footer from "./Footer";
import HeadingLine from "../Components/Heading_components/HadingLine";
import Logo_Component from "../Components/Heading_components/Logo_component";

function TermsAndCondition() {
    const navigate = useNavigate();
    return (
        <div className="background-patter sig-bag-color d-flex flex-column min-vh-100">

            <div className="container-fluid   pb-2">
                <Logo_Component/>
                <HeadingLine text ="Terms & Conditions" textColor="txt-gold" />
                <Sidebar />
            </div>


            <div className="bg-white rounded-5 flex-grow-1 py-5 ">
                <div className="container-md fs-10px">
                    <div className="mb-4">
                        <p className="fs-6 sig-text-color mb-0">For Catering Service</p>  
                        <hr></hr>
                        <p className="fs-10px">

                            Price Guarantees: Once the contract is signed & deposit has been received, the contract pricing is locked in for the remainder of the calendar year. If your event is booked and occurring in the next calendar year, your catering menu pricing may be subject to an increase of up to 10%. This is due to unforeseen increased costs in Commodity Market priced items. The client will be notified 90 days before their event date of any menu increases via email. At that time, the Client has the right to terminate the contract and be issued a refund of any payments previously paid on account in the same manner as it was received.
                            Cancellations: In the event of the cancellation of your scheduled event within thirty days of your booking date, your deposit will be returned less a 25% handling charge. Thirty days from the booking date- Your entire deposit is non-refundable. If the booking date occurs within thirty days of your event, your deposit is non-refundable. In the event of the cancellation occurring within seven days of your booked event, you will be liable for the entire event balance.
                            Catering Performance: Performance of this agreement is contingent upon the ability of the Caterer to complete the same and is subject to disputes, strikes, accidents, transportation, availability of foods, beverages, or supplies, and other causes whether enumerated herein or not. Beyond the control of the Caterer preventing or interfering with the performance of this agreement. The caterer's liability shall be limited for any breach or non-performance of the agreement or any part thereof to the amount paid for the initial deposit. Caterer shall not be liable for damages, consequential or otherwise other than for the return of the referenced deposit. The caterer is not responsible for damage or loss of any personal property at your event premises. You are responsible for the damages, theft, breakage, and/or loss at or to the premises.
                            Food Service: At the time of the event an actual count will be made of those attending and payment in full will then be made for any additional persons attending beyond guaranteed attendance. Any overage on the guaranteed guest total may result in a different food item being served.
                            At the discretion of the company's Catering staff, leftover cooked food may remain with the client whereas on-site refrigeration is accessible to our staff. After which Client assumes all liability resulting in failure to properly maintain safe food temps and storage of food.
                            Disclaimer: We cannot guarantee any of our dishes as "dairy/nuts free ". Please let us know in advance if you have any type of allergies or follow any strong religious beliefs. We try our best to respect all of our customers, but we cannot guarantee that we will be able to meet all the requirements.
                        </p>
                    </div>

                    <div>

                        <p className="fs-6 sig-text-color">For Decoration Service</p>
                        <hr></hr>
                        <p className="fs-10px">

                        PAYMENT: A 30% advance will be paid while confirming the order.  The remaining 50% on the day of the event before the start of the event and the remaining 20% ​​after the end of the event. If the event is canceled after 4 weeks or 30 days of the event, then 5% of the process will be deducted from the advanced amount and then the increased amount will be paid.
                        Permission: At the time of decoration of the event, the permission of the residents of the society, plot, or any venue or the permission of the place must be taken by the client.
                        OWNERSHIP OF DECORATIONS: It is agreed that all decorations listed in the contract shall remain the property of the Decorator.
                        DAMAGE TO PROPERTY AND LOSS OF ITEMS: The Client will be responsible for any damage to property including, but not limited to, centerpieces, chair covers, sashes, glassware, mirror plates, etc. All damaged and or missing property will be charged at full replacement cost. If the client’s guests remove items (i.e. centerpieces, decorative accents, etc) that are the property of the Decorator, then the Client will be charged the total replacement cost for the items.
                        ACCIDENT CLAUSE:  We are not responsible for accidents or injuries related to our décor that are caused by mishandling by the Client, guests, or site staff.
                        MAKING CHANGES: The Client will be given an invoice with the total price of the decoration services and a breakdown of individual rentals based on the guest count and other factors. It is the Client’s responsibility to check this for accuracy. Decoration packages can be customized upon agreement with the Decorator. Once a price has been agreed upon and the Decorator has purchased items, the Client may not receive a reduction in price due to no longer needing items or needing fewer items. If the guest count increases the Decorator will add additional items calculated at current pricing to the invoice. Customizable items such as special chair covers, personalized decorations, etc. may not be changed. There can be no changes made to the decoration plan within 4 weeks of the event date unless agreed with the Decorator.
                        SAFETY: If the Decorator deems the event to be unsafe, the Decorator reserves the right to halt all services and provide the same services on a different date or at a different location. If the Client or the Client’s guests cause the event to become unsafe, then the Client will pay any fees associated with changing the date of the services.
                        </p>
                    </div>


                </div>
            </div>

            <Footer />

        </div>
    )
}

export default TermsAndCondition;