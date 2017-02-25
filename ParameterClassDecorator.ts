function PluginDecorator(name: string) {
    return (ctor: Function) => {
        console.log("Plugin found: " + name);
    }
}

@PluginDecorator("My first Plugin")
class myFirstPlugin {}