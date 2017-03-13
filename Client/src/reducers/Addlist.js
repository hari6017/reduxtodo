export default function (state = [], action) {
  console.log("harinathreddy"+action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
              {id : new Date(),item :action.item}];
            break;
    }
    return state;
}
