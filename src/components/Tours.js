import Title from './Title';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { img, id, date, title, info, icon, location, duration, cost } =
            tour;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
