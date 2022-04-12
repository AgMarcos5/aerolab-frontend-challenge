import axios from "axios";

export const redeem = async (id) => {
	const response = await axios(`${process.env.NEXT_PUBLIC_URL}/redeem`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
		data: JSON.stringify({ productId: id }),
	});
	return response;
};

export const addPoints = async (amount) => {
	const response = await axios(`${process.env.NEXT_PUBLIC_URL}/user/points`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
		data: JSON.stringify({ amount }),
	});
	return response;
};




export async function getUser() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/me`, {
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        }
      });
      const user = await res.json();
      return user;
    } catch (error) {
      console.log(error)
    }
}

export async function redeem2(id){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/redeem`, {
      method: 'POST', 
      body: JSON.stringify({ productId: id }), 
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    });
    return res;
  } catch (error) {
    console.log(error)
  }
}

export async function addPoints2(amount){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/points`, {
      method: 'POST', 
      body: JSON.stringify({ amount }), 
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    });
    return res;
  } catch (error) {
    console.log(error)
  }
}