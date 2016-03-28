'use strict';

export default phonecatService => {
  phonecatService.factory('Phone', ['$resource',
    function($resource){
      return $resource('data/phones/:phoneId.json', {}, {
        query: {
          method:'GET',
          params: { phoneId:'phones' },
          isArray:true}
      });
    }]);
};
