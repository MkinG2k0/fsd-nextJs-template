type RFC<T> = import('react').FC<T>
type PropsWithChildren<T> = import('react').PropsWithChildren<T>

declare type FC<T = {}> = RFC<PropsWithChildren<T>>
