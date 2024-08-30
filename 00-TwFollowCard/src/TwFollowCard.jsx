import { useState } from 'react';
import './App.css'
export function TwFollowCard({username, children, InitialIsFollowing}) {
  
  const imageSrc = `https://unavatar.io/${username}`;
  const [isFollowing, setIsFollowing] = useState(InitialIsFollowing);
  const followButton = isFollowing ? 'Siguiendo' : 'Seguir';
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-img'
          src={imageSrc}
          alt="picture profile"
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-username'>@{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={`tw-followCard-button ${isFollowing ? 'is-following': ''}`}>
          <span className='tw-followCard-text'>{followButton}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwFollowCard;
