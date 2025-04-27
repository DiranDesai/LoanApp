import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// Success Alert
export const showSuccessAlert = (title = "Success", text = "") => {
  MySwal.fire({
    title,
    text,
    icon: "success",
    confirmButtonColor: "#3085d6",
  });
};

// Error Alert
export const showErrorAlert = (title = "Error", text = "") => {
  MySwal.fire({
    title,
    text,
    icon: "error",
    confirmButtonColor: "#d33",
  });
};

// Warning Alert with Confirmation
export const showConfirmAlert = (title = "Are you sure?", text = "", confirmText = "Yes") => {
  return MySwal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
  });
};

// ✅ Add Toast success
export const showToastSuccess = (message = "Success!") => {
    MySwal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };


// ❌ Add Toast error
export const showToastError = (message = "Something went wrong!") => {
    MySwal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };