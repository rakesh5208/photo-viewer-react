import React, { Component } from 'react';
import './App.css';
export class ViewImageInLarge extends Component {
    render() {
        const image = this.props.image;
        return (
            <div className="view-image">
                {image ?
                    (<div className="shown-image">
                        <img src={this.props.image.path} width="600px" alt="Larger View" />
                    </div>)
                    : (<div className="none-image">
                        <h2>Select the image for larger view!!</h2>
                    </div>)
                }


            </div>
        );
    }
}

export default ViewImageInLarge;