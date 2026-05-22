import { FaRegBookmark } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='top'>
        <img src={props.brandLogo} alt={props.company} />
        <button>
          Save <FaRegBookmark size={13} />
        </button>
      </div>
      <div className='center'>
        <h3>
          {props.company} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className='tag'>
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h3>${props.pay ?? "N/A"}/hr</h3>
          <p>{props.location ?? "Remote"}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
