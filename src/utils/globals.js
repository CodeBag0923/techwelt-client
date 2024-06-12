


const ConfirmDialog = (props) => {
    try {
        if (window.confirm(props)) {
            return true;
        };
        return false;
    } catch (error) {
        return false;
    }
}
const formatDate = (props) => {
    // var jj = new Date(props);
    var jj = new Date();
    return jj.toLocaleDateString("en-GB") === "Invalid Date" ? "" : jj.toLocaleDateString("en-GB");
}

const formatTime = (props) => {
    // var jj = new Date(props);
    var jj = new Date();
    return jj.toLocaleTimeString() === "Invalid Date" ? "" : jj.toLocaleTimeString();
}
export { ConfirmDialog, formatDate, formatTime };