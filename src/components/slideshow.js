const SlideshowSection = () => {
    const filteredItems = [
        {
          id: 1,
          video: "./slideshow/video_1.MP4"
        },
        {
          id: 2,
          video: "./slideshow/video_2.MP4"
        },
        {
          id: 3,
          video: "./slideshow/video_3.MP4"
        },
        {
          id: 4,
          video: "./slideshow/video_4.MP4"
        },
        {
          id: 5,
          video: "./slideshow/video_5.MP4"
        },   
      ];
    
      const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
      };
    
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
      };
      
    return (
        <section className="slider-container">
            <div className="title-btns">
                <h3></h3>
                <div className="btns">
                    <button title="scroll left" onClick={slideLeft}>
                    &larr;
                    </button>
                    <button title="scroll right" onClick={slideRight}>
                    &rarr;
                    </button>
                </div>
            </div>
            <div className="row-container" id="slider">
            {filteredItems.map((item) => (
                <div key={item.id} className="row-item">
                    <video src={item.video} controls></video>
                </div>
            ))}
            </div>
        </section>
    );
 };
         
 export default SlideshowSection;
