function arrange(name) {
    const tasks = [];
    tasks.push(() => console.log(`Hi, I am ${name}`));
    async function execute() {
        for (const t of tasks) {
            await t();
        }
    }
    function doTask(age) {
        tasks.push(() => console.log(`I am ${age} years old`));
        return this;
    }
    function wait(seconds) {
        tasks.push(() => new Promise((resolve) =>
            setTimeout(() => {
                console.log(`wait ${seconds} seconds`);
                resolve();
            }, seconds * 1000)));
        return this;
    }
    function waitFirst(seconds) {
        tasks.unshift(() => new Promise((resolve) =>
            setTimeout(() => {
                console.log(`wait ${seconds} seconds`);
                resolve();
            }, seconds * 1000)));
        return this;
    }
    return {
        wait,
        execute,
        waitFirst,
        do: doTask,
    };
}

// arrange('William').execute();
// Hi, I am William
// arrange('William').do('18').execute();
// Hi, I am William
// I am 18 years old
// arrange('William').wait(5).do('18').execute()
// Hi, I am William
// wait 5 seconds
// I am 18 years old
// arrange('William').waitFirst(5).wait(5).do('18').execute()
// wait 5 seconds
// Hi, I am William
// I am 18 years old
