export interface ControllerErrorInterface {
    status: number;
    message: string;
}

export type ServicesResponse =
    | {
          type: 'success';
          payload: any;
      }
    | { type: 'error'; payload: ControllerErrorInterface };
