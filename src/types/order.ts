


export type userDetail= {
    name: string;
    email: string;
    phone: string;
    address: string;
  }

  export type OrderState = {
    userDetails: userDetail | null
    paymentMethod: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  };