/********************* INCREMENTAL BACKUPS *************************/
/*
    You are given a list of changes that were made to the files in your database,
    where for each valid i, changes[i][0] is the timestamp of the time the change
    was made, and changes[i][1] is the file id.

    Knowing the timestamp of the last backup lastBackupTime, your task is to find
    the files which should be included in the last backup. Return the ids of the files
    that should be backed up as an array sorted in ascending order.

    Example:
    For lastBackupTime = 461620205 and
    changes = [[461620203, 1], [461620204, 2], [461620205, 6] [461620206, 5],
                [461620207, 3], [461620207, 5], [461620208, 1]],
    the output should be
    incrementalBackups(lastBackupTime, changes) = [1, 3, 5]

    Here's how the answer is calculated
    File with id = 1 was changed at 461620203 and 461620208,
    and since the last backup was at 461620205, it should be included
    in the next backup.
    File with id = 2 was changed only at 461620204 so there's no need
    to back it up.
    File with id = 3 was changed at 461620207, so it should be backed up
    next time.
    File with id = 5 was changed at 461620206 and 461620207, so it should be
    included in the new backup as well.
    File with id = 6 was changed at 461620205, so it can be ignored.
*/

function incrementalBackups(lastBackupTime, changes) {
    const newBackups = new Set();

    for (let i = 0; i < changes.length; i++) {
        if (changes[i][0] > lastBackupTime) {
            newBackups.add(changes[i][1]);
        }
    }

    return [...newBackups].sort((x, y) => x - y);
}

const lastBackupTime = 461620205;
const changes = [[461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1]];

console.log(incrementalBackups(lastBackupTime, changes));
