# `ec2CapacityManagerDataExport` Submodule <a name="`ec2CapacityManagerDataExport` Submodule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityManagerDataExport <a name="Ec2CapacityManagerDataExport" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export awscc_ec2_capacity_manager_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExport;

Ec2CapacityManagerDataExport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .outputFormat(java.lang.String)
    .s3BucketName(java.lang.String)
    .schedule(java.lang.String)
//  .s3BucketPrefix(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2CapacityManagerDataExportTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format of the exported capacity manager data. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where the capacity manager data export will be stored. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | The schedule for the capacity manager data export. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | The prefix for the S3 bucket location where exported files will be placed. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>></code> | An array of key-value pairs to apply to the capacity manager data export. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.outputFormat"></a>

- *Type:* java.lang.String

The format of the exported capacity manager data.

Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#output_format Ec2CapacityManagerDataExport#output_format}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketName"></a>

- *Type:* java.lang.String

The name of the Amazon S3 bucket where the capacity manager data export will be stored.

The bucket must exist and be accessible by EC2 Capacity Manager service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_name Ec2CapacityManagerDataExport#s3_bucket_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

The schedule for the capacity manager data export.

Currently supports hourly exports that provide periodic snapshots of capacity manager data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#schedule Ec2CapacityManagerDataExport#schedule}

---

##### `s3BucketPrefix`<sup>Optional</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketPrefix"></a>

- *Type:* java.lang.String

The prefix for the S3 bucket location where exported files will be placed.

If not specified, files will be placed in the root of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_prefix Ec2CapacityManagerDataExport#s3_bucket_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>>

An array of key-value pairs to apply to the capacity manager data export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#tags Ec2CapacityManagerDataExport#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix">resetS3BucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2CapacityManagerDataExportTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>>

---

##### `resetS3BucketPrefix` <a name="resetS3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix"></a>

```java
public void resetS3BucketPrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExport;

Ec2CapacityManagerDataExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExport;

Ec2CapacityManagerDataExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExport;

Ec2CapacityManagerDataExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExport;

Ec2CapacityManagerDataExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2CapacityManagerDataExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2CapacityManagerDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2CapacityManagerDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityManagerDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId">capacityManagerDataExportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput">s3BucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityManagerDataExportId`<sup>Required</sup> <a name="capacityManagerDataExportId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId"></a>

```java
public java.lang.String getCapacityManagerDataExportId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags"></a>

```java
public Ec2CapacityManagerDataExportTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a>

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketPrefixInput`<sup>Optional</sup> <a name="s3BucketPrefixInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput"></a>

```java
public java.lang.String getS3BucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2CapacityManagerDataExportTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>>

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix"></a>

```java
public java.lang.String getS3BucketPrefix();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityManagerDataExportConfig <a name="Ec2CapacityManagerDataExportConfig" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExportConfig;

Ec2CapacityManagerDataExportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .outputFormat(java.lang.String)
    .s3BucketName(java.lang.String)
    .schedule(java.lang.String)
//  .s3BucketPrefix(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2CapacityManagerDataExportTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format of the exported capacity manager data. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where the capacity manager data export will be stored. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The schedule for the capacity manager data export. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | The prefix for the S3 bucket location where exported files will be placed. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>></code> | An array of key-value pairs to apply to the capacity manager data export. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The format of the exported capacity manager data.

Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#output_format Ec2CapacityManagerDataExport#output_format}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket where the capacity manager data export will be stored.

The bucket must exist and be accessible by EC2 Capacity Manager service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_name Ec2CapacityManagerDataExport#s3_bucket_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The schedule for the capacity manager data export.

Currently supports hourly exports that provide periodic snapshots of capacity manager data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#schedule Ec2CapacityManagerDataExport#schedule}

---

##### `s3BucketPrefix`<sup>Optional</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix"></a>

```java
public java.lang.String getS3BucketPrefix();
```

- *Type:* java.lang.String

The prefix for the S3 bucket location where exported files will be placed.

If not specified, files will be placed in the root of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_prefix Ec2CapacityManagerDataExport#s3_bucket_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2CapacityManagerDataExportTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>>

An array of key-value pairs to apply to the capacity manager data export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#tags Ec2CapacityManagerDataExport#tags}

---

### Ec2CapacityManagerDataExportTags <a name="Ec2CapacityManagerDataExportTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExportTags;

Ec2CapacityManagerDataExportTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#key Ec2CapacityManagerDataExport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_capacity_manager_data_export#value Ec2CapacityManagerDataExport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityManagerDataExportTagsList <a name="Ec2CapacityManagerDataExportTagsList" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExportTagsList;

new Ec2CapacityManagerDataExportTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get"></a>

```java
public Ec2CapacityManagerDataExportTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2CapacityManagerDataExportTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>>

---


### Ec2CapacityManagerDataExportTagsOutputReference <a name="Ec2CapacityManagerDataExportTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_capacity_manager_data_export.Ec2CapacityManagerDataExportTagsOutputReference;

new Ec2CapacityManagerDataExportTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2CapacityManagerDataExportTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>

---



