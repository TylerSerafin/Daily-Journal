/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h1>${entry.concept} </h1>
        <div>${entry.date}</div>
        <div>${entry.entry} </div>
        <div>${entry.mood}</div>
        <div> </div>
        
        
        </section>
    `
}

export default JournalEntryComponent