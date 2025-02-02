import { useState } from "react";
import { toast } from "react-toastify";
import { validateError } from "../../utils/utils";
import { useTask } from "../hooks/useTask";
import Button from "./Button";

const AddTaskModal = () => {
  const { onEditAddTask, toggleModal, taskToUpdate } = useTask();

  //track editMode or Add mode
  const isAddMode = Object.is(taskToUpdate, null);

  //sate for form data
  const [formData, setFormData] = useState(
    taskToUpdate ?? {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      category: "",
    }
  );

  //state for error
  const [error, setError] = useState({});

  //Submit form handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      category: formData.category || "todo",
    };

    //validation
    const validationErrors = validateError(formData);
    if (Object.keys(validationErrors).length > 0) {
      return setError(validationErrors);
    }

    onEditAddTask(updatedFormData, isAddMode);
    if (isAddMode) {
      toast.success(`Task added successfully`);
    } else {
      toast.success(`Task updated successfully`);
    }

    //reset form
    resetForm();
  };

  //Input field handler
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    //Clear error field
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  //reset form
  const resetForm = () => {
    setFormData({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      category: "",
    });
  };

  return (
    <>
      <div className='bg-black bg-opacity-70 h-full w-full z-10 fixed top-0 left-0 flex items-center justify-center'>
        {/* Modal Content */}
        <div className='w-full max-w-md rounded-lg bg-white text-black dark:bg-gray-800 shadow-xl'>
          <div className='p-6'>
            <h2 className='mb-6 text-2xl font-bold text-green-400'>
              {isAddMode ? "Create Task" : "Update Task"}
            </h2>
            <form onSubmit={handleFormSubmit}>
              {/* Task Name */}
              <div className='mb-4'>
                <label
                  htmlFor='title'
                  className='mb-1 block text-sm font-medium dark:text-gray-300'>
                  Task Name
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData?.title}
                  onChange={handleChangeInput}
                  className={`w-full rounded-md border ${
                    error.title ? "border-red-500" : "border-gray-600"
                  } dark:bg-gray-700 px-3 py-2 dark:text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {error?.title ? (
                  <p className='text-red-500 m-0'>{error?.title}</p>
                ) : (
                  ""
                )}
              </div>

              {/* Description */}
              <div className='mb-4'>
                <label
                  htmlFor='description'
                  className='mb-1 block text-sm font-medium dark:text-gray-300'>
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  rows='3'
                  value={formData?.description}
                  onChange={handleChangeInput}
                  className={`w-full rounded-md border ${
                    error.description ? "border-red-500" : "border-gray-600"
                  } dark:bg-gray-700 px-3 py-2 dark:text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}></textarea>
                {error?.description ? (
                  <p className='text-red-500 m-0'>{error?.description}</p>
                ) : (
                  ""
                )}
              </div>

              {/* Due Date */}
              <div className='mb-4'>
                <label
                  htmlFor='date'
                  className='mb-1 block text-sm font-medium dark:text-gray-300'>
                  Due Date
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={formData?.date}
                  onChange={handleChangeInput}
                  className={`w-full rounded-md border ${
                    error.date ? "border-red-500" : "border-gray-600"
                  } dark:bg-gray-700 px-3 py-2 dark:text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {error?.date ? (
                  <p className='text-red-500 m-0'>{error?.date}</p>
                ) : (
                  ""
                )}
              </div>

              {/* Category */}
              <div className='mb-4'>
                <label
                  htmlFor='category'
                  className='mb-1 block text-sm font-medium dark:text-gray-300'>
                  Category
                </label>
                <select
                  id='category'
                  name='category'
                  value={formData?.category}
                  onChange={handleChangeInput}
                  className={`w-full rounded-md border  "border-gray-600"
                   dark:bg-gray-700 px-3 py-2 dark:text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}>
                  <option value='todo'>To-Do</option>
                  <option value='onProgress'>On Progress</option>
                  <option value='done'>Done</option>
                  <option value='revised'>Revised</option>
                </select>
              </div>

              {/* Buttons */}
              <div className='flex justify-end space-x-3'>
                <Button label='Cancel' onClick={() => toggleModal(false)} />
                <Button
                  label={isAddMode ? "Create Task" : "Update Task"}
                  type='submit'
                  variant='primary'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
