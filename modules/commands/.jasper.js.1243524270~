import net.mamoe.mirai.Bot
import net.mamoe.mirai.BotFactory
import net.mamoe.mirai.command.CommandManager
import net.mamoe.mirai.command.CommandSender
import net.mamoe.mirai.command.buildCommand
import net.mamoe.mirai.console.util.ConsoleExperimentalApi

@OptIn(ConsoleExperimentalApi::class)
suspend fun main() {
    val bot: Bot = BotFactory.newBot( 1234567, "yourBotQQPassword") // Replace with your bot's QQ number and password

    bot.login()

    // Create a command manager
    val commandManager = CommandManager(bot)

    // Define a command for Jasper
    commandManager.register(buildCommand {
        name = "jasper" // Command name
        alias = listOf("j") // Command alias
        description = "Jasper-related commands" // Command description

        // Define a sub-command
        subCommand("greet") {
            description = "Make Jasper greet you"

            // Command logic
            onCommand {
                val sender: CommandSender = this.sender
                sender.sendMessage("Hello, I'm Jasper! How can I assist you?")
            }
        }

        // Add more sub-commands as needed
    })

    // Start listening for commands
    bot.join() // Keep the bot running
}