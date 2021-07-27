const RVdata = [
    {
      id: 'a1',
      title: 'Financials',
      amount: 46.9,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a2',
      title: 'Industrials',
      amount: 43.1,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a3',
      title: 'Consumer Goods',
      amount: 42.5,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a4',
      title: 'Consumer Services',
      amount: 35.93,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a5',
      title: 'Technology',
      amount: 48.9,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a6',
      title: 'Healthcare',
      amount: 42.2,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a7',
      title: 'Basic Materials',
      amount: 32.44,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a8',
      title: 'Utilities',
      amount: 31.79,
      parent: 'Top Layer',
      type: 'Direct Investments'
    },
    {
      id: 'a9',
      title: 'Oil & Gas',
      amount: 32.03,
      parent: 'Top Layer',
      type: 'Direct Investments'

    },  
    {
      id: 'a10',
      title: 'Telecoms',
      amount: 32.63,
      parent: 'Top Layer',
      type: 'Direct Investments'

    },
    {
      id: 'e0',
      title: 'Fund 1',
      amount: 20,
      parent: 'Top Layer',
      type:'Subfunds'

    },
  
    { 
      id: 'e2', 
      title: 'Fund 2', 
      amount: 10, 
      parent: 'Top Layer', 
      type: 'Subfunds'

    },
    {
      id: 'e3',
      title: 'Fund 3',
      amount: 8,
      parent: 'Top Layer',
      type:'Subfunds'

    },
    {
      id: 'e4',
      title: 'Fund 4',
      amount: 8,
      parent: 'Top Layer',
      type: 'Subfunds'

    },
    {
      id: 'b1',
      title: {v: 'Financials1', f: 'Financials'},
      amount: 16.9,
      parent: 'Fund 1',
      type: 'Direct Investments'
    },
    {
      id: 'b2',
      title: {v: 'Industrials1', f: 'Industrials'},
      amount: 13.1,
      parent: 'Fund 1',
      type: 'Direct Investments'

    },
    {
      id: 'b3',
      title: {v: 'ConsumerGoods1', f: 'Consumer Goods'},
      amount: 12.5,
      parent: 'Fund 1',
      type: 'Direct Investments'

    },
    {
      id: 'b4',
      title: {v: 'ConsumerServices1', f: 'Consumer Services'},
      amount: 5.93,
      parent: 'Fund 1',
      type: 'Direct Investments'

    },
    {
      id: 'b5',
      title: {v: 'Technology1', f: 'Technology'},
      amount: 18.9,
      parent: 'Fund 1',
      type: 'Direct Investments'

    },
    {
      id: 'b6',
      title: {v: 'Healthcare1', f: 'Healthcare'},
      amount: 12.2,
      parent: 'Fund 1',
      type: 'Direct Investments'

    },
    {
      id: 'b7',
      title: {v: 'BasicMaterials1', f: 'Basic Materials'},
      amount: 2.44,
      parent: 'Fund 1',
      type: 'Direct Investments'
    },
    {
      id: 'b8',
      title: {v: 'Utilities1', f: 'Utilities'},
      amount: 1.79,
      parent: 'Fund 1',
      type: 'Direct Investments'
    },
    {
      id: 'b9',
      title: {v: 'Oil&Gas1', f: 'Oil & Gas'},
      amount: 2.03,
      parent: 'Fund 1',
      type: 'Direct Investments'
    },  
    {
      id: 'b10',
      title: {v: 'Telecoms1', f: 'Telecoms'},
      amount: 2.63,
      parent: 'Fund 1',
      type: 'Direct Investments'
    },
    {
      id: 'c1',
      title: 'Subfund 1',
      amount: 5,
      parent: 'Fund 1',
      type: 'Subfunds'
    },
  
    { 
      id: 'c2', 
      title: 'Subfund 2', 
      amount: 8, 
      parent: 'Fund 1', 
      type: 'Subfunds'
    },
  
    {
      id: 'd1',
      title: {v: 'Financials2', f: 'Financials'},
      amount: 0.9,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd2',
      title: {v: 'Industrials2', f: 'Industrials'},
      amount: 1.1,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd3',
      title: {v: 'ConsumerGoods2', f: 'Consumer Goods'},
      amount: 1.5,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd4',
      title: {v: 'ConsumerServices2', f: 'Consumer Services'},
      amount: 1.93,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd5',
      title: {v: 'Technology2', f: 'Technology'},
      amount: 1.9,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd6',
      title: {v: 'Healthcare2', f: 'Healthcare'},
      amount: 1.2,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd7',
      title: {v: 'BasicMaterials2', f: 'Basic Materials'},
      amount: 0.44,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd8',
      title: {v: 'Utilities2', f: 'Utilities'},
      amount: 0.79,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    {
      id: 'd9',
      title: {v: 'Oil&Gas2', f: 'Oil & Gas'},
      amount: 1.03,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },  
    {
      id: 'd10',
      title: {v: 'Telecoms2', f: 'Telecoms'},
      amount: 0.63,
      parent: 'Subfund 1',
      type: 'Direct Investments'
    },
    
  ]

  export default RVdata;