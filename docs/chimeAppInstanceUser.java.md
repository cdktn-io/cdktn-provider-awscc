# `chimeAppInstanceUser` Submodule <a name="`chimeAppInstanceUser` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceUser <a name="ChimeAppInstanceUser" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user awscc_chime_app_instance_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUser;

ChimeAppInstanceUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .appInstanceUserId(java.lang.String)
//  .expirationSettings(ChimeAppInstanceUserExpirationSettings)
//  .metadata(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeAppInstanceUserTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.appInstanceUserId">appInstanceUserId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.appInstanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.appInstanceUserId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}.

---

##### `expirationSettings`<sup>Optional</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.expirationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings">putExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetExpirationSettings">resetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpirationSettings` <a name="putExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings"></a>

```java
public void putExpirationSettings(ChimeAppInstanceUserExpirationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChimeAppInstanceUserTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>>

---

##### `resetExpirationSettings` <a name="resetExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetExpirationSettings"></a>

```java
public void resetExpirationSettings()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstanceUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUser;

ChimeAppInstanceUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUser;

ChimeAppInstanceUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUser;

ChimeAppInstanceUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUser;

ChimeAppInstanceUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeAppInstanceUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeAppInstanceUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeAppInstanceUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeAppInstanceUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserArn">appInstanceUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference">ChimeAppInstanceUserExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList">ChimeAppInstanceUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserIdInput">appInstanceUserIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettingsInput">expirationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserId">appInstanceUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceUserArn`<sup>Required</sup> <a name="appInstanceUserArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserArn"></a>

```java
public java.lang.String getAppInstanceUserArn();
```

- *Type:* java.lang.String

---

##### `expirationSettings`<sup>Required</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettings"></a>

```java
public ChimeAppInstanceUserExpirationSettingsOutputReference getExpirationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference">ChimeAppInstanceUserExpirationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tags"></a>

```java
public ChimeAppInstanceUserTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList">ChimeAppInstanceUserTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArnInput"></a>

```java
public java.lang.String getAppInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `appInstanceUserIdInput`<sup>Optional</sup> <a name="appInstanceUserIdInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserIdInput"></a>

```java
public java.lang.String getAppInstanceUserIdInput();
```

- *Type:* java.lang.String

---

##### `expirationSettingsInput`<sup>Optional</sup> <a name="expirationSettingsInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettingsInput"></a>

```java
public IResolvable|ChimeAppInstanceUserExpirationSettings getExpirationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceUserTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserId"></a>

```java
public java.lang.String getAppInstanceUserId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceUserConfig <a name="ChimeAppInstanceUserConfig" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserConfig;

ChimeAppInstanceUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .appInstanceUserId(java.lang.String)
//  .expirationSettings(ChimeAppInstanceUserExpirationSettings)
//  .metadata(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeAppInstanceUserTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceUserId">appInstanceUserId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceUserId"></a>

```java
public java.lang.String getAppInstanceUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}.

---

##### `expirationSettings`<sup>Optional</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.expirationSettings"></a>

```java
public ChimeAppInstanceUserExpirationSettings getExpirationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceUserTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}.

---

### ChimeAppInstanceUserExpirationSettings <a name="ChimeAppInstanceUserExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserExpirationSettings;

ChimeAppInstanceUserExpirationSettings.builder()
//  .expirationCriterion(java.lang.String)
//  .expirationDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationCriterion">expirationCriterion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_criterion ChimeAppInstanceUser#expiration_criterion}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_days ChimeAppInstanceUser#expiration_days}. |

---

##### `expirationCriterion`<sup>Optional</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationCriterion"></a>

```java
public java.lang.String getExpirationCriterion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_criterion ChimeAppInstanceUser#expiration_criterion}.

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_days ChimeAppInstanceUser#expiration_days}.

---

### ChimeAppInstanceUserTags <a name="ChimeAppInstanceUserTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserTags;

ChimeAppInstanceUserTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#key ChimeAppInstanceUser#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#value ChimeAppInstanceUser#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#key ChimeAppInstanceUser#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#value ChimeAppInstanceUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceUserExpirationSettingsOutputReference <a name="ChimeAppInstanceUserExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserExpirationSettingsOutputReference;

new ChimeAppInstanceUserExpirationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationCriterion">resetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationCriterion` <a name="resetExpirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```java
public void resetExpirationCriterion()
```

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationDays"></a>

```java
public void resetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterionInput">expirationCriterionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion">expirationCriterion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationCriterionInput`<sup>Optional</sup> <a name="expirationCriterionInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```java
public java.lang.String getExpirationCriterionInput();
```

- *Type:* java.lang.String

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```java
public java.lang.Number getExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `expirationCriterion`<sup>Required</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion"></a>

```java
public java.lang.String getExpirationCriterion();
```

- *Type:* java.lang.String

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceUserExpirationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

---


### ChimeAppInstanceUserTagsList <a name="ChimeAppInstanceUserTagsList" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserTagsList;

new ChimeAppInstanceUserTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get"></a>

```java
public ChimeAppInstanceUserTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceUserTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>>

---


### ChimeAppInstanceUserTagsOutputReference <a name="ChimeAppInstanceUserTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_user.ChimeAppInstanceUserTagsOutputReference;

new ChimeAppInstanceUserTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceUserTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags">ChimeAppInstanceUserTags</a>

---



