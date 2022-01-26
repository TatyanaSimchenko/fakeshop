
type ActionType = 'SET_MAIN_STATE'

export type SortType = 'HIGH' | 'LOW'
export type CurrencyType = 'USD' | 'EUR'

export interface Action {
    type: ActionType,
    payload: MainReduserState
}

export interface CartItem {
    id: number,
    quantity: number
}

export interface Product {
    readonly id: number
    readonly title: string
    readonly description: string
    readonly price: string
    readonly imageUrl: string
}

export interface MainReduserState {
    readonly products: Product[]
    loading: boolean
    searchString?: string
    sortBy: SortType
    currency: CurrencyType
    cart: CartItem[]

}