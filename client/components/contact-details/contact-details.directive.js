'use strict';

angular.module('angularFullstackApp.contactDetails', [])
  .directive('contactDetails', function () {
    return {
      template: `<div class="col-xs-6">
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message"  class="form-control" rows="8" cols="40"></textarea>
          </div>
          <button type="submit" class="btn btn-default">Send</button>
        </form>
      </div>`,
      restrict: 'EA'
    };
  });
