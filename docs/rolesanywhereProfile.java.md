# `rolesanywhereProfile` Submodule <a name="`rolesanywhereProfile` Submodule" id="@cdktn/provider-awscc.rolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereProfile <a name="RolesanywhereProfile" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfile;

RolesanywhereProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArns(java.util.List<java.lang.String>)
//  .acceptRoleSessionName(java.lang.Boolean|IResolvable)
//  .attributeMappings(IResolvable|java.util.List<RolesanywhereProfileAttributeMappings>)
//  .durationSeconds(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .managedPolicyArns(java.util.List<java.lang.String>)
//  .requireInstanceProperties(java.lang.Boolean|IResolvable)
//  .sessionPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<RolesanywhereProfileTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.acceptRoleSessionName">acceptRoleSessionName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.attributeMappings">attributeMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns">managedPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties">requireInstanceProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `acceptRoleSessionName`<sup>Optional</sup> <a name="acceptRoleSessionName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.acceptRoleSessionName"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}.

---

##### `attributeMappings`<sup>Optional</sup> <a name="attributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.attributeMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `managedPolicyArns`<sup>Optional</sup> <a name="managedPolicyArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `requireInstanceProperties`<sup>Optional</sup> <a name="requireInstanceProperties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings">putAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAcceptRoleSessionName">resetAcceptRoleSessionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAttributeMappings">resetAttributeMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns">resetManagedPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties">resetRequireInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeMappings` <a name="putAttributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings"></a>

```java
public void putAttributeMappings(IResolvable|java.util.List<RolesanywhereProfileAttributeMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RolesanywhereProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>>

---

##### `resetAcceptRoleSessionName` <a name="resetAcceptRoleSessionName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAcceptRoleSessionName"></a>

```java
public void resetAcceptRoleSessionName()
```

##### `resetAttributeMappings` <a name="resetAttributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAttributeMappings"></a>

```java
public void resetAttributeMappings()
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetManagedPolicyArns` <a name="resetManagedPolicyArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns"></a>

```java
public void resetManagedPolicyArns()
```

##### `resetRequireInstanceProperties` <a name="resetRequireInstanceProperties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties"></a>

```java
public void resetRequireInstanceProperties()
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy"></a>

```java
public void resetSessionPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RolesanywhereProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfile;

RolesanywhereProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfile;

RolesanywhereProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfile;

RolesanywhereProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfile;

RolesanywhereProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RolesanywhereProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RolesanywhereProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RolesanywhereProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RolesanywhereProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappings">attributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList">RolesanywhereProfileAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList">RolesanywhereProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionNameInput">acceptRoleSessionNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappingsInput">attributeMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput">managedPolicyArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput">requireInstancePropertiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput">roleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionName">acceptRoleSessionName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns">managedPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties">requireInstanceProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeMappings`<sup>Required</sup> <a name="attributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappings"></a>

```java
public RolesanywhereProfileAttributeMappingsList getAttributeMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList">RolesanywhereProfileAttributeMappingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tags"></a>

```java
public RolesanywhereProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList">RolesanywhereProfileTagsList</a>

---

##### `acceptRoleSessionNameInput`<sup>Optional</sup> <a name="acceptRoleSessionNameInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionNameInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptRoleSessionNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `attributeMappingsInput`<sup>Optional</sup> <a name="attributeMappingsInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappingsInput"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappings> getAttributeMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>>

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `managedPolicyArnsInput`<sup>Optional</sup> <a name="managedPolicyArnsInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput"></a>

```java
public java.util.List<java.lang.String> getManagedPolicyArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requireInstancePropertiesInput`<sup>Optional</sup> <a name="requireInstancePropertiesInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireInstancePropertiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleArnsInput`<sup>Optional</sup> <a name="roleArnsInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput"></a>

```java
public java.util.List<java.lang.String> getRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput"></a>

```java
public java.lang.String getSessionPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>>

---

##### `acceptRoleSessionName`<sup>Required</sup> <a name="acceptRoleSessionName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionName"></a>

```java
public java.lang.Boolean|IResolvable getAcceptRoleSessionName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `managedPolicyArns`<sup>Required</sup> <a name="managedPolicyArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns"></a>

```java
public java.util.List<java.lang.String> getManagedPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requireInstanceProperties`<sup>Required</sup> <a name="requireInstanceProperties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties"></a>

```java
public java.lang.Boolean|IResolvable getRequireInstanceProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArns"></a>

```java
public java.util.List<java.lang.String> getRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereProfileAttributeMappings <a name="RolesanywhereProfileAttributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappings;

RolesanywhereProfileAttributeMappings.builder()
//  .certificateField(java.lang.String)
//  .mappingRules(IResolvable|java.util.List<RolesanywhereProfileAttributeMappingsMappingRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.certificateField">certificateField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#certificate_field RolesanywhereProfile#certificate_field}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.mappingRules">mappingRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#mapping_rules RolesanywhereProfile#mapping_rules}. |

---

##### `certificateField`<sup>Optional</sup> <a name="certificateField" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.certificateField"></a>

```java
public java.lang.String getCertificateField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#certificate_field RolesanywhereProfile#certificate_field}.

---

##### `mappingRules`<sup>Optional</sup> <a name="mappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.mappingRules"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappingsMappingRules> getMappingRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#mapping_rules RolesanywhereProfile#mapping_rules}.

---

### RolesanywhereProfileAttributeMappingsMappingRules <a name="RolesanywhereProfileAttributeMappingsMappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappingsMappingRules;

RolesanywhereProfileAttributeMappingsMappingRules.builder()
//  .specifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.property.specifier">specifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#specifier RolesanywhereProfile#specifier}. |

---

##### `specifier`<sup>Optional</sup> <a name="specifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.property.specifier"></a>

```java
public java.lang.String getSpecifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#specifier RolesanywhereProfile#specifier}.

---

### RolesanywhereProfileConfig <a name="RolesanywhereProfileConfig" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileConfig;

RolesanywhereProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArns(java.util.List<java.lang.String>)
//  .acceptRoleSessionName(java.lang.Boolean|IResolvable)
//  .attributeMappings(IResolvable|java.util.List<RolesanywhereProfileAttributeMappings>)
//  .durationSeconds(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .managedPolicyArns(java.util.List<java.lang.String>)
//  .requireInstanceProperties(java.lang.Boolean|IResolvable)
//  .sessionPolicy(java.lang.String)
//  .tags(IResolvable|java.util.List<RolesanywhereProfileTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.acceptRoleSessionName">acceptRoleSessionName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.attributeMappings">attributeMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns">managedPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties">requireInstanceProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns"></a>

```java
public java.util.List<java.lang.String> getRoleArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `acceptRoleSessionName`<sup>Optional</sup> <a name="acceptRoleSessionName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.acceptRoleSessionName"></a>

```java
public java.lang.Boolean|IResolvable getAcceptRoleSessionName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}.

---

##### `attributeMappings`<sup>Optional</sup> <a name="attributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.attributeMappings"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappings> getAttributeMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `managedPolicyArns`<sup>Optional</sup> <a name="managedPolicyArns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns"></a>

```java
public java.util.List<java.lang.String> getManagedPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `requireInstanceProperties`<sup>Optional</sup> <a name="requireInstanceProperties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties"></a>

```java
public java.lang.Boolean|IResolvable getRequireInstanceProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

### RolesanywhereProfileTags <a name="RolesanywhereProfileTags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileTags;

RolesanywhereProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#key RolesanywhereProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#value RolesanywhereProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#key RolesanywhereProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_profile#value RolesanywhereProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereProfileAttributeMappingsList <a name="RolesanywhereProfileAttributeMappingsList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappingsList;

new RolesanywhereProfileAttributeMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get"></a>

```java
public RolesanywhereProfileAttributeMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>>

---


### RolesanywhereProfileAttributeMappingsMappingRulesList <a name="RolesanywhereProfileAttributeMappingsMappingRulesList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappingsMappingRulesList;

new RolesanywhereProfileAttributeMappingsMappingRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get"></a>

```java
public RolesanywhereProfileAttributeMappingsMappingRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappingsMappingRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>>

---


### RolesanywhereProfileAttributeMappingsMappingRulesOutputReference <a name="RolesanywhereProfileAttributeMappingsMappingRulesOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference;

new RolesanywhereProfileAttributeMappingsMappingRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resetSpecifier">resetSpecifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpecifier` <a name="resetSpecifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resetSpecifier"></a>

```java
public void resetSpecifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifierInput">specifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier">specifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specifierInput`<sup>Optional</sup> <a name="specifierInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifierInput"></a>

```java
public java.lang.String getSpecifierInput();
```

- *Type:* java.lang.String

---

##### `specifier`<sup>Required</sup> <a name="specifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier"></a>

```java
public java.lang.String getSpecifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|RolesanywhereProfileAttributeMappingsMappingRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>

---


### RolesanywhereProfileAttributeMappingsOutputReference <a name="RolesanywhereProfileAttributeMappingsOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileAttributeMappingsOutputReference;

new RolesanywhereProfileAttributeMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules">putMappingRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetCertificateField">resetCertificateField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetMappingRules">resetMappingRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMappingRules` <a name="putMappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules"></a>

```java
public void putMappingRules(IResolvable|java.util.List<RolesanywhereProfileAttributeMappingsMappingRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>>

---

##### `resetCertificateField` <a name="resetCertificateField" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetCertificateField"></a>

```java
public void resetCertificateField()
```

##### `resetMappingRules` <a name="resetMappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetMappingRules"></a>

```java
public void resetMappingRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules">mappingRules</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList">RolesanywhereProfileAttributeMappingsMappingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateFieldInput">certificateFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRulesInput">mappingRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateField">certificateField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingRules`<sup>Required</sup> <a name="mappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules"></a>

```java
public RolesanywhereProfileAttributeMappingsMappingRulesList getMappingRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList">RolesanywhereProfileAttributeMappingsMappingRulesList</a>

---

##### `certificateFieldInput`<sup>Optional</sup> <a name="certificateFieldInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateFieldInput"></a>

```java
public java.lang.String getCertificateFieldInput();
```

- *Type:* java.lang.String

---

##### `mappingRulesInput`<sup>Optional</sup> <a name="mappingRulesInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRulesInput"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileAttributeMappingsMappingRules> getMappingRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>>

---

##### `certificateField`<sup>Required</sup> <a name="certificateField" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateField"></a>

```java
public java.lang.String getCertificateField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|RolesanywhereProfileAttributeMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>

---


### RolesanywhereProfileTagsList <a name="RolesanywhereProfileTagsList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileTagsList;

new RolesanywhereProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get"></a>

```java
public RolesanywhereProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RolesanywhereProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>>

---


### RolesanywhereProfileTagsOutputReference <a name="RolesanywhereProfileTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_profile.RolesanywhereProfileTagsOutputReference;

new RolesanywhereProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RolesanywhereProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>

---



