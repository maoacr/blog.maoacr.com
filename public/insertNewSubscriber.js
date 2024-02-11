import { supabase } from "./supabase";

document
  .getElementById("sendNewSubscriptionForm")
  .addEventListener("click", insertNewSubscriber);

async function insertNewSubscriber(e) {
  e.preventDefault();
  console.log("Me hicieron click");
  let subscriberMail = document.getElementById("inputEmail");
  const { data, error } = await supabase
    .from("users")
    .insert([{ email: subscriberMail.value }])
    .select();
  subscriberMail.value = "";
  console.log(data, error);
}
