# `datazoneGroupProfile` Submodule <a name="`datazoneGroupProfile` Submodule" id="@cdktn/provider-awscc.datazoneGroupProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGroupProfile <a name="DatazoneGroupProfile" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile awscc_datazone_group_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfile;

DatazoneGroupProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
//  .groupIdentifier(java.lang.String)
//  .groupType(java.lang.String)
//  .rolePrincipalArn(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the group profile would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | The ID of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.groupType">groupType</a></code> | <code>java.lang.String</code> | The type of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.rolePrincipalArn">rolePrincipalArn</a></code> | <code>java.lang.String</code> | The ARN of the role principal for the group profile. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the group profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the group profile would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#domain_identifier DatazoneGroupProfile#domain_identifier}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.groupIdentifier"></a>

- *Type:* java.lang.String

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_identifier DatazoneGroupProfile#group_identifier}

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.groupType"></a>

- *Type:* java.lang.String

The type of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_type DatazoneGroupProfile#group_type}

---

##### `rolePrincipalArn`<sup>Optional</sup> <a name="rolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.rolePrincipalArn"></a>

- *Type:* java.lang.String

The ARN of the role principal for the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#role_principal_arn DatazoneGroupProfile#role_principal_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#status DatazoneGroupProfile#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetRolePrincipalArn">resetRolePrincipalArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupIdentifier"></a>

```java
public void resetGroupIdentifier()
```

##### `resetGroupType` <a name="resetGroupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetGroupType"></a>

```java
public void resetGroupType()
```

##### `resetRolePrincipalArn` <a name="resetRolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetRolePrincipalArn"></a>

```java
public void resetRolePrincipalArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneGroupProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfile;

DatazoneGroupProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfile;

DatazoneGroupProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfile;

DatazoneGroupProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfile;

DatazoneGroupProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneGroupProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneGroupProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneGroupProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneGroupProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneGroupProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupProfileId">groupProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalId">rolePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupTypeInput">groupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArnInput">rolePrincipalArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupType">groupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArn">rolePrincipalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `groupProfileId`<sup>Required</sup> <a name="groupProfileId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupProfileId"></a>

```java
public java.lang.String getGroupProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rolePrincipalId`<sup>Required</sup> <a name="rolePrincipalId" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalId"></a>

```java
public java.lang.String getRolePrincipalId();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifierInput"></a>

```java
public java.lang.String getGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupTypeInput"></a>

```java
public java.lang.String getGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `rolePrincipalArnInput`<sup>Optional</sup> <a name="rolePrincipalArnInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArnInput"></a>

```java
public java.lang.String getRolePrincipalArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.groupType"></a>

```java
public java.lang.String getGroupType();
```

- *Type:* java.lang.String

---

##### `rolePrincipalArn`<sup>Required</sup> <a name="rolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.rolePrincipalArn"></a>

```java
public java.lang.String getRolePrincipalArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGroupProfileConfig <a name="DatazoneGroupProfileConfig" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_group_profile.DatazoneGroupProfileConfig;

DatazoneGroupProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
//  .groupIdentifier(java.lang.String)
//  .groupType(java.lang.String)
//  .rolePrincipalArn(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the group profile would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | The ID of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupType">groupType</a></code> | <code>java.lang.String</code> | The type of the group. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.rolePrincipalArn">rolePrincipalArn</a></code> | <code>java.lang.String</code> | The ARN of the role principal for the group profile. |
| <code><a href="#@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the group profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the group profile would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#domain_identifier DatazoneGroupProfile#domain_identifier}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_identifier DatazoneGroupProfile#group_identifier}

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.groupType"></a>

```java
public java.lang.String getGroupType();
```

- *Type:* java.lang.String

The type of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#group_type DatazoneGroupProfile#group_type}

---

##### `rolePrincipalArn`<sup>Optional</sup> <a name="rolePrincipalArn" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.rolePrincipalArn"></a>

```java
public java.lang.String getRolePrincipalArn();
```

- *Type:* java.lang.String

The ARN of the role principal for the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#role_principal_arn DatazoneGroupProfile#role_principal_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datazoneGroupProfile.DatazoneGroupProfileConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the group profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_group_profile#status DatazoneGroupProfile#status}

---



