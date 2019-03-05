'use strict'

module.exports = (app, index) => {

    // Get all owners
    app.get('/owners', (req,res) => {
        Owner.findAll().then( owners => {
            res.send(owners);
        });
    });

    // Get owner by id
    app.get('/owner/:id', (req,res) => {
        
    });
}

