import React from "react"


class Price extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class="findMe-wrapper col-8">
                <h3>What is your price range for a consultation?</h3>
                <select class="findMe-select" multiple>
                    <option class="findMe-option-thicc" value="500">Less than PHP 500.00</option>
                    <option class="findMe-option-thicc" value="1000">PHP 500.00 to PHP 1,000.00</option>
                    <option class="findMe-option-thicc" value="2000">PHP 1,000 to PHP 2,000.00</option>
                    <option class="findMe-option-thicc" value="2001">More than PHP 2,000.00</option>
                    <option class="findMe-option-thicc" value="-1">No Preference</option>
                </select>
            </div>
        )
    }
}

export default Price