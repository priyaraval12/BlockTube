import { Web3Storage } from 'web3.storage'

const useIPFS = async file => {
    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3MzgxOGVDRTZFMDdDYjJlMTI1NWJBZTY1MjYyNDZFZjZiRjI2NmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA0ODczNTQ2NTMsIm5hbWUiOiJ0ZXN0In0.1yqfPHqQy2Hyn67ezHPv1XUjLQGmSzJaeGHAVjxDbpk"})
    const FILE_NAME = file.name
    const FILE_TYPE = file.type
    const FILE_TO_UPLOAD = new File([file], FILE_NAME.split(' ').join(''), {
        type: FILE_TYPE,
    })
    const FILE_HASH = await client.put([FILE_TO_UPLOAD], {
        name: FILE_NAME,
    })
    const imageURI = `https://ipfs.io/ipfs/${FILE_HASH}/${FILE_NAME.split(
        ' '
    ).join('')}`
    return imageURI
}
export default useIPFS
