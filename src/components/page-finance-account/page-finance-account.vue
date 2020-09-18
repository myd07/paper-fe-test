<template>
  <div class="page-finance-account">
    <p class="page-finance-account_title">All Finance Account</p>
    <div class="page-finance-account_action">
      <button type="button">Create New Account</button>
    </div>
    <div class="page-finance-account_table">
      <table>
        <thead>
          <tr>
            <th align="left">Created At</th>
            <th align="left">Description</th>
            <th align="left">Finance Account Type</th>
            <th align="left">Finance Account Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(account, accIndex) in accounts" :key="accIndex">
            <td>{{account.createdAt}}</td>
            <td>{{account.description}}</td>
            <td>{{account.type}}</td>
            <td>{{account.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./page-finance-account.ts" lang="ts"></script>

<style src="./page-finance-account.scss" lang="scss" scoped></style>
