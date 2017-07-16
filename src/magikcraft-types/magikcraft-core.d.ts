import { BukkitPlayer } from './Bukkit';

declare interface MagikCraftAPI {
    getMappedItem: () => string;
    setMappedItem: (key: string, value: string) => void;
    getSpellsList: (sender: BukkitPlayer, senderName: string) => string[];
}
