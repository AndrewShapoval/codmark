import {Dispatch} from "redux";
import {appAPI} from "../m3_dal/api";

const initialState = {
    status: "idle" as RequestStatusType,
    images: [] as Array<ImageType>,
    responseMessage: "",
    uniqueTagsNames: [] as Array<string>
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_STATUS":
            return {...state, status: action.status}
        case "APP/SET_IMAGE":
            return {...state, images: [...state.images, {id: action.id, image_url: action.image_url, tag: action.tag}]}
        case "APP/REMOVE_IMAGE":
            return {...state, images: [], uniqueTagsNames: []}
        case "APP/SET_RESPONSE_MESSAGE":
            return {...state, responseMessage: action.message}
        case "APP/SET_UNIQUE_TAG_NAME":
            if (state.uniqueTagsNames.length) {
                if (state.uniqueTagsNames.find(t => t === action.tag)) {
                    return state
                } else {
                    return {...state, uniqueTagsNames: [...state.uniqueTagsNames, action.tag]}
                }
            }
            return {...state, uniqueTagsNames: [action.tag]}
        default:
            return state
    }
}

const setImageAC = (id: string, image_url: Array<string>, tag: string) => ({type: "APP/SET_IMAGE", id, image_url, tag} as const)
const setUniqueTagNameAC = (tag: string) => ({type: "APP/SET_UNIQUE_TAG_NAME", tag} as const)
export const removeImageAC = () => ({type: "APP/REMOVE_IMAGE"} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET_STATUS", status} as const)
export const setResponseMessageAC = (message: string) => ({type: "APP/SET_RESPONSE_MESSAGE", message} as const)
export const setCompositeImageAC = (imgI: string, imgB: string) => ({type: "APP/SET_COMPOSITE_IMAGE", imgI, imgB} as const)

export const getImageTC = (tagsString: string) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const tags = tagsString.split(',')
        const promises = tags.map(tag => {
            return tag ? appAPI.getImage(tag) : null
        })

        const res = await Promise.all(promises)
        let imgA = res[0]
        let {id, image_url} = imgA?.data.data
        let imgB = res[1]
        let sumImgUrl = [image_url, imgB?.data.data.image_url ? imgB?.data.data.image_url : null]

        if (imgA?.data.data.length === 0 || imgB?.data.data.length === 0) {
            dispatch(setResponseMessageAC("По тегу ничего не найдено"))
        } else {
            dispatch(setImageAC(id, sumImgUrl, tagsString.toLowerCase()))
            dispatch(setUniqueTagNameAC(tagsString.toLowerCase()))
        }
    } catch (e) {
        dispatch(setResponseMessageAC("Произошла http ошибка"))
    }
    dispatch(setAppStatusAC('succeeded'))
}

export type InitialStateType = typeof initialState

type ActionsType =
    ReturnType<typeof setAppStatusAC> |
    ReturnType<typeof setImageAC> |
    ReturnType<typeof removeImageAC> |
    ReturnType<typeof setResponseMessageAC> |
    ReturnType<typeof setUniqueTagNameAC> |
    ReturnType<typeof setCompositeImageAC>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ImageType = {
    id: string
    image_url: Array<string>
    tag: string
}