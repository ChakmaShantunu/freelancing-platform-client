import React from 'react';

const Faq = () => {
    return (
        <section>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">

                    <div>
                        <h3 className="font-semibold">How do I post a task on the platform?</h3>
                        <p className="mt-1">
                            To post a task, simply create an account, go to the "Post Task" page, fill in the task details including budget, deadline, and requirements, then submit. Your task will be visible to freelancers for bidding.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">How do freelancers place bids on tasks?</h3>
                        <p className="mt-1">
                            Freelancers can browse available tasks, and if they find one that matches their skill, they can submit a bid along with a short proposal. The task owner will review and accept the most suitable bid.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Is there a deadline system for tasks?</h3>
                        <p className="mt-1">
                            Yes, each task comes with a deadline. Freelancers must complete and submit the work before the deadline to ensure timely delivery and positive reviews.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">How is payment handled on this platform?</h3>
                        <p className="mt-1">
                            Payment is secured through our system. Once a freelancer completes a task and it is approved by the task owner, the payment is released. We use secure methods like Stripe for transactions.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Faq;