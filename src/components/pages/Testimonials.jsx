import { Quote } from './Quote'
import { testimonialsContent } from '../../content/testimonials';

export function Testimonials () {
    return (
        <div>
            <div>Testimonials</div>
            {testimonialsContent.map((quote, i) =>
                <Quote key={i} testimonial={quote}/>
            )}
        </div>
    );
}