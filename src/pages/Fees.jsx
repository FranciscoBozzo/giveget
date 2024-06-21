import './Fees.css';

import Tree from '../components/Tree';


const products = { 
    title: 'Products',
    categories:[
        {
            title : 'Product',
            nodes : [
                { 
                    title: 'Account',
                    categories: [
                        {
                            title:'Service',
                            nodes: [
                                {
                                    title: 'Opening',
                                    categories: [
                                        {
                                            title : 'Period/Description',
                                            nodes: [
                                                { title: 'Once off', detail: 'Free' }
                                            ]
                                        },
                                    ]
                                }, {
                                    title: 'Minimum Blce',
                                    categories: [
                                        {
                                            title : 'Client G&G',
                                            nodes: [
                                                { title: 'No minimum'}
                                            ]
                                        }
                                    ]
                                }, {
                                    title: 'Maintenance',
                                    categories: [
                                        {
                                            title : 'Period/Description',
                                            nodes: [
                                                { title: 'Monthly/Annual', detail:'Free*' },
                                            ],
                                            disclaimer: '* Discounted fee unless inactivity. No transactions within the account over a 6 months period and having less than usd200 in Balance will result in a usd5 Fee charge per month.'
                                        },
                                    ]
                                }, {
                                    title: 'Wire',
                                    categories: [
                                        {
                                            title : 'Schedule/Description',
                                            nodes: [
                                                { 
                                                    title: 'Sending' ,
                                                    categories : [
                                                        {
                                                            title: 'Period/Description',
                                                            nodes: [
                                                                {title: 'Regular & Same day ACH', detail: 'Free'},
                                                                {title: 'Domestic Wires', detail: '25,00 + 0,15%'},
                                                                {title: 'International Wires (SWIFT)', detail: '40,00 + 0,15%'},
                                                                {title: 'Limit*', detail: 'No Limit'},
                                                            ],
                                                            disclaimer: '* This limit will be reserved by G&G and the operational service company to expand limit depending on Clients behavioral scoring.'
                                                        }
                                                    ]

                                                },
                                                {
                                                    title: 'Receiving',
                                                    categories : [
                                                        {
                                                            title: 'Period/Description',
                                                            nodes: [
                                                                {title: 'Regular & Same day ACH', detail: 'Free'},
                                                                {title: 'Domestic Wires', detail: '12,50 + 0,10%'},
                                                                {title: 'International Wires (SWIFT - BIC)', detail: '20,00 + 0,10%'},
                                                                {title: 'Limit', detail: 'No Limit*'},
                                                            ],
                                                            disclaimer: '* This limit will be reserved by G&G and the operational service company to expand limit depending on Clients behavioral scoring.'

                                                        }
                                                    ]
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    title: 'Debit Card',
                    categories: [
                        {
                            title:'Service',
                            nodes: [
                                {
                                    title: 'Activation',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                { title: 'Per Bank issuer' }
                                            ]
                                        },{ 
                                            title: 'Period/Description',
                                            nodes: [
                                                { title: 'Once off', detail: 'Free'}
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Pre-Fund',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                { title: 'Ledger' }
                                            ]
                                        },{ 
                                            title: 'Period',
                                            nodes: [
                                                { title: 'Once off', detail: 'Free'}
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Processing',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                { title: 'Per issued card' }
                                            ]
                                        },{ 
                                            title: 'Period',
                                            nodes: [
                                                { title: 'N-A', detail: 'Free'}
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Solution',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                { title: 'Custom card, lisuing, processing, integration, API, Once off Card' }
                                            ]
                                        },{ 
                                            title: 'Period',
                                            nodes: [
                                                { title: 'Once off', detail: 'N-A'}
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Maintenance',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                {
                                                    title: 'Per active card'
                                                },{
                                                    title: 'Processing, issuing, maintenance, compliance, (security, connectivity, chip enablement, ledger account management).'
                                                }
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Funding',
                                    categories: [
                                        { 
                                            title: 'Schedule',
                                            nodes: [
                                                { title: 'Card Funding' }
                                            ]
                                        },{ 
                                            title: 'Description',
                                            nodes: [
                                                { title: 'USD', detail: 'No Limit'}
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Transaction',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                {
                                                    title: 'Per Local transaction',
                                                    detail: '0,50'
                                                },{
                                                    title: 'Per International transaction',
                                                    detail: '1,00'
                                                },
                                            ]
                                        }
                                    ]
                                },{
                                    title: 'Payments support',
                                    categories: [
                                        { 
                                            title: 'Description',
                                            nodes: [
                                                {
                                                    title: 'In dollars',
                                                    detail: 'Free'
                                                },{
                                                    title: 'In other currencies',
                                                    detail: '2%'
                                                },{
                                                    title: 'Dedicated manager',
                                                    detail: '0,00'
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default function Fees ({header, footer}) {

    return(
        
        <div className='fees'>
            <div className="fees__header padding-block-500 padding-inline-500">
                {header}
            </div>

            <section className="fees__hero">
                Fees
            </section>

            <section className="fees__body container | padding-block-600">
               <Tree first={true} selected={products}></Tree>
            </section>

            <div className='fees_footer'>
                {footer}
            </div>
        </div>
    )
}