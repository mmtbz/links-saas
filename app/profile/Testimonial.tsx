
type Props = {
  testimonial: string;
  name: string;
  photo: string;
};

const Testimonial = ({ testimonial, name, photo }: Props) => {
  return (
    <div className="testimony">
      <div className="timeline-item-description">
        <i className="avatar | small">
          <img src={photo} alt={name} />
        </i>
        <span>
          <a href="#">{name}</a> testimony on <time>Jan 20, 2021</time>
        </span>
      </div>
      <div className="comment">
        <p>{testimonial}</p>
        <button className="button">👏 2</button>
      </div>
    </div>
  );
};

export default Testimonial;
