export const getCities = (state, setCities) => {
    // If state is not yet selected, return nothing 
    console.log(`getCities param: ${state.code}`);
    if (state == '') {
        console.log('no state code')
        return '';
    }

    // Otherwise, fetch cities in this state from api 
    const url = "/mlapi/cities/"; 
    const response = fetch(url+'?STABBR=' + state.code)
        .then((response) => {
            if (!response.ok) {
                //TODO: write user feedback for this 
                console.log('Unable to get cities...')
            } 
            return response.json(); 
        })
        .then((data) => {
            console.log(`api cities response: ${data.cities}`); 
            setCities(data.cities); 
        });
}