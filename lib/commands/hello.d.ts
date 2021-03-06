import { Command, flags } from '@oclif/command';
export default class Hello extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: {
            name: string;
            char?: "a" | "b" | "i" | "p" | "q" | "s" | "u" | "g" | "c" | "d" | "e" | "f" | "h" | "j" | "k" | "l" | "m" | "n" | "o" | "r" | "t" | "v" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "X" | "Y" | "Z" | undefined;
            description?: string | undefined;
            hidden?: boolean | undefined;
            required?: boolean | undefined;
            dependsOn?: string[] | undefined;
            env?: string | undefined;
            parse(input: boolean, context: any): void;
        } & {
            type: "boolean";
            allowNo: boolean;
        };
        name: flags.IOptionFlag<string | undefined>;
        force: {
            name: string;
            char?: "a" | "b" | "i" | "p" | "q" | "s" | "u" | "g" | "c" | "d" | "e" | "f" | "h" | "j" | "k" | "l" | "m" | "n" | "o" | "r" | "t" | "v" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "X" | "Y" | "Z" | undefined;
            description?: string | undefined;
            hidden?: boolean | undefined;
            required?: boolean | undefined;
            dependsOn?: string[] | undefined;
            env?: string | undefined;
            parse(input: boolean, context: any): boolean;
        } & {
            type: "boolean";
            allowNo: boolean;
        };
    };
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
