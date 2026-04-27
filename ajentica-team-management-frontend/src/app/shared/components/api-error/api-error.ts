import { Component, input, output, effect } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-api-error',
  imports: [],
  templateUrl: './api-error.html',
  styleUrl: './api-error.css',
})
export class ApiError {
  error = input<any>(null);
  onRetry = output<void>();

  errorCode: string = '500';
  errorTitle: string = 'API Error';
  errorMessage: string = 'Failed to load data from the server. Please try again.';

  constructor(private location: Location) {
    // Track input changes with effect for signal-based inputs
    effect(() => {
      this.setErrorMessage();
    });
  }

  private setErrorMessage() {
    const err = this.error();
    if (!err) return;

    // Handle HTTP error responses
    if (err.status) {
      this.errorCode = err.status.toString();
      switch (err.status) {
        case 500:
          this.errorTitle = 'Server Error';
          this.errorMessage = 'The server encountered an error. Please try again later.';
          break;
        case 503:
          this.errorTitle = 'Service Unavailable';
          this.errorMessage = 'The service is temporarily unavailable. Please try again later.';
          break;
        case 504:
          this.errorTitle = 'Gateway Timeout';
          this.errorMessage = 'The request took too long. Please try again.';
          break;
        case 401:
          this.errorTitle = 'Unauthorized';
          this.errorMessage = 'You are not authorized to access this resource.';
          break;
        case 403:
          this.errorTitle = 'Forbidden';
          this.errorMessage = 'You do not have permission to access this resource.';
          break;
        default:
          this.errorTitle = 'API Error';
          this.errorMessage =
            err.message || 'An error occurred while loading data. Please try again.';
      }
    } else if (err.name === 'TimeoutError') {
      this.errorCode = 'TIMEOUT';
      this.errorTitle = 'Request Timeout';
      this.errorMessage = 'The request took too long to complete. Please try again.';
    } else {
      this.errorCode = 'ERROR';
      this.errorTitle = 'Network Error';
      this.errorMessage =
        err.message || 'A network error occurred. Please check your connection and try again.';
    }
  }

  retry() {
    this.onRetry.emit();
  }

  goBack() {
    this.location.back();
  }
}
