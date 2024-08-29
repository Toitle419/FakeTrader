const ctx = document.getElementById('graph-canvas');

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const values = new Array(months.length);
for (var i = 0; i < values.length; i++)
    {
        
        values[i] = Math.random() * 100
    };

var chart = new Chart(ctx,
    {
    type: 'line',
    data:
    {
        labels: months,
        datasets:
        [{
            label: 'Value',
            data: values,
            borderWidth: 1
        }]
    },
    options:
    {
        scales:
        {
            y:
            {
                beginAtZero: true
            }
        },
        animation: false
    }
});