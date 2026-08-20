# `ssoPermissionSet` Submodule <a name="`ssoPermissionSet` Submodule" id="@cdktn/provider-awscc.ssoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoPermissionSet <a name="SsoPermissionSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSet;

SsoPermissionSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .customerManagedPolicyReferences(IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences>)
//  .description(java.lang.String)
//  .inlinePolicy(java.lang.String)
//  .managedPolicies(java.util.List<java.lang.String>)
//  .permissionsBoundary(SsoPermissionSetPermissionsBoundary)
//  .relayStateType(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .tags(IResolvable|java.util.List<SsoPermissionSetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.inlinePolicy">inlinePolicy</a></code> | <code>java.lang.String</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.managedPolicies">managedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.relayStateType">relayStateType</a></code> | <code>java.lang.String</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.customerManagedPolicyReferences"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.inlinePolicy"></a>

- *Type:* java.lang.String

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.managedPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.permissionsBoundary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.relayStateType"></a>

- *Type:* java.lang.String

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences">putCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary">putPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences">resetCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy">resetInlinePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies">resetManagedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary">resetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType">resetRelayStateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedPolicyReferences` <a name="putCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences"></a>

```java
public void putCustomerManagedPolicyReferences(IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>>

---

##### `putPermissionsBoundary` <a name="putPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary"></a>

```java
public void putPermissionsBoundary(SsoPermissionSetPermissionsBoundary value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsoPermissionSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>>

---

##### `resetCustomerManagedPolicyReferences` <a name="resetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences"></a>

```java
public void resetCustomerManagedPolicyReferences()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInlinePolicy` <a name="resetInlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy"></a>

```java
public void resetInlinePolicy()
```

##### `resetManagedPolicies` <a name="resetManagedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies"></a>

```java
public void resetManagedPolicies()
```

##### `resetPermissionsBoundary` <a name="resetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary"></a>

```java
public void resetPermissionsBoundary()
```

##### `resetRelayStateType` <a name="resetRelayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType"></a>

```java
public void resetRelayStateType()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSet;

SsoPermissionSet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSet;

SsoPermissionSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSet;

SsoPermissionSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSet;

SsoPermissionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsoPermissionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsoPermissionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput">customerManagedPolicyReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput">inlinePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput">managedPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput">permissionsBoundaryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput">relayStateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy">inlinePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies">managedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType">relayStateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerManagedPolicyReferences`<sup>Required</sup> <a name="customerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences"></a>

```java
public SsoPermissionSetCustomerManagedPolicyReferencesList getCustomerManagedPolicyReferences();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissionsBoundary`<sup>Required</sup> <a name="permissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary"></a>

```java
public SsoPermissionSetPermissionsBoundaryOutputReference getPermissionsBoundary();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn"></a>

```java
public java.lang.String getPermissionSetArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags"></a>

```java
public SsoPermissionSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a>

---

##### `customerManagedPolicyReferencesInput`<sup>Optional</sup> <a name="customerManagedPolicyReferencesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences> getCustomerManagedPolicyReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inlinePolicyInput`<sup>Optional</sup> <a name="inlinePolicyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput"></a>

```java
public java.lang.String getInlinePolicyInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `managedPoliciesInput`<sup>Optional</sup> <a name="managedPoliciesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getManagedPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionsBoundaryInput`<sup>Optional</sup> <a name="permissionsBoundaryInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput"></a>

```java
public IResolvable|SsoPermissionSetPermissionsBoundary getPermissionsBoundaryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `relayStateTypeInput`<sup>Optional</sup> <a name="relayStateTypeInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput"></a>

```java
public java.lang.String getRelayStateTypeInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inlinePolicy`<sup>Required</sup> <a name="inlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy"></a>

```java
public java.lang.String getInlinePolicy();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `managedPolicies`<sup>Required</sup> <a name="managedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies"></a>

```java
public java.util.List<java.lang.String> getManagedPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `relayStateType`<sup>Required</sup> <a name="relayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType"></a>

```java
public java.lang.String getRelayStateType();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoPermissionSetConfig <a name="SsoPermissionSetConfig" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetConfig;

SsoPermissionSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .customerManagedPolicyReferences(IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences>)
//  .description(java.lang.String)
//  .inlinePolicy(java.lang.String)
//  .managedPolicies(java.util.List<java.lang.String>)
//  .permissionsBoundary(SsoPermissionSetPermissionsBoundary)
//  .relayStateType(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .tags(IResolvable|java.util.List<SsoPermissionSetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy">inlinePolicy</a></code> | <code>java.lang.String</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies">managedPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType">relayStateType</a></code> | <code>java.lang.String</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences> getCustomerManagedPolicyReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy"></a>

```java
public java.lang.String getInlinePolicy();
```

- *Type:* java.lang.String

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies"></a>

```java
public java.util.List<java.lang.String> getManagedPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary"></a>

```java
public SsoPermissionSetPermissionsBoundary getPermissionsBoundary();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType"></a>

```java
public java.lang.String getRelayStateType();
```

- *Type:* java.lang.String

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

### SsoPermissionSetCustomerManagedPolicyReferences <a name="SsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetCustomerManagedPolicyReferences;

SsoPermissionSetCustomerManagedPolicyReferences.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetPermissionsBoundary <a name="SsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetPermissionsBoundary;

SsoPermissionSetPermissionsBoundary.builder()
//  .customerManagedPolicyReference(SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference)
//  .managedPolicyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>java.lang.String</code> | The managed policy to attach. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference"></a>

```java
public SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}.

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn"></a>

```java
public java.lang.String getManagedPolicyArn();
```

- *Type:* java.lang.String

The managed policy to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}

---

### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference;

SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetTags <a name="SsoPermissionSetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetTags;

SsoPermissionSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoPermissionSetCustomerManagedPolicyReferencesList <a name="SsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetCustomerManagedPolicyReferencesList;

new SsoPermissionSetCustomerManagedPolicyReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```java
public SsoPermissionSetCustomerManagedPolicyReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetCustomerManagedPolicyReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>>

---


### SsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="SsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference;

new SsoPermissionSetCustomerManagedPolicyReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoPermissionSetCustomerManagedPolicyReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>

---


### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference;

new SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### SsoPermissionSetPermissionsBoundaryOutputReference <a name="SsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetPermissionsBoundaryOutputReference;

new SsoPermissionSetPermissionsBoundaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference">resetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn">resetManagedPolicyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference"></a>

```java
public void putCustomerManagedPolicyReference(SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `resetCustomerManagedPolicyReference` <a name="resetCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference"></a>

```java
public void resetCustomerManagedPolicyReference()
```

##### `resetManagedPolicyArn` <a name="resetManagedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn"></a>

```java
public void resetManagedPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput">managedPolicyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">managedPolicyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```java
public SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput"></a>

```java
public IResolvable|SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference getCustomerManagedPolicyReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `managedPolicyArnInput`<sup>Optional</sup> <a name="managedPolicyArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput"></a>

```java
public java.lang.String getManagedPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `managedPolicyArn`<sup>Required</sup> <a name="managedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```java
public java.lang.String getManagedPolicyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoPermissionSetPermissionsBoundary getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---


### SsoPermissionSetTagsList <a name="SsoPermissionSetTagsList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetTagsList;

new SsoPermissionSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get"></a>

```java
public SsoPermissionSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsoPermissionSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>>

---


### SsoPermissionSetTagsOutputReference <a name="SsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sso_permission_set.SsoPermissionSetTagsOutputReference;

new SsoPermissionSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoPermissionSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>

---



