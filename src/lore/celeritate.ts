export const name = 'celeritate';
export const cost = 0;

export const code = (canon: ICanon) => () => {
    const gettext = canon.gettext;
    canon.magik.msg(gettext('Celeritate! You now have super speed!'));
    canon.sender.setWalkSpeed(1);
}