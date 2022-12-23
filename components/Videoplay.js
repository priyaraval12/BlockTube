import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

export default function Player({ hash }) {
    return (
        <div className='outline-1 outline-purple-400'>
            <Plyr
                source={{
                    type: 'video',
                    title: 'Example title',
                    sources: [
                        {
                            src: hash,
                            type: 'video/mp4',
                        },
                    ],
                }}
                style={{ borderRadius: '15px' }}
                options={{
                    autoplay: true,
                }}
                autoPlay={true}
            />
        </div>
    )
}
