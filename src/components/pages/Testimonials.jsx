import { Quote } from './Quote'
import { testimonialsContent } from '../../content/testimonials';

export function Testimonials () {
    return (
        <div className='mt-24'>
            <div>Testimonials</div>
            {testimonialsContent.map((testimonial, i) =>
                <Quote key={i} testimonial={testimonial}/>
            )}
        </div>
    );
}