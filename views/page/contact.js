const layout = require('../layout');

module.exports =  () => {
    return layout({
    content: `
    <form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">State</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.492949908965!2d16.721035551807915!3d52.45209934891188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470447302fbc540f%3A0x52885596db06bdc1!2sLudowa%2011a%2C%2062-080%20Sady!5e0!3m2!1sen!2spl!4v1634813669550!5m2!1sen!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

    `
  });
};
