import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const tokenHashID = { name: 'hashID', expireDays: 365 };
const tokenActiveUser = { name: 'enabledUser', expireDays: 1 };

// CREATE new validation token on cookies
export async function POST(req) {
  const { authValue, hash } = await req.json();

  const oneDay = 24 * 60 * 60 * 1000;

  if (authValue) {
    cookies().set({
      name: tokenActiveUser.name,
      value: authValue,
      expires: Date.now() + oneDay * tokenActiveUser.expireDays,
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
      path: '/',
    });
  }
  if (hash) {
    cookies().set({
      name: tokenHashID.name,
      value: hash,
      expires: Date.now() + oneDay * tokenHashID.expireDays,
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
      path: '/',
    });
  }

  return NextResponse.json({}, { status: 200, statusText: 'Created OK' });
}

// READ a validation token on cookies
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tokenName = searchParams.get('token');

  const cookieStore = cookies();
  const tokenStored = cookieStore.get(tokenName);

  if (tokenStored === undefined) {
    return NextResponse.json(
      { error: 'error' },
      { status: 400, statusText: `Token: ${tokenName} doesn't exists` }
    );
  }

  return NextResponse.json({ value: tokenStored.value }, {
    status: 200,
    statusText: 'Autorizado',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// UPDATE validation token on cookies
export async function PUT(req) {}

// DELETE validation token on cookies
export async function DELETE(req) {}
