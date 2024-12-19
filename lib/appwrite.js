import {
  Account,
  Avatars,
  Client,
  Databases,
  Query,
  Storage,
  ID,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aoraxios",
  //com.jsm.aoraapp
  //com.xios.aorapp
  projectId: "6762e16d0018882fcdf1",
  storageId: "6762eadf001ecde17863",
  databaseId: "6762e3ea00376aec6e5d",
  userCollectionId: "6762e40f0025ece263c9",
  videoCollectionId: "6762e42b0018fbbd2abd",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = () => {
  // Register user
  account.create(ID.unique(), 'me123@example.com', 'password', 'Nedi Dddde')
    .then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });

}
