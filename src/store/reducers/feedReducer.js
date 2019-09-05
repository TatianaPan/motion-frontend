import user0 from '../../assets/users/jennifer.png';
import user1 from '../../assets/users/user1.png';
import user2 from '../../assets/users/user2.png';
import user3 from '../../assets/users/user3.png';
import image2 from '../../assets/images/image2.png';


const initialState = {
    feed: [
        {id: '1', user: {username: 'Jennifer', photo: `${user0}`}, created: '10.07.2019', content: 'Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian…', like_count: '2'},
        {id: '2', user: {username: 'Leticia', photo: `${user1}`}, created: '13.05.2019', content: 'This is my first post! But this willnot be tha last one, I promise!', like_count: '1'},
        {id: '3', user: {username: 'Lucinda', photo: `${user3}`}, created: '28.03.2019', content: 'I have been mentoring few people about how to get started with Instagram and how to use that to market your business and I realised I really enjoy that. Sharing knowledge and what I’ve learned in the past 4 years since my career change from science to photography. So that’s something I’ve been thinking about a lot lately. Creating my very own course. Not sure what topic exactly, but ideally something around styling and photography, using lightroom, how to create your own presets. How to set up your own business and find customers. Maybe include something about career change, how to overcome those feelings of being inadequate, imposter syndrome and start believing in yourself, your worth and skills.⠀', like_count: '0'},
        {id: '4', user: {username: 'Mike', photo: `${user2}`}, created: '15.03.2019', image: `${image2}`, content: 'Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian… Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian…', like_count: '7'},
        {id: '5', user: {username: 'Mike', photo: `${user2}`}, created: '09.03.2019', content: 'Lorem ipsum lorem ipsum', like_count: '0'}
    ]
};

export const feedReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_FEED':
            console.log('from reducer')
            return {
                ...state,
                feed: action.payload
            };
    
        default:
            return state;
    }
}

