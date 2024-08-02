import { getAds, getAdsFail, getAdsSuccess } from '@/redux/advertisement/adsSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const AdvertisementAdsCall = () => {
    const dispatch = useDispatch();

    const fetchAds = async () => {
      try {
        dispatch(getAds());
        const res = await fetch(`http://localhost:5000/api/v1/get-advertisement`);
  
        const data = await res.json();
        dispatch(getAdsSuccess(data));
      } catch (err) {
        dispatch(getAdsFail());
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchAds();
    }, []);
  return (
    <div>AdvertisementAdsCall</div>
  )
}

export default AdvertisementAdsCall