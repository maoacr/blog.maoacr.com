import { supabase } from "./supabase";

document
  .getElementById("sendNewSubscriptionForm")
  .addEventListener("click", insertNewSubscriber);

async function insertNewSubscriber(e) {
  e.preventDefault();
  let subscriberMail = document.getElementById("inputEmail");

  if (!subscriberMail) {
    const { data, error } = await supabase
      .from("users")
      .insert([{ email: subscriberMail.value }])
      .select();
    subscriberMail.value = "";
  }
}
