import { Skeleton } from 'antd';

const AvatarLoading = () => {
    return (
        <div>
            <Skeleton
                active
                avatar
                paragraph={{
                    rows: 4,
                }}
            />

        </div>
    )
}

export default AvatarLoading