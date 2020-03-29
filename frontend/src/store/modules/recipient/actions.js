export function setRecipient(data) {
  return {
    type: '@recipient/SET_RECIPIENT',
    payload: { data },
  };
}

export function createRecipientRequest(data) {
  return {
    type: '@recipient/CREATE_RECIPIENT_REQUEST',
    payload: { data },
  };
}

export function createRecipientSuccess(recipient) {
  return {
    type: '@recipient/CREATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}

export function updateRecipientRequest(data) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_REQUEST',
    payload: { data },
  };
}

export function updateRecipientSuccess(recipient) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}

export function recipientFailure() {
  return {
    type: '@recipient/RECIPIENT_FAILURE',
  };
}
