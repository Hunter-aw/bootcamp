const hosts = []
const servers = [
    'https://accipio.serveo.net/message/hunter',
    'https://serius.serveo.net/message/hunter',
    'https://amalia.serveo.net/message/hunter',
    'https://hunter.serveo.net/message/hunter',
    'https://postulo.serveo.net/message/hunter',
    'https://hilla.serveo.net/message/hunter',
    'https://necdum.serveo.net/message/hunter'
]
let visitors = []

const contactServers = () => {
    for (server of servers) {
    //     $.get(server, function (data) {
    //         console.log(data)
    //         hosts.push(data)
    //     }, JSON)
    // }
    $.ajax({
        method: 'GET',
        url: server,
        dataType: 'json',
        success: (data) => {
            console.log(data)
            hosts.push(data)
            console.log(hosts)
        },
        error: (jqXHR, testStatus, errorThrown) => {
            console.log(testStatus, errorThrown);
        }
    })
}
}

const addUsers = () => {
    for (let host of hosts) {
        $('.myList').append(`<li> ${host.name}</li>`)
    }
}

const addVisitors = (appendVisitors) => {
    console.log("hello?")
    $.ajax({
        method: 'GET',
        url: 'visitors',
        dataType: 'json',
        success: (data) => {
            console.log(data)
            visitors = JSON.parse(data)
            appendVisitors()
        },
        error: (jqXHR, testStatus, errorThrown) => {
            console.log(testStatus, errorThrown)
        }
    })
}

const appendVisitors = () => {
    for (let visitor of visitors) {
        console.log('visitor')
        $('.visitorList').append(`<li> ${visitor}</li>`)
    }
}

contactServers()

$('.names').on('click', function() {
    addUsers()
})
// add timeout and do this w.
$('.visitors').on('click', function() {
    addVisitors(appendVisitors)
})