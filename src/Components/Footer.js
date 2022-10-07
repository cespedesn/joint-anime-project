import React, {useEffect} from 'react'
import FooterTile from './FooterTile'

function Footer({recommendations, setRecommendations}) {
    
    useEffect(() => {
        
        fetch(`https://api.jikan.moe/v4/recommendations/anime`)
        .then(res => res.json())
        .then(data => {
            setRecommendations(data.data.slice(0,4));
        });
        
    }, [])
    
    const recommendedAnime = recommendations.map(recommend => {
        return (
            <FooterTile 
                key={recommend.mal_id}
                recommend={recommend}
                />
        )
    })

    

       
  return (
    <div className='recommendation-div'>
        {recommendedAnime}
    </div>
  )
}

export default Footer;