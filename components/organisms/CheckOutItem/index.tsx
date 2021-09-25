import {useEffect, useState} from 'react';

export default function CheckOutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: '',
    name: '',
    category: {
      name: '',
    },
  });

  useEffect(() => {
    const dataItemFromLocal = localStorage.getItem('data-item');
    const dataItemLocal = JSON.parse(dataItemFromLocal!);
    console.log(dataItemLocal);
    setDataItem(dataItemLocal);
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE2;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={`${IMG}/${dataItem.thumbnail}`} className="img-fluid" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          Mobile Legends:
          <br /> {dataItem.name}
        </p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
