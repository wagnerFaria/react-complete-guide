import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
    // retornando um stateless component
    // return (props) => (
    //     <div className={className}>
    //         <WrappedComponent {...props} />
    //     </div>
    // )

    //Retornando um statefull component  
    return class extends Component {

        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;