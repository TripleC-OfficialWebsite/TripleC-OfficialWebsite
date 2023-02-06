export default function LoadMore(props) {
    if (props.numEvents !== props.numDisplayed) {
        return(
            <button onClick={props.handleShowMoreEvents} className='btn btn-outline-light'>
                LOAD MORE
            </button>
        );
    }
}