import useIPFS from '../hooks/useIPFS'

const saveVideo = async FILE => {
    const url = await useIPFS(FILE)
    return url
}
export default saveVideo
