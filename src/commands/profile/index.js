const profile = async (ctx) => {
    const fromId = ctx.from.id;
    const msg = `*### Detail profil ###*\nš ID: ${fromId}\nš° Poin: 0\nšµ Saldo: Rp. 0`;

    return await ctx.replyWithMarkdown(msg);
}

module.exports = { profile };