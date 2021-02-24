export enum EPermitActions {
  FETCH_PERMITS_SAGA = 'FETCH_PERMITS_SAGA',
  FETCH_PERMITS_LOADING = 'FETCH_PERMITS_LOADING',
  FETCH_PERMITS_FAILED = 'FETCH_PERMITS_FAILED'
}

export const fetchPermitsSaga = () => ({
  type: EPermitActions.FETCH_PERMITS_SAGA
})

export const fetchPermitsLoading = () => ({
  type: EPermitActions.FETCH_PERMITS_LOADING
})

export const fetchPermitsFailed = () => ({
  type: EPermitActions.FETCH_PERMITS_FAILED
})
