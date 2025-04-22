interface AppError extends Error {
    status?: number
}


export const customError = (status: number, message: string) => {
   let error: AppError = new Error();
   error.message = message;
   error.status = status;
   return error;
}