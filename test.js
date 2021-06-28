const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
})
test('say hello',function(){
  expect(sayHello('sai')).toBe('hello sai');
});
