const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  console.log(errors);
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Zarejestruj</h1>
              <div class="field">
                <label class="label">Email</label>
                <input class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Hasło</label>
                <input class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <div class="field">
                <label class="label">Powtórz hasło</label>
                <input class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                <p class="help is-danger">${getError(
                  errors,
                  'passwordConfirmation'
                )}</p>
              </div>
              <button class="button is-primary">Zarejestruj</button>
            </form>
            <a href="/signin">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    `
  });
};
