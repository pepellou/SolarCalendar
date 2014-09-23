function DayOfWeek(name) {
    this.name = name;
    return this;
}

DayOfWeek.all = function() {
    return [
        'Sunday',
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ].map(function(day) {
        return new DayOfWeek(day);
    });
}

function Month(name, selected) {
    this.name = name;
    this.selected = selected;
    return this;
}

Month.all = function() {
    var current = new Date().getMonth();
    return [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ].map(function(month, index) {
        return new Month(month, index == current);
    });
}
