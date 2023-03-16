import { Quote } from './Quote'
import { testimonialsContent } from '../../content/testimonials';

export function Testimonials () {
    return (
        <div>
            <div className='text-2xl text-center'>Testimonials</div>
            {testimonialsContent.map((testimonial, i) =>
                <Quote key={i} testimonial={testimonial}/>
            )}
        </div>
    );
}