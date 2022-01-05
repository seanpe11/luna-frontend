import SideBar from "../components/SideBar"
import "../css/luna.css"

function FindMe() {
    return(
        <div class="row h-100">
            <SideBar />
            <div class="findMe-wrapper col-8">
                <select class="findMe-select" multiple>
                    <option class="findMe-option-thicc" value="500">Less than PHP 500.00</option>
                    <option value="1000">PHP 500.00 to PHP 1,000.00</option>
                    <option value="2000">PHP 1,000 to PHP 2,000.00</option>
                    <option value="2001">More than PHP 2,000.00</option>
                    <option value="-1">No Preference</option>
                </select>
            </div>
        </div>
    )
}

export default FindMe