import create from 'zustand'

const useStore = create(set => ({
    currentAccount: '',
    currnetVideo: undefined,
    allVideos: [],
    setAllVideos: value => set({ allVideos: value }),
    setCurrentVideo: value => set({ currnetVideo: value }),
    setCurrentAccount: value => set({ currentAccount: value }),

}))

export default useStore
