import React from 'react';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
        
      }

    componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
    }

    componentWillUnmount() {
    // whatever you need to cleanup the widgets code
    }



    render(){
       
       
      return (
        <div className='calendar'>
            <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/htran2/60min"
            style={{ minWidth: '320px', height: '630px' }} />
        </div>
      )
    }
  }
  
export default Calendar;

