import test from 'ava';
import User from './user';

test('should create user', t => {
    const user = new User({ id: 11, name: 'ole', email: 'some@email.com' });
    t.is(user.name, 'ole');
    t.is(user.email, 'some@email.com');
    t.is(
        user.imageUrl,
        'https://gravatar.com/avatar/d8ffeba65ee5baf57e4901690edc8e1b?size=42&default=retro',
    );
});

test('should create user, all fields', t => {
    const user = new User({
        id: 11,
        name: 'Admin',
        username: 'admin',
        email: 'some@email.com',
    });
    t.is(user.name, 'Admin');
    t.is(user.username, 'admin');
    t.is(user.email, 'some@email.com');
    t.is(
        user.imageUrl,
        'https://gravatar.com/avatar/d8ffeba65ee5baf57e4901690edc8e1b?size=42&default=retro',
    );
});

test('should require email or username', t => {
    const error = t.throws(
        () => {
        const user = new User({ id: 11 }); // eslint-disable-line
        },
        { instanceOf: Error },
    );

    t.is(error.message, 'Username or Email is required');
});

test('Should create user with only email defined', t => {
    const user = new User({ id: 123, email: 'some@email.com' });

    t.is(user.email, 'some@email.com');
});

test('Should require valid email', t => {
    const error = t.throws(
        () => {
            new User({ id: 11, email: 'some@' }); // eslint-disable-line
        },
        { instanceOf: Error },
    );

    t.is(error.message, 'Email "value" must be a valid email');
});

test('Should create user with only username defined', t => {
    const user = new User({ id: 133, username: 'some-user' });
    t.is(user.username, 'some-user');
    t.is(
        user.imageUrl,
        'https://gravatar.com/avatar/140fd5a002fb8d728a9848f8c9fcea2a?size=42&default=retro',
    );
});

test('Should create user with only username defined and undefined email', t => {
    const user = new User({
        id: 1447,
        username: 'some-user',
        email: undefined,
    });
    t.is(user.username, 'some-user');
});
