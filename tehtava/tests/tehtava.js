import { Selector, t } from 'testcafe';

fixture `if/else ja input`
    .page `../tehtava.html`;

test('Ostos onnistuu', async t => {
   const hinta = Selector("#hinta");
   const raha = Selector("#raha");
   const nappi = Selector("#nappi");
   const out = Selector("#out");
   const hluku = 1 + Math.floor(Math.random()*20);
   const rluku = hluku + 2;
   const hintaluku = hluku.toString();
   const rahaluku = rluku.toString();
   const ostoviesti = "Bon voyage!\nRahaa taskussa 2";

   await t
     .typeText('#hinta', hintaluku)
     .typeText('#raha', rahaluku)
     .click(nappi)
     .expect(out.innerText).eql(ostoviesti);
});

test('Ostos ei onnistu', async t => {
  const hinta = Selector("#hinta");
  const raha = Selector("#raha");
  const nappi = Selector("#nappi");
  const out = Selector("#out");
  const hluku = 1 + Math.floor(Math.random()*20);
  const rluku = hluku - 1;
  const hintaluku = hluku.toString();
  const rahaluku = rluku.toString();
  const ostoviesti = "Matkusta jalan!\nRahaa taskussa " + rluku;

  await t
    .typeText('#hinta', hintaluku)
    .typeText('#raha', rahaluku)
    .click(nappi)
    .expect(out.innerText).eql(ostoviesti);
});
