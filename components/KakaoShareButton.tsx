import React, { useEffect } from 'react'

const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton()
    }, [])
    const createKakaoButton = () => {
        if (window.Kakao) {
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '타이틀',
                    description: '#리액트 #카카오 #공유버튼',
                    imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                social: {
                    likeCount: 77,
                    commentCount: 55,
                    sharedCount: 333,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            })
        }
    }
    return (
        <div className="kakao-share-button">
            {/* Kakao share button */}
            <button id="kakao-link-btn" color={'black'} >
                asdf
            </button>
        </div>
    )
}
export default KakaoShareButton
