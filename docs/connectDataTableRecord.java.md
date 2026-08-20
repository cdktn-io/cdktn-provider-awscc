# `connectDataTableRecord` Submodule <a name="`connectDataTableRecord` Submodule" id="@cdktn/provider-awscc.connectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableRecord <a name="ConnectDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecord;

ConnectDataTableRecord.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableArn(java.lang.String)
    .dataTableRecord(ConnectDataTableRecordDataTableRecord)
    .instanceArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableRecord">dataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `dataTableRecord`<sup>Required</sup> <a name="dataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableRecord"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord">putDataTableRecord</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataTableRecord` <a name="putDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord"></a>

```java
public void putDataTableRecord(ConnectDataTableRecordDataTableRecord value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecord;

ConnectDataTableRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecord;

ConnectDataTableRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecord;

ConnectDataTableRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecord;

ConnectDataTableRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectDataTableRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectDataTableRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord">dataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId">recordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput">dataTableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput">dataTableRecordInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableRecord`<sup>Required</sup> <a name="dataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord"></a>

```java
public ConnectDataTableRecordDataTableRecordOutputReference getDataTableRecord();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId"></a>

```java
public java.lang.String getRecordId();
```

- *Type:* java.lang.String

---

##### `dataTableArnInput`<sup>Optional</sup> <a name="dataTableArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput"></a>

```java
public java.lang.String getDataTableArnInput();
```

- *Type:* java.lang.String

---

##### `dataTableRecordInput`<sup>Optional</sup> <a name="dataTableRecordInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput"></a>

```java
public IResolvable|ConnectDataTableRecordDataTableRecord getDataTableRecordInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn"></a>

```java
public java.lang.String getDataTableArn();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableRecordConfig <a name="ConnectDataTableRecordConfig" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordConfig;

ConnectDataTableRecordConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableArn(java.lang.String)
    .dataTableRecord(ConnectDataTableRecordDataTableRecord)
    .instanceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord">dataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn"></a>

```java
public java.lang.String getDataTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `dataTableRecord`<sup>Required</sup> <a name="dataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord"></a>

```java
public ConnectDataTableRecordDataTableRecord getDataTableRecord();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

### ConnectDataTableRecordDataTableRecord <a name="ConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecord;

ConnectDataTableRecordDataTableRecord.builder()
    .values(IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordValues>)
//  .primaryValues(IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordPrimaryValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values">values</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues">primaryValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordValues> getValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

##### `primaryValues`<sup>Optional</sup> <a name="primaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordPrimaryValues> getPrimaryValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

### ConnectDataTableRecordDataTableRecordPrimaryValues <a name="ConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordPrimaryValues;

ConnectDataTableRecordDataTableRecordPrimaryValues.builder()
//  .attributeId(java.lang.String)
//  .attributeValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId">attributeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attributeId`<sup>Optional</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId"></a>

```java
public java.lang.String getAttributeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

### ConnectDataTableRecordDataTableRecordValues <a name="ConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordValues;

ConnectDataTableRecordDataTableRecordValues.builder()
//  .attributeId(java.lang.String)
//  .attributeValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId">attributeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attributeId`<sup>Optional</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId"></a>

```java
public java.lang.String getAttributeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableRecordDataTableRecordOutputReference <a name="ConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordOutputReference;

new ConnectDataTableRecordDataTableRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues">putPrimaryValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues">resetPrimaryValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryValues` <a name="putPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues"></a>

```java
public void putPrimaryValues(IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordPrimaryValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>>

---

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues"></a>

```java
public void putValues(IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>>

---

##### `resetPrimaryValues` <a name="resetPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues"></a>

```java
public void resetPrimaryValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">primaryValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput">primaryValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput">valuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryValues`<sup>Required</sup> <a name="primaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```java
public ConnectDataTableRecordDataTableRecordPrimaryValuesList getPrimaryValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```java
public ConnectDataTableRecordDataTableRecordValuesList getValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `primaryValuesInput`<sup>Optional</sup> <a name="primaryValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordPrimaryValues> getPrimaryValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordValues> getValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectDataTableRecordDataTableRecord getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordPrimaryValuesList;

new ConnectDataTableRecordDataTableRecordPrimaryValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```java
public ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordPrimaryValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>>

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference;

new ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId">resetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeId` <a name="resetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId"></a>

```java
public void resetAttributeId()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput">attributeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">attributeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeIdInput`<sup>Optional</sup> <a name="attributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput"></a>

```java
public java.lang.String getAttributeIdInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```java
public java.lang.String getAttributeId();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectDataTableRecordDataTableRecordPrimaryValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>

---


### ConnectDataTableRecordDataTableRecordValuesList <a name="ConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordValuesList;

new ConnectDataTableRecordDataTableRecordValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get"></a>

```java
public ConnectDataTableRecordDataTableRecordValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectDataTableRecordDataTableRecordValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>>

---


### ConnectDataTableRecordDataTableRecordValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_record.ConnectDataTableRecordDataTableRecordValuesOutputReference;

new ConnectDataTableRecordDataTableRecordValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId">resetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeId` <a name="resetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId"></a>

```java
public void resetAttributeId()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput">attributeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">attributeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeIdInput`<sup>Optional</sup> <a name="attributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput"></a>

```java
public java.lang.String getAttributeIdInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```java
public java.lang.String getAttributeId();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectDataTableRecordDataTableRecordValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>

---



