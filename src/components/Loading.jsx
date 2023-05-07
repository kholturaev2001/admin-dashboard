import { Skeleton } from 'antd';

const Loading = () => {
    return (
        <section className="flex flex-col w-full gap-7  m-auto my-6 ">
            <div>
                <Skeleton active  />
            </div>
            <div>
                <Skeleton active  />
            </div>
            <div>
                <Skeleton active  />
            </div>
        </section>
    );
};

export default Loading;