import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import userProfile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    
    const fetchVideoData = async () =>{
        // Fetching Videos Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () =>{
        //Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data => setChannelData(data.items[0]));
    }

    useEffect(()=>{
        fetchVideoData();
    }, [])

    useEffect(()=>{
        fetchOtherData();
    }, [apiData])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:""}</h3>

        <div className='play-video-info'>
            <p>{apiData?valueConverter(apiData.statistics.viewCount):""} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img alt='' src={like} />{apiData?valueConverter(apiData.statistics.likeCount):0}</span>
                <span><img alt='' src={dislike} />{apiData?valueConverter(apiData.statistics.disLikeCount):0}</span>  {/* There was no dislike count available in the API */}
                <span><img alt='' src={share} />Share</span>
                <span><img alt='' src={save} />Save</span>
            </div>
        </div>

        <hr/>

        <div className='publisher'>
            <img alt='' src={channelData?channelData.snippet.thumbnails.default.url:""} />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>

        <div className='vid-description'>
            {/* <p>Channel that makes learning easy</p> */}
            <p>{apiData?apiData.snippet.description.slice(0, 400):""}</p>
            <hr/>
            <h4>{apiData?valueConverter(apiData.statistics.commentCount):0}</h4>
            <div className='comment'>
                <img alt='' src={userProfile} />
                <div>
                    <h3>Jack Michael <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam maiores voluptas eaque at similique inventore in voluptatum ullam a blanditiis, pariatur perferendis quam accusamus natus officia neque ut ex?</p>
                    <div className='comment-action'>
                        <img alt='' src={like} />
                        <span>244</span>
                        <img alt='' src={dislike} />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img alt='' src={userProfile} />
                <div>
                    <h3>Jack Michael <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam maiores voluptas eaque at similique inventore in voluptatum ullam a blanditiis, pariatur perferendis quam accusamus natus officia neque ut ex?</p>
                    <div className='comment-action'>
                        <img alt='' src={like} />
                        <span>244</span>
                        <img alt='' src={dislike} />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img alt='' src={userProfile} />
                <div>
                    <h3>Jack Michael <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam maiores voluptas eaque at similique inventore in voluptatum ullam a blanditiis, pariatur perferendis quam accusamus natus officia neque ut ex?</p>
                    <div className='comment-action'>
                        <img alt='' src={like} />
                        <span>244</span>
                        <img alt='' src={dislike} />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img alt='' src={userProfile} />
                <div>
                    <h3>Jack Michael <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam maiores voluptas eaque at similique inventore in voluptatum ullam a blanditiis, pariatur perferendis quam accusamus natus officia neque ut ex?</p>
                    <div className='comment-action'>
                        <img alt='' src={like} />
                        <span>244</span>
                        <img alt='' src={dislike} />
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img alt='' src={userProfile} />
                <div>
                    <h3>Jack Michael <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam maiores voluptas eaque at similique inventore in voluptatum ullam a blanditiis, pariatur perferendis quam accusamus natus officia neque ut ex?</p>
                    <div className='comment-action'>
                        <img alt='' src={like} />
                        <span>244</span>
                        <img alt='' src={dislike} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo