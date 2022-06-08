class ApiError extends Error {
  status: number;

  constructor(message:string, status: number) {
    super(message);
    this.status = status;
  }

  toJson() {
    return {
      message: this.message,
      status: this.status,
    };
  }
}
const someError = new ApiError('fucj', 5000);
