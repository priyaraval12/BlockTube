import { Web3Storage } from 'web3.storage'

const useIPFS = async file => {
    const client = new Web3Storage({ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZENEM4NEY4NDM1RDUwQ2ZlNzcyMDcwQThBMTZEZDBmZmRBNTk2YmUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTc2MTkwNzI5MjQsIm5hbWUiOiJUZXN0VG9rZW4ifQ.r2j5GzLNPXyFStVTwO-0FGcJR-cWjo1Ida2Oh3ldaL4'})
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
