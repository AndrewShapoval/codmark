import {Dispatch} from "redux";
import {appAPI} from "../m3_dal/api";

const initialState = {
    status: "idle" as RequestStatusType,
    images: [] as Array<ImageType>,
    responseMessage: ""
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_STATUS":
            return {...state, status: action.status}
        case "APP/SET_IMAGE":
            return {...state, images: [...state.images, {id: action.id, image_url: action.image_url, tag: action.tag}]}
        case "APP/REMOVE_IMAGE":
            return {...state, images: []}
        case "APP/SET_RESPONSE_MESSAGE":
            return {...state, responseMessage: action.message}
        default:
            return state
    }
}

const setImageAC = (id: string, image_url: string, tag: string) => ({type: "APP/SET_IMAGE", id, image_url, tag} as const)
export const removeImageAC = () => ({type: "APP/REMOVE_IMAGE"} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET_STATUS", status} as const)
export const setResponseMessageAC = (message: string) => ({type: "APP/SET_RESPONSE_MESSAGE", message} as const)

export const getImageTC = (tag: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    appAPI.getImage(tag)
        .then((res) => {
            if (res.data.data.length !== 0) {
                let {id, image_url} = res.data.data
                dispatch(setImageAC(id, image_url, tag.toLowerCase()))
            } else {
                dispatch(setResponseMessageAC("По тегу ничего не найдено"))
            }
        })
        .catch((err) => {
            dispatch(setResponseMessageAC("Произошла http ошибка"))
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export type InitialStateType = typeof initialState

type ActionsType =
    ReturnType<typeof setAppStatusAC> |
    ReturnType<typeof setImageAC> |
    ReturnType<typeof removeImageAC> |
    ReturnType<typeof setResponseMessageAC>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ImageType = {
    id: string
    image_url: string
    tag: string
}