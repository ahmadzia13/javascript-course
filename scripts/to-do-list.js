/*
const TodoList = [];

function addtodo()  {
  const inputElement = document.querySelector ('.js-input-text');
  const name = inputElement.value;
  console.log(name);

}
*/


/*
      const TodoList = [
          "ahmad",
          "ali",
          "maryum"
      ];
        renderTodolist(); 
      
      function renderTodolist() {
        let TodoListHTML = '';
      



      for (let i = 0; i < TodoList.length; i++) {
        const todo = TodoList[i];
        const html = `<P>${todo}</P>`;
        TodoListHTML += html
      }
      
      console.log(TodoListHTML)
      document.querySelector('.js-result-text')
      .innerHTML = TodoListHTML
      }
      function addname() {
        const inputElement = document.querySelector ('.js-input-name');
        const name = inputElement.value;

        TodoList.push(name);
        console.log(TodoList);

        inputElement.value = '';
      renderTodolist();
        
      }

*/

        const TodoList = [{
           name :  "ahmad",
           duedate: '2022-12-22'
        },
        {
          name:  "asad",
          duedate: '2022-11-21'
        }
          ];

        renderTodolistHTML(); 

        function renderTodolistHTML() {
          let TodoListHTML = '';

        for (let i = 0; i < TodoList.length; i++) {
          const todoobject = TodoList[i];
          const name = todoobject.name;
          const duedate = todoobject.duedate;
          const html = 
           `<P>
              ${name} ${duedate}
              <button  onclick="
                TodoList.splice(${i},1);
                renderTodolistHTML();
               "
              >DELETE</button>
            </P>`
          TodoListHTML += html
        }
        console.log(TodoListHTML) 
        document.querySelector('.js-result-text')
        .innerHTML = TodoListHTML

        }
        function addname() {
          const inputElement = document.querySelector('.js-input-name');
          const name = inputElement.value;


          const dateinputElement = document.querySelector('.js-date-input');
          const date = dateinputElement.value

          TodoList.push({ name: name, duedate: date });

          console.log(TodoList);
          
          inputElement.value = '';

        renderTodolistHTML();
        }