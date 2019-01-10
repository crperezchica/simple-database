
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const Store = require('../lib/index');


describe('Store', () => {
    let store = null; //starts with clean store, remove e
    beforeEach(done => {
        rimraf('./testData/store', err => {
            done(err);
        });

    });
//recreates store directory
    beforeEach(() => {
        mkdirp('./testData/store', err => {

        });
    });
//once removed this is where the new store goes
    beforeEach(() => {
        store = new Store('./testData/store');
    });

    it('creates an object in my store', done => {
        store.create({ name: 'ryan' }, (err, createdPerson) => {
            expect(err).toBeFalsy();
            expect(createdPerson).toEqual({ name: 'ryan', _id: expect.any(String) });
            done();
        });
    });

    it('finds an object by id', done => {
        //create an object
        store.create({ name: 'tommy' }, (err, createdAnimal) => {
            
            store.findById(createdAnimal._id, (err, foundAnimal) => {
                expect(err).toBeFalsy();
                expect(foundAnimal).toEqual({ name: 'tommy', _id: createdAnimal._id});
                done();
            });
        });
       
    });

    it('find all objects tracked by the store', () => {
        //create a bunch of objects (at least 5) nested
        // create ->
            //create ->
                //find ->
                    // write our real test ( our expects)
                    //expect an array with 5 items
                    //expect an array containing the first item
                    //expect an array containing the second item
    })
});