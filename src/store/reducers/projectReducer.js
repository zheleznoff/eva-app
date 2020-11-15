const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'asdassdfgnsdoigsd'},
        {id: '2', title: 'help me find a hat', content: 'asdassdfgnsdoigsd'},
        {id: '3', title: 'help me find a home', content: 'asdassdfgnsdoigsd'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('created project', action.project);
            return state; 
        case "CREATE_PROJECT_ERROR":
            console.log('Error: ', action.err);   
            return state;
        default: 
            return state;        
    }    
}

export default projectReducer;