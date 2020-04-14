import {
  GET_CAMERA_SUCCESS,
  POST_CAMERA_SUCCESS,
  REQUEST_CAMERA_FAILURE,
  GetCamerasSuccess,
  RequestCamerasFailure,
  PostCameraSuccess,
  Camera,
} from './cameraTypes';

const getCamerasSuccess = (data: Camera[]): GetCamerasSuccess => ({
  type: GET_CAMERA_SUCCESS,
  payload: data,
});

const requestCamerasFailure = (error: any): RequestCamerasFailure => {
  console.error(error);
  return { type: REQUEST_CAMERA_FAILURE };
};

const postCameraSuccess = (data: Camera): PostCameraSuccess => ({
  type: POST_CAMERA_SUCCESS,
  payload: data,
});

export const getCameras = () => (dispatch): Promise<void> => {
  return fetch('/api/cameras/')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(getCamerasSuccess(data));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestCamerasFailure(err));
    });
};

export const postCamera = (newCamera: Camera) => (dispatch): Promise<void> => {
  return fetch('/api/cameras/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCamera),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(postCameraSuccess(data));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestCamerasFailure(err));
    });
};