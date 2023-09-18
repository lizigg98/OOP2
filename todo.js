class ToDo {
    constructor(date, works = []) {
      this.date = date;
      this.works = works;
    }
  
    // Thêm công việc mới vào danh sách
    addWork(work) {
      this.works.push(work);
    }
  }
  
  class ToDoList {
    constructor() {
      this.toDoList = [];
    }
  
    // Thêm một đối tượng ToDo mới vào danh sách ToDoList
    addToDo(date, works = []) {
      // Kiểm tra xem có ToDo nào có cùng ngày không
      const existingToDo = this.toDoList.find((toDo) => toDo.date === date);
  
      if (existingToDo) {
        // Nếu có, thêm công việc vào ToDo đã tồn tại
        existingToDo.works.push(...works);
      } else {
        // Nếu không, tạo một đối tượng ToDo mới và thêm vào danh sách ToDoList
        const newToDo = new ToDo(date, works);
        this.toDoList.push(newToDo);
      }
    }
  
    // Hiển thị danh sách công việc trong một ngày cụ thể
    displayToDoList(date) {
      const toDo = this.toDoList.find((toDo) => toDo.date === date);
  
      if (toDo) {
        console.log(`Công việc cho ngày ${toDo.date}:`);
        toDo.works.forEach((work, index) => {
          console.log(`${index + 1}. ${work}`);
        });
      } else {
        console.log(`Không có công việc nào cho ngày ${date}.`);
      }
    }
  }
  
  // Tạo đối tượng ToDoList để quản lý các công việc
  const toDoListManager = new ToDoList();
  
  // Thêm các công việc vào danh sách ToDoList
  toDoListManager.addToDo('2023-09-18', ['Làm việc 1', 'Làm việc 2']);
  toDoListManager.addToDo('2023-09-19', ['Làm việc 3']);
  toDoListManager.addToDo('2023-09-18', ['Làm việc 4']); // Thêm công việc cho ngày đã tồn tại
  
  // Hiển thị danh sách công việc cho một ngày cụ thể
  toDoListManager.displayToDoList('2023-09-18');
  toDoListManager.displayToDoList('2023-09-19');
  toDoListManager.displayToDoList('2023-09-20'); // Ngày không có công việc