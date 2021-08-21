import React from "react";
import Photo from "./Photo";
// const PhotoContainer = () => {
//     return (
//         <>
//             <p>this is the photoContainer</p>
//         </>
//     )
// }
const PhotoContainer = props => {
    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url={photo.url}  changePhoto={props.changePhoto} />;

        });
    };
    return (
        <>
           <section>{displayPhotos()}</section>
        </>
    );
};
export default PhotoContainer;