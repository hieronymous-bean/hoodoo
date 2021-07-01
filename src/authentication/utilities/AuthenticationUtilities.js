export const GoogleAPILoad = async () => {
  return gapi.load('auth2', function() {
    client_id: '363476798637-d3oorskd67mtggvrffu9s5pe63te24lj.apps.googleusercontent.com';
  });
}