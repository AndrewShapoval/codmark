import {Dispatch} from "redux";
import {appAPI} from "../m3_dal/api";

const initialState = {
    status: "idle" as RequestStatusType,
    images: [] as Array<ImageType>,
    responseMessage: "",
    uniqueTagsNames: [] as Array<string>,
    compositeImage: [] as Array<string>
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_STATUS":
            return {...state, status: action.status}
        case "APP/SET_IMAGE":
            return {...state, images: [...state.images, {id: action.id, image_url: action.image_url, tag: action.tag}]}
        case "APP/REMOVE_IMAGE":
            return {...state, images: [], uniqueTagsNames: [], compositeImage: []}
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
        case "APP/SET_COMPOSITE_IMAGE":
            return {...state, compositeImage: [action.imgI, action.imgB]}
        default:
            return state
    }
}

const setImageAC = (id: string, image_url: string, tag: string) => ({type: "APP/SET_IMAGE", id, image_url, tag} as const)
const setUniqueTagNameAC = (tag: string) => ({type: "APP/SET_UNIQUE_TAG_NAME", tag} as const)
export const removeImageAC = () => ({type: "APP/REMOVE_IMAGE"} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET_STATUS", status} as const)
export const setResponseMessageAC = (message: string) => ({type: "APP/SET_RESPONSE_MESSAGE", message} as const)
export const setCompositeImageAC = (imgI: string, imgB: string) => ({type: "APP/SET_COMPOSITE_IMAGE", imgI, imgB} as const)

export const getImageTC = (tag: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    appAPI.getImage(tag)
        .then((res) => {
            if (res.data.data.length !== 0) {
                let {id, image_url} = res.data.data
                dispatch(setImageAC(id, image_url, tag.toLowerCase()))
                dispatch(setUniqueTagNameAC(tag.toLowerCase()))
            } else {
                dispatch(setResponseMessageAC("По тегу ничего не найдено"))
                setTimeout(() => dispatch(setResponseMessageAC("")), 3000)
            }
        })
        .catch(() => {
            dispatch(setResponseMessageAC("Произошла http ошибка"))
            setTimeout(() => dispatch(setResponseMessageAC("")), 3000)
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const getCompositeImageTC = (tags: Array<string>) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await Promise.all([appAPI.getImage(tags[0]), appAPI.getImage(tags[1])])
        const imgI = res[0].data.data.image_url
        const imgB = res[1].data.data.image_url
        dispatch(setCompositeImageAC(imgI, imgB))
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
    image_url: string
    tag: string
}