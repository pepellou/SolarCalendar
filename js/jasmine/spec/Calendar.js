describe('A DayOfWeek', function() {

  it('should have a name', function() {
    var aDay = new DayOfWeek('Saturday');

    expect(aDay.name).toEqual('Saturday');
  });

});

describe('DayOfWeek.all()', function() {

  it('should be an array of 7 objects', function() {
    expect(DayOfWeek.all().length).toEqual(7);
  });

  it('should contain the right values :-)', function() {
    expect(DayOfWeek.all()[0].name).toEqual('Sunday');
    expect(DayOfWeek.all()[3].name).toEqual('Wednesday');
    expect(DayOfWeek.all()[6].name).toEqual('Saturday');
  });

});

describe('A Month', function() {

  it('should have a name', function() {
    var aMonth = new Month('July');

    expect(aMonth.name).toEqual('July');
  });

  it('should have a selected value', function() {
    expect(new Month('July', true).selected).toBeTruthy();
    expect(new Month('July', false).selected).toBeFalsy();
    expect(new Month('July').selected).toBeFalsy();
  });

});

describe('Month.all()', function() {

  it('should be an array of 12 objects', function() {
    expect(Month.all().length).toEqual(12);
  });

  it('should contain the right values :-)', function() {
    expect(Month.all()[0].name).toEqual('January');
    expect(Month.all()[3].name).toEqual('April');
    expect(Month.all()[6].name).toEqual('July');
  });

});
