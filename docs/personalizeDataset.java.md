# `personalizeDataset` Submodule <a name="`personalizeDataset` Submodule" id="@cdktn/provider-awscc.personalizeDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeDataset <a name="PersonalizeDataset" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset awscc_personalize_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDataset;

PersonalizeDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .datasetType(java.lang.String)
    .name(java.lang.String)
    .schemaArn(java.lang.String)
//  .datasetImportJob(PersonalizeDatasetDatasetImportJob)
//  .tags(IResolvable|java.util.List<PersonalizeDatasetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetType">datasetType</a></code> | <code>java.lang.String</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetImportJob">datasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetGroupArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetType"></a>

- *Type:* java.lang.String

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.schemaArn"></a>

- *Type:* java.lang.String

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `datasetImportJob`<sup>Optional</sup> <a name="datasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.datasetImportJob"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob">putDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob">resetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetImportJob` <a name="putDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob"></a>

```java
public void putDatasetImportJob(PersonalizeDatasetDatasetImportJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<PersonalizeDatasetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>>

---

##### `resetDatasetImportJob` <a name="resetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob"></a>

```java
public void resetDatasetImportJob()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDataset;

PersonalizeDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDataset;

PersonalizeDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDataset;

PersonalizeDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDataset;

PersonalizeDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PersonalizeDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PersonalizeDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PersonalizeDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn">datasetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob">datasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput">datasetImportJobInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput">schemaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn"></a>

```java
public java.lang.String getDatasetArn();
```

- *Type:* java.lang.String

---

##### `datasetImportJob`<sup>Required</sup> <a name="datasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob"></a>

```java
public PersonalizeDatasetDatasetImportJobOutputReference getDatasetImportJob();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags"></a>

```java
public PersonalizeDatasetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a>

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput"></a>

```java
public java.lang.String getDatasetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `datasetImportJobInput`<sup>Optional</sup> <a name="datasetImportJobInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput"></a>

```java
public IResolvable|PersonalizeDatasetDatasetImportJob getDatasetImportJobInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput"></a>

```java
public java.lang.String getSchemaArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<PersonalizeDatasetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeDatasetConfig <a name="PersonalizeDatasetConfig" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetConfig;

PersonalizeDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .datasetType(java.lang.String)
    .name(java.lang.String)
    .schemaArn(java.lang.String)
//  .datasetImportJob(PersonalizeDatasetDatasetImportJob)
//  .tags(IResolvable|java.util.List<PersonalizeDatasetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob">datasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `datasetImportJob`<sup>Optional</sup> <a name="datasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob"></a>

```java
public PersonalizeDatasetDatasetImportJob getDatasetImportJob();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<PersonalizeDatasetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

### PersonalizeDatasetDatasetImportJob <a name="PersonalizeDatasetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetDatasetImportJob;

PersonalizeDatasetDatasetImportJob.builder()
//  .datasetArn(java.lang.String)
//  .datasetImportJobArn(java.lang.String)
//  .dataSource(PersonalizeDatasetDatasetImportJobDataSource)
//  .jobName(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn">datasetArn</a></code> | <code>java.lang.String</code> | The ARN of the dataset that receives the imported data. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn">datasetImportJobArn</a></code> | <code>java.lang.String</code> | The ARN of the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | The Amazon S3 bucket that contains the training data to import. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName">jobName</a></code> | <code>java.lang.String</code> | The name for the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that has permissions to read from the Amazon S3 data source. |

---

##### `datasetArn`<sup>Optional</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn"></a>

```java
public java.lang.String getDatasetArn();
```

- *Type:* java.lang.String

The ARN of the dataset that receives the imported data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_arn PersonalizeDataset#dataset_arn}

---

##### `datasetImportJobArn`<sup>Optional</sup> <a name="datasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn"></a>

```java
public java.lang.String getDatasetImportJobArn();
```

- *Type:* java.lang.String

The ARN of the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job_arn PersonalizeDataset#dataset_import_job_arn}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource"></a>

```java
public PersonalizeDatasetDatasetImportJobDataSource getDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

The Amazon S3 bucket that contains the training data to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_source PersonalizeDataset#data_source}

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

The name for the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#job_name PersonalizeDataset#job_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#role_arn PersonalizeDataset#role_arn}

---

### PersonalizeDatasetDatasetImportJobDataSource <a name="PersonalizeDatasetDatasetImportJobDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetDatasetImportJobDataSource;

PersonalizeDatasetDatasetImportJobDataSource.builder()
//  .dataLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation">dataLocation</a></code> | <code>java.lang.String</code> | The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. |

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation"></a>

```java
public java.lang.String getDataLocation();
```

- *Type:* java.lang.String

The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_location PersonalizeDataset#data_location}

---

### PersonalizeDatasetTags <a name="PersonalizeDatasetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetTags;

PersonalizeDatasetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeDatasetDatasetImportJobDataSourceOutputReference <a name="PersonalizeDatasetDatasetImportJobDataSourceOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference;

new PersonalizeDatasetDatasetImportJobDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation">resetDataLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation"></a>

```java
public void resetDataLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput">dataLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation">dataLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput"></a>

```java
public java.lang.String getDataLocationInput();
```

- *Type:* java.lang.String

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation"></a>

```java
public java.lang.String getDataLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeDatasetDatasetImportJobDataSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---


### PersonalizeDatasetDatasetImportJobOutputReference <a name="PersonalizeDatasetDatasetImportJobOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetDatasetImportJobOutputReference;

new PersonalizeDatasetDatasetImportJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn">resetDatasetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn">resetDatasetImportJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource"></a>

```java
public void putDataSource(PersonalizeDatasetDatasetImportJobDataSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `resetDatasetArn` <a name="resetDatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn"></a>

```java
public void resetDatasetArn()
```

##### `resetDatasetImportJobArn` <a name="resetDatasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn"></a>

```java
public void resetDatasetImportJobArn()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetJobName` <a name="resetJobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName"></a>

```java
public void resetJobName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput">datasetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput">datasetImportJobArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn">datasetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn">datasetImportJobArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName">jobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource"></a>

```java
public PersonalizeDatasetDatasetImportJobDataSourceOutputReference getDataSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a>

---

##### `datasetArnInput`<sup>Optional</sup> <a name="datasetArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput"></a>

```java
public java.lang.String getDatasetArnInput();
```

- *Type:* java.lang.String

---

##### `datasetImportJobArnInput`<sup>Optional</sup> <a name="datasetImportJobArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput"></a>

```java
public java.lang.String getDatasetImportJobArnInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput"></a>

```java
public IResolvable|PersonalizeDatasetDatasetImportJobDataSource getDataSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput"></a>

```java
public java.lang.String getJobNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn"></a>

```java
public java.lang.String getDatasetArn();
```

- *Type:* java.lang.String

---

##### `datasetImportJobArn`<sup>Required</sup> <a name="datasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn"></a>

```java
public java.lang.String getDatasetImportJobArn();
```

- *Type:* java.lang.String

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeDatasetDatasetImportJob getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---


### PersonalizeDatasetTagsList <a name="PersonalizeDatasetTagsList" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetTagsList;

new PersonalizeDatasetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get"></a>

```java
public PersonalizeDatasetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PersonalizeDatasetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>>

---


### PersonalizeDatasetTagsOutputReference <a name="PersonalizeDatasetTagsOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_dataset.PersonalizeDatasetTagsOutputReference;

new PersonalizeDatasetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeDatasetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>

---



