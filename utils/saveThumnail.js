import useIPFS from '../hooks/useIPFS'

const saveThumbnail = async FILE => {
    const url = await useIPFS(FILE)
    return url
}
export default saveThumbnail
