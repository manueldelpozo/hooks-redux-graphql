// import React from 'react'
// import {useDispatch, useMappedState} from 'redux-react-hook'
//
// import Fab from "@material-ui/core/Fab/Fab"
//
// export function DeleteHeroButton({index}) {
//     const mapState = useCallback(
//         state => ({
//             name: state.todos[index].name,
//         }),
//         [index],
//     );
//
//     const {name} = useMappedState(mapState);
//
//     const dispatch = useDispatch();
//     const deleteTodo = useCallback(
//         () =>
//             dispatch({
//                 type: 'DELETE_HERO',
//                 index,
//             }),
//         [index],
//     );
//
//     return (
//         <Fab onClick={ deleteTodo } variant="extended" aria-label="delete" color="primary" className={classes.fab}>
//             Delete {name}
//         </Fab>
//     )
// }