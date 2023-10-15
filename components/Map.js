import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1&autoload=false`;
    document.head.appendChild(kakaoMapScript);
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(35.934633, 128.556799),
          level: 3,
        };
  
        var map = new window.kakao.maps.Map(container, options);
      });
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
};

export default KakaoMap;
