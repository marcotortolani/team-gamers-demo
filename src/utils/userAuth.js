import { ENDPOINT_VALIDATION_HASH } from '../config/config';

const tokenHashID = { name: 'hashID', expireDays: 365 };
export const tokenActiveUser = { name: 'enabledUser', expireDays: 1 };

export async function validateUser(hash) {
  console.log(hash);
  const resActiveUser = await getValidationToken(tokenActiveUser.name);

  console.log(resActiveUser);
  if (resActiveUser.ok && resActiveUser.value) return;

  if (!resActiveUser.ok || !resActiveUser.value) {
    // no existe el token, ha caducado o no está habilitado
    // leer el hash, si
    //       hash=0 -> leer cookie(hashID)
    //       hash!=0 -> crear cookie(hashID)

    const userIsAuth = await getValidationEndpoint(hash);
    // evaluar hash param
    if (hash === 0) {
      const resHashID = await getValidationToken(tokenHashID.name);
    } else {
      createValidationToken({ authValue: userIsAuth, hash: hash }).then((res) =>
        console.log(res)
      );
    }

  }

  // if (res === 'authorized') return;
  // if (res === 'unauthorized') {
  //   const userIsAuth = await getValidationEndpoint(hash);

  //   if (userIsAuth) {
  //     createValidationToken({ authValue: true, hash: hash }).then((res) => {
  //       console.log('Usuario validado');
  //       console.log(res);
  //     });
  //   }
  // }
}

export async function getValidationEndpoint(hash) {
  if (hash === 1234) {
    return true;
  } else {
    return false;
  }

  //const res = await fetch(ENDPOINT_VALIDATION_HASH + `?hash=${hash}`);
  if (res.ok) {
    return true;
  }
  return false;
}

export async function getValidationToken(tokenName) {
  const res = await fetch(`/api/validation/?token=${tokenName}`, {
    method: 'GET',
  });

  if (!res.ok) {
    return { ok: false, value: 'no-token' };
  }

  const tokenData = await res.json();
  return { ok: true, value: tokenData };
}

export async function createValidationToken(req) {
  const res = await fetch('/api/validation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(req),
  });

  return res.ok;
}
