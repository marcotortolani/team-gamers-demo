import { ENDPOINT_VALIDATION_HASH } from '../config/config'

const tokenHashID = { name: 'hashID', expireDays: 365 }
export const tokenActiveUser = { name: 'enabledUser', expireDays: 1 }
export const tokenActiveTrial = { name: 'trial', expireDays: 10 }

export async function validateUser(hashID) {
  // primera vez que se accede
  const userExist = await getToken(tokenActiveUser.name)
  const trial = await getToken(tokenActiveTrial.name)
  if (!userExist.ok && !trial.ok) {
    const req = { trialValue: 3 }
    createTrialToken(req)
  }

  if (hashID) {
    const userIsAuth = await getValidationEndpoint(hashID)
    createToken({ authValue: userIsAuth, hash: hashID })
  }

  // revisar cookies -> token active user
  const resActiveUser = await getToken(tokenActiveUser.name)

  // existe el user token y es válido
  if (resActiveUser.ok && resActiveUser.value === 'true') return

  // no existe el user token o no es válido
  // leer token hashID
  const resHashID = await getToken(tokenHashID.name)

  if (resHashID.ok && resHashID.value) {
    const userIsAuth = await getValidationEndpoint(resHashID.value)
    createToken({ authValue: userIsAuth, hash: resHashID.value })
  } else {
    createToken({ authValue: false, hash: 0 })
  }
}

export async function getValidationEndpoint(hashID) {
  const res = await fetch(ENDPOINT_VALIDATION_HASH + hashID)
  const data = await res.json()
  if (data.success) {
    return data.isValid
  }

  console.log('ERROR: ', res.errorMessage)
  return false
}

export async function getToken(tokenName) {
  const res = await fetch(`/api/validation/?token=${tokenName}`, {
    method: 'GET',
  })

  if (!res.ok) {
    return { ok: false, value: 'no-token' }
  }

  const tokenData = await res.json()
  return { ok: true, value: tokenData.value }
}

export async function createToken(req) {
  const res = await fetch('/api/validation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(req),
  })

  return res.ok
}



export async function getTrialToken() {
  const res = await fetch(`/api/trial/`, {
    method: 'GET',
  })

  if (!res.ok) {
    return { ok: false, value: 'no-token' }
  }

  const tokenData = await res.json()
  return { ok: true, value: tokenData.value }
}

export async function createTrialToken(req) {
  const res = await fetch('/api/trial/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(req),
  })
  return res.ok
}
