# `dmsReplicationSubnetGroup` Submodule <a name="`dmsReplicationSubnetGroup` Submodule" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationSubnetGroup <a name="DmsReplicationSubnetGroup" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group awscc_dms_replication_subnet_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroup;

DmsReplicationSubnetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .replicationSubnetGroupDescription(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .replicationSubnetGroupIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsReplicationSubnetGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.replicationSubnetGroupDescription">replicationSubnetGroupDescription</a></code> | <code>java.lang.String</code> | The description for the subnet group. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more subnet IDs to be assigned to the replication subnet group. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>java.lang.String</code> | The name for the replication subnet group. This value is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>></code> | One or more tags to be assigned to the replication subnet group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="replicationSubnetGroupDescription" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.replicationSubnetGroupDescription"></a>

- *Type:* java.lang.String

The description for the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

One or more subnet IDs to be assigned to the replication subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}

---

##### `replicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.replicationSubnetGroupIdentifier"></a>

- *Type:* java.lang.String

The name for the replication subnet group. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_identifier DmsReplicationSubnetGroup#replication_subnet_group_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>>

One or more tags to be assigned to the replication subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetReplicationSubnetGroupIdentifier">resetReplicationSubnetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DmsReplicationSubnetGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>>

---

##### `resetReplicationSubnetGroupIdentifier` <a name="resetReplicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetReplicationSubnetGroupIdentifier"></a>

```java
public void resetReplicationSubnetGroupIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsReplicationSubnetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroup;

DmsReplicationSubnetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroup;

DmsReplicationSubnetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroup;

DmsReplicationSubnetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroup;

DmsReplicationSubnetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsReplicationSubnetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsReplicationSubnetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsReplicationSubnetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsReplicationSubnetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationSubnetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList">DmsReplicationSubnetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput">replicationSubnetGroupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdentifierInput">replicationSubnetGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription">replicationSubnetGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags"></a>

```java
public DmsReplicationSubnetGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList">DmsReplicationSubnetGroupTagsList</a>

---

##### `replicationSubnetGroupDescriptionInput`<sup>Optional</sup> <a name="replicationSubnetGroupDescriptionInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput"></a>

```java
public java.lang.String getReplicationSubnetGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `replicationSubnetGroupIdentifierInput`<sup>Optional</sup> <a name="replicationSubnetGroupIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdentifierInput"></a>

```java
public java.lang.String getReplicationSubnetGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DmsReplicationSubnetGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>>

---

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="replicationSubnetGroupDescription" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

```java
public java.lang.String getReplicationSubnetGroupDescription();
```

- *Type:* java.lang.String

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

```java
public java.lang.String getReplicationSubnetGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationSubnetGroupConfig <a name="DmsReplicationSubnetGroupConfig" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroupConfig;

DmsReplicationSubnetGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .replicationSubnetGroupDescription(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .replicationSubnetGroupIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<DmsReplicationSubnetGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription">replicationSubnetGroupDescription</a></code> | <code>java.lang.String</code> | The description for the subnet group. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more subnet IDs to be assigned to the replication subnet group. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>java.lang.String</code> | The name for the replication subnet group. This value is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>></code> | One or more tags to be assigned to the replication subnet group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="replicationSubnetGroupDescription" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription"></a>

```java
public java.lang.String getReplicationSubnetGroupDescription();
```

- *Type:* java.lang.String

The description for the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

One or more subnet IDs to be assigned to the replication subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}

---

##### `replicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupIdentifier"></a>

```java
public java.lang.String getReplicationSubnetGroupIdentifier();
```

- *Type:* java.lang.String

The name for the replication subnet group. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_identifier DmsReplicationSubnetGroup#replication_subnet_group_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DmsReplicationSubnetGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>>

One or more tags to be assigned to the replication subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}

---

### DmsReplicationSubnetGroupTags <a name="DmsReplicationSubnetGroupTags" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroupTags;

DmsReplicationSubnetGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#key DmsReplicationSubnetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#value DmsReplicationSubnetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#key DmsReplicationSubnetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_replication_subnet_group#value DmsReplicationSubnetGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationSubnetGroupTagsList <a name="DmsReplicationSubnetGroupTagsList" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroupTagsList;

new DmsReplicationSubnetGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.get"></a>

```java
public DmsReplicationSubnetGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsReplicationSubnetGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>>

---


### DmsReplicationSubnetGroupTagsOutputReference <a name="DmsReplicationSubnetGroupTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_replication_subnet_group.DmsReplicationSubnetGroupTagsOutputReference;

new DmsReplicationSubnetGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsReplicationSubnetGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupTags">DmsReplicationSubnetGroupTags</a>

---



