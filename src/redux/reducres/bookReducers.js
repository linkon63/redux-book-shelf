import allBooks from '../../fakeData/books.json';

const initialState = {
    readingList : [],
    dicoverList : allBooks,
    finishedList : []
}


export const bookReducers = (state = initialState, action)=> {



    switch(action.type){
        case 'ADD_TO_READING_LIST': {
            //Some Work will do here

            const newBook = action.payload; // Coming from Click            
            const readingList = state.readingList;
            const existingBook = readingList?.find( book => book.id === newBook.id);

            if(!existingBook){
                const newState = {
                    ...state,
                    readingList:[...state.readingList,action.payload]
                }
                return newState;
            }else{
                return state;
            }
            
        }
        case 'REMOVE_FROM_READING_LIST' : {
            //Some Work
            // console.log('payload', action.payload);

            const removedBookId = action.payload;
            const readingList = state.readingList;
            
            const newState = {
                ...state,
                readingList: readingList.filter((book) => book.id !== removedBookId),
              };
              return newState;
        }
        case 'ADD_TO_FINISHED_LIST': {

            const newBook = action.payload; // Coming from Click            
            const finishedList = state.finishedList;
            const existingBook = finishedList?.find( book => book.id === newBook.id);

            if(!existingBook){
                const newState = {
                    ...state,
                    finishedList:[...state.finishedList,action.payload]
                }
                return newState;
            }else{
                return state;
            }
           
        }
        default: {
            return state;
        }

    }
}












