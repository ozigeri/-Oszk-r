import { SET_SIZE } from '@/store/slices/sizeSlice';

import { useDispatch, useSelector } from 'react-redux';

type Size = {
    width: number;
    height: number;
};

const ReduxDemo = () => {
    const dispatch = useDispatch();

    const changeSize = () => {
        dispatch(SET_SIZE({ width: Math.floor(Math.random() * 450), height: Math.floor(Math.random() * 125) }));
    };

    const size = useSelector((state: any) => state.size) as Size;

    return (
        <div className="flex flex-col gap-2 justify-center items-center bg-solid-50 p-4 rounded w-96">
            <h1 className="text-2xl font-thin m-2">Redux Test</h1>
            <div className="flex flex-row justify-center items-center gap-2 relative">
                <button onClick={() => changeSize()}>Generate random size</button>
                <div className="flex flex-col">
                    <span>Width: {size.width}</span>
                    <span>Height: {size.height}</span>
                </div>
                <div
                    className="bg-transparent shadow-2xl left-[500px] absolute flex justify-center items-center"
                    style={{ width: size.width + 'px', height: size.height + 'px' }}
                >
                    {size.width} x {size.height}
                </div>
            </div>
        </div>
    );
};

export default ReduxDemo;
