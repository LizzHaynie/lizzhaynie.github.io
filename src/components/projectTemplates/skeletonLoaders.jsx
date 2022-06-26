import './styles.css';

export default function SkeletonLoaders(){
    return (
        <>
            <strong className="instructed-title">Post Skeleton Loaders</strong>

            {/* <!-- Loader 1 - Circle photo, 5 text lines, 3 buttons --> */}
            <div className="white box-shadow skeleton-rectangle-container">
                <div className="skeleton-flex-container">
                    <div className="silver circle shine-effect" />
                    <div className="inner-flex-container">
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                    </div>
                </div>
                <div className="buttons-flex-container skeleton-bottom-buttons">
                    <span><div className="silver skeleton-button shine-effect" /></span>
                    <span><div className="silver skeleton-button shine-effect" /></span>
                    <span><div className="silver skeleton-button shine-effect" /></span>
                </div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 2 - Circle photo, 4 text lines, 2 buttons --> */}
            <div className="white box-shadow skeleton-rectangle-container">
                <div className="skeleton-flex-container">
                    <div className="silver circle shine-effect" />
                    <div className="inner-flex-container">
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                    </div>
                </div>
                <div className="buttons-flex-container skeleton-bottom-buttons">
                    <span><div className="silver skeleton-button shine-effect" /></span>
                    <span><div className="silver skeleton-button shine-effect" /></span>
                </div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 3 - Circle photo, 4 text lines --> */}
            <div className="white height-auto box-shadow skeleton-rectangle-container">
                <div className="skeleton-flex-container">
                    <div className="silver circle shine-effect" />
                    <div className="inner-flex-container">
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                        <div className="silver line shine-effect" />
                    </div>
                </div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 4 - 4 thin text lines --> */}
            <div className="white height-auto box-shadow skeleton-rectangle-container">
                <div className="skeleton-flex-container">
                    <div className="inner-flex-container">
                        <div className="silver line shine-effect thin-line" />
                        <div className="silver line shine-effect thin-line" />
                        <div className="silver line shine-effect thin-line" />
                        <div className="silver line shine-effect thin-line" />
                    </div>
                </div>
            </div>






            <strong className="instructed-title">Data in Rows Skeleton Loaders</strong>

            {/* <!-- Loader 1 - 3 rows, 3 columns, single box shadow --> */}
            <div className="box-shadow row-skeleton-container">
                <div className="white single-row-container">
                    <div className="small-width"><div className="silver shine-effect col-line" /></div>
                    <div className="med-width"><div className="silver shine-effect col-line" /></div>
                    <div className="large-width"><div className="silver shine-effect col-line" /></div>
                </div>
                <div className="white single-row-container">
                    <div className="small-width"><div className="silver shine-effect col-line" /></div>
                    <div className="med-width"><div className="silver shine-effect col-line" /></div>
                    <div className="large-width"><div className="silver shine-effect col-line" /></div>
                </div>
                <div className="white single-row-container">
                    <div className="small-width"><div className="silver shine-effect col-line" /></div>
                    <div className="med-width"><div className="silver shine-effect col-line" /></div>
                    <div className="large-width"><div className="silver shine-effect col-line" /></div>
                </div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 2 - 3 rows, 3 columns, separate box shadows --> */}
            <div className="white box-shadow combined-single-row-container">
                <div className="small-width"><div className="silver shine-effect col-line" /></div>
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
                <div className="large-width"><div className="silver shine-effect col-line" /></div>
            </div>
            <div className="white box-shadow combined-single-row-container">
                <div className="small-width"><div className="silver shine-effect col-line" /></div>
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
                <div className="large-width"><div className="silver shine-effect col-line" /></div>
            </div>
            <div className="white box-shadow combined-single-row-container">
                <div className="small-width"><div className="silver shine-effect col-line" /></div>
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
                <div className="large-width"><div className="silver shine-effect col-line" /></div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 3 - 3 rows, 2 columns, separate box shadows --> */}
            <div className="white box-shadow combined-single-row-container">
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
            </div>
            <div className="white box-shadow combined-single-row-container">
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
                <div className="med-width"><div className="silver shine-effect col-line" /></div>
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 4 - 3 rows, 1 column, separate box shadows --> */}
            <div className="white box-shadow combined-single-row-container">
                <div className="full-width"><div className="silver shine-effect col-line" /></div>
            </div>
            <div className="white box-shadow combined-single-row-container">
                <div className="full-width"><div className="silver shine-effect col-line" /></div>
            </div>
            <div className="white box-shadow combined-single-row-container">
                <div className="full-width"><div className="silver shine-effect col-line" /></div>
            </div>






            <strong className="instructed-title">Rectangular Card View Skeleton Loaders</strong>
            
            {/* <!-- Loader 1 - Rectangular Card view, header consumes 1/3rd height, 4 lines below it --> */}
            <div className="white box-shadow card-container">
                <div className="silver shine-effect card card-short-header" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 2 - Rectangular Card view, header consumes 3/4th height, 2 lines below it --> */}
            <div className="white box-shadow card-container">
                <div className="silver shine-effect card card-extended-header" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 3 - Rectangular Card view, 1 headers consumes 1/3rd height --> */}
            <div className="white box-shadow card-container">
                <div className="silver shine-effect card card-short-header" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 4 - Rectangular Card view, 2 headers consumes 1/2 height each --> */}
            <div className="white box-shadow flex-card-container">
                <div className="silver shine-effect card card-short-header" />
                <div className="silver shine-effect card card-short-header" />
            </div>

            <p/><br/><p/>






            <strong className="instructed-title">Square Card View Skeleton Loaders</strong>

            {/* <!-- Loader 5 - Square Card view, header consumes 1/3rd height, 4 lines below it --> */}
            <div className="white box-shadow square-container">
                <div className="silver shine-effect card card-short-header" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 6 - Square Card view, header consumes 3/4th height, 2 lines below it --> */}
            <div className="white box-shadow square-container">
                <div className="silver shine-effect card card-extended-header" />
                <div className="silver shine-effect card card-thin-line" />
                <div className="silver shine-effect card card-thin-line" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 7 - Square Card view, 1 headers consumes 1/3rd height --> */}
            <div className="white box-shadow square-container">
                <div className="silver shine-effect card card-short-header" />
            </div>

            <p/><br/><p/>

            {/* <!-- Loader 8 - Square Card view, 2 headers consumes 1/2 height each --> */}
            <div className="white box-shadow flex-square-container">
                <div className="silver shine-effect card card-short-header" />
                <div className="silver shine-effect card card-short-header" />
            </div>
        </>
    );
}