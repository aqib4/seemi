
import useScrollFadeIn from "./useScrollFadeIn";
function FadeInImage({ src, alt }) {
    const [ref, isVisible] = useScrollFadeIn();
  
    return (
      <img
        src={src}
        alt={alt}
        ref={ref}
        className={`w-full h-full fade-in ${isVisible ? 'show' : ''}`}
      />
    );
  }
  
export default FadeInImage;