import React from "react";
import { useParams } from "react-router-dom";
import SkeletonLoaders from './skeletonLoaders';
import './styles.css';

export default function Project(){
    let { slug } = useParams();

    const renderElement = () => {
        switch(slug) {
            case 'skeleton-loaders':
                return <SkeletonLoaders />
            default:
                return "";
        }
    }

    return (
        <div className="project-container">
            {renderElement()}
        </div>
    );
}