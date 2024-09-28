import Card from "../../components/Card"
import md5 from "md5";

const Testimonial = ({testimonial}) => {
  if (!testimonial || !testimonial.email || !testimonial.name || !testimonial.Review || !testimonial.profession) {
    // If testimonial object or its properties are not defined, return null
    return null;
  }

  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(testimonial.email)}?d=identicon`;
  return (
    <Card className="light">
        <p>{testimonial?.Review}</p>
        <div className="testimonial__client">
            <div className="testimonial__client-avatar">
                <img src={gravatarUrl} alt="Testimonial Avatar" />
            </div>
            <div className="testimonial__client-details">
                <h6>{testimonial?.name}</h6>
                <small>{testimonial?.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial