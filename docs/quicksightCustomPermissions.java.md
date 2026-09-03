# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .awsAccountId(java.lang.String)
    .customPermissionsName(java.lang.String)
//  .capabilities(QuicksightCustomPermissionsCapabilities)
//  .tags(IResolvable|java.util.List<QuicksightCustomPermissionsTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```java
public void putCapabilities(QuicksightCustomPermissionsCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightCustomPermissionsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissions;

QuicksightCustomPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightCustomPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">capabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">customPermissionsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```java
public QuicksightCustomPermissionsCapabilitiesOutputReference getCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```java
public QuicksightCustomPermissionsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```java
public IResolvable|QuicksightCustomPermissionsCapabilities getCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `customPermissionsNameInput`<sup>Optional</sup> <a name="customPermissionsNameInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```java
public java.lang.String getCustomPermissionsNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```java
public java.lang.String getCustomPermissionsName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsCapabilities;

QuicksightCustomPermissionsCapabilities.builder()
//  .accessAppsNativeDataStore(java.lang.String)
//  .action(java.lang.String)
//  .addOrRunAnomalyDetectionForAnalyses(java.lang.String)
//  .amazonBedrockArsAction(java.lang.String)
//  .amazonBedrockFsAction(java.lang.String)
//  .amazonBedrockKrsAction(java.lang.String)
//  .amazonSThreeAction(java.lang.String)
//  .analysis(java.lang.String)
//  .approveFlowShareRequests(java.lang.String)
//  .apps(java.lang.String)
//  .asanaAction(java.lang.String)
//  .automate(java.lang.String)
//  .bambooHrAction(java.lang.String)
//  .boxAgentAction(java.lang.String)
//  .buildCalculatedFieldWithQ(java.lang.String)
//  .canvaAgentAction(java.lang.String)
//  .chatAgent(java.lang.String)
//  .comprehendAction(java.lang.String)
//  .comprehendMedicalAction(java.lang.String)
//  .confluenceAction(java.lang.String)
//  .createAndUpdateAmazonBedrockArsAction(java.lang.String)
//  .createAndUpdateAmazonBedrockFsAction(java.lang.String)
//  .createAndUpdateAmazonBedrockKrsAction(java.lang.String)
//  .createAndUpdateAmazonSThreeAction(java.lang.String)
//  .createAndUpdateApps(java.lang.String)
//  .createAndUpdateAsanaAction(java.lang.String)
//  .createAndUpdateBambooHrAction(java.lang.String)
//  .createAndUpdateBoxAgentAction(java.lang.String)
//  .createAndUpdateCanvaAgentAction(java.lang.String)
//  .createAndUpdateComprehendAction(java.lang.String)
//  .createAndUpdateComprehendMedicalAction(java.lang.String)
//  .createAndUpdateConfluenceAction(java.lang.String)
//  .createAndUpdateDashboardEmailReports(java.lang.String)
//  .createAndUpdateDatasets(java.lang.String)
//  .createAndUpdateDataSources(java.lang.String)
//  .createAndUpdateFactSetAction(java.lang.String)
//  .createAndUpdateGenericHttpAction(java.lang.String)
//  .createAndUpdateGithubAction(java.lang.String)
//  .createAndUpdateGoogleCalendarAction(java.lang.String)
//  .createAndUpdateHubspotAction(java.lang.String)
//  .createAndUpdateHuggingFaceAction(java.lang.String)
//  .createAndUpdateIntercomAction(java.lang.String)
//  .createAndUpdateJiraAction(java.lang.String)
//  .createAndUpdateKnowledgeBases(java.lang.String)
//  .createAndUpdateLinearAction(java.lang.String)
//  .createAndUpdateMcpAction(java.lang.String)
//  .createAndUpdateMondayAction(java.lang.String)
//  .createAndUpdateMsExchangeAction(java.lang.String)
//  .createAndUpdateMsTeamsAction(java.lang.String)
//  .createAndUpdateNewRelicAction(java.lang.String)
//  .createAndUpdateNotionAction(java.lang.String)
//  .createAndUpdateOneDriveAction(java.lang.String)
//  .createAndUpdateOpenApiAction(java.lang.String)
//  .createAndUpdatePagerDutyAction(java.lang.String)
//  .createAndUpdateSalesforceAction(java.lang.String)
//  .createAndUpdateSandPGlobalEnergyAction(java.lang.String)
//  .createAndUpdateSandPgmiAction(java.lang.String)
//  .createAndUpdateSapBillOfMaterialAction(java.lang.String)
//  .createAndUpdateSapBusinessPartnerAction(java.lang.String)
//  .createAndUpdateSapMaterialStockAction(java.lang.String)
//  .createAndUpdateSapPhysicalInventoryAction(java.lang.String)
//  .createAndUpdateSapProductMasterDataAction(java.lang.String)
//  .createAndUpdateServiceNowAction(java.lang.String)
//  .createAndUpdateSharePointAction(java.lang.String)
//  .createAndUpdateSlackAction(java.lang.String)
//  .createAndUpdateSmartsheetAction(java.lang.String)
//  .createAndUpdateTextractAction(java.lang.String)
//  .createAndUpdateThemes(java.lang.String)
//  .createAndUpdateThresholdAlerts(java.lang.String)
//  .createAndUpdateZendeskAction(java.lang.String)
//  .createChatAgents(java.lang.String)
//  .createDashboardExecutiveSummaryWithQ(java.lang.String)
//  .createSharedFolders(java.lang.String)
//  .createSpaces(java.lang.String)
//  .createSpiceDataset(java.lang.String)
//  .dashboard(java.lang.String)
//  .editVisualWithQ(java.lang.String)
//  .exportToCsv(java.lang.String)
//  .exportToCsvInScheduledReports(java.lang.String)
//  .exportToExcel(java.lang.String)
//  .exportToExcelInScheduledReports(java.lang.String)
//  .exportToPdf(java.lang.String)
//  .exportToPdfInScheduledReports(java.lang.String)
//  .extension(java.lang.String)
//  .factSetAction(java.lang.String)
//  .flow(java.lang.String)
//  .genericHttpAction(java.lang.String)
//  .githubAction(java.lang.String)
//  .googleCalendarAction(java.lang.String)
//  .hubspotAction(java.lang.String)
//  .huggingFaceAction(java.lang.String)
//  .includeContentInScheduledReportsEmail(java.lang.String)
//  .intercomAction(java.lang.String)
//  .invokeAppsAiInference(java.lang.String)
//  .jiraAction(java.lang.String)
//  .knowledgeBase(java.lang.String)
//  .linearAction(java.lang.String)
//  .manageSharedFolders(java.lang.String)
//  .mcpAction(java.lang.String)
//  .mondayAction(java.lang.String)
//  .msExchangeAction(java.lang.String)
//  .msTeamsAction(java.lang.String)
//  .newRelicAction(java.lang.String)
//  .notionAction(java.lang.String)
//  .oneDriveAction(java.lang.String)
//  .openApiAction(java.lang.String)
//  .pagerDutyAction(java.lang.String)
//  .performFlowUiTask(java.lang.String)
//  .printReports(java.lang.String)
//  .publishWithoutApproval(java.lang.String)
//  .renameSharedFolders(java.lang.String)
//  .research(java.lang.String)
//  .salesforceAction(java.lang.String)
//  .sandPGlobalEnergyAction(java.lang.String)
//  .sandPgmiAction(java.lang.String)
//  .sapBillOfMaterialAction(java.lang.String)
//  .sapBusinessPartnerAction(java.lang.String)
//  .sapMaterialStockAction(java.lang.String)
//  .sapPhysicalInventoryAction(java.lang.String)
//  .sapProductMasterDataAction(java.lang.String)
//  .serviceNowAction(java.lang.String)
//  .shareAmazonBedrockArsAction(java.lang.String)
//  .shareAmazonBedrockFsAction(java.lang.String)
//  .shareAmazonBedrockKrsAction(java.lang.String)
//  .shareAmazonSThreeAction(java.lang.String)
//  .shareAnalyses(java.lang.String)
//  .shareApps(java.lang.String)
//  .shareAsanaAction(java.lang.String)
//  .shareBambooHrAction(java.lang.String)
//  .shareBoxAgentAction(java.lang.String)
//  .shareCanvaAgentAction(java.lang.String)
//  .shareChatAgents(java.lang.String)
//  .shareComprehendAction(java.lang.String)
//  .shareComprehendMedicalAction(java.lang.String)
//  .shareConfluenceAction(java.lang.String)
//  .shareDashboards(java.lang.String)
//  .shareDatasets(java.lang.String)
//  .shareDataSources(java.lang.String)
//  .shareFactSetAction(java.lang.String)
//  .shareGenericHttpAction(java.lang.String)
//  .shareGithubAction(java.lang.String)
//  .shareGoogleCalendarAction(java.lang.String)
//  .shareHubspotAction(java.lang.String)
//  .shareHuggingFaceAction(java.lang.String)
//  .shareIntercomAction(java.lang.String)
//  .shareJiraAction(java.lang.String)
//  .shareKnowledgeBases(java.lang.String)
//  .shareLinearAction(java.lang.String)
//  .shareMcpAction(java.lang.String)
//  .shareMondayAction(java.lang.String)
//  .shareMsExchangeAction(java.lang.String)
//  .shareMsTeamsAction(java.lang.String)
//  .shareNewRelicAction(java.lang.String)
//  .shareNotionAction(java.lang.String)
//  .shareOneDriveAction(java.lang.String)
//  .shareOpenApiAction(java.lang.String)
//  .sharePagerDutyAction(java.lang.String)
//  .sharePointAction(java.lang.String)
//  .shareSalesforceAction(java.lang.String)
//  .shareSandPGlobalEnergyAction(java.lang.String)
//  .shareSandPgmiAction(java.lang.String)
//  .shareSapBillOfMaterialAction(java.lang.String)
//  .shareSapBusinessPartnerAction(java.lang.String)
//  .shareSapMaterialStockAction(java.lang.String)
//  .shareSapPhysicalInventoryAction(java.lang.String)
//  .shareSapProductMasterDataAction(java.lang.String)
//  .shareServiceNowAction(java.lang.String)
//  .shareSharePointAction(java.lang.String)
//  .shareSlackAction(java.lang.String)
//  .shareSmartsheetAction(java.lang.String)
//  .shareSpaces(java.lang.String)
//  .shareTextractAction(java.lang.String)
//  .shareZendeskAction(java.lang.String)
//  .slackAction(java.lang.String)
//  .smartsheetAction(java.lang.String)
//  .space(java.lang.String)
//  .subscribeDashboardEmailReports(java.lang.String)
//  .textractAction(java.lang.String)
//  .topic(java.lang.String)
//  .useAgentWebSearch(java.lang.String)
//  .useAmazonBedrockArsAction(java.lang.String)
//  .useAmazonBedrockFsAction(java.lang.String)
//  .useAmazonBedrockKrsAction(java.lang.String)
//  .useAmazonSThreeAction(java.lang.String)
//  .useAsanaAction(java.lang.String)
//  .useBambooHrAction(java.lang.String)
//  .useBedrockModels(java.lang.String)
//  .useBoxAgentAction(java.lang.String)
//  .useCanvaAgentAction(java.lang.String)
//  .useComprehendAction(java.lang.String)
//  .useComprehendMedicalAction(java.lang.String)
//  .useConfluenceAction(java.lang.String)
//  .useFactSetAction(java.lang.String)
//  .useGenericHttpAction(java.lang.String)
//  .useGithubAction(java.lang.String)
//  .useGoogleCalendarAction(java.lang.String)
//  .useHubspotAction(java.lang.String)
//  .useHuggingFaceAction(java.lang.String)
//  .useIntercomAction(java.lang.String)
//  .useJiraAction(java.lang.String)
//  .useLinearAction(java.lang.String)
//  .useMcpAction(java.lang.String)
//  .useMondayAction(java.lang.String)
//  .useMsExchangeAction(java.lang.String)
//  .useMsTeamsAction(java.lang.String)
//  .useNewRelicAction(java.lang.String)
//  .useNotionAction(java.lang.String)
//  .useOneDriveAction(java.lang.String)
//  .useOpenApiAction(java.lang.String)
//  .usePagerDutyAction(java.lang.String)
//  .useSalesforceAction(java.lang.String)
//  .useSandPGlobalEnergyAction(java.lang.String)
//  .useSandPgmiAction(java.lang.String)
//  .useSapBillOfMaterialAction(java.lang.String)
//  .useSapBusinessPartnerAction(java.lang.String)
//  .useSapMaterialStockAction(java.lang.String)
//  .useSapPhysicalInventoryAction(java.lang.String)
//  .useSapProductMasterDataAction(java.lang.String)
//  .useServiceNowAction(java.lang.String)
//  .useSharePointAction(java.lang.String)
//  .useSlackAction(java.lang.String)
//  .useSmartsheetAction(java.lang.String)
//  .useTextractAction(java.lang.String)
//  .useZendeskAction(java.lang.String)
//  .viewAccountSpiceCapacity(java.lang.String)
//  .zendeskAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore">accessAppsNativeDataStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction">amazonBedrockArsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction">amazonBedrockFsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction">amazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction">amazonSThreeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis">analysis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests">approveFlowShareRequests</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps">apps</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction">asanaAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate">automate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction">bambooHrAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction">boxAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ">buildCalculatedFieldWithQ</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction">canvaAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent">chatAgent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction">comprehendAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction">comprehendMedicalAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction">confluenceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction">createAndUpdateAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction">createAndUpdateAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction">createAndUpdateAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction">createAndUpdateAmazonSThreeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps">createAndUpdateApps</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction">createAndUpdateAsanaAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction">createAndUpdateBambooHrAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction">createAndUpdateBoxAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction">createAndUpdateCanvaAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction">createAndUpdateComprehendAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction">createAndUpdateComprehendMedicalAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction">createAndUpdateConfluenceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction">createAndUpdateFactSetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction">createAndUpdateGenericHttpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction">createAndUpdateGithubAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction">createAndUpdateGoogleCalendarAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction">createAndUpdateHubspotAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction">createAndUpdateHuggingFaceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction">createAndUpdateIntercomAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction">createAndUpdateJiraAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases">createAndUpdateKnowledgeBases</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction">createAndUpdateLinearAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction">createAndUpdateMcpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction">createAndUpdateMondayAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction">createAndUpdateMsExchangeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction">createAndUpdateMsTeamsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction">createAndUpdateNewRelicAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction">createAndUpdateNotionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction">createAndUpdateOneDriveAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction">createAndUpdateOpenApiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction">createAndUpdatePagerDutyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction">createAndUpdateSalesforceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction">createAndUpdateSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction">createAndUpdateSandPgmiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction">createAndUpdateSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction">createAndUpdateSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction">createAndUpdateSapMaterialStockAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction">createAndUpdateSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction">createAndUpdateSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction">createAndUpdateServiceNowAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction">createAndUpdateSharePointAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction">createAndUpdateSlackAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction">createAndUpdateSmartsheetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction">createAndUpdateTextractAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction">createAndUpdateZendeskAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents">createChatAgents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ">createDashboardExecutiveSummaryWithQ</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">createSharedFolders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces">createSpaces</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">createSpiceDataset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard">dashboard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ">editVisualWithQ</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">exportToCsv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">exportToExcel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">exportToPdf</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension">extension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction">factSetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow">flow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction">genericHttpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction">githubAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction">googleCalendarAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction">hubspotAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction">huggingFaceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction">intercomAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference">invokeAppsAiInference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction">jiraAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase">knowledgeBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction">linearAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders">manageSharedFolders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction">mcpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction">mondayAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction">msExchangeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction">msTeamsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction">newRelicAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction">notionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction">oneDriveAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction">openApiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction">pagerDutyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask">performFlowUiTask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">printReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval">publishWithoutApproval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">renameSharedFolders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research">research</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction">salesforceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction">sandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction">sandPgmiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction">sapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction">sapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction">sapMaterialStockAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction">sapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction">sapProductMasterDataAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction">serviceNowAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction">shareAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction">shareAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction">shareAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction">shareAmazonSThreeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">shareAnalyses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps">shareApps</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction">shareAsanaAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction">shareBambooHrAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction">shareBoxAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction">shareCanvaAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents">shareChatAgents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction">shareComprehendAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction">shareComprehendMedicalAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction">shareConfluenceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">shareDashboards</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">shareDatasets</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">shareDataSources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction">shareFactSetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction">shareGenericHttpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction">shareGithubAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction">shareGoogleCalendarAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction">shareHubspotAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction">shareHuggingFaceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction">shareIntercomAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction">shareJiraAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases">shareKnowledgeBases</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction">shareLinearAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction">shareMcpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction">shareMondayAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction">shareMsExchangeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction">shareMsTeamsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction">shareNewRelicAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction">shareNotionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction">shareOneDriveAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction">shareOpenApiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction">sharePagerDutyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction">sharePointAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction">shareSalesforceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction">shareSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction">shareSandPgmiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction">shareSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction">shareSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction">shareSapMaterialStockAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction">shareSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction">shareSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction">shareServiceNowAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction">shareSharePointAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction">shareSlackAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction">shareSmartsheetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces">shareSpaces</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction">shareTextractAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction">shareZendeskAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction">slackAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction">smartsheetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space">space</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction">textractAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch">useAgentWebSearch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction">useAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction">useAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction">useAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction">useAmazonSThreeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction">useAsanaAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction">useBambooHrAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels">useBedrockModels</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction">useBoxAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction">useCanvaAgentAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction">useComprehendAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction">useComprehendMedicalAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction">useConfluenceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction">useFactSetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction">useGenericHttpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction">useGithubAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction">useGoogleCalendarAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction">useHubspotAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction">useHuggingFaceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction">useIntercomAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction">useJiraAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction">useLinearAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction">useMcpAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction">useMondayAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction">useMsExchangeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction">useMsTeamsAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction">useNewRelicAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction">useNotionAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction">useOneDriveAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction">useOpenApiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction">usePagerDutyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction">useSalesforceAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction">useSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction">useSandPgmiAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction">useSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction">useSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction">useSapMaterialStockAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction">useSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction">useSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction">useServiceNowAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction">useSharePointAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction">useSlackAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction">useSmartsheetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction">useTextractAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction">useZendeskAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction">zendeskAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}. |

---

##### `accessAppsNativeDataStore`<sup>Optional</sup> <a name="accessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore"></a>

```java
public java.lang.String getAccessAppsNativeDataStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalyses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `amazonBedrockArsAction`<sup>Optional</sup> <a name="amazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction"></a>

```java
public java.lang.String getAmazonBedrockArsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

##### `amazonBedrockFsAction`<sup>Optional</sup> <a name="amazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction"></a>

```java
public java.lang.String getAmazonBedrockFsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

##### `amazonBedrockKrsAction`<sup>Optional</sup> <a name="amazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction"></a>

```java
public java.lang.String getAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

##### `amazonSThreeAction`<sup>Optional</sup> <a name="amazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction"></a>

```java
public java.lang.String getAmazonSThreeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis"></a>

```java
public java.lang.String getAnalysis();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

##### `approveFlowShareRequests`<sup>Optional</sup> <a name="approveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests"></a>

```java
public java.lang.String getApproveFlowShareRequests();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps"></a>

```java
public java.lang.String getApps();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

##### `asanaAction`<sup>Optional</sup> <a name="asanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction"></a>

```java
public java.lang.String getAsanaAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

##### `automate`<sup>Optional</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate"></a>

```java
public java.lang.String getAutomate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

##### `bambooHrAction`<sup>Optional</sup> <a name="bambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction"></a>

```java
public java.lang.String getBambooHrAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

##### `boxAgentAction`<sup>Optional</sup> <a name="boxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction"></a>

```java
public java.lang.String getBoxAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

##### `buildCalculatedFieldWithQ`<sup>Optional</sup> <a name="buildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ"></a>

```java
public java.lang.String getBuildCalculatedFieldWithQ();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

##### `canvaAgentAction`<sup>Optional</sup> <a name="canvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction"></a>

```java
public java.lang.String getCanvaAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

##### `chatAgent`<sup>Optional</sup> <a name="chatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent"></a>

```java
public java.lang.String getChatAgent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

##### `comprehendAction`<sup>Optional</sup> <a name="comprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction"></a>

```java
public java.lang.String getComprehendAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

##### `comprehendMedicalAction`<sup>Optional</sup> <a name="comprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction"></a>

```java
public java.lang.String getComprehendMedicalAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

##### `confluenceAction`<sup>Optional</sup> <a name="confluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction"></a>

```java
public java.lang.String getConfluenceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

##### `createAndUpdateAmazonBedrockArsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockArsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

##### `createAndUpdateAmazonBedrockFsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockFsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

##### `createAndUpdateAmazonBedrockKrsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

##### `createAndUpdateAmazonSThreeAction`<sup>Optional</sup> <a name="createAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonSThreeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

##### `createAndUpdateApps`<sup>Optional</sup> <a name="createAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps"></a>

```java
public java.lang.String getCreateAndUpdateApps();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

##### `createAndUpdateAsanaAction`<sup>Optional</sup> <a name="createAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction"></a>

```java
public java.lang.String getCreateAndUpdateAsanaAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

##### `createAndUpdateBambooHrAction`<sup>Optional</sup> <a name="createAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction"></a>

```java
public java.lang.String getCreateAndUpdateBambooHrAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

##### `createAndUpdateBoxAgentAction`<sup>Optional</sup> <a name="createAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction"></a>

```java
public java.lang.String getCreateAndUpdateBoxAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

##### `createAndUpdateCanvaAgentAction`<sup>Optional</sup> <a name="createAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction"></a>

```java
public java.lang.String getCreateAndUpdateCanvaAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

##### `createAndUpdateComprehendAction`<sup>Optional</sup> <a name="createAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction"></a>

```java
public java.lang.String getCreateAndUpdateComprehendAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

##### `createAndUpdateComprehendMedicalAction`<sup>Optional</sup> <a name="createAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction"></a>

```java
public java.lang.String getCreateAndUpdateComprehendMedicalAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

##### `createAndUpdateConfluenceAction`<sup>Optional</sup> <a name="createAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction"></a>

```java
public java.lang.String getCreateAndUpdateConfluenceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

##### `createAndUpdateDashboardEmailReports`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `createAndUpdateDatasets`<sup>Optional</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```java
public java.lang.String getCreateAndUpdateDatasets();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `createAndUpdateDataSources`<sup>Optional</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```java
public java.lang.String getCreateAndUpdateDataSources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `createAndUpdateFactSetAction`<sup>Optional</sup> <a name="createAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction"></a>

```java
public java.lang.String getCreateAndUpdateFactSetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

##### `createAndUpdateGenericHttpAction`<sup>Optional</sup> <a name="createAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction"></a>

```java
public java.lang.String getCreateAndUpdateGenericHttpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

##### `createAndUpdateGithubAction`<sup>Optional</sup> <a name="createAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction"></a>

```java
public java.lang.String getCreateAndUpdateGithubAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

##### `createAndUpdateGoogleCalendarAction`<sup>Optional</sup> <a name="createAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction"></a>

```java
public java.lang.String getCreateAndUpdateGoogleCalendarAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

##### `createAndUpdateHubspotAction`<sup>Optional</sup> <a name="createAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction"></a>

```java
public java.lang.String getCreateAndUpdateHubspotAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

##### `createAndUpdateHuggingFaceAction`<sup>Optional</sup> <a name="createAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction"></a>

```java
public java.lang.String getCreateAndUpdateHuggingFaceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

##### `createAndUpdateIntercomAction`<sup>Optional</sup> <a name="createAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction"></a>

```java
public java.lang.String getCreateAndUpdateIntercomAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

##### `createAndUpdateJiraAction`<sup>Optional</sup> <a name="createAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction"></a>

```java
public java.lang.String getCreateAndUpdateJiraAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

##### `createAndUpdateKnowledgeBases`<sup>Optional</sup> <a name="createAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases"></a>

```java
public java.lang.String getCreateAndUpdateKnowledgeBases();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

##### `createAndUpdateLinearAction`<sup>Optional</sup> <a name="createAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction"></a>

```java
public java.lang.String getCreateAndUpdateLinearAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

##### `createAndUpdateMcpAction`<sup>Optional</sup> <a name="createAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction"></a>

```java
public java.lang.String getCreateAndUpdateMcpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

##### `createAndUpdateMondayAction`<sup>Optional</sup> <a name="createAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction"></a>

```java
public java.lang.String getCreateAndUpdateMondayAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

##### `createAndUpdateMsExchangeAction`<sup>Optional</sup> <a name="createAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction"></a>

```java
public java.lang.String getCreateAndUpdateMsExchangeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

##### `createAndUpdateMsTeamsAction`<sup>Optional</sup> <a name="createAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction"></a>

```java
public java.lang.String getCreateAndUpdateMsTeamsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

##### `createAndUpdateNewRelicAction`<sup>Optional</sup> <a name="createAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction"></a>

```java
public java.lang.String getCreateAndUpdateNewRelicAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

##### `createAndUpdateNotionAction`<sup>Optional</sup> <a name="createAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction"></a>

```java
public java.lang.String getCreateAndUpdateNotionAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

##### `createAndUpdateOneDriveAction`<sup>Optional</sup> <a name="createAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction"></a>

```java
public java.lang.String getCreateAndUpdateOneDriveAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

##### `createAndUpdateOpenApiAction`<sup>Optional</sup> <a name="createAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction"></a>

```java
public java.lang.String getCreateAndUpdateOpenApiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

##### `createAndUpdatePagerDutyAction`<sup>Optional</sup> <a name="createAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction"></a>

```java
public java.lang.String getCreateAndUpdatePagerDutyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

##### `createAndUpdateSalesforceAction`<sup>Optional</sup> <a name="createAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction"></a>

```java
public java.lang.String getCreateAndUpdateSalesforceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

##### `createAndUpdateSandPGlobalEnergyAction`<sup>Optional</sup> <a name="createAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction"></a>

```java
public java.lang.String getCreateAndUpdateSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

##### `createAndUpdateSandPgmiAction`<sup>Optional</sup> <a name="createAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction"></a>

```java
public java.lang.String getCreateAndUpdateSandPgmiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

##### `createAndUpdateSapBillOfMaterialAction`<sup>Optional</sup> <a name="createAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction"></a>

```java
public java.lang.String getCreateAndUpdateSapBillOfMaterialAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

##### `createAndUpdateSapBusinessPartnerAction`<sup>Optional</sup> <a name="createAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction"></a>

```java
public java.lang.String getCreateAndUpdateSapBusinessPartnerAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

##### `createAndUpdateSapMaterialStockAction`<sup>Optional</sup> <a name="createAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction"></a>

```java
public java.lang.String getCreateAndUpdateSapMaterialStockAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

##### `createAndUpdateSapPhysicalInventoryAction`<sup>Optional</sup> <a name="createAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction"></a>

```java
public java.lang.String getCreateAndUpdateSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

##### `createAndUpdateSapProductMasterDataAction`<sup>Optional</sup> <a name="createAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction"></a>

```java
public java.lang.String getCreateAndUpdateSapProductMasterDataAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

##### `createAndUpdateServiceNowAction`<sup>Optional</sup> <a name="createAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction"></a>

```java
public java.lang.String getCreateAndUpdateServiceNowAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

##### `createAndUpdateSharePointAction`<sup>Optional</sup> <a name="createAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction"></a>

```java
public java.lang.String getCreateAndUpdateSharePointAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

##### `createAndUpdateSlackAction`<sup>Optional</sup> <a name="createAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction"></a>

```java
public java.lang.String getCreateAndUpdateSlackAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

##### `createAndUpdateSmartsheetAction`<sup>Optional</sup> <a name="createAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction"></a>

```java
public java.lang.String getCreateAndUpdateSmartsheetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

##### `createAndUpdateTextractAction`<sup>Optional</sup> <a name="createAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction"></a>

```java
public java.lang.String getCreateAndUpdateTextractAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

##### `createAndUpdateThemes`<sup>Optional</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```java
public java.lang.String getCreateAndUpdateThemes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `createAndUpdateThresholdAlerts`<sup>Optional</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlerts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `createAndUpdateZendeskAction`<sup>Optional</sup> <a name="createAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction"></a>

```java
public java.lang.String getCreateAndUpdateZendeskAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

##### `createChatAgents`<sup>Optional</sup> <a name="createChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents"></a>

```java
public java.lang.String getCreateChatAgents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

##### `createDashboardExecutiveSummaryWithQ`<sup>Optional</sup> <a name="createDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ"></a>

```java
public java.lang.String getCreateDashboardExecutiveSummaryWithQ();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

##### `createSharedFolders`<sup>Optional</sup> <a name="createSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```java
public java.lang.String getCreateSharedFolders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `createSpaces`<sup>Optional</sup> <a name="createSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces"></a>

```java
public java.lang.String getCreateSpaces();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

##### `createSpiceDataset`<sup>Optional</sup> <a name="createSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```java
public java.lang.String getCreateSpiceDataset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `dashboard`<sup>Optional</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard"></a>

```java
public java.lang.String getDashboard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

##### `editVisualWithQ`<sup>Optional</sup> <a name="editVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ"></a>

```java
public java.lang.String getEditVisualWithQ();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

##### `exportToCsv`<sup>Optional</sup> <a name="exportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```java
public java.lang.String getExportToCsv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `exportToCsvInScheduledReports`<sup>Optional</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```java
public java.lang.String getExportToCsvInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `exportToExcel`<sup>Optional</sup> <a name="exportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```java
public java.lang.String getExportToExcel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `exportToExcelInScheduledReports`<sup>Optional</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```java
public java.lang.String getExportToExcelInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `exportToPdf`<sup>Optional</sup> <a name="exportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```java
public java.lang.String getExportToPdf();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `exportToPdfInScheduledReports`<sup>Optional</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```java
public java.lang.String getExportToPdfInScheduledReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

##### `factSetAction`<sup>Optional</sup> <a name="factSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction"></a>

```java
public java.lang.String getFactSetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

##### `genericHttpAction`<sup>Optional</sup> <a name="genericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction"></a>

```java
public java.lang.String getGenericHttpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

##### `githubAction`<sup>Optional</sup> <a name="githubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction"></a>

```java
public java.lang.String getGithubAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

##### `googleCalendarAction`<sup>Optional</sup> <a name="googleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction"></a>

```java
public java.lang.String getGoogleCalendarAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

##### `hubspotAction`<sup>Optional</sup> <a name="hubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction"></a>

```java
public java.lang.String getHubspotAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

##### `huggingFaceAction`<sup>Optional</sup> <a name="huggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction"></a>

```java
public java.lang.String getHuggingFaceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

##### `includeContentInScheduledReportsEmail`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `intercomAction`<sup>Optional</sup> <a name="intercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction"></a>

```java
public java.lang.String getIntercomAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

##### `invokeAppsAiInference`<sup>Optional</sup> <a name="invokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference"></a>

```java
public java.lang.String getInvokeAppsAiInference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

##### `jiraAction`<sup>Optional</sup> <a name="jiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction"></a>

```java
public java.lang.String getJiraAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

##### `knowledgeBase`<sup>Optional</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase"></a>

```java
public java.lang.String getKnowledgeBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

##### `linearAction`<sup>Optional</sup> <a name="linearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction"></a>

```java
public java.lang.String getLinearAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

##### `manageSharedFolders`<sup>Optional</sup> <a name="manageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders"></a>

```java
public java.lang.String getManageSharedFolders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

##### `mcpAction`<sup>Optional</sup> <a name="mcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction"></a>

```java
public java.lang.String getMcpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

##### `mondayAction`<sup>Optional</sup> <a name="mondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction"></a>

```java
public java.lang.String getMondayAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

##### `msExchangeAction`<sup>Optional</sup> <a name="msExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction"></a>

```java
public java.lang.String getMsExchangeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

##### `msTeamsAction`<sup>Optional</sup> <a name="msTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction"></a>

```java
public java.lang.String getMsTeamsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

##### `newRelicAction`<sup>Optional</sup> <a name="newRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction"></a>

```java
public java.lang.String getNewRelicAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

##### `notionAction`<sup>Optional</sup> <a name="notionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction"></a>

```java
public java.lang.String getNotionAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

##### `oneDriveAction`<sup>Optional</sup> <a name="oneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction"></a>

```java
public java.lang.String getOneDriveAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

##### `openApiAction`<sup>Optional</sup> <a name="openApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction"></a>

```java
public java.lang.String getOpenApiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

##### `pagerDutyAction`<sup>Optional</sup> <a name="pagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction"></a>

```java
public java.lang.String getPagerDutyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

##### `performFlowUiTask`<sup>Optional</sup> <a name="performFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask"></a>

```java
public java.lang.String getPerformFlowUiTask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

##### `printReports`<sup>Optional</sup> <a name="printReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```java
public java.lang.String getPrintReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `publishWithoutApproval`<sup>Optional</sup> <a name="publishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval"></a>

```java
public java.lang.String getPublishWithoutApproval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

##### `renameSharedFolders`<sup>Optional</sup> <a name="renameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```java
public java.lang.String getRenameSharedFolders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `research`<sup>Optional</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research"></a>

```java
public java.lang.String getResearch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

##### `salesforceAction`<sup>Optional</sup> <a name="salesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction"></a>

```java
public java.lang.String getSalesforceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

##### `sandPGlobalEnergyAction`<sup>Optional</sup> <a name="sandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction"></a>

```java
public java.lang.String getSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

##### `sandPgmiAction`<sup>Optional</sup> <a name="sandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction"></a>

```java
public java.lang.String getSandPgmiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

##### `sapBillOfMaterialAction`<sup>Optional</sup> <a name="sapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction"></a>

```java
public java.lang.String getSapBillOfMaterialAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

##### `sapBusinessPartnerAction`<sup>Optional</sup> <a name="sapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction"></a>

```java
public java.lang.String getSapBusinessPartnerAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

##### `sapMaterialStockAction`<sup>Optional</sup> <a name="sapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction"></a>

```java
public java.lang.String getSapMaterialStockAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

##### `sapPhysicalInventoryAction`<sup>Optional</sup> <a name="sapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction"></a>

```java
public java.lang.String getSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

##### `sapProductMasterDataAction`<sup>Optional</sup> <a name="sapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction"></a>

```java
public java.lang.String getSapProductMasterDataAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

##### `serviceNowAction`<sup>Optional</sup> <a name="serviceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction"></a>

```java
public java.lang.String getServiceNowAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

##### `shareAmazonBedrockArsAction`<sup>Optional</sup> <a name="shareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction"></a>

```java
public java.lang.String getShareAmazonBedrockArsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

##### `shareAmazonBedrockFsAction`<sup>Optional</sup> <a name="shareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction"></a>

```java
public java.lang.String getShareAmazonBedrockFsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

##### `shareAmazonBedrockKrsAction`<sup>Optional</sup> <a name="shareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction"></a>

```java
public java.lang.String getShareAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

##### `shareAmazonSThreeAction`<sup>Optional</sup> <a name="shareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction"></a>

```java
public java.lang.String getShareAmazonSThreeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

##### `shareAnalyses`<sup>Optional</sup> <a name="shareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```java
public java.lang.String getShareAnalyses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `shareApps`<sup>Optional</sup> <a name="shareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps"></a>

```java
public java.lang.String getShareApps();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

##### `shareAsanaAction`<sup>Optional</sup> <a name="shareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction"></a>

```java
public java.lang.String getShareAsanaAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

##### `shareBambooHrAction`<sup>Optional</sup> <a name="shareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction"></a>

```java
public java.lang.String getShareBambooHrAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

##### `shareBoxAgentAction`<sup>Optional</sup> <a name="shareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction"></a>

```java
public java.lang.String getShareBoxAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

##### `shareCanvaAgentAction`<sup>Optional</sup> <a name="shareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction"></a>

```java
public java.lang.String getShareCanvaAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

##### `shareChatAgents`<sup>Optional</sup> <a name="shareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents"></a>

```java
public java.lang.String getShareChatAgents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

##### `shareComprehendAction`<sup>Optional</sup> <a name="shareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction"></a>

```java
public java.lang.String getShareComprehendAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

##### `shareComprehendMedicalAction`<sup>Optional</sup> <a name="shareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction"></a>

```java
public java.lang.String getShareComprehendMedicalAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

##### `shareConfluenceAction`<sup>Optional</sup> <a name="shareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction"></a>

```java
public java.lang.String getShareConfluenceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

##### `shareDashboards`<sup>Optional</sup> <a name="shareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```java
public java.lang.String getShareDashboards();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `shareDatasets`<sup>Optional</sup> <a name="shareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```java
public java.lang.String getShareDatasets();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `shareDataSources`<sup>Optional</sup> <a name="shareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```java
public java.lang.String getShareDataSources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `shareFactSetAction`<sup>Optional</sup> <a name="shareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction"></a>

```java
public java.lang.String getShareFactSetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

##### `shareGenericHttpAction`<sup>Optional</sup> <a name="shareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction"></a>

```java
public java.lang.String getShareGenericHttpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

##### `shareGithubAction`<sup>Optional</sup> <a name="shareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction"></a>

```java
public java.lang.String getShareGithubAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

##### `shareGoogleCalendarAction`<sup>Optional</sup> <a name="shareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction"></a>

```java
public java.lang.String getShareGoogleCalendarAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

##### `shareHubspotAction`<sup>Optional</sup> <a name="shareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction"></a>

```java
public java.lang.String getShareHubspotAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

##### `shareHuggingFaceAction`<sup>Optional</sup> <a name="shareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction"></a>

```java
public java.lang.String getShareHuggingFaceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

##### `shareIntercomAction`<sup>Optional</sup> <a name="shareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction"></a>

```java
public java.lang.String getShareIntercomAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

##### `shareJiraAction`<sup>Optional</sup> <a name="shareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction"></a>

```java
public java.lang.String getShareJiraAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

##### `shareKnowledgeBases`<sup>Optional</sup> <a name="shareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases"></a>

```java
public java.lang.String getShareKnowledgeBases();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

##### `shareLinearAction`<sup>Optional</sup> <a name="shareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction"></a>

```java
public java.lang.String getShareLinearAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

##### `shareMcpAction`<sup>Optional</sup> <a name="shareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction"></a>

```java
public java.lang.String getShareMcpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

##### `shareMondayAction`<sup>Optional</sup> <a name="shareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction"></a>

```java
public java.lang.String getShareMondayAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

##### `shareMsExchangeAction`<sup>Optional</sup> <a name="shareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction"></a>

```java
public java.lang.String getShareMsExchangeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

##### `shareMsTeamsAction`<sup>Optional</sup> <a name="shareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction"></a>

```java
public java.lang.String getShareMsTeamsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

##### `shareNewRelicAction`<sup>Optional</sup> <a name="shareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction"></a>

```java
public java.lang.String getShareNewRelicAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

##### `shareNotionAction`<sup>Optional</sup> <a name="shareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction"></a>

```java
public java.lang.String getShareNotionAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

##### `shareOneDriveAction`<sup>Optional</sup> <a name="shareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction"></a>

```java
public java.lang.String getShareOneDriveAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

##### `shareOpenApiAction`<sup>Optional</sup> <a name="shareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction"></a>

```java
public java.lang.String getShareOpenApiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

##### `sharePagerDutyAction`<sup>Optional</sup> <a name="sharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction"></a>

```java
public java.lang.String getSharePagerDutyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

##### `sharePointAction`<sup>Optional</sup> <a name="sharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction"></a>

```java
public java.lang.String getSharePointAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

##### `shareSalesforceAction`<sup>Optional</sup> <a name="shareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction"></a>

```java
public java.lang.String getShareSalesforceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

##### `shareSandPGlobalEnergyAction`<sup>Optional</sup> <a name="shareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction"></a>

```java
public java.lang.String getShareSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

##### `shareSandPgmiAction`<sup>Optional</sup> <a name="shareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction"></a>

```java
public java.lang.String getShareSandPgmiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

##### `shareSapBillOfMaterialAction`<sup>Optional</sup> <a name="shareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction"></a>

```java
public java.lang.String getShareSapBillOfMaterialAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

##### `shareSapBusinessPartnerAction`<sup>Optional</sup> <a name="shareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction"></a>

```java
public java.lang.String getShareSapBusinessPartnerAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

##### `shareSapMaterialStockAction`<sup>Optional</sup> <a name="shareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction"></a>

```java
public java.lang.String getShareSapMaterialStockAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

##### `shareSapPhysicalInventoryAction`<sup>Optional</sup> <a name="shareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction"></a>

```java
public java.lang.String getShareSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

##### `shareSapProductMasterDataAction`<sup>Optional</sup> <a name="shareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction"></a>

```java
public java.lang.String getShareSapProductMasterDataAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

##### `shareServiceNowAction`<sup>Optional</sup> <a name="shareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction"></a>

```java
public java.lang.String getShareServiceNowAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

##### `shareSharePointAction`<sup>Optional</sup> <a name="shareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction"></a>

```java
public java.lang.String getShareSharePointAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

##### `shareSlackAction`<sup>Optional</sup> <a name="shareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction"></a>

```java
public java.lang.String getShareSlackAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

##### `shareSmartsheetAction`<sup>Optional</sup> <a name="shareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction"></a>

```java
public java.lang.String getShareSmartsheetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

##### `shareSpaces`<sup>Optional</sup> <a name="shareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces"></a>

```java
public java.lang.String getShareSpaces();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

##### `shareTextractAction`<sup>Optional</sup> <a name="shareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction"></a>

```java
public java.lang.String getShareTextractAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

##### `shareZendeskAction`<sup>Optional</sup> <a name="shareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction"></a>

```java
public java.lang.String getShareZendeskAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

##### `slackAction`<sup>Optional</sup> <a name="slackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction"></a>

```java
public java.lang.String getSlackAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

##### `smartsheetAction`<sup>Optional</sup> <a name="smartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction"></a>

```java
public java.lang.String getSmartsheetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

##### `subscribeDashboardEmailReports`<sup>Optional</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```java
public java.lang.String getSubscribeDashboardEmailReports();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `textractAction`<sup>Optional</sup> <a name="textractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction"></a>

```java
public java.lang.String getTextractAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

##### `useAgentWebSearch`<sup>Optional</sup> <a name="useAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch"></a>

```java
public java.lang.String getUseAgentWebSearch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

##### `useAmazonBedrockArsAction`<sup>Optional</sup> <a name="useAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction"></a>

```java
public java.lang.String getUseAmazonBedrockArsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

##### `useAmazonBedrockFsAction`<sup>Optional</sup> <a name="useAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction"></a>

```java
public java.lang.String getUseAmazonBedrockFsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

##### `useAmazonBedrockKrsAction`<sup>Optional</sup> <a name="useAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction"></a>

```java
public java.lang.String getUseAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

##### `useAmazonSThreeAction`<sup>Optional</sup> <a name="useAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction"></a>

```java
public java.lang.String getUseAmazonSThreeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

##### `useAsanaAction`<sup>Optional</sup> <a name="useAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction"></a>

```java
public java.lang.String getUseAsanaAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

##### `useBambooHrAction`<sup>Optional</sup> <a name="useBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction"></a>

```java
public java.lang.String getUseBambooHrAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

##### `useBedrockModels`<sup>Optional</sup> <a name="useBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels"></a>

```java
public java.lang.String getUseBedrockModels();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

##### `useBoxAgentAction`<sup>Optional</sup> <a name="useBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction"></a>

```java
public java.lang.String getUseBoxAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

##### `useCanvaAgentAction`<sup>Optional</sup> <a name="useCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction"></a>

```java
public java.lang.String getUseCanvaAgentAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

##### `useComprehendAction`<sup>Optional</sup> <a name="useComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction"></a>

```java
public java.lang.String getUseComprehendAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

##### `useComprehendMedicalAction`<sup>Optional</sup> <a name="useComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction"></a>

```java
public java.lang.String getUseComprehendMedicalAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

##### `useConfluenceAction`<sup>Optional</sup> <a name="useConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction"></a>

```java
public java.lang.String getUseConfluenceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

##### `useFactSetAction`<sup>Optional</sup> <a name="useFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction"></a>

```java
public java.lang.String getUseFactSetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

##### `useGenericHttpAction`<sup>Optional</sup> <a name="useGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction"></a>

```java
public java.lang.String getUseGenericHttpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

##### `useGithubAction`<sup>Optional</sup> <a name="useGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction"></a>

```java
public java.lang.String getUseGithubAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

##### `useGoogleCalendarAction`<sup>Optional</sup> <a name="useGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction"></a>

```java
public java.lang.String getUseGoogleCalendarAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

##### `useHubspotAction`<sup>Optional</sup> <a name="useHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction"></a>

```java
public java.lang.String getUseHubspotAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

##### `useHuggingFaceAction`<sup>Optional</sup> <a name="useHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction"></a>

```java
public java.lang.String getUseHuggingFaceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

##### `useIntercomAction`<sup>Optional</sup> <a name="useIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction"></a>

```java
public java.lang.String getUseIntercomAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

##### `useJiraAction`<sup>Optional</sup> <a name="useJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction"></a>

```java
public java.lang.String getUseJiraAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

##### `useLinearAction`<sup>Optional</sup> <a name="useLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction"></a>

```java
public java.lang.String getUseLinearAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

##### `useMcpAction`<sup>Optional</sup> <a name="useMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction"></a>

```java
public java.lang.String getUseMcpAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

##### `useMondayAction`<sup>Optional</sup> <a name="useMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction"></a>

```java
public java.lang.String getUseMondayAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

##### `useMsExchangeAction`<sup>Optional</sup> <a name="useMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction"></a>

```java
public java.lang.String getUseMsExchangeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

##### `useMsTeamsAction`<sup>Optional</sup> <a name="useMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction"></a>

```java
public java.lang.String getUseMsTeamsAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

##### `useNewRelicAction`<sup>Optional</sup> <a name="useNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction"></a>

```java
public java.lang.String getUseNewRelicAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

##### `useNotionAction`<sup>Optional</sup> <a name="useNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction"></a>

```java
public java.lang.String getUseNotionAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

##### `useOneDriveAction`<sup>Optional</sup> <a name="useOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction"></a>

```java
public java.lang.String getUseOneDriveAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

##### `useOpenApiAction`<sup>Optional</sup> <a name="useOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction"></a>

```java
public java.lang.String getUseOpenApiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

##### `usePagerDutyAction`<sup>Optional</sup> <a name="usePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction"></a>

```java
public java.lang.String getUsePagerDutyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

##### `useSalesforceAction`<sup>Optional</sup> <a name="useSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction"></a>

```java
public java.lang.String getUseSalesforceAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

##### `useSandPGlobalEnergyAction`<sup>Optional</sup> <a name="useSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction"></a>

```java
public java.lang.String getUseSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

##### `useSandPgmiAction`<sup>Optional</sup> <a name="useSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction"></a>

```java
public java.lang.String getUseSandPgmiAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

##### `useSapBillOfMaterialAction`<sup>Optional</sup> <a name="useSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction"></a>

```java
public java.lang.String getUseSapBillOfMaterialAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

##### `useSapBusinessPartnerAction`<sup>Optional</sup> <a name="useSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction"></a>

```java
public java.lang.String getUseSapBusinessPartnerAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

##### `useSapMaterialStockAction`<sup>Optional</sup> <a name="useSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction"></a>

```java
public java.lang.String getUseSapMaterialStockAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

##### `useSapPhysicalInventoryAction`<sup>Optional</sup> <a name="useSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction"></a>

```java
public java.lang.String getUseSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

##### `useSapProductMasterDataAction`<sup>Optional</sup> <a name="useSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction"></a>

```java
public java.lang.String getUseSapProductMasterDataAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

##### `useServiceNowAction`<sup>Optional</sup> <a name="useServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction"></a>

```java
public java.lang.String getUseServiceNowAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

##### `useSharePointAction`<sup>Optional</sup> <a name="useSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction"></a>

```java
public java.lang.String getUseSharePointAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

##### `useSlackAction`<sup>Optional</sup> <a name="useSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction"></a>

```java
public java.lang.String getUseSlackAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

##### `useSmartsheetAction`<sup>Optional</sup> <a name="useSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction"></a>

```java
public java.lang.String getUseSmartsheetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

##### `useTextractAction`<sup>Optional</sup> <a name="useTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction"></a>

```java
public java.lang.String getUseTextractAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

##### `useZendeskAction`<sup>Optional</sup> <a name="useZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction"></a>

```java
public java.lang.String getUseZendeskAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

##### `viewAccountSpiceCapacity`<sup>Optional</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```java
public java.lang.String getViewAccountSpiceCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

##### `zendeskAction`<sup>Optional</sup> <a name="zendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction"></a>

```java
public java.lang.String getZendeskAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsConfig;

QuicksightCustomPermissionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .awsAccountId(java.lang.String)
    .customPermissionsName(java.lang.String)
//  .capabilities(QuicksightCustomPermissionsCapabilities)
//  .tags(IResolvable|java.util.List<QuicksightCustomPermissionsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">customPermissionsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```java
public java.lang.String getCustomPermissionsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```java
public QuicksightCustomPermissionsCapabilities getCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

### QuicksightCustomPermissionsTags <a name="QuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsTags;

QuicksightCustomPermissionsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#key QuicksightCustomPermissions#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_custom_permissions#value QuicksightCustomPermissions#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsCapabilitiesOutputReference;

new QuicksightCustomPermissionsCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore">resetAccessAppsNativeDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">resetAddOrRunAnomalyDetectionForAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction">resetAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction">resetAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction">resetAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction">resetAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests">resetApproveFlowShareRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction">resetAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate">resetAutomate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction">resetBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction">resetBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ">resetBuildCalculatedFieldWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction">resetCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent">resetChatAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction">resetComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction">resetComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction">resetConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction">resetCreateAndUpdateAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction">resetCreateAndUpdateAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction">resetCreateAndUpdateAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction">resetCreateAndUpdateAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps">resetCreateAndUpdateApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction">resetCreateAndUpdateAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction">resetCreateAndUpdateBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction">resetCreateAndUpdateBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction">resetCreateAndUpdateCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction">resetCreateAndUpdateComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction">resetCreateAndUpdateComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction">resetCreateAndUpdateConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">resetCreateAndUpdateDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">resetCreateAndUpdateDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">resetCreateAndUpdateDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction">resetCreateAndUpdateFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction">resetCreateAndUpdateGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction">resetCreateAndUpdateGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction">resetCreateAndUpdateGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction">resetCreateAndUpdateHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction">resetCreateAndUpdateHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction">resetCreateAndUpdateIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction">resetCreateAndUpdateJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases">resetCreateAndUpdateKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction">resetCreateAndUpdateLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction">resetCreateAndUpdateMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction">resetCreateAndUpdateMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction">resetCreateAndUpdateMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction">resetCreateAndUpdateMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction">resetCreateAndUpdateNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction">resetCreateAndUpdateNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction">resetCreateAndUpdateOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction">resetCreateAndUpdateOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction">resetCreateAndUpdatePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction">resetCreateAndUpdateSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction">resetCreateAndUpdateSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction">resetCreateAndUpdateSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction">resetCreateAndUpdateSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction">resetCreateAndUpdateSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction">resetCreateAndUpdateSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction">resetCreateAndUpdateSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction">resetCreateAndUpdateSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction">resetCreateAndUpdateServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction">resetCreateAndUpdateSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction">resetCreateAndUpdateSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction">resetCreateAndUpdateSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction">resetCreateAndUpdateTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">resetCreateAndUpdateThemes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">resetCreateAndUpdateThresholdAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction">resetCreateAndUpdateZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents">resetCreateChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ">resetCreateDashboardExecutiveSummaryWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">resetCreateSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces">resetCreateSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">resetCreateSpiceDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard">resetDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ">resetEditVisualWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">resetExportToCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">resetExportToCsvInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">resetExportToExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">resetExportToExcelInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">resetExportToPdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">resetExportToPdfInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction">resetFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow">resetFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction">resetGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction">resetGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction">resetGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction">resetHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction">resetHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">resetIncludeContentInScheduledReportsEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction">resetIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference">resetInvokeAppsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction">resetJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase">resetKnowledgeBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction">resetLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders">resetManageSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction">resetMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction">resetMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction">resetMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction">resetMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction">resetNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction">resetNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction">resetOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction">resetOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction">resetPagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask">resetPerformFlowUiTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">resetPrintReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval">resetPublishWithoutApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">resetRenameSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch">resetResearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction">resetSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction">resetSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction">resetSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction">resetSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction">resetSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction">resetSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction">resetSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction">resetSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction">resetServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction">resetShareAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction">resetShareAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction">resetShareAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction">resetShareAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">resetShareAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps">resetShareApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction">resetShareAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction">resetShareBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction">resetShareBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction">resetShareCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents">resetShareChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction">resetShareComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction">resetShareComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction">resetShareConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">resetShareDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">resetShareDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">resetShareDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction">resetShareFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction">resetShareGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction">resetShareGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction">resetShareGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction">resetShareHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction">resetShareHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction">resetShareIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction">resetShareJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases">resetShareKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction">resetShareLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction">resetShareMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction">resetShareMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction">resetShareMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction">resetShareMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction">resetShareNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction">resetShareNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction">resetShareOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction">resetShareOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction">resetSharePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction">resetSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction">resetShareSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction">resetShareSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction">resetShareSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction">resetShareSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction">resetShareSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction">resetShareSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction">resetShareSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction">resetShareSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction">resetShareServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction">resetShareSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction">resetShareSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction">resetShareSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces">resetShareSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction">resetShareTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction">resetShareZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction">resetSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction">resetSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">resetSubscribeDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction">resetTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic">resetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch">resetUseAgentWebSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction">resetUseAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction">resetUseAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction">resetUseAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction">resetUseAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction">resetUseAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction">resetUseBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels">resetUseBedrockModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction">resetUseBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction">resetUseCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction">resetUseComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction">resetUseComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction">resetUseConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction">resetUseFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction">resetUseGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction">resetUseGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction">resetUseGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction">resetUseHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction">resetUseHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction">resetUseIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction">resetUseJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction">resetUseLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction">resetUseMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction">resetUseMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction">resetUseMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction">resetUseMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction">resetUseNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction">resetUseNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction">resetUseOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction">resetUseOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction">resetUsePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction">resetUseSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction">resetUseSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction">resetUseSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction">resetUseSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction">resetUseSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction">resetUseSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction">resetUseSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction">resetUseSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction">resetUseServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction">resetUseSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction">resetUseSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction">resetUseSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction">resetUseTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction">resetUseZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">resetViewAccountSpiceCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction">resetZendeskAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessAppsNativeDataStore` <a name="resetAccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore"></a>

```java
public void resetAccessAppsNativeDataStore()
```

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetAddOrRunAnomalyDetectionForAnalyses` <a name="resetAddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```java
public void resetAddOrRunAnomalyDetectionForAnalyses()
```

##### `resetAmazonBedrockArsAction` <a name="resetAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction"></a>

```java
public void resetAmazonBedrockArsAction()
```

##### `resetAmazonBedrockFsAction` <a name="resetAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction"></a>

```java
public void resetAmazonBedrockFsAction()
```

##### `resetAmazonBedrockKrsAction` <a name="resetAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction"></a>

```java
public void resetAmazonBedrockKrsAction()
```

##### `resetAmazonSThreeAction` <a name="resetAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction"></a>

```java
public void resetAmazonSThreeAction()
```

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis"></a>

```java
public void resetAnalysis()
```

##### `resetApproveFlowShareRequests` <a name="resetApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests"></a>

```java
public void resetApproveFlowShareRequests()
```

##### `resetApps` <a name="resetApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps"></a>

```java
public void resetApps()
```

##### `resetAsanaAction` <a name="resetAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction"></a>

```java
public void resetAsanaAction()
```

##### `resetAutomate` <a name="resetAutomate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate"></a>

```java
public void resetAutomate()
```

##### `resetBambooHrAction` <a name="resetBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction"></a>

```java
public void resetBambooHrAction()
```

##### `resetBoxAgentAction` <a name="resetBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction"></a>

```java
public void resetBoxAgentAction()
```

##### `resetBuildCalculatedFieldWithQ` <a name="resetBuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ"></a>

```java
public void resetBuildCalculatedFieldWithQ()
```

##### `resetCanvaAgentAction` <a name="resetCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction"></a>

```java
public void resetCanvaAgentAction()
```

##### `resetChatAgent` <a name="resetChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent"></a>

```java
public void resetChatAgent()
```

##### `resetComprehendAction` <a name="resetComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction"></a>

```java
public void resetComprehendAction()
```

##### `resetComprehendMedicalAction` <a name="resetComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction"></a>

```java
public void resetComprehendMedicalAction()
```

##### `resetConfluenceAction` <a name="resetConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction"></a>

```java
public void resetConfluenceAction()
```

##### `resetCreateAndUpdateAmazonBedrockArsAction` <a name="resetCreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction"></a>

```java
public void resetCreateAndUpdateAmazonBedrockArsAction()
```

##### `resetCreateAndUpdateAmazonBedrockFsAction` <a name="resetCreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction"></a>

```java
public void resetCreateAndUpdateAmazonBedrockFsAction()
```

##### `resetCreateAndUpdateAmazonBedrockKrsAction` <a name="resetCreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction"></a>

```java
public void resetCreateAndUpdateAmazonBedrockKrsAction()
```

##### `resetCreateAndUpdateAmazonSThreeAction` <a name="resetCreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction"></a>

```java
public void resetCreateAndUpdateAmazonSThreeAction()
```

##### `resetCreateAndUpdateApps` <a name="resetCreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps"></a>

```java
public void resetCreateAndUpdateApps()
```

##### `resetCreateAndUpdateAsanaAction` <a name="resetCreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction"></a>

```java
public void resetCreateAndUpdateAsanaAction()
```

##### `resetCreateAndUpdateBambooHrAction` <a name="resetCreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction"></a>

```java
public void resetCreateAndUpdateBambooHrAction()
```

##### `resetCreateAndUpdateBoxAgentAction` <a name="resetCreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction"></a>

```java
public void resetCreateAndUpdateBoxAgentAction()
```

##### `resetCreateAndUpdateCanvaAgentAction` <a name="resetCreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction"></a>

```java
public void resetCreateAndUpdateCanvaAgentAction()
```

##### `resetCreateAndUpdateComprehendAction` <a name="resetCreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction"></a>

```java
public void resetCreateAndUpdateComprehendAction()
```

##### `resetCreateAndUpdateComprehendMedicalAction` <a name="resetCreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction"></a>

```java
public void resetCreateAndUpdateComprehendMedicalAction()
```

##### `resetCreateAndUpdateConfluenceAction` <a name="resetCreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction"></a>

```java
public void resetCreateAndUpdateConfluenceAction()
```

##### `resetCreateAndUpdateDashboardEmailReports` <a name="resetCreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```java
public void resetCreateAndUpdateDashboardEmailReports()
```

##### `resetCreateAndUpdateDatasets` <a name="resetCreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```java
public void resetCreateAndUpdateDatasets()
```

##### `resetCreateAndUpdateDataSources` <a name="resetCreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```java
public void resetCreateAndUpdateDataSources()
```

##### `resetCreateAndUpdateFactSetAction` <a name="resetCreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction"></a>

```java
public void resetCreateAndUpdateFactSetAction()
```

##### `resetCreateAndUpdateGenericHttpAction` <a name="resetCreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction"></a>

```java
public void resetCreateAndUpdateGenericHttpAction()
```

##### `resetCreateAndUpdateGithubAction` <a name="resetCreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction"></a>

```java
public void resetCreateAndUpdateGithubAction()
```

##### `resetCreateAndUpdateGoogleCalendarAction` <a name="resetCreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction"></a>

```java
public void resetCreateAndUpdateGoogleCalendarAction()
```

##### `resetCreateAndUpdateHubspotAction` <a name="resetCreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction"></a>

```java
public void resetCreateAndUpdateHubspotAction()
```

##### `resetCreateAndUpdateHuggingFaceAction` <a name="resetCreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction"></a>

```java
public void resetCreateAndUpdateHuggingFaceAction()
```

##### `resetCreateAndUpdateIntercomAction` <a name="resetCreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction"></a>

```java
public void resetCreateAndUpdateIntercomAction()
```

##### `resetCreateAndUpdateJiraAction` <a name="resetCreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction"></a>

```java
public void resetCreateAndUpdateJiraAction()
```

##### `resetCreateAndUpdateKnowledgeBases` <a name="resetCreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases"></a>

```java
public void resetCreateAndUpdateKnowledgeBases()
```

##### `resetCreateAndUpdateLinearAction` <a name="resetCreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction"></a>

```java
public void resetCreateAndUpdateLinearAction()
```

##### `resetCreateAndUpdateMcpAction` <a name="resetCreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction"></a>

```java
public void resetCreateAndUpdateMcpAction()
```

##### `resetCreateAndUpdateMondayAction` <a name="resetCreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction"></a>

```java
public void resetCreateAndUpdateMondayAction()
```

##### `resetCreateAndUpdateMsExchangeAction` <a name="resetCreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction"></a>

```java
public void resetCreateAndUpdateMsExchangeAction()
```

##### `resetCreateAndUpdateMsTeamsAction` <a name="resetCreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction"></a>

```java
public void resetCreateAndUpdateMsTeamsAction()
```

##### `resetCreateAndUpdateNewRelicAction` <a name="resetCreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction"></a>

```java
public void resetCreateAndUpdateNewRelicAction()
```

##### `resetCreateAndUpdateNotionAction` <a name="resetCreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction"></a>

```java
public void resetCreateAndUpdateNotionAction()
```

##### `resetCreateAndUpdateOneDriveAction` <a name="resetCreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction"></a>

```java
public void resetCreateAndUpdateOneDriveAction()
```

##### `resetCreateAndUpdateOpenApiAction` <a name="resetCreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction"></a>

```java
public void resetCreateAndUpdateOpenApiAction()
```

##### `resetCreateAndUpdatePagerDutyAction` <a name="resetCreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction"></a>

```java
public void resetCreateAndUpdatePagerDutyAction()
```

##### `resetCreateAndUpdateSalesforceAction` <a name="resetCreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction"></a>

```java
public void resetCreateAndUpdateSalesforceAction()
```

##### `resetCreateAndUpdateSandPGlobalEnergyAction` <a name="resetCreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction"></a>

```java
public void resetCreateAndUpdateSandPGlobalEnergyAction()
```

##### `resetCreateAndUpdateSandPgmiAction` <a name="resetCreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction"></a>

```java
public void resetCreateAndUpdateSandPgmiAction()
```

##### `resetCreateAndUpdateSapBillOfMaterialAction` <a name="resetCreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction"></a>

```java
public void resetCreateAndUpdateSapBillOfMaterialAction()
```

##### `resetCreateAndUpdateSapBusinessPartnerAction` <a name="resetCreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction"></a>

```java
public void resetCreateAndUpdateSapBusinessPartnerAction()
```

##### `resetCreateAndUpdateSapMaterialStockAction` <a name="resetCreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction"></a>

```java
public void resetCreateAndUpdateSapMaterialStockAction()
```

##### `resetCreateAndUpdateSapPhysicalInventoryAction` <a name="resetCreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction"></a>

```java
public void resetCreateAndUpdateSapPhysicalInventoryAction()
```

##### `resetCreateAndUpdateSapProductMasterDataAction` <a name="resetCreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction"></a>

```java
public void resetCreateAndUpdateSapProductMasterDataAction()
```

##### `resetCreateAndUpdateServiceNowAction` <a name="resetCreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction"></a>

```java
public void resetCreateAndUpdateServiceNowAction()
```

##### `resetCreateAndUpdateSharePointAction` <a name="resetCreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction"></a>

```java
public void resetCreateAndUpdateSharePointAction()
```

##### `resetCreateAndUpdateSlackAction` <a name="resetCreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction"></a>

```java
public void resetCreateAndUpdateSlackAction()
```

##### `resetCreateAndUpdateSmartsheetAction` <a name="resetCreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction"></a>

```java
public void resetCreateAndUpdateSmartsheetAction()
```

##### `resetCreateAndUpdateTextractAction` <a name="resetCreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction"></a>

```java
public void resetCreateAndUpdateTextractAction()
```

##### `resetCreateAndUpdateThemes` <a name="resetCreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```java
public void resetCreateAndUpdateThemes()
```

##### `resetCreateAndUpdateThresholdAlerts` <a name="resetCreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```java
public void resetCreateAndUpdateThresholdAlerts()
```

##### `resetCreateAndUpdateZendeskAction` <a name="resetCreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction"></a>

```java
public void resetCreateAndUpdateZendeskAction()
```

##### `resetCreateChatAgents` <a name="resetCreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents"></a>

```java
public void resetCreateChatAgents()
```

##### `resetCreateDashboardExecutiveSummaryWithQ` <a name="resetCreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ"></a>

```java
public void resetCreateDashboardExecutiveSummaryWithQ()
```

##### `resetCreateSharedFolders` <a name="resetCreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```java
public void resetCreateSharedFolders()
```

##### `resetCreateSpaces` <a name="resetCreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces"></a>

```java
public void resetCreateSpaces()
```

##### `resetCreateSpiceDataset` <a name="resetCreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```java
public void resetCreateSpiceDataset()
```

##### `resetDashboard` <a name="resetDashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard"></a>

```java
public void resetDashboard()
```

##### `resetEditVisualWithQ` <a name="resetEditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ"></a>

```java
public void resetEditVisualWithQ()
```

##### `resetExportToCsv` <a name="resetExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```java
public void resetExportToCsv()
```

##### `resetExportToCsvInScheduledReports` <a name="resetExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```java
public void resetExportToCsvInScheduledReports()
```

##### `resetExportToExcel` <a name="resetExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```java
public void resetExportToExcel()
```

##### `resetExportToExcelInScheduledReports` <a name="resetExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```java
public void resetExportToExcelInScheduledReports()
```

##### `resetExportToPdf` <a name="resetExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```java
public void resetExportToPdf()
```

##### `resetExportToPdfInScheduledReports` <a name="resetExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```java
public void resetExportToPdfInScheduledReports()
```

##### `resetExtension` <a name="resetExtension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetFactSetAction` <a name="resetFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction"></a>

```java
public void resetFactSetAction()
```

##### `resetFlow` <a name="resetFlow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow"></a>

```java
public void resetFlow()
```

##### `resetGenericHttpAction` <a name="resetGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction"></a>

```java
public void resetGenericHttpAction()
```

##### `resetGithubAction` <a name="resetGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction"></a>

```java
public void resetGithubAction()
```

##### `resetGoogleCalendarAction` <a name="resetGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction"></a>

```java
public void resetGoogleCalendarAction()
```

##### `resetHubspotAction` <a name="resetHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction"></a>

```java
public void resetHubspotAction()
```

##### `resetHuggingFaceAction` <a name="resetHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction"></a>

```java
public void resetHuggingFaceAction()
```

##### `resetIncludeContentInScheduledReportsEmail` <a name="resetIncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```java
public void resetIncludeContentInScheduledReportsEmail()
```

##### `resetIntercomAction` <a name="resetIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction"></a>

```java
public void resetIntercomAction()
```

##### `resetInvokeAppsAiInference` <a name="resetInvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference"></a>

```java
public void resetInvokeAppsAiInference()
```

##### `resetJiraAction` <a name="resetJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction"></a>

```java
public void resetJiraAction()
```

##### `resetKnowledgeBase` <a name="resetKnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase"></a>

```java
public void resetKnowledgeBase()
```

##### `resetLinearAction` <a name="resetLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction"></a>

```java
public void resetLinearAction()
```

##### `resetManageSharedFolders` <a name="resetManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders"></a>

```java
public void resetManageSharedFolders()
```

##### `resetMcpAction` <a name="resetMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction"></a>

```java
public void resetMcpAction()
```

##### `resetMondayAction` <a name="resetMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction"></a>

```java
public void resetMondayAction()
```

##### `resetMsExchangeAction` <a name="resetMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction"></a>

```java
public void resetMsExchangeAction()
```

##### `resetMsTeamsAction` <a name="resetMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction"></a>

```java
public void resetMsTeamsAction()
```

##### `resetNewRelicAction` <a name="resetNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction"></a>

```java
public void resetNewRelicAction()
```

##### `resetNotionAction` <a name="resetNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction"></a>

```java
public void resetNotionAction()
```

##### `resetOneDriveAction` <a name="resetOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction"></a>

```java
public void resetOneDriveAction()
```

##### `resetOpenApiAction` <a name="resetOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction"></a>

```java
public void resetOpenApiAction()
```

##### `resetPagerDutyAction` <a name="resetPagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction"></a>

```java
public void resetPagerDutyAction()
```

##### `resetPerformFlowUiTask` <a name="resetPerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask"></a>

```java
public void resetPerformFlowUiTask()
```

##### `resetPrintReports` <a name="resetPrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```java
public void resetPrintReports()
```

##### `resetPublishWithoutApproval` <a name="resetPublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval"></a>

```java
public void resetPublishWithoutApproval()
```

##### `resetRenameSharedFolders` <a name="resetRenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```java
public void resetRenameSharedFolders()
```

##### `resetResearch` <a name="resetResearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch"></a>

```java
public void resetResearch()
```

##### `resetSalesforceAction` <a name="resetSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction"></a>

```java
public void resetSalesforceAction()
```

##### `resetSandPGlobalEnergyAction` <a name="resetSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction"></a>

```java
public void resetSandPGlobalEnergyAction()
```

##### `resetSandPgmiAction` <a name="resetSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction"></a>

```java
public void resetSandPgmiAction()
```

##### `resetSapBillOfMaterialAction` <a name="resetSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction"></a>

```java
public void resetSapBillOfMaterialAction()
```

##### `resetSapBusinessPartnerAction` <a name="resetSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction"></a>

```java
public void resetSapBusinessPartnerAction()
```

##### `resetSapMaterialStockAction` <a name="resetSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction"></a>

```java
public void resetSapMaterialStockAction()
```

##### `resetSapPhysicalInventoryAction` <a name="resetSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction"></a>

```java
public void resetSapPhysicalInventoryAction()
```

##### `resetSapProductMasterDataAction` <a name="resetSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction"></a>

```java
public void resetSapProductMasterDataAction()
```

##### `resetServiceNowAction` <a name="resetServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction"></a>

```java
public void resetServiceNowAction()
```

##### `resetShareAmazonBedrockArsAction` <a name="resetShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction"></a>

```java
public void resetShareAmazonBedrockArsAction()
```

##### `resetShareAmazonBedrockFsAction` <a name="resetShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction"></a>

```java
public void resetShareAmazonBedrockFsAction()
```

##### `resetShareAmazonBedrockKrsAction` <a name="resetShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction"></a>

```java
public void resetShareAmazonBedrockKrsAction()
```

##### `resetShareAmazonSThreeAction` <a name="resetShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction"></a>

```java
public void resetShareAmazonSThreeAction()
```

##### `resetShareAnalyses` <a name="resetShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```java
public void resetShareAnalyses()
```

##### `resetShareApps` <a name="resetShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps"></a>

```java
public void resetShareApps()
```

##### `resetShareAsanaAction` <a name="resetShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction"></a>

```java
public void resetShareAsanaAction()
```

##### `resetShareBambooHrAction` <a name="resetShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction"></a>

```java
public void resetShareBambooHrAction()
```

##### `resetShareBoxAgentAction` <a name="resetShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction"></a>

```java
public void resetShareBoxAgentAction()
```

##### `resetShareCanvaAgentAction` <a name="resetShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction"></a>

```java
public void resetShareCanvaAgentAction()
```

##### `resetShareChatAgents` <a name="resetShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents"></a>

```java
public void resetShareChatAgents()
```

##### `resetShareComprehendAction` <a name="resetShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction"></a>

```java
public void resetShareComprehendAction()
```

##### `resetShareComprehendMedicalAction` <a name="resetShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction"></a>

```java
public void resetShareComprehendMedicalAction()
```

##### `resetShareConfluenceAction` <a name="resetShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction"></a>

```java
public void resetShareConfluenceAction()
```

##### `resetShareDashboards` <a name="resetShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```java
public void resetShareDashboards()
```

##### `resetShareDatasets` <a name="resetShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```java
public void resetShareDatasets()
```

##### `resetShareDataSources` <a name="resetShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```java
public void resetShareDataSources()
```

##### `resetShareFactSetAction` <a name="resetShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction"></a>

```java
public void resetShareFactSetAction()
```

##### `resetShareGenericHttpAction` <a name="resetShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction"></a>

```java
public void resetShareGenericHttpAction()
```

##### `resetShareGithubAction` <a name="resetShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction"></a>

```java
public void resetShareGithubAction()
```

##### `resetShareGoogleCalendarAction` <a name="resetShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction"></a>

```java
public void resetShareGoogleCalendarAction()
```

##### `resetShareHubspotAction` <a name="resetShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction"></a>

```java
public void resetShareHubspotAction()
```

##### `resetShareHuggingFaceAction` <a name="resetShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction"></a>

```java
public void resetShareHuggingFaceAction()
```

##### `resetShareIntercomAction` <a name="resetShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction"></a>

```java
public void resetShareIntercomAction()
```

##### `resetShareJiraAction` <a name="resetShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction"></a>

```java
public void resetShareJiraAction()
```

##### `resetShareKnowledgeBases` <a name="resetShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases"></a>

```java
public void resetShareKnowledgeBases()
```

##### `resetShareLinearAction` <a name="resetShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction"></a>

```java
public void resetShareLinearAction()
```

##### `resetShareMcpAction` <a name="resetShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction"></a>

```java
public void resetShareMcpAction()
```

##### `resetShareMondayAction` <a name="resetShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction"></a>

```java
public void resetShareMondayAction()
```

##### `resetShareMsExchangeAction` <a name="resetShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction"></a>

```java
public void resetShareMsExchangeAction()
```

##### `resetShareMsTeamsAction` <a name="resetShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction"></a>

```java
public void resetShareMsTeamsAction()
```

##### `resetShareNewRelicAction` <a name="resetShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction"></a>

```java
public void resetShareNewRelicAction()
```

##### `resetShareNotionAction` <a name="resetShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction"></a>

```java
public void resetShareNotionAction()
```

##### `resetShareOneDriveAction` <a name="resetShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction"></a>

```java
public void resetShareOneDriveAction()
```

##### `resetShareOpenApiAction` <a name="resetShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction"></a>

```java
public void resetShareOpenApiAction()
```

##### `resetSharePagerDutyAction` <a name="resetSharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction"></a>

```java
public void resetSharePagerDutyAction()
```

##### `resetSharePointAction` <a name="resetSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction"></a>

```java
public void resetSharePointAction()
```

##### `resetShareSalesforceAction` <a name="resetShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction"></a>

```java
public void resetShareSalesforceAction()
```

##### `resetShareSandPGlobalEnergyAction` <a name="resetShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction"></a>

```java
public void resetShareSandPGlobalEnergyAction()
```

##### `resetShareSandPgmiAction` <a name="resetShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction"></a>

```java
public void resetShareSandPgmiAction()
```

##### `resetShareSapBillOfMaterialAction` <a name="resetShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction"></a>

```java
public void resetShareSapBillOfMaterialAction()
```

##### `resetShareSapBusinessPartnerAction` <a name="resetShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction"></a>

```java
public void resetShareSapBusinessPartnerAction()
```

##### `resetShareSapMaterialStockAction` <a name="resetShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction"></a>

```java
public void resetShareSapMaterialStockAction()
```

##### `resetShareSapPhysicalInventoryAction` <a name="resetShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction"></a>

```java
public void resetShareSapPhysicalInventoryAction()
```

##### `resetShareSapProductMasterDataAction` <a name="resetShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction"></a>

```java
public void resetShareSapProductMasterDataAction()
```

##### `resetShareServiceNowAction` <a name="resetShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction"></a>

```java
public void resetShareServiceNowAction()
```

##### `resetShareSharePointAction` <a name="resetShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction"></a>

```java
public void resetShareSharePointAction()
```

##### `resetShareSlackAction` <a name="resetShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction"></a>

```java
public void resetShareSlackAction()
```

##### `resetShareSmartsheetAction` <a name="resetShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction"></a>

```java
public void resetShareSmartsheetAction()
```

##### `resetShareSpaces` <a name="resetShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces"></a>

```java
public void resetShareSpaces()
```

##### `resetShareTextractAction` <a name="resetShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction"></a>

```java
public void resetShareTextractAction()
```

##### `resetShareZendeskAction` <a name="resetShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction"></a>

```java
public void resetShareZendeskAction()
```

##### `resetSlackAction` <a name="resetSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction"></a>

```java
public void resetSlackAction()
```

##### `resetSmartsheetAction` <a name="resetSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction"></a>

```java
public void resetSmartsheetAction()
```

##### `resetSpace` <a name="resetSpace" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace"></a>

```java
public void resetSpace()
```

##### `resetSubscribeDashboardEmailReports` <a name="resetSubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```java
public void resetSubscribeDashboardEmailReports()
```

##### `resetTextractAction` <a name="resetTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction"></a>

```java
public void resetTextractAction()
```

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic"></a>

```java
public void resetTopic()
```

##### `resetUseAgentWebSearch` <a name="resetUseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch"></a>

```java
public void resetUseAgentWebSearch()
```

##### `resetUseAmazonBedrockArsAction` <a name="resetUseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction"></a>

```java
public void resetUseAmazonBedrockArsAction()
```

##### `resetUseAmazonBedrockFsAction` <a name="resetUseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction"></a>

```java
public void resetUseAmazonBedrockFsAction()
```

##### `resetUseAmazonBedrockKrsAction` <a name="resetUseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction"></a>

```java
public void resetUseAmazonBedrockKrsAction()
```

##### `resetUseAmazonSThreeAction` <a name="resetUseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction"></a>

```java
public void resetUseAmazonSThreeAction()
```

##### `resetUseAsanaAction` <a name="resetUseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction"></a>

```java
public void resetUseAsanaAction()
```

##### `resetUseBambooHrAction` <a name="resetUseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction"></a>

```java
public void resetUseBambooHrAction()
```

##### `resetUseBedrockModels` <a name="resetUseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels"></a>

```java
public void resetUseBedrockModels()
```

##### `resetUseBoxAgentAction` <a name="resetUseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction"></a>

```java
public void resetUseBoxAgentAction()
```

##### `resetUseCanvaAgentAction` <a name="resetUseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction"></a>

```java
public void resetUseCanvaAgentAction()
```

##### `resetUseComprehendAction` <a name="resetUseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction"></a>

```java
public void resetUseComprehendAction()
```

##### `resetUseComprehendMedicalAction` <a name="resetUseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction"></a>

```java
public void resetUseComprehendMedicalAction()
```

##### `resetUseConfluenceAction` <a name="resetUseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction"></a>

```java
public void resetUseConfluenceAction()
```

##### `resetUseFactSetAction` <a name="resetUseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction"></a>

```java
public void resetUseFactSetAction()
```

##### `resetUseGenericHttpAction` <a name="resetUseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction"></a>

```java
public void resetUseGenericHttpAction()
```

##### `resetUseGithubAction` <a name="resetUseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction"></a>

```java
public void resetUseGithubAction()
```

##### `resetUseGoogleCalendarAction` <a name="resetUseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction"></a>

```java
public void resetUseGoogleCalendarAction()
```

##### `resetUseHubspotAction` <a name="resetUseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction"></a>

```java
public void resetUseHubspotAction()
```

##### `resetUseHuggingFaceAction` <a name="resetUseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction"></a>

```java
public void resetUseHuggingFaceAction()
```

##### `resetUseIntercomAction` <a name="resetUseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction"></a>

```java
public void resetUseIntercomAction()
```

##### `resetUseJiraAction` <a name="resetUseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction"></a>

```java
public void resetUseJiraAction()
```

##### `resetUseLinearAction` <a name="resetUseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction"></a>

```java
public void resetUseLinearAction()
```

##### `resetUseMcpAction` <a name="resetUseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction"></a>

```java
public void resetUseMcpAction()
```

##### `resetUseMondayAction` <a name="resetUseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction"></a>

```java
public void resetUseMondayAction()
```

##### `resetUseMsExchangeAction` <a name="resetUseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction"></a>

```java
public void resetUseMsExchangeAction()
```

##### `resetUseMsTeamsAction` <a name="resetUseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction"></a>

```java
public void resetUseMsTeamsAction()
```

##### `resetUseNewRelicAction` <a name="resetUseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction"></a>

```java
public void resetUseNewRelicAction()
```

##### `resetUseNotionAction` <a name="resetUseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction"></a>

```java
public void resetUseNotionAction()
```

##### `resetUseOneDriveAction` <a name="resetUseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction"></a>

```java
public void resetUseOneDriveAction()
```

##### `resetUseOpenApiAction` <a name="resetUseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction"></a>

```java
public void resetUseOpenApiAction()
```

##### `resetUsePagerDutyAction` <a name="resetUsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction"></a>

```java
public void resetUsePagerDutyAction()
```

##### `resetUseSalesforceAction` <a name="resetUseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction"></a>

```java
public void resetUseSalesforceAction()
```

##### `resetUseSandPGlobalEnergyAction` <a name="resetUseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction"></a>

```java
public void resetUseSandPGlobalEnergyAction()
```

##### `resetUseSandPgmiAction` <a name="resetUseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction"></a>

```java
public void resetUseSandPgmiAction()
```

##### `resetUseSapBillOfMaterialAction` <a name="resetUseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction"></a>

```java
public void resetUseSapBillOfMaterialAction()
```

##### `resetUseSapBusinessPartnerAction` <a name="resetUseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction"></a>

```java
public void resetUseSapBusinessPartnerAction()
```

##### `resetUseSapMaterialStockAction` <a name="resetUseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction"></a>

```java
public void resetUseSapMaterialStockAction()
```

##### `resetUseSapPhysicalInventoryAction` <a name="resetUseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction"></a>

```java
public void resetUseSapPhysicalInventoryAction()
```

##### `resetUseSapProductMasterDataAction` <a name="resetUseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction"></a>

```java
public void resetUseSapProductMasterDataAction()
```

##### `resetUseServiceNowAction` <a name="resetUseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction"></a>

```java
public void resetUseServiceNowAction()
```

##### `resetUseSharePointAction` <a name="resetUseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction"></a>

```java
public void resetUseSharePointAction()
```

##### `resetUseSlackAction` <a name="resetUseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction"></a>

```java
public void resetUseSlackAction()
```

##### `resetUseSmartsheetAction` <a name="resetUseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction"></a>

```java
public void resetUseSmartsheetAction()
```

##### `resetUseTextractAction` <a name="resetUseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction"></a>

```java
public void resetUseTextractAction()
```

##### `resetUseZendeskAction` <a name="resetUseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction"></a>

```java
public void resetUseZendeskAction()
```

##### `resetViewAccountSpiceCapacity` <a name="resetViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```java
public void resetViewAccountSpiceCapacity()
```

##### `resetZendeskAction` <a name="resetZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction"></a>

```java
public void resetZendeskAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput">accessAppsNativeDataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">addOrRunAnomalyDetectionForAnalysesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput">amazonBedrockArsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput">amazonBedrockFsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput">amazonBedrockKrsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput">amazonSThreeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput">analysisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput">approveFlowShareRequestsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput">appsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput">asanaActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput">automateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput">bambooHrActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput">boxAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput">buildCalculatedFieldWithQInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput">canvaAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput">chatAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput">comprehendActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput">comprehendMedicalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput">confluenceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput">createAndUpdateAmazonBedrockArsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput">createAndUpdateAmazonBedrockFsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput">createAndUpdateAmazonBedrockKrsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput">createAndUpdateAmazonSThreeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput">createAndUpdateAppsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput">createAndUpdateAsanaActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput">createAndUpdateBambooHrActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput">createAndUpdateBoxAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput">createAndUpdateCanvaAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput">createAndUpdateComprehendActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput">createAndUpdateComprehendMedicalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput">createAndUpdateConfluenceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">createAndUpdateDashboardEmailReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">createAndUpdateDatasetsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">createAndUpdateDataSourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput">createAndUpdateFactSetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput">createAndUpdateGenericHttpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput">createAndUpdateGithubActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput">createAndUpdateGoogleCalendarActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput">createAndUpdateHubspotActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput">createAndUpdateHuggingFaceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput">createAndUpdateIntercomActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput">createAndUpdateJiraActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput">createAndUpdateKnowledgeBasesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput">createAndUpdateLinearActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput">createAndUpdateMcpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput">createAndUpdateMondayActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput">createAndUpdateMsExchangeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput">createAndUpdateMsTeamsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput">createAndUpdateNewRelicActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput">createAndUpdateNotionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput">createAndUpdateOneDriveActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput">createAndUpdateOpenApiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput">createAndUpdatePagerDutyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput">createAndUpdateSalesforceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput">createAndUpdateSandPGlobalEnergyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput">createAndUpdateSandPgmiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput">createAndUpdateSapBillOfMaterialActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput">createAndUpdateSapBusinessPartnerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput">createAndUpdateSapMaterialStockActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput">createAndUpdateSapPhysicalInventoryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput">createAndUpdateSapProductMasterDataActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput">createAndUpdateServiceNowActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput">createAndUpdateSharePointActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput">createAndUpdateSlackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput">createAndUpdateSmartsheetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput">createAndUpdateTextractActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">createAndUpdateThemesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">createAndUpdateThresholdAlertsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput">createAndUpdateZendeskActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput">createChatAgentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput">createDashboardExecutiveSummaryWithQInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">createSharedFoldersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput">createSpacesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">createSpiceDatasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput">dashboardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput">editVisualWithQInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">exportToCsvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">exportToCsvInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">exportToExcelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">exportToExcelInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">exportToPdfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">exportToPdfInScheduledReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput">extensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput">factSetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput">flowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput">genericHttpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput">githubActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput">googleCalendarActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput">hubspotActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput">huggingFaceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">includeContentInScheduledReportsEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput">intercomActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput">invokeAppsAiInferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput">jiraActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput">knowledgeBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput">linearActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput">manageSharedFoldersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput">mcpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput">mondayActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput">msExchangeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput">msTeamsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput">newRelicActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput">notionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput">oneDriveActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput">openApiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput">pagerDutyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput">performFlowUiTaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">printReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput">publishWithoutApprovalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">renameSharedFoldersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput">researchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput">salesforceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput">sandPGlobalEnergyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput">sandPgmiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput">sapBillOfMaterialActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput">sapBusinessPartnerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput">sapMaterialStockActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput">sapPhysicalInventoryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput">sapProductMasterDataActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput">serviceNowActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput">shareAmazonBedrockArsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput">shareAmazonBedrockFsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput">shareAmazonBedrockKrsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput">shareAmazonSThreeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">shareAnalysesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput">shareAppsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput">shareAsanaActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput">shareBambooHrActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput">shareBoxAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput">shareCanvaAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput">shareChatAgentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput">shareComprehendActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput">shareComprehendMedicalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput">shareConfluenceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">shareDashboardsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">shareDatasetsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">shareDataSourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput">shareFactSetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput">shareGenericHttpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput">shareGithubActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput">shareGoogleCalendarActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput">shareHubspotActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput">shareHuggingFaceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput">shareIntercomActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput">shareJiraActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput">shareKnowledgeBasesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput">shareLinearActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput">shareMcpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput">shareMondayActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput">shareMsExchangeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput">shareMsTeamsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput">shareNewRelicActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput">shareNotionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput">shareOneDriveActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput">shareOpenApiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput">sharePagerDutyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput">sharePointActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput">shareSalesforceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput">shareSandPGlobalEnergyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput">shareSandPgmiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput">shareSapBillOfMaterialActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput">shareSapBusinessPartnerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput">shareSapMaterialStockActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput">shareSapPhysicalInventoryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput">shareSapProductMasterDataActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput">shareServiceNowActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput">shareSharePointActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput">shareSlackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput">shareSmartsheetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput">shareSpacesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput">shareTextractActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput">shareZendeskActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput">slackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput">smartsheetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput">spaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">subscribeDashboardEmailReportsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput">textractActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput">useAgentWebSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput">useAmazonBedrockArsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput">useAmazonBedrockFsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput">useAmazonBedrockKrsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput">useAmazonSThreeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput">useAsanaActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput">useBambooHrActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput">useBedrockModelsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput">useBoxAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput">useCanvaAgentActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput">useComprehendActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput">useComprehendMedicalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput">useConfluenceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput">useFactSetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput">useGenericHttpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput">useGithubActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput">useGoogleCalendarActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput">useHubspotActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput">useHuggingFaceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput">useIntercomActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput">useJiraActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput">useLinearActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput">useMcpActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput">useMondayActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput">useMsExchangeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput">useMsTeamsActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput">useNewRelicActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput">useNotionActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput">useOneDriveActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput">useOpenApiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput">usePagerDutyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput">useSalesforceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput">useSandPGlobalEnergyActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput">useSandPgmiActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput">useSapBillOfMaterialActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput">useSapBusinessPartnerActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput">useSapMaterialStockActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput">useSapPhysicalInventoryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput">useSapProductMasterDataActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput">useServiceNowActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput">useSharePointActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput">useSlackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput">useSmartsheetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput">useTextractActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput">useZendeskActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">viewAccountSpiceCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput">zendeskActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">accessAppsNativeDataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">amazonBedrockArsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">amazonBedrockFsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">amazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">amazonSThreeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">analysis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">approveFlowShareRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">apps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">asanaAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">automate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">bambooHrAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">boxAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">buildCalculatedFieldWithQ</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">canvaAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">chatAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">comprehendAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">comprehendMedicalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">confluenceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">createAndUpdateAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">createAndUpdateAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">createAndUpdateAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">createAndUpdateAmazonSThreeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">createAndUpdateApps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">createAndUpdateAsanaAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">createAndUpdateBambooHrAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">createAndUpdateBoxAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">createAndUpdateCanvaAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">createAndUpdateComprehendAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">createAndUpdateComprehendMedicalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">createAndUpdateConfluenceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">createAndUpdateFactSetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">createAndUpdateGenericHttpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">createAndUpdateGithubAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">createAndUpdateGoogleCalendarAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">createAndUpdateHubspotAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">createAndUpdateHuggingFaceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">createAndUpdateIntercomAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">createAndUpdateJiraAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">createAndUpdateKnowledgeBases</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">createAndUpdateLinearAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">createAndUpdateMcpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">createAndUpdateMondayAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">createAndUpdateMsExchangeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">createAndUpdateMsTeamsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">createAndUpdateNewRelicAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">createAndUpdateNotionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">createAndUpdateOneDriveAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">createAndUpdateOpenApiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">createAndUpdatePagerDutyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">createAndUpdateSalesforceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">createAndUpdateSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">createAndUpdateSandPgmiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">createAndUpdateSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">createAndUpdateSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">createAndUpdateSapMaterialStockAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">createAndUpdateSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">createAndUpdateSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">createAndUpdateServiceNowAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">createAndUpdateSharePointAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">createAndUpdateSlackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">createAndUpdateSmartsheetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">createAndUpdateTextractAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">createAndUpdateZendeskAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">createChatAgents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">createDashboardExecutiveSummaryWithQ</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">createSharedFolders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">createSpaces</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">createSpiceDataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">dashboard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">editVisualWithQ</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">exportToCsv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">exportToExcel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">exportToPdf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">extension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">factSetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">flow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">genericHttpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">githubAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">googleCalendarAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">hubspotAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">huggingFaceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">intercomAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">invokeAppsAiInference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">jiraAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">knowledgeBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">linearAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">manageSharedFolders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">mcpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">mondayAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">msExchangeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">msTeamsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">newRelicAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">notionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">oneDriveAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">openApiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">pagerDutyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">performFlowUiTask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">printReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">publishWithoutApproval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">renameSharedFolders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research">research</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">salesforceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">sandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">sandPgmiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">sapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">sapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">sapMaterialStockAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">sapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">sapProductMasterDataAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">serviceNowAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">shareAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">shareAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">shareAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">shareAmazonSThreeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">shareAnalyses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">shareApps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">shareAsanaAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">shareBambooHrAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">shareBoxAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">shareCanvaAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">shareChatAgents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">shareComprehendAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">shareComprehendMedicalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">shareConfluenceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">shareDashboards</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">shareDatasets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">shareDataSources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">shareFactSetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">shareGenericHttpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">shareGithubAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">shareGoogleCalendarAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">shareHubspotAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">shareHuggingFaceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">shareIntercomAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">shareJiraAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">shareKnowledgeBases</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">shareLinearAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">shareMcpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">shareMondayAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">shareMsExchangeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">shareMsTeamsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">shareNewRelicAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">shareNotionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">shareOneDriveAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">shareOpenApiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">sharePagerDutyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">sharePointAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">shareSalesforceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">shareSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">shareSandPgmiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">shareSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">shareSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">shareSapMaterialStockAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">shareSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">shareSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">shareServiceNowAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">shareSharePointAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">shareSlackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">shareSmartsheetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">shareSpaces</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">shareTextractAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">shareZendeskAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">slackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">smartsheetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space">space</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">textractAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">useAgentWebSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">useAmazonBedrockArsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">useAmazonBedrockFsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">useAmazonBedrockKrsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">useAmazonSThreeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">useAsanaAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">useBambooHrAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">useBedrockModels</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">useBoxAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">useCanvaAgentAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">useComprehendAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">useComprehendMedicalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">useConfluenceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">useFactSetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">useGenericHttpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">useGithubAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">useGoogleCalendarAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">useHubspotAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">useHuggingFaceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">useIntercomAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">useJiraAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">useLinearAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">useMcpAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">useMondayAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">useMsExchangeAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">useMsTeamsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">useNewRelicAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">useNotionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">useOneDriveAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">useOpenApiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">usePagerDutyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">useSalesforceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">useSandPGlobalEnergyAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">useSandPgmiAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">useSapBillOfMaterialAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">useSapBusinessPartnerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">useSapMaterialStockAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">useSapPhysicalInventoryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">useSapProductMasterDataAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">useServiceNowAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">useSharePointAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">useSlackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">useSmartsheetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">useTextractAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">useZendeskAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">zendeskAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessAppsNativeDataStoreInput`<sup>Optional</sup> <a name="accessAppsNativeDataStoreInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput"></a>

```java
public java.lang.String getAccessAppsNativeDataStoreInput();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `addOrRunAnomalyDetectionForAnalysesInput`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalysesInput();
```

- *Type:* java.lang.String

---

##### `amazonBedrockArsActionInput`<sup>Optional</sup> <a name="amazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput"></a>

```java
public java.lang.String getAmazonBedrockArsActionInput();
```

- *Type:* java.lang.String

---

##### `amazonBedrockFsActionInput`<sup>Optional</sup> <a name="amazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput"></a>

```java
public java.lang.String getAmazonBedrockFsActionInput();
```

- *Type:* java.lang.String

---

##### `amazonBedrockKrsActionInput`<sup>Optional</sup> <a name="amazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput"></a>

```java
public java.lang.String getAmazonBedrockKrsActionInput();
```

- *Type:* java.lang.String

---

##### `amazonSThreeActionInput`<sup>Optional</sup> <a name="amazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput"></a>

```java
public java.lang.String getAmazonSThreeActionInput();
```

- *Type:* java.lang.String

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput"></a>

```java
public java.lang.String getAnalysisInput();
```

- *Type:* java.lang.String

---

##### `approveFlowShareRequestsInput`<sup>Optional</sup> <a name="approveFlowShareRequestsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput"></a>

```java
public java.lang.String getApproveFlowShareRequestsInput();
```

- *Type:* java.lang.String

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput"></a>

```java
public java.lang.String getAppsInput();
```

- *Type:* java.lang.String

---

##### `asanaActionInput`<sup>Optional</sup> <a name="asanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput"></a>

```java
public java.lang.String getAsanaActionInput();
```

- *Type:* java.lang.String

---

##### `automateInput`<sup>Optional</sup> <a name="automateInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput"></a>

```java
public java.lang.String getAutomateInput();
```

- *Type:* java.lang.String

---

##### `bambooHrActionInput`<sup>Optional</sup> <a name="bambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput"></a>

```java
public java.lang.String getBambooHrActionInput();
```

- *Type:* java.lang.String

---

##### `boxAgentActionInput`<sup>Optional</sup> <a name="boxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput"></a>

```java
public java.lang.String getBoxAgentActionInput();
```

- *Type:* java.lang.String

---

##### `buildCalculatedFieldWithQInput`<sup>Optional</sup> <a name="buildCalculatedFieldWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput"></a>

```java
public java.lang.String getBuildCalculatedFieldWithQInput();
```

- *Type:* java.lang.String

---

##### `canvaAgentActionInput`<sup>Optional</sup> <a name="canvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput"></a>

```java
public java.lang.String getCanvaAgentActionInput();
```

- *Type:* java.lang.String

---

##### `chatAgentInput`<sup>Optional</sup> <a name="chatAgentInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput"></a>

```java
public java.lang.String getChatAgentInput();
```

- *Type:* java.lang.String

---

##### `comprehendActionInput`<sup>Optional</sup> <a name="comprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput"></a>

```java
public java.lang.String getComprehendActionInput();
```

- *Type:* java.lang.String

---

##### `comprehendMedicalActionInput`<sup>Optional</sup> <a name="comprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput"></a>

```java
public java.lang.String getComprehendMedicalActionInput();
```

- *Type:* java.lang.String

---

##### `confluenceActionInput`<sup>Optional</sup> <a name="confluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput"></a>

```java
public java.lang.String getConfluenceActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockArsActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockFsActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockKrsActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonSThreeActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput"></a>

```java
public java.lang.String getCreateAndUpdateAmazonSThreeActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAppsInput`<sup>Optional</sup> <a name="createAndUpdateAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput"></a>

```java
public java.lang.String getCreateAndUpdateAppsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAsanaActionInput`<sup>Optional</sup> <a name="createAndUpdateAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput"></a>

```java
public java.lang.String getCreateAndUpdateAsanaActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateBambooHrActionInput`<sup>Optional</sup> <a name="createAndUpdateBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput"></a>

```java
public java.lang.String getCreateAndUpdateBambooHrActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateBoxAgentActionInput`<sup>Optional</sup> <a name="createAndUpdateBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput"></a>

```java
public java.lang.String getCreateAndUpdateBoxAgentActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateCanvaAgentActionInput`<sup>Optional</sup> <a name="createAndUpdateCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput"></a>

```java
public java.lang.String getCreateAndUpdateCanvaAgentActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateComprehendActionInput`<sup>Optional</sup> <a name="createAndUpdateComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput"></a>

```java
public java.lang.String getCreateAndUpdateComprehendActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateComprehendMedicalActionInput`<sup>Optional</sup> <a name="createAndUpdateComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput"></a>

```java
public java.lang.String getCreateAndUpdateComprehendMedicalActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateConfluenceActionInput`<sup>Optional</sup> <a name="createAndUpdateConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput"></a>

```java
public java.lang.String getCreateAndUpdateConfluenceActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDashboardEmailReportsInput`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReportsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDatasetsInput`<sup>Optional</sup> <a name="createAndUpdateDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```java
public java.lang.String getCreateAndUpdateDatasetsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDataSourcesInput`<sup>Optional</sup> <a name="createAndUpdateDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```java
public java.lang.String getCreateAndUpdateDataSourcesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateFactSetActionInput`<sup>Optional</sup> <a name="createAndUpdateFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput"></a>

```java
public java.lang.String getCreateAndUpdateFactSetActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGenericHttpActionInput`<sup>Optional</sup> <a name="createAndUpdateGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput"></a>

```java
public java.lang.String getCreateAndUpdateGenericHttpActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGithubActionInput`<sup>Optional</sup> <a name="createAndUpdateGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput"></a>

```java
public java.lang.String getCreateAndUpdateGithubActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGoogleCalendarActionInput`<sup>Optional</sup> <a name="createAndUpdateGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput"></a>

```java
public java.lang.String getCreateAndUpdateGoogleCalendarActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateHubspotActionInput`<sup>Optional</sup> <a name="createAndUpdateHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput"></a>

```java
public java.lang.String getCreateAndUpdateHubspotActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateHuggingFaceActionInput`<sup>Optional</sup> <a name="createAndUpdateHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput"></a>

```java
public java.lang.String getCreateAndUpdateHuggingFaceActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateIntercomActionInput`<sup>Optional</sup> <a name="createAndUpdateIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput"></a>

```java
public java.lang.String getCreateAndUpdateIntercomActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateJiraActionInput`<sup>Optional</sup> <a name="createAndUpdateJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput"></a>

```java
public java.lang.String getCreateAndUpdateJiraActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateKnowledgeBasesInput`<sup>Optional</sup> <a name="createAndUpdateKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput"></a>

```java
public java.lang.String getCreateAndUpdateKnowledgeBasesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateLinearActionInput`<sup>Optional</sup> <a name="createAndUpdateLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput"></a>

```java
public java.lang.String getCreateAndUpdateLinearActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMcpActionInput`<sup>Optional</sup> <a name="createAndUpdateMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput"></a>

```java
public java.lang.String getCreateAndUpdateMcpActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMondayActionInput`<sup>Optional</sup> <a name="createAndUpdateMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput"></a>

```java
public java.lang.String getCreateAndUpdateMondayActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMsExchangeActionInput`<sup>Optional</sup> <a name="createAndUpdateMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput"></a>

```java
public java.lang.String getCreateAndUpdateMsExchangeActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMsTeamsActionInput`<sup>Optional</sup> <a name="createAndUpdateMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput"></a>

```java
public java.lang.String getCreateAndUpdateMsTeamsActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateNewRelicActionInput`<sup>Optional</sup> <a name="createAndUpdateNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput"></a>

```java
public java.lang.String getCreateAndUpdateNewRelicActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateNotionActionInput`<sup>Optional</sup> <a name="createAndUpdateNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput"></a>

```java
public java.lang.String getCreateAndUpdateNotionActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateOneDriveActionInput`<sup>Optional</sup> <a name="createAndUpdateOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput"></a>

```java
public java.lang.String getCreateAndUpdateOneDriveActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateOpenApiActionInput`<sup>Optional</sup> <a name="createAndUpdateOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput"></a>

```java
public java.lang.String getCreateAndUpdateOpenApiActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdatePagerDutyActionInput`<sup>Optional</sup> <a name="createAndUpdatePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput"></a>

```java
public java.lang.String getCreateAndUpdatePagerDutyActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSalesforceActionInput`<sup>Optional</sup> <a name="createAndUpdateSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSalesforceActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="createAndUpdateSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSandPGlobalEnergyActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSandPgmiActionInput`<sup>Optional</sup> <a name="createAndUpdateSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSandPgmiActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="createAndUpdateSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSapBillOfMaterialActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="createAndUpdateSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSapBusinessPartnerActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapMaterialStockActionInput`<sup>Optional</sup> <a name="createAndUpdateSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSapMaterialStockActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="createAndUpdateSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSapPhysicalInventoryActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapProductMasterDataActionInput`<sup>Optional</sup> <a name="createAndUpdateSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSapProductMasterDataActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateServiceNowActionInput`<sup>Optional</sup> <a name="createAndUpdateServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput"></a>

```java
public java.lang.String getCreateAndUpdateServiceNowActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSharePointActionInput`<sup>Optional</sup> <a name="createAndUpdateSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSharePointActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSlackActionInput`<sup>Optional</sup> <a name="createAndUpdateSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSlackActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSmartsheetActionInput`<sup>Optional</sup> <a name="createAndUpdateSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput"></a>

```java
public java.lang.String getCreateAndUpdateSmartsheetActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateTextractActionInput`<sup>Optional</sup> <a name="createAndUpdateTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput"></a>

```java
public java.lang.String getCreateAndUpdateTextractActionInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThemesInput`<sup>Optional</sup> <a name="createAndUpdateThemesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```java
public java.lang.String getCreateAndUpdateThemesInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThresholdAlertsInput`<sup>Optional</sup> <a name="createAndUpdateThresholdAlertsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlertsInput();
```

- *Type:* java.lang.String

---

##### `createAndUpdateZendeskActionInput`<sup>Optional</sup> <a name="createAndUpdateZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput"></a>

```java
public java.lang.String getCreateAndUpdateZendeskActionInput();
```

- *Type:* java.lang.String

---

##### `createChatAgentsInput`<sup>Optional</sup> <a name="createChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput"></a>

```java
public java.lang.String getCreateChatAgentsInput();
```

- *Type:* java.lang.String

---

##### `createDashboardExecutiveSummaryWithQInput`<sup>Optional</sup> <a name="createDashboardExecutiveSummaryWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput"></a>

```java
public java.lang.String getCreateDashboardExecutiveSummaryWithQInput();
```

- *Type:* java.lang.String

---

##### `createSharedFoldersInput`<sup>Optional</sup> <a name="createSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```java
public java.lang.String getCreateSharedFoldersInput();
```

- *Type:* java.lang.String

---

##### `createSpacesInput`<sup>Optional</sup> <a name="createSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput"></a>

```java
public java.lang.String getCreateSpacesInput();
```

- *Type:* java.lang.String

---

##### `createSpiceDatasetInput`<sup>Optional</sup> <a name="createSpiceDatasetInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```java
public java.lang.String getCreateSpiceDatasetInput();
```

- *Type:* java.lang.String

---

##### `dashboardInput`<sup>Optional</sup> <a name="dashboardInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput"></a>

```java
public java.lang.String getDashboardInput();
```

- *Type:* java.lang.String

---

##### `editVisualWithQInput`<sup>Optional</sup> <a name="editVisualWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput"></a>

```java
public java.lang.String getEditVisualWithQInput();
```

- *Type:* java.lang.String

---

##### `exportToCsvInput`<sup>Optional</sup> <a name="exportToCsvInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```java
public java.lang.String getExportToCsvInput();
```

- *Type:* java.lang.String

---

##### `exportToCsvInScheduledReportsInput`<sup>Optional</sup> <a name="exportToCsvInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```java
public java.lang.String getExportToCsvInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `exportToExcelInput`<sup>Optional</sup> <a name="exportToExcelInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```java
public java.lang.String getExportToExcelInput();
```

- *Type:* java.lang.String

---

##### `exportToExcelInScheduledReportsInput`<sup>Optional</sup> <a name="exportToExcelInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```java
public java.lang.String getExportToExcelInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `exportToPdfInput`<sup>Optional</sup> <a name="exportToPdfInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```java
public java.lang.String getExportToPdfInput();
```

- *Type:* java.lang.String

---

##### `exportToPdfInScheduledReportsInput`<sup>Optional</sup> <a name="exportToPdfInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```java
public java.lang.String getExportToPdfInScheduledReportsInput();
```

- *Type:* java.lang.String

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput"></a>

```java
public java.lang.String getExtensionInput();
```

- *Type:* java.lang.String

---

##### `factSetActionInput`<sup>Optional</sup> <a name="factSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput"></a>

```java
public java.lang.String getFactSetActionInput();
```

- *Type:* java.lang.String

---

##### `flowInput`<sup>Optional</sup> <a name="flowInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput"></a>

```java
public java.lang.String getFlowInput();
```

- *Type:* java.lang.String

---

##### `genericHttpActionInput`<sup>Optional</sup> <a name="genericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput"></a>

```java
public java.lang.String getGenericHttpActionInput();
```

- *Type:* java.lang.String

---

##### `githubActionInput`<sup>Optional</sup> <a name="githubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput"></a>

```java
public java.lang.String getGithubActionInput();
```

- *Type:* java.lang.String

---

##### `googleCalendarActionInput`<sup>Optional</sup> <a name="googleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput"></a>

```java
public java.lang.String getGoogleCalendarActionInput();
```

- *Type:* java.lang.String

---

##### `hubspotActionInput`<sup>Optional</sup> <a name="hubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput"></a>

```java
public java.lang.String getHubspotActionInput();
```

- *Type:* java.lang.String

---

##### `huggingFaceActionInput`<sup>Optional</sup> <a name="huggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput"></a>

```java
public java.lang.String getHuggingFaceActionInput();
```

- *Type:* java.lang.String

---

##### `includeContentInScheduledReportsEmailInput`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmailInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmailInput();
```

- *Type:* java.lang.String

---

##### `intercomActionInput`<sup>Optional</sup> <a name="intercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput"></a>

```java
public java.lang.String getIntercomActionInput();
```

- *Type:* java.lang.String

---

##### `invokeAppsAiInferenceInput`<sup>Optional</sup> <a name="invokeAppsAiInferenceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput"></a>

```java
public java.lang.String getInvokeAppsAiInferenceInput();
```

- *Type:* java.lang.String

---

##### `jiraActionInput`<sup>Optional</sup> <a name="jiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput"></a>

```java
public java.lang.String getJiraActionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseInput`<sup>Optional</sup> <a name="knowledgeBaseInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput"></a>

```java
public java.lang.String getKnowledgeBaseInput();
```

- *Type:* java.lang.String

---

##### `linearActionInput`<sup>Optional</sup> <a name="linearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput"></a>

```java
public java.lang.String getLinearActionInput();
```

- *Type:* java.lang.String

---

##### `manageSharedFoldersInput`<sup>Optional</sup> <a name="manageSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput"></a>

```java
public java.lang.String getManageSharedFoldersInput();
```

- *Type:* java.lang.String

---

##### `mcpActionInput`<sup>Optional</sup> <a name="mcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput"></a>

```java
public java.lang.String getMcpActionInput();
```

- *Type:* java.lang.String

---

##### `mondayActionInput`<sup>Optional</sup> <a name="mondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput"></a>

```java
public java.lang.String getMondayActionInput();
```

- *Type:* java.lang.String

---

##### `msExchangeActionInput`<sup>Optional</sup> <a name="msExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput"></a>

```java
public java.lang.String getMsExchangeActionInput();
```

- *Type:* java.lang.String

---

##### `msTeamsActionInput`<sup>Optional</sup> <a name="msTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput"></a>

```java
public java.lang.String getMsTeamsActionInput();
```

- *Type:* java.lang.String

---

##### `newRelicActionInput`<sup>Optional</sup> <a name="newRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput"></a>

```java
public java.lang.String getNewRelicActionInput();
```

- *Type:* java.lang.String

---

##### `notionActionInput`<sup>Optional</sup> <a name="notionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput"></a>

```java
public java.lang.String getNotionActionInput();
```

- *Type:* java.lang.String

---

##### `oneDriveActionInput`<sup>Optional</sup> <a name="oneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput"></a>

```java
public java.lang.String getOneDriveActionInput();
```

- *Type:* java.lang.String

---

##### `openApiActionInput`<sup>Optional</sup> <a name="openApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput"></a>

```java
public java.lang.String getOpenApiActionInput();
```

- *Type:* java.lang.String

---

##### `pagerDutyActionInput`<sup>Optional</sup> <a name="pagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput"></a>

```java
public java.lang.String getPagerDutyActionInput();
```

- *Type:* java.lang.String

---

##### `performFlowUiTaskInput`<sup>Optional</sup> <a name="performFlowUiTaskInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput"></a>

```java
public java.lang.String getPerformFlowUiTaskInput();
```

- *Type:* java.lang.String

---

##### `printReportsInput`<sup>Optional</sup> <a name="printReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```java
public java.lang.String getPrintReportsInput();
```

- *Type:* java.lang.String

---

##### `publishWithoutApprovalInput`<sup>Optional</sup> <a name="publishWithoutApprovalInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput"></a>

```java
public java.lang.String getPublishWithoutApprovalInput();
```

- *Type:* java.lang.String

---

##### `renameSharedFoldersInput`<sup>Optional</sup> <a name="renameSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```java
public java.lang.String getRenameSharedFoldersInput();
```

- *Type:* java.lang.String

---

##### `researchInput`<sup>Optional</sup> <a name="researchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput"></a>

```java
public java.lang.String getResearchInput();
```

- *Type:* java.lang.String

---

##### `salesforceActionInput`<sup>Optional</sup> <a name="salesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput"></a>

```java
public java.lang.String getSalesforceActionInput();
```

- *Type:* java.lang.String

---

##### `sandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="sandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput"></a>

```java
public java.lang.String getSandPGlobalEnergyActionInput();
```

- *Type:* java.lang.String

---

##### `sandPgmiActionInput`<sup>Optional</sup> <a name="sandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput"></a>

```java
public java.lang.String getSandPgmiActionInput();
```

- *Type:* java.lang.String

---

##### `sapBillOfMaterialActionInput`<sup>Optional</sup> <a name="sapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput"></a>

```java
public java.lang.String getSapBillOfMaterialActionInput();
```

- *Type:* java.lang.String

---

##### `sapBusinessPartnerActionInput`<sup>Optional</sup> <a name="sapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput"></a>

```java
public java.lang.String getSapBusinessPartnerActionInput();
```

- *Type:* java.lang.String

---

##### `sapMaterialStockActionInput`<sup>Optional</sup> <a name="sapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput"></a>

```java
public java.lang.String getSapMaterialStockActionInput();
```

- *Type:* java.lang.String

---

##### `sapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="sapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput"></a>

```java
public java.lang.String getSapPhysicalInventoryActionInput();
```

- *Type:* java.lang.String

---

##### `sapProductMasterDataActionInput`<sup>Optional</sup> <a name="sapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput"></a>

```java
public java.lang.String getSapProductMasterDataActionInput();
```

- *Type:* java.lang.String

---

##### `serviceNowActionInput`<sup>Optional</sup> <a name="serviceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput"></a>

```java
public java.lang.String getServiceNowActionInput();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput"></a>

```java
public java.lang.String getShareAmazonBedrockArsActionInput();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput"></a>

```java
public java.lang.String getShareAmazonBedrockFsActionInput();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput"></a>

```java
public java.lang.String getShareAmazonBedrockKrsActionInput();
```

- *Type:* java.lang.String

---

##### `shareAmazonSThreeActionInput`<sup>Optional</sup> <a name="shareAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput"></a>

```java
public java.lang.String getShareAmazonSThreeActionInput();
```

- *Type:* java.lang.String

---

##### `shareAnalysesInput`<sup>Optional</sup> <a name="shareAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```java
public java.lang.String getShareAnalysesInput();
```

- *Type:* java.lang.String

---

##### `shareAppsInput`<sup>Optional</sup> <a name="shareAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput"></a>

```java
public java.lang.String getShareAppsInput();
```

- *Type:* java.lang.String

---

##### `shareAsanaActionInput`<sup>Optional</sup> <a name="shareAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput"></a>

```java
public java.lang.String getShareAsanaActionInput();
```

- *Type:* java.lang.String

---

##### `shareBambooHrActionInput`<sup>Optional</sup> <a name="shareBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput"></a>

```java
public java.lang.String getShareBambooHrActionInput();
```

- *Type:* java.lang.String

---

##### `shareBoxAgentActionInput`<sup>Optional</sup> <a name="shareBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput"></a>

```java
public java.lang.String getShareBoxAgentActionInput();
```

- *Type:* java.lang.String

---

##### `shareCanvaAgentActionInput`<sup>Optional</sup> <a name="shareCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput"></a>

```java
public java.lang.String getShareCanvaAgentActionInput();
```

- *Type:* java.lang.String

---

##### `shareChatAgentsInput`<sup>Optional</sup> <a name="shareChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput"></a>

```java
public java.lang.String getShareChatAgentsInput();
```

- *Type:* java.lang.String

---

##### `shareComprehendActionInput`<sup>Optional</sup> <a name="shareComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput"></a>

```java
public java.lang.String getShareComprehendActionInput();
```

- *Type:* java.lang.String

---

##### `shareComprehendMedicalActionInput`<sup>Optional</sup> <a name="shareComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput"></a>

```java
public java.lang.String getShareComprehendMedicalActionInput();
```

- *Type:* java.lang.String

---

##### `shareConfluenceActionInput`<sup>Optional</sup> <a name="shareConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput"></a>

```java
public java.lang.String getShareConfluenceActionInput();
```

- *Type:* java.lang.String

---

##### `shareDashboardsInput`<sup>Optional</sup> <a name="shareDashboardsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```java
public java.lang.String getShareDashboardsInput();
```

- *Type:* java.lang.String

---

##### `shareDatasetsInput`<sup>Optional</sup> <a name="shareDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```java
public java.lang.String getShareDatasetsInput();
```

- *Type:* java.lang.String

---

##### `shareDataSourcesInput`<sup>Optional</sup> <a name="shareDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```java
public java.lang.String getShareDataSourcesInput();
```

- *Type:* java.lang.String

---

##### `shareFactSetActionInput`<sup>Optional</sup> <a name="shareFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput"></a>

```java
public java.lang.String getShareFactSetActionInput();
```

- *Type:* java.lang.String

---

##### `shareGenericHttpActionInput`<sup>Optional</sup> <a name="shareGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput"></a>

```java
public java.lang.String getShareGenericHttpActionInput();
```

- *Type:* java.lang.String

---

##### `shareGithubActionInput`<sup>Optional</sup> <a name="shareGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput"></a>

```java
public java.lang.String getShareGithubActionInput();
```

- *Type:* java.lang.String

---

##### `shareGoogleCalendarActionInput`<sup>Optional</sup> <a name="shareGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput"></a>

```java
public java.lang.String getShareGoogleCalendarActionInput();
```

- *Type:* java.lang.String

---

##### `shareHubspotActionInput`<sup>Optional</sup> <a name="shareHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput"></a>

```java
public java.lang.String getShareHubspotActionInput();
```

- *Type:* java.lang.String

---

##### `shareHuggingFaceActionInput`<sup>Optional</sup> <a name="shareHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput"></a>

```java
public java.lang.String getShareHuggingFaceActionInput();
```

- *Type:* java.lang.String

---

##### `shareIntercomActionInput`<sup>Optional</sup> <a name="shareIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput"></a>

```java
public java.lang.String getShareIntercomActionInput();
```

- *Type:* java.lang.String

---

##### `shareJiraActionInput`<sup>Optional</sup> <a name="shareJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput"></a>

```java
public java.lang.String getShareJiraActionInput();
```

- *Type:* java.lang.String

---

##### `shareKnowledgeBasesInput`<sup>Optional</sup> <a name="shareKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput"></a>

```java
public java.lang.String getShareKnowledgeBasesInput();
```

- *Type:* java.lang.String

---

##### `shareLinearActionInput`<sup>Optional</sup> <a name="shareLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput"></a>

```java
public java.lang.String getShareLinearActionInput();
```

- *Type:* java.lang.String

---

##### `shareMcpActionInput`<sup>Optional</sup> <a name="shareMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput"></a>

```java
public java.lang.String getShareMcpActionInput();
```

- *Type:* java.lang.String

---

##### `shareMondayActionInput`<sup>Optional</sup> <a name="shareMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput"></a>

```java
public java.lang.String getShareMondayActionInput();
```

- *Type:* java.lang.String

---

##### `shareMsExchangeActionInput`<sup>Optional</sup> <a name="shareMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput"></a>

```java
public java.lang.String getShareMsExchangeActionInput();
```

- *Type:* java.lang.String

---

##### `shareMsTeamsActionInput`<sup>Optional</sup> <a name="shareMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput"></a>

```java
public java.lang.String getShareMsTeamsActionInput();
```

- *Type:* java.lang.String

---

##### `shareNewRelicActionInput`<sup>Optional</sup> <a name="shareNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput"></a>

```java
public java.lang.String getShareNewRelicActionInput();
```

- *Type:* java.lang.String

---

##### `shareNotionActionInput`<sup>Optional</sup> <a name="shareNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput"></a>

```java
public java.lang.String getShareNotionActionInput();
```

- *Type:* java.lang.String

---

##### `shareOneDriveActionInput`<sup>Optional</sup> <a name="shareOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput"></a>

```java
public java.lang.String getShareOneDriveActionInput();
```

- *Type:* java.lang.String

---

##### `shareOpenApiActionInput`<sup>Optional</sup> <a name="shareOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput"></a>

```java
public java.lang.String getShareOpenApiActionInput();
```

- *Type:* java.lang.String

---

##### `sharePagerDutyActionInput`<sup>Optional</sup> <a name="sharePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput"></a>

```java
public java.lang.String getSharePagerDutyActionInput();
```

- *Type:* java.lang.String

---

##### `sharePointActionInput`<sup>Optional</sup> <a name="sharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput"></a>

```java
public java.lang.String getSharePointActionInput();
```

- *Type:* java.lang.String

---

##### `shareSalesforceActionInput`<sup>Optional</sup> <a name="shareSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput"></a>

```java
public java.lang.String getShareSalesforceActionInput();
```

- *Type:* java.lang.String

---

##### `shareSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="shareSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput"></a>

```java
public java.lang.String getShareSandPGlobalEnergyActionInput();
```

- *Type:* java.lang.String

---

##### `shareSandPgmiActionInput`<sup>Optional</sup> <a name="shareSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput"></a>

```java
public java.lang.String getShareSandPgmiActionInput();
```

- *Type:* java.lang.String

---

##### `shareSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="shareSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput"></a>

```java
public java.lang.String getShareSapBillOfMaterialActionInput();
```

- *Type:* java.lang.String

---

##### `shareSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="shareSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput"></a>

```java
public java.lang.String getShareSapBusinessPartnerActionInput();
```

- *Type:* java.lang.String

---

##### `shareSapMaterialStockActionInput`<sup>Optional</sup> <a name="shareSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput"></a>

```java
public java.lang.String getShareSapMaterialStockActionInput();
```

- *Type:* java.lang.String

---

##### `shareSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="shareSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput"></a>

```java
public java.lang.String getShareSapPhysicalInventoryActionInput();
```

- *Type:* java.lang.String

---

##### `shareSapProductMasterDataActionInput`<sup>Optional</sup> <a name="shareSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput"></a>

```java
public java.lang.String getShareSapProductMasterDataActionInput();
```

- *Type:* java.lang.String

---

##### `shareServiceNowActionInput`<sup>Optional</sup> <a name="shareServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput"></a>

```java
public java.lang.String getShareServiceNowActionInput();
```

- *Type:* java.lang.String

---

##### `shareSharePointActionInput`<sup>Optional</sup> <a name="shareSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput"></a>

```java
public java.lang.String getShareSharePointActionInput();
```

- *Type:* java.lang.String

---

##### `shareSlackActionInput`<sup>Optional</sup> <a name="shareSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput"></a>

```java
public java.lang.String getShareSlackActionInput();
```

- *Type:* java.lang.String

---

##### `shareSmartsheetActionInput`<sup>Optional</sup> <a name="shareSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput"></a>

```java
public java.lang.String getShareSmartsheetActionInput();
```

- *Type:* java.lang.String

---

##### `shareSpacesInput`<sup>Optional</sup> <a name="shareSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput"></a>

```java
public java.lang.String getShareSpacesInput();
```

- *Type:* java.lang.String

---

##### `shareTextractActionInput`<sup>Optional</sup> <a name="shareTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput"></a>

```java
public java.lang.String getShareTextractActionInput();
```

- *Type:* java.lang.String

---

##### `shareZendeskActionInput`<sup>Optional</sup> <a name="shareZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput"></a>

```java
public java.lang.String getShareZendeskActionInput();
```

- *Type:* java.lang.String

---

##### `slackActionInput`<sup>Optional</sup> <a name="slackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput"></a>

```java
public java.lang.String getSlackActionInput();
```

- *Type:* java.lang.String

---

##### `smartsheetActionInput`<sup>Optional</sup> <a name="smartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput"></a>

```java
public java.lang.String getSmartsheetActionInput();
```

- *Type:* java.lang.String

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput"></a>

```java
public java.lang.String getSpaceInput();
```

- *Type:* java.lang.String

---

##### `subscribeDashboardEmailReportsInput`<sup>Optional</sup> <a name="subscribeDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```java
public java.lang.String getSubscribeDashboardEmailReportsInput();
```

- *Type:* java.lang.String

---

##### `textractActionInput`<sup>Optional</sup> <a name="textractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput"></a>

```java
public java.lang.String getTextractActionInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `useAgentWebSearchInput`<sup>Optional</sup> <a name="useAgentWebSearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput"></a>

```java
public java.lang.String getUseAgentWebSearchInput();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput"></a>

```java
public java.lang.String getUseAmazonBedrockArsActionInput();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput"></a>

```java
public java.lang.String getUseAmazonBedrockFsActionInput();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput"></a>

```java
public java.lang.String getUseAmazonBedrockKrsActionInput();
```

- *Type:* java.lang.String

---

##### `useAmazonSThreeActionInput`<sup>Optional</sup> <a name="useAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput"></a>

```java
public java.lang.String getUseAmazonSThreeActionInput();
```

- *Type:* java.lang.String

---

##### `useAsanaActionInput`<sup>Optional</sup> <a name="useAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput"></a>

```java
public java.lang.String getUseAsanaActionInput();
```

- *Type:* java.lang.String

---

##### `useBambooHrActionInput`<sup>Optional</sup> <a name="useBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput"></a>

```java
public java.lang.String getUseBambooHrActionInput();
```

- *Type:* java.lang.String

---

##### `useBedrockModelsInput`<sup>Optional</sup> <a name="useBedrockModelsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput"></a>

```java
public java.lang.String getUseBedrockModelsInput();
```

- *Type:* java.lang.String

---

##### `useBoxAgentActionInput`<sup>Optional</sup> <a name="useBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput"></a>

```java
public java.lang.String getUseBoxAgentActionInput();
```

- *Type:* java.lang.String

---

##### `useCanvaAgentActionInput`<sup>Optional</sup> <a name="useCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput"></a>

```java
public java.lang.String getUseCanvaAgentActionInput();
```

- *Type:* java.lang.String

---

##### `useComprehendActionInput`<sup>Optional</sup> <a name="useComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput"></a>

```java
public java.lang.String getUseComprehendActionInput();
```

- *Type:* java.lang.String

---

##### `useComprehendMedicalActionInput`<sup>Optional</sup> <a name="useComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput"></a>

```java
public java.lang.String getUseComprehendMedicalActionInput();
```

- *Type:* java.lang.String

---

##### `useConfluenceActionInput`<sup>Optional</sup> <a name="useConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput"></a>

```java
public java.lang.String getUseConfluenceActionInput();
```

- *Type:* java.lang.String

---

##### `useFactSetActionInput`<sup>Optional</sup> <a name="useFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput"></a>

```java
public java.lang.String getUseFactSetActionInput();
```

- *Type:* java.lang.String

---

##### `useGenericHttpActionInput`<sup>Optional</sup> <a name="useGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput"></a>

```java
public java.lang.String getUseGenericHttpActionInput();
```

- *Type:* java.lang.String

---

##### `useGithubActionInput`<sup>Optional</sup> <a name="useGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput"></a>

```java
public java.lang.String getUseGithubActionInput();
```

- *Type:* java.lang.String

---

##### `useGoogleCalendarActionInput`<sup>Optional</sup> <a name="useGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput"></a>

```java
public java.lang.String getUseGoogleCalendarActionInput();
```

- *Type:* java.lang.String

---

##### `useHubspotActionInput`<sup>Optional</sup> <a name="useHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput"></a>

```java
public java.lang.String getUseHubspotActionInput();
```

- *Type:* java.lang.String

---

##### `useHuggingFaceActionInput`<sup>Optional</sup> <a name="useHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput"></a>

```java
public java.lang.String getUseHuggingFaceActionInput();
```

- *Type:* java.lang.String

---

##### `useIntercomActionInput`<sup>Optional</sup> <a name="useIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput"></a>

```java
public java.lang.String getUseIntercomActionInput();
```

- *Type:* java.lang.String

---

##### `useJiraActionInput`<sup>Optional</sup> <a name="useJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput"></a>

```java
public java.lang.String getUseJiraActionInput();
```

- *Type:* java.lang.String

---

##### `useLinearActionInput`<sup>Optional</sup> <a name="useLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput"></a>

```java
public java.lang.String getUseLinearActionInput();
```

- *Type:* java.lang.String

---

##### `useMcpActionInput`<sup>Optional</sup> <a name="useMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput"></a>

```java
public java.lang.String getUseMcpActionInput();
```

- *Type:* java.lang.String

---

##### `useMondayActionInput`<sup>Optional</sup> <a name="useMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput"></a>

```java
public java.lang.String getUseMondayActionInput();
```

- *Type:* java.lang.String

---

##### `useMsExchangeActionInput`<sup>Optional</sup> <a name="useMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput"></a>

```java
public java.lang.String getUseMsExchangeActionInput();
```

- *Type:* java.lang.String

---

##### `useMsTeamsActionInput`<sup>Optional</sup> <a name="useMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput"></a>

```java
public java.lang.String getUseMsTeamsActionInput();
```

- *Type:* java.lang.String

---

##### `useNewRelicActionInput`<sup>Optional</sup> <a name="useNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput"></a>

```java
public java.lang.String getUseNewRelicActionInput();
```

- *Type:* java.lang.String

---

##### `useNotionActionInput`<sup>Optional</sup> <a name="useNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput"></a>

```java
public java.lang.String getUseNotionActionInput();
```

- *Type:* java.lang.String

---

##### `useOneDriveActionInput`<sup>Optional</sup> <a name="useOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput"></a>

```java
public java.lang.String getUseOneDriveActionInput();
```

- *Type:* java.lang.String

---

##### `useOpenApiActionInput`<sup>Optional</sup> <a name="useOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput"></a>

```java
public java.lang.String getUseOpenApiActionInput();
```

- *Type:* java.lang.String

---

##### `usePagerDutyActionInput`<sup>Optional</sup> <a name="usePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput"></a>

```java
public java.lang.String getUsePagerDutyActionInput();
```

- *Type:* java.lang.String

---

##### `useSalesforceActionInput`<sup>Optional</sup> <a name="useSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput"></a>

```java
public java.lang.String getUseSalesforceActionInput();
```

- *Type:* java.lang.String

---

##### `useSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="useSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput"></a>

```java
public java.lang.String getUseSandPGlobalEnergyActionInput();
```

- *Type:* java.lang.String

---

##### `useSandPgmiActionInput`<sup>Optional</sup> <a name="useSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput"></a>

```java
public java.lang.String getUseSandPgmiActionInput();
```

- *Type:* java.lang.String

---

##### `useSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="useSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput"></a>

```java
public java.lang.String getUseSapBillOfMaterialActionInput();
```

- *Type:* java.lang.String

---

##### `useSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="useSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput"></a>

```java
public java.lang.String getUseSapBusinessPartnerActionInput();
```

- *Type:* java.lang.String

---

##### `useSapMaterialStockActionInput`<sup>Optional</sup> <a name="useSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput"></a>

```java
public java.lang.String getUseSapMaterialStockActionInput();
```

- *Type:* java.lang.String

---

##### `useSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="useSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput"></a>

```java
public java.lang.String getUseSapPhysicalInventoryActionInput();
```

- *Type:* java.lang.String

---

##### `useSapProductMasterDataActionInput`<sup>Optional</sup> <a name="useSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput"></a>

```java
public java.lang.String getUseSapProductMasterDataActionInput();
```

- *Type:* java.lang.String

---

##### `useServiceNowActionInput`<sup>Optional</sup> <a name="useServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput"></a>

```java
public java.lang.String getUseServiceNowActionInput();
```

- *Type:* java.lang.String

---

##### `useSharePointActionInput`<sup>Optional</sup> <a name="useSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput"></a>

```java
public java.lang.String getUseSharePointActionInput();
```

- *Type:* java.lang.String

---

##### `useSlackActionInput`<sup>Optional</sup> <a name="useSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput"></a>

```java
public java.lang.String getUseSlackActionInput();
```

- *Type:* java.lang.String

---

##### `useSmartsheetActionInput`<sup>Optional</sup> <a name="useSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput"></a>

```java
public java.lang.String getUseSmartsheetActionInput();
```

- *Type:* java.lang.String

---

##### `useTextractActionInput`<sup>Optional</sup> <a name="useTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput"></a>

```java
public java.lang.String getUseTextractActionInput();
```

- *Type:* java.lang.String

---

##### `useZendeskActionInput`<sup>Optional</sup> <a name="useZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput"></a>

```java
public java.lang.String getUseZendeskActionInput();
```

- *Type:* java.lang.String

---

##### `viewAccountSpiceCapacityInput`<sup>Optional</sup> <a name="viewAccountSpiceCapacityInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```java
public java.lang.String getViewAccountSpiceCapacityInput();
```

- *Type:* java.lang.String

---

##### `zendeskActionInput`<sup>Optional</sup> <a name="zendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput"></a>

```java
public java.lang.String getZendeskActionInput();
```

- *Type:* java.lang.String

---

##### `accessAppsNativeDataStore`<sup>Required</sup> <a name="accessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```java
public java.lang.String getAccessAppsNativeDataStore();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```java
public java.lang.String getAddOrRunAnomalyDetectionForAnalyses();
```

- *Type:* java.lang.String

---

##### `amazonBedrockArsAction`<sup>Required</sup> <a name="amazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```java
public java.lang.String getAmazonBedrockArsAction();
```

- *Type:* java.lang.String

---

##### `amazonBedrockFsAction`<sup>Required</sup> <a name="amazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```java
public java.lang.String getAmazonBedrockFsAction();
```

- *Type:* java.lang.String

---

##### `amazonBedrockKrsAction`<sup>Required</sup> <a name="amazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```java
public java.lang.String getAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

---

##### `amazonSThreeAction`<sup>Required</sup> <a name="amazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```java
public java.lang.String getAmazonSThreeAction();
```

- *Type:* java.lang.String

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```java
public java.lang.String getAnalysis();
```

- *Type:* java.lang.String

---

##### `approveFlowShareRequests`<sup>Required</sup> <a name="approveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```java
public java.lang.String getApproveFlowShareRequests();
```

- *Type:* java.lang.String

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```java
public java.lang.String getApps();
```

- *Type:* java.lang.String

---

##### `asanaAction`<sup>Required</sup> <a name="asanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```java
public java.lang.String getAsanaAction();
```

- *Type:* java.lang.String

---

##### `automate`<sup>Required</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```java
public java.lang.String getAutomate();
```

- *Type:* java.lang.String

---

##### `bambooHrAction`<sup>Required</sup> <a name="bambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```java
public java.lang.String getBambooHrAction();
```

- *Type:* java.lang.String

---

##### `boxAgentAction`<sup>Required</sup> <a name="boxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```java
public java.lang.String getBoxAgentAction();
```

- *Type:* java.lang.String

---

##### `buildCalculatedFieldWithQ`<sup>Required</sup> <a name="buildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```java
public java.lang.String getBuildCalculatedFieldWithQ();
```

- *Type:* java.lang.String

---

##### `canvaAgentAction`<sup>Required</sup> <a name="canvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```java
public java.lang.String getCanvaAgentAction();
```

- *Type:* java.lang.String

---

##### `chatAgent`<sup>Required</sup> <a name="chatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```java
public java.lang.String getChatAgent();
```

- *Type:* java.lang.String

---

##### `comprehendAction`<sup>Required</sup> <a name="comprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```java
public java.lang.String getComprehendAction();
```

- *Type:* java.lang.String

---

##### `comprehendMedicalAction`<sup>Required</sup> <a name="comprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```java
public java.lang.String getComprehendMedicalAction();
```

- *Type:* java.lang.String

---

##### `confluenceAction`<sup>Required</sup> <a name="confluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```java
public java.lang.String getConfluenceAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockArsAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockFsAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="createAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```java
public java.lang.String getCreateAndUpdateAmazonSThreeAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateApps`<sup>Required</sup> <a name="createAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```java
public java.lang.String getCreateAndUpdateApps();
```

- *Type:* java.lang.String

---

##### `createAndUpdateAsanaAction`<sup>Required</sup> <a name="createAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```java
public java.lang.String getCreateAndUpdateAsanaAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateBambooHrAction`<sup>Required</sup> <a name="createAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```java
public java.lang.String getCreateAndUpdateBambooHrAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateBoxAgentAction`<sup>Required</sup> <a name="createAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```java
public java.lang.String getCreateAndUpdateBoxAgentAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="createAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```java
public java.lang.String getCreateAndUpdateCanvaAgentAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateComprehendAction`<sup>Required</sup> <a name="createAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```java
public java.lang.String getCreateAndUpdateComprehendAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="createAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```java
public java.lang.String getCreateAndUpdateComprehendMedicalAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateConfluenceAction`<sup>Required</sup> <a name="createAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```java
public java.lang.String getCreateAndUpdateConfluenceAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```java
public java.lang.String getCreateAndUpdateDashboardEmailReports();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDatasets`<sup>Required</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```java
public java.lang.String getCreateAndUpdateDatasets();
```

- *Type:* java.lang.String

---

##### `createAndUpdateDataSources`<sup>Required</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```java
public java.lang.String getCreateAndUpdateDataSources();
```

- *Type:* java.lang.String

---

##### `createAndUpdateFactSetAction`<sup>Required</sup> <a name="createAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```java
public java.lang.String getCreateAndUpdateFactSetAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGenericHttpAction`<sup>Required</sup> <a name="createAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```java
public java.lang.String getCreateAndUpdateGenericHttpAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGithubAction`<sup>Required</sup> <a name="createAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```java
public java.lang.String getCreateAndUpdateGithubAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="createAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```java
public java.lang.String getCreateAndUpdateGoogleCalendarAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateHubspotAction`<sup>Required</sup> <a name="createAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```java
public java.lang.String getCreateAndUpdateHubspotAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="createAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```java
public java.lang.String getCreateAndUpdateHuggingFaceAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateIntercomAction`<sup>Required</sup> <a name="createAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```java
public java.lang.String getCreateAndUpdateIntercomAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateJiraAction`<sup>Required</sup> <a name="createAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```java
public java.lang.String getCreateAndUpdateJiraAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateKnowledgeBases`<sup>Required</sup> <a name="createAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```java
public java.lang.String getCreateAndUpdateKnowledgeBases();
```

- *Type:* java.lang.String

---

##### `createAndUpdateLinearAction`<sup>Required</sup> <a name="createAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```java
public java.lang.String getCreateAndUpdateLinearAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMcpAction`<sup>Required</sup> <a name="createAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```java
public java.lang.String getCreateAndUpdateMcpAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMondayAction`<sup>Required</sup> <a name="createAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```java
public java.lang.String getCreateAndUpdateMondayAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMsExchangeAction`<sup>Required</sup> <a name="createAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```java
public java.lang.String getCreateAndUpdateMsExchangeAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateMsTeamsAction`<sup>Required</sup> <a name="createAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```java
public java.lang.String getCreateAndUpdateMsTeamsAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateNewRelicAction`<sup>Required</sup> <a name="createAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```java
public java.lang.String getCreateAndUpdateNewRelicAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateNotionAction`<sup>Required</sup> <a name="createAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```java
public java.lang.String getCreateAndUpdateNotionAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateOneDriveAction`<sup>Required</sup> <a name="createAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```java
public java.lang.String getCreateAndUpdateOneDriveAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateOpenApiAction`<sup>Required</sup> <a name="createAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```java
public java.lang.String getCreateAndUpdateOpenApiAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdatePagerDutyAction`<sup>Required</sup> <a name="createAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```java
public java.lang.String getCreateAndUpdatePagerDutyAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSalesforceAction`<sup>Required</sup> <a name="createAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```java
public java.lang.String getCreateAndUpdateSalesforceAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="createAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```java
public java.lang.String getCreateAndUpdateSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSandPgmiAction`<sup>Required</sup> <a name="createAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```java
public java.lang.String getCreateAndUpdateSandPgmiAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="createAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```java
public java.lang.String getCreateAndUpdateSapBillOfMaterialAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="createAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```java
public java.lang.String getCreateAndUpdateSapBusinessPartnerAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="createAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```java
public java.lang.String getCreateAndUpdateSapMaterialStockAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="createAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```java
public java.lang.String getCreateAndUpdateSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="createAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```java
public java.lang.String getCreateAndUpdateSapProductMasterDataAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateServiceNowAction`<sup>Required</sup> <a name="createAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```java
public java.lang.String getCreateAndUpdateServiceNowAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSharePointAction`<sup>Required</sup> <a name="createAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```java
public java.lang.String getCreateAndUpdateSharePointAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSlackAction`<sup>Required</sup> <a name="createAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```java
public java.lang.String getCreateAndUpdateSlackAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateSmartsheetAction`<sup>Required</sup> <a name="createAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```java
public java.lang.String getCreateAndUpdateSmartsheetAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateTextractAction`<sup>Required</sup> <a name="createAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```java
public java.lang.String getCreateAndUpdateTextractAction();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThemes`<sup>Required</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```java
public java.lang.String getCreateAndUpdateThemes();
```

- *Type:* java.lang.String

---

##### `createAndUpdateThresholdAlerts`<sup>Required</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```java
public java.lang.String getCreateAndUpdateThresholdAlerts();
```

- *Type:* java.lang.String

---

##### `createAndUpdateZendeskAction`<sup>Required</sup> <a name="createAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```java
public java.lang.String getCreateAndUpdateZendeskAction();
```

- *Type:* java.lang.String

---

##### `createChatAgents`<sup>Required</sup> <a name="createChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```java
public java.lang.String getCreateChatAgents();
```

- *Type:* java.lang.String

---

##### `createDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="createDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```java
public java.lang.String getCreateDashboardExecutiveSummaryWithQ();
```

- *Type:* java.lang.String

---

##### `createSharedFolders`<sup>Required</sup> <a name="createSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```java
public java.lang.String getCreateSharedFolders();
```

- *Type:* java.lang.String

---

##### `createSpaces`<sup>Required</sup> <a name="createSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```java
public java.lang.String getCreateSpaces();
```

- *Type:* java.lang.String

---

##### `createSpiceDataset`<sup>Required</sup> <a name="createSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```java
public java.lang.String getCreateSpiceDataset();
```

- *Type:* java.lang.String

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```java
public java.lang.String getDashboard();
```

- *Type:* java.lang.String

---

##### `editVisualWithQ`<sup>Required</sup> <a name="editVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```java
public java.lang.String getEditVisualWithQ();
```

- *Type:* java.lang.String

---

##### `exportToCsv`<sup>Required</sup> <a name="exportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```java
public java.lang.String getExportToCsv();
```

- *Type:* java.lang.String

---

##### `exportToCsvInScheduledReports`<sup>Required</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```java
public java.lang.String getExportToCsvInScheduledReports();
```

- *Type:* java.lang.String

---

##### `exportToExcel`<sup>Required</sup> <a name="exportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```java
public java.lang.String getExportToExcel();
```

- *Type:* java.lang.String

---

##### `exportToExcelInScheduledReports`<sup>Required</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```java
public java.lang.String getExportToExcelInScheduledReports();
```

- *Type:* java.lang.String

---

##### `exportToPdf`<sup>Required</sup> <a name="exportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```java
public java.lang.String getExportToPdf();
```

- *Type:* java.lang.String

---

##### `exportToPdfInScheduledReports`<sup>Required</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```java
public java.lang.String getExportToPdfInScheduledReports();
```

- *Type:* java.lang.String

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

---

##### `factSetAction`<sup>Required</sup> <a name="factSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```java
public java.lang.String getFactSetAction();
```

- *Type:* java.lang.String

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

---

##### `genericHttpAction`<sup>Required</sup> <a name="genericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```java
public java.lang.String getGenericHttpAction();
```

- *Type:* java.lang.String

---

##### `githubAction`<sup>Required</sup> <a name="githubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```java
public java.lang.String getGithubAction();
```

- *Type:* java.lang.String

---

##### `googleCalendarAction`<sup>Required</sup> <a name="googleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```java
public java.lang.String getGoogleCalendarAction();
```

- *Type:* java.lang.String

---

##### `hubspotAction`<sup>Required</sup> <a name="hubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```java
public java.lang.String getHubspotAction();
```

- *Type:* java.lang.String

---

##### `huggingFaceAction`<sup>Required</sup> <a name="huggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```java
public java.lang.String getHuggingFaceAction();
```

- *Type:* java.lang.String

---

##### `includeContentInScheduledReportsEmail`<sup>Required</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```java
public java.lang.String getIncludeContentInScheduledReportsEmail();
```

- *Type:* java.lang.String

---

##### `intercomAction`<sup>Required</sup> <a name="intercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```java
public java.lang.String getIntercomAction();
```

- *Type:* java.lang.String

---

##### `invokeAppsAiInference`<sup>Required</sup> <a name="invokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```java
public java.lang.String getInvokeAppsAiInference();
```

- *Type:* java.lang.String

---

##### `jiraAction`<sup>Required</sup> <a name="jiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```java
public java.lang.String getJiraAction();
```

- *Type:* java.lang.String

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```java
public java.lang.String getKnowledgeBase();
```

- *Type:* java.lang.String

---

##### `linearAction`<sup>Required</sup> <a name="linearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```java
public java.lang.String getLinearAction();
```

- *Type:* java.lang.String

---

##### `manageSharedFolders`<sup>Required</sup> <a name="manageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```java
public java.lang.String getManageSharedFolders();
```

- *Type:* java.lang.String

---

##### `mcpAction`<sup>Required</sup> <a name="mcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```java
public java.lang.String getMcpAction();
```

- *Type:* java.lang.String

---

##### `mondayAction`<sup>Required</sup> <a name="mondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```java
public java.lang.String getMondayAction();
```

- *Type:* java.lang.String

---

##### `msExchangeAction`<sup>Required</sup> <a name="msExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```java
public java.lang.String getMsExchangeAction();
```

- *Type:* java.lang.String

---

##### `msTeamsAction`<sup>Required</sup> <a name="msTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```java
public java.lang.String getMsTeamsAction();
```

- *Type:* java.lang.String

---

##### `newRelicAction`<sup>Required</sup> <a name="newRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```java
public java.lang.String getNewRelicAction();
```

- *Type:* java.lang.String

---

##### `notionAction`<sup>Required</sup> <a name="notionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```java
public java.lang.String getNotionAction();
```

- *Type:* java.lang.String

---

##### `oneDriveAction`<sup>Required</sup> <a name="oneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```java
public java.lang.String getOneDriveAction();
```

- *Type:* java.lang.String

---

##### `openApiAction`<sup>Required</sup> <a name="openApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```java
public java.lang.String getOpenApiAction();
```

- *Type:* java.lang.String

---

##### `pagerDutyAction`<sup>Required</sup> <a name="pagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```java
public java.lang.String getPagerDutyAction();
```

- *Type:* java.lang.String

---

##### `performFlowUiTask`<sup>Required</sup> <a name="performFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```java
public java.lang.String getPerformFlowUiTask();
```

- *Type:* java.lang.String

---

##### `printReports`<sup>Required</sup> <a name="printReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```java
public java.lang.String getPrintReports();
```

- *Type:* java.lang.String

---

##### `publishWithoutApproval`<sup>Required</sup> <a name="publishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```java
public java.lang.String getPublishWithoutApproval();
```

- *Type:* java.lang.String

---

##### `renameSharedFolders`<sup>Required</sup> <a name="renameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```java
public java.lang.String getRenameSharedFolders();
```

- *Type:* java.lang.String

---

##### `research`<sup>Required</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```java
public java.lang.String getResearch();
```

- *Type:* java.lang.String

---

##### `salesforceAction`<sup>Required</sup> <a name="salesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```java
public java.lang.String getSalesforceAction();
```

- *Type:* java.lang.String

---

##### `sandPGlobalEnergyAction`<sup>Required</sup> <a name="sandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```java
public java.lang.String getSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

---

##### `sandPgmiAction`<sup>Required</sup> <a name="sandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```java
public java.lang.String getSandPgmiAction();
```

- *Type:* java.lang.String

---

##### `sapBillOfMaterialAction`<sup>Required</sup> <a name="sapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```java
public java.lang.String getSapBillOfMaterialAction();
```

- *Type:* java.lang.String

---

##### `sapBusinessPartnerAction`<sup>Required</sup> <a name="sapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```java
public java.lang.String getSapBusinessPartnerAction();
```

- *Type:* java.lang.String

---

##### `sapMaterialStockAction`<sup>Required</sup> <a name="sapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```java
public java.lang.String getSapMaterialStockAction();
```

- *Type:* java.lang.String

---

##### `sapPhysicalInventoryAction`<sup>Required</sup> <a name="sapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```java
public java.lang.String getSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

---

##### `sapProductMasterDataAction`<sup>Required</sup> <a name="sapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```java
public java.lang.String getSapProductMasterDataAction();
```

- *Type:* java.lang.String

---

##### `serviceNowAction`<sup>Required</sup> <a name="serviceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```java
public java.lang.String getServiceNowAction();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockArsAction`<sup>Required</sup> <a name="shareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```java
public java.lang.String getShareAmazonBedrockArsAction();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockFsAction`<sup>Required</sup> <a name="shareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```java
public java.lang.String getShareAmazonBedrockFsAction();
```

- *Type:* java.lang.String

---

##### `shareAmazonBedrockKrsAction`<sup>Required</sup> <a name="shareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```java
public java.lang.String getShareAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

---

##### `shareAmazonSThreeAction`<sup>Required</sup> <a name="shareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```java
public java.lang.String getShareAmazonSThreeAction();
```

- *Type:* java.lang.String

---

##### `shareAnalyses`<sup>Required</sup> <a name="shareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```java
public java.lang.String getShareAnalyses();
```

- *Type:* java.lang.String

---

##### `shareApps`<sup>Required</sup> <a name="shareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```java
public java.lang.String getShareApps();
```

- *Type:* java.lang.String

---

##### `shareAsanaAction`<sup>Required</sup> <a name="shareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```java
public java.lang.String getShareAsanaAction();
```

- *Type:* java.lang.String

---

##### `shareBambooHrAction`<sup>Required</sup> <a name="shareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```java
public java.lang.String getShareBambooHrAction();
```

- *Type:* java.lang.String

---

##### `shareBoxAgentAction`<sup>Required</sup> <a name="shareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```java
public java.lang.String getShareBoxAgentAction();
```

- *Type:* java.lang.String

---

##### `shareCanvaAgentAction`<sup>Required</sup> <a name="shareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```java
public java.lang.String getShareCanvaAgentAction();
```

- *Type:* java.lang.String

---

##### `shareChatAgents`<sup>Required</sup> <a name="shareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```java
public java.lang.String getShareChatAgents();
```

- *Type:* java.lang.String

---

##### `shareComprehendAction`<sup>Required</sup> <a name="shareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```java
public java.lang.String getShareComprehendAction();
```

- *Type:* java.lang.String

---

##### `shareComprehendMedicalAction`<sup>Required</sup> <a name="shareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```java
public java.lang.String getShareComprehendMedicalAction();
```

- *Type:* java.lang.String

---

##### `shareConfluenceAction`<sup>Required</sup> <a name="shareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```java
public java.lang.String getShareConfluenceAction();
```

- *Type:* java.lang.String

---

##### `shareDashboards`<sup>Required</sup> <a name="shareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```java
public java.lang.String getShareDashboards();
```

- *Type:* java.lang.String

---

##### `shareDatasets`<sup>Required</sup> <a name="shareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```java
public java.lang.String getShareDatasets();
```

- *Type:* java.lang.String

---

##### `shareDataSources`<sup>Required</sup> <a name="shareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```java
public java.lang.String getShareDataSources();
```

- *Type:* java.lang.String

---

##### `shareFactSetAction`<sup>Required</sup> <a name="shareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```java
public java.lang.String getShareFactSetAction();
```

- *Type:* java.lang.String

---

##### `shareGenericHttpAction`<sup>Required</sup> <a name="shareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```java
public java.lang.String getShareGenericHttpAction();
```

- *Type:* java.lang.String

---

##### `shareGithubAction`<sup>Required</sup> <a name="shareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```java
public java.lang.String getShareGithubAction();
```

- *Type:* java.lang.String

---

##### `shareGoogleCalendarAction`<sup>Required</sup> <a name="shareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```java
public java.lang.String getShareGoogleCalendarAction();
```

- *Type:* java.lang.String

---

##### `shareHubspotAction`<sup>Required</sup> <a name="shareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```java
public java.lang.String getShareHubspotAction();
```

- *Type:* java.lang.String

---

##### `shareHuggingFaceAction`<sup>Required</sup> <a name="shareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```java
public java.lang.String getShareHuggingFaceAction();
```

- *Type:* java.lang.String

---

##### `shareIntercomAction`<sup>Required</sup> <a name="shareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```java
public java.lang.String getShareIntercomAction();
```

- *Type:* java.lang.String

---

##### `shareJiraAction`<sup>Required</sup> <a name="shareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```java
public java.lang.String getShareJiraAction();
```

- *Type:* java.lang.String

---

##### `shareKnowledgeBases`<sup>Required</sup> <a name="shareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```java
public java.lang.String getShareKnowledgeBases();
```

- *Type:* java.lang.String

---

##### `shareLinearAction`<sup>Required</sup> <a name="shareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```java
public java.lang.String getShareLinearAction();
```

- *Type:* java.lang.String

---

##### `shareMcpAction`<sup>Required</sup> <a name="shareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```java
public java.lang.String getShareMcpAction();
```

- *Type:* java.lang.String

---

##### `shareMondayAction`<sup>Required</sup> <a name="shareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```java
public java.lang.String getShareMondayAction();
```

- *Type:* java.lang.String

---

##### `shareMsExchangeAction`<sup>Required</sup> <a name="shareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```java
public java.lang.String getShareMsExchangeAction();
```

- *Type:* java.lang.String

---

##### `shareMsTeamsAction`<sup>Required</sup> <a name="shareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```java
public java.lang.String getShareMsTeamsAction();
```

- *Type:* java.lang.String

---

##### `shareNewRelicAction`<sup>Required</sup> <a name="shareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```java
public java.lang.String getShareNewRelicAction();
```

- *Type:* java.lang.String

---

##### `shareNotionAction`<sup>Required</sup> <a name="shareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```java
public java.lang.String getShareNotionAction();
```

- *Type:* java.lang.String

---

##### `shareOneDriveAction`<sup>Required</sup> <a name="shareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```java
public java.lang.String getShareOneDriveAction();
```

- *Type:* java.lang.String

---

##### `shareOpenApiAction`<sup>Required</sup> <a name="shareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```java
public java.lang.String getShareOpenApiAction();
```

- *Type:* java.lang.String

---

##### `sharePagerDutyAction`<sup>Required</sup> <a name="sharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```java
public java.lang.String getSharePagerDutyAction();
```

- *Type:* java.lang.String

---

##### `sharePointAction`<sup>Required</sup> <a name="sharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```java
public java.lang.String getSharePointAction();
```

- *Type:* java.lang.String

---

##### `shareSalesforceAction`<sup>Required</sup> <a name="shareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```java
public java.lang.String getShareSalesforceAction();
```

- *Type:* java.lang.String

---

##### `shareSandPGlobalEnergyAction`<sup>Required</sup> <a name="shareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```java
public java.lang.String getShareSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

---

##### `shareSandPgmiAction`<sup>Required</sup> <a name="shareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```java
public java.lang.String getShareSandPgmiAction();
```

- *Type:* java.lang.String

---

##### `shareSapBillOfMaterialAction`<sup>Required</sup> <a name="shareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```java
public java.lang.String getShareSapBillOfMaterialAction();
```

- *Type:* java.lang.String

---

##### `shareSapBusinessPartnerAction`<sup>Required</sup> <a name="shareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```java
public java.lang.String getShareSapBusinessPartnerAction();
```

- *Type:* java.lang.String

---

##### `shareSapMaterialStockAction`<sup>Required</sup> <a name="shareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```java
public java.lang.String getShareSapMaterialStockAction();
```

- *Type:* java.lang.String

---

##### `shareSapPhysicalInventoryAction`<sup>Required</sup> <a name="shareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```java
public java.lang.String getShareSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

---

##### `shareSapProductMasterDataAction`<sup>Required</sup> <a name="shareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```java
public java.lang.String getShareSapProductMasterDataAction();
```

- *Type:* java.lang.String

---

##### `shareServiceNowAction`<sup>Required</sup> <a name="shareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```java
public java.lang.String getShareServiceNowAction();
```

- *Type:* java.lang.String

---

##### `shareSharePointAction`<sup>Required</sup> <a name="shareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```java
public java.lang.String getShareSharePointAction();
```

- *Type:* java.lang.String

---

##### `shareSlackAction`<sup>Required</sup> <a name="shareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```java
public java.lang.String getShareSlackAction();
```

- *Type:* java.lang.String

---

##### `shareSmartsheetAction`<sup>Required</sup> <a name="shareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```java
public java.lang.String getShareSmartsheetAction();
```

- *Type:* java.lang.String

---

##### `shareSpaces`<sup>Required</sup> <a name="shareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```java
public java.lang.String getShareSpaces();
```

- *Type:* java.lang.String

---

##### `shareTextractAction`<sup>Required</sup> <a name="shareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```java
public java.lang.String getShareTextractAction();
```

- *Type:* java.lang.String

---

##### `shareZendeskAction`<sup>Required</sup> <a name="shareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```java
public java.lang.String getShareZendeskAction();
```

- *Type:* java.lang.String

---

##### `slackAction`<sup>Required</sup> <a name="slackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```java
public java.lang.String getSlackAction();
```

- *Type:* java.lang.String

---

##### `smartsheetAction`<sup>Required</sup> <a name="smartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```java
public java.lang.String getSmartsheetAction();
```

- *Type:* java.lang.String

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

---

##### `subscribeDashboardEmailReports`<sup>Required</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```java
public java.lang.String getSubscribeDashboardEmailReports();
```

- *Type:* java.lang.String

---

##### `textractAction`<sup>Required</sup> <a name="textractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```java
public java.lang.String getTextractAction();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `useAgentWebSearch`<sup>Required</sup> <a name="useAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```java
public java.lang.String getUseAgentWebSearch();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockArsAction`<sup>Required</sup> <a name="useAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```java
public java.lang.String getUseAmazonBedrockArsAction();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockFsAction`<sup>Required</sup> <a name="useAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```java
public java.lang.String getUseAmazonBedrockFsAction();
```

- *Type:* java.lang.String

---

##### `useAmazonBedrockKrsAction`<sup>Required</sup> <a name="useAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```java
public java.lang.String getUseAmazonBedrockKrsAction();
```

- *Type:* java.lang.String

---

##### `useAmazonSThreeAction`<sup>Required</sup> <a name="useAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```java
public java.lang.String getUseAmazonSThreeAction();
```

- *Type:* java.lang.String

---

##### `useAsanaAction`<sup>Required</sup> <a name="useAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```java
public java.lang.String getUseAsanaAction();
```

- *Type:* java.lang.String

---

##### `useBambooHrAction`<sup>Required</sup> <a name="useBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```java
public java.lang.String getUseBambooHrAction();
```

- *Type:* java.lang.String

---

##### `useBedrockModels`<sup>Required</sup> <a name="useBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```java
public java.lang.String getUseBedrockModels();
```

- *Type:* java.lang.String

---

##### `useBoxAgentAction`<sup>Required</sup> <a name="useBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```java
public java.lang.String getUseBoxAgentAction();
```

- *Type:* java.lang.String

---

##### `useCanvaAgentAction`<sup>Required</sup> <a name="useCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```java
public java.lang.String getUseCanvaAgentAction();
```

- *Type:* java.lang.String

---

##### `useComprehendAction`<sup>Required</sup> <a name="useComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```java
public java.lang.String getUseComprehendAction();
```

- *Type:* java.lang.String

---

##### `useComprehendMedicalAction`<sup>Required</sup> <a name="useComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```java
public java.lang.String getUseComprehendMedicalAction();
```

- *Type:* java.lang.String

---

##### `useConfluenceAction`<sup>Required</sup> <a name="useConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```java
public java.lang.String getUseConfluenceAction();
```

- *Type:* java.lang.String

---

##### `useFactSetAction`<sup>Required</sup> <a name="useFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```java
public java.lang.String getUseFactSetAction();
```

- *Type:* java.lang.String

---

##### `useGenericHttpAction`<sup>Required</sup> <a name="useGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```java
public java.lang.String getUseGenericHttpAction();
```

- *Type:* java.lang.String

---

##### `useGithubAction`<sup>Required</sup> <a name="useGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```java
public java.lang.String getUseGithubAction();
```

- *Type:* java.lang.String

---

##### `useGoogleCalendarAction`<sup>Required</sup> <a name="useGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```java
public java.lang.String getUseGoogleCalendarAction();
```

- *Type:* java.lang.String

---

##### `useHubspotAction`<sup>Required</sup> <a name="useHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```java
public java.lang.String getUseHubspotAction();
```

- *Type:* java.lang.String

---

##### `useHuggingFaceAction`<sup>Required</sup> <a name="useHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```java
public java.lang.String getUseHuggingFaceAction();
```

- *Type:* java.lang.String

---

##### `useIntercomAction`<sup>Required</sup> <a name="useIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```java
public java.lang.String getUseIntercomAction();
```

- *Type:* java.lang.String

---

##### `useJiraAction`<sup>Required</sup> <a name="useJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```java
public java.lang.String getUseJiraAction();
```

- *Type:* java.lang.String

---

##### `useLinearAction`<sup>Required</sup> <a name="useLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```java
public java.lang.String getUseLinearAction();
```

- *Type:* java.lang.String

---

##### `useMcpAction`<sup>Required</sup> <a name="useMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```java
public java.lang.String getUseMcpAction();
```

- *Type:* java.lang.String

---

##### `useMondayAction`<sup>Required</sup> <a name="useMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```java
public java.lang.String getUseMondayAction();
```

- *Type:* java.lang.String

---

##### `useMsExchangeAction`<sup>Required</sup> <a name="useMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```java
public java.lang.String getUseMsExchangeAction();
```

- *Type:* java.lang.String

---

##### `useMsTeamsAction`<sup>Required</sup> <a name="useMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```java
public java.lang.String getUseMsTeamsAction();
```

- *Type:* java.lang.String

---

##### `useNewRelicAction`<sup>Required</sup> <a name="useNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```java
public java.lang.String getUseNewRelicAction();
```

- *Type:* java.lang.String

---

##### `useNotionAction`<sup>Required</sup> <a name="useNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```java
public java.lang.String getUseNotionAction();
```

- *Type:* java.lang.String

---

##### `useOneDriveAction`<sup>Required</sup> <a name="useOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```java
public java.lang.String getUseOneDriveAction();
```

- *Type:* java.lang.String

---

##### `useOpenApiAction`<sup>Required</sup> <a name="useOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```java
public java.lang.String getUseOpenApiAction();
```

- *Type:* java.lang.String

---

##### `usePagerDutyAction`<sup>Required</sup> <a name="usePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```java
public java.lang.String getUsePagerDutyAction();
```

- *Type:* java.lang.String

---

##### `useSalesforceAction`<sup>Required</sup> <a name="useSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```java
public java.lang.String getUseSalesforceAction();
```

- *Type:* java.lang.String

---

##### `useSandPGlobalEnergyAction`<sup>Required</sup> <a name="useSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```java
public java.lang.String getUseSandPGlobalEnergyAction();
```

- *Type:* java.lang.String

---

##### `useSandPgmiAction`<sup>Required</sup> <a name="useSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```java
public java.lang.String getUseSandPgmiAction();
```

- *Type:* java.lang.String

---

##### `useSapBillOfMaterialAction`<sup>Required</sup> <a name="useSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```java
public java.lang.String getUseSapBillOfMaterialAction();
```

- *Type:* java.lang.String

---

##### `useSapBusinessPartnerAction`<sup>Required</sup> <a name="useSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```java
public java.lang.String getUseSapBusinessPartnerAction();
```

- *Type:* java.lang.String

---

##### `useSapMaterialStockAction`<sup>Required</sup> <a name="useSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```java
public java.lang.String getUseSapMaterialStockAction();
```

- *Type:* java.lang.String

---

##### `useSapPhysicalInventoryAction`<sup>Required</sup> <a name="useSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```java
public java.lang.String getUseSapPhysicalInventoryAction();
```

- *Type:* java.lang.String

---

##### `useSapProductMasterDataAction`<sup>Required</sup> <a name="useSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```java
public java.lang.String getUseSapProductMasterDataAction();
```

- *Type:* java.lang.String

---

##### `useServiceNowAction`<sup>Required</sup> <a name="useServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```java
public java.lang.String getUseServiceNowAction();
```

- *Type:* java.lang.String

---

##### `useSharePointAction`<sup>Required</sup> <a name="useSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```java
public java.lang.String getUseSharePointAction();
```

- *Type:* java.lang.String

---

##### `useSlackAction`<sup>Required</sup> <a name="useSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```java
public java.lang.String getUseSlackAction();
```

- *Type:* java.lang.String

---

##### `useSmartsheetAction`<sup>Required</sup> <a name="useSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```java
public java.lang.String getUseSmartsheetAction();
```

- *Type:* java.lang.String

---

##### `useTextractAction`<sup>Required</sup> <a name="useTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```java
public java.lang.String getUseTextractAction();
```

- *Type:* java.lang.String

---

##### `useZendeskAction`<sup>Required</sup> <a name="useZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```java
public java.lang.String getUseZendeskAction();
```

- *Type:* java.lang.String

---

##### `viewAccountSpiceCapacity`<sup>Required</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```java
public java.lang.String getViewAccountSpiceCapacity();
```

- *Type:* java.lang.String

---

##### `zendeskAction`<sup>Required</sup> <a name="zendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```java
public java.lang.String getZendeskAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightCustomPermissionsCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---


### QuicksightCustomPermissionsTagsList <a name="QuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsTagsList;

new QuicksightCustomPermissionsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get"></a>

```java
public QuicksightCustomPermissionsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightCustomPermissionsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>>

---


### QuicksightCustomPermissionsTagsOutputReference <a name="QuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_custom_permissions.QuicksightCustomPermissionsTagsOutputReference;

new QuicksightCustomPermissionsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightCustomPermissionsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>

---



