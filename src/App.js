
import './App.css';

function App() {
  return (
    <form>


      <div className='boxTitleBtn'>
        <h1>Торт: </h1>
        <button type='button' className='buttonClose'>
          <svg width="17.500000" height="17.500000" viewBox="0 0 17.5 17.5" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            {/* <defs /> */}
            <path id="Vector" d="M17.5 1.76L15.73 0L8.75 6.98L1.76 0L0 1.76L6.98 8.75L0 15.73L1.76 17.5L8.75 10.51L15.73 17.5L17.5 15.73L10.51 8.75L17.5 1.76Z" fill="#84A6C2" />
          </svg>

        </button>
      </div>


      <ul className='userList'>
        <li className='userListItem'>
          <p className='userItemtext'>Ім’я та прізвище</p>
          <input className='userListInput' type='text' placeholder='ПІБ' />
        </li>
        <li className='userListItem'>
          <p className='userItemtext'>Номер телефону</p>
          <input className='userListInput' type='tell' placeholder='+380 *** *** ***' />
        </li>
      </ul>

      <ul>
        <li>
          <p>Вага</p>
          <input type='number' />кг
        </li>
        <li>
          <div>
            <p>Начинка</p>
            <p>Оберіть 1 варіант</p>
          </div>
          <ul>
            <li>
              <button type="button">
                Бісквітна з манговим мусом із дзеркальною глазуррю
              </button>
            </li>
            <li>
              <button type="button">
                Бісквітна з лохиновим конфітюром
              </button>
            </li>
            <li>
              <button type="button">
                Шоколадний бісквіт з крем-чізом, горіховим праліне і велюровим покриттям
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <p>Додаткові послуги</p>
            <p>можна обрати декілька варіантів</p>
          </div>
          <ul>
            <li>
              <button type="button">
                Прикраси з мастики
              </button>
            </li>
            <li>
              <button type="button">
                Шоколадні сфери
              </button>
            </li>
            <li>
              <button type="button">
                Живі квіти
              </button>
            </li>
            <li>
              <button type="button">
                Святкова упаковка
              </button>
            </li>
            <li>
              <button type="button">
                Фото на торті
              </button>
            </li>
          </ul>
        </li>
      </ul>

      <div>
        <p>Додаткові побажання</p>
        <textarea />
        <div>
          <input type='checkbox'/>
          <div>
            <p>Не тклкфонуйте мені</p>
            <p>Хочу спілкуватися тіки в чаті Mycake</p>
          </div>
        </div>
      </div>

      <div className='boxTitleBtn'>
        <button type='button' className='SubmitBtn'>Скасувати</button>
        <button type='button' className='saveSubmitBtn'>Зберегти</button>
      </div>
    </form>
  );
}

export default App;
