import bot from "../core/bot";

bot.command("start", (ctx) => {
  const text =
    "HEIC formatdagi rasmlarni JPG formatga o'tkazib berishim mumkin. 200tagacha rasmni iwlab beraman!!!Yo'riqnoma: /help";
  ctx.reply(text);
});
