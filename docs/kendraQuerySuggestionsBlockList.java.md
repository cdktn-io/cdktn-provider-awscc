# `kendraQuerySuggestionsBlockList` Submodule <a name="`kendraQuerySuggestionsBlockList` Submodule" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraQuerySuggestionsBlockList <a name="KendraQuerySuggestionsBlockList" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list awscc_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .indexId(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .sourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.indexId">indexId</a></code> | <code>java.lang.String</code> | The identifier of the index for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | Information required to find a specific file in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>></code> | A list of key-value pairs that identify or categorize the block list. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.indexId"></a>

- *Type:* java.lang.String

The identifier of the index for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.sourceS3Path"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

Information required to find a specific file in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>>

A list of key-value pairs that identify or categorize the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path">putSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceS3Path` <a name="putSourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path"></a>

```java
public void putSourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KendraQuerySuggestionsBlockList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KendraQuerySuggestionsBlockList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KendraQuerySuggestionsBlockList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KendraQuerySuggestionsBlockList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList">KendraQuerySuggestionsBlockListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput">sourceS3PathInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```java
public java.lang.String getQuerySuggestionsBlockListId();
```

- *Type:* java.lang.String

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3PathOutputReference getSourceS3Path();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags"></a>

```java
public KendraQuerySuggestionsBlockListTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList">KendraQuerySuggestionsBlockListTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceS3PathInput`<sup>Optional</sup> <a name="sourceS3PathInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput"></a>

```java
public IResolvable|KendraQuerySuggestionsBlockListSourceS3Path getSourceS3PathInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KendraQuerySuggestionsBlockListConfig <a name="KendraQuerySuggestionsBlockListConfig" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListConfig;

KendraQuerySuggestionsBlockListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .indexId(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .sourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId">indexId</a></code> | <code>java.lang.String</code> | The identifier of the index for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | Information required to find a specific file in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>></code> | A list of key-value pairs that identify or categorize the block list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

The identifier of the index for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3Path getSourceS3Path();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

Information required to find a specific file in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>>

A list of key-value pairs that identify or categorize the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}

---

### KendraQuerySuggestionsBlockListSourceS3Path <a name="KendraQuerySuggestionsBlockListSourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListSourceS3Path;

KendraQuerySuggestionsBlockListSourceS3Path.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key">key</a></code> | <code>java.lang.String</code> | The name of the file. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}

---

### KendraQuerySuggestionsBlockListTags <a name="KendraQuerySuggestionsBlockListTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListTags;

KendraQuerySuggestionsBlockListTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.value">value</a></code> | <code>java.lang.String</code> | The value associated with the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#value KendraQuerySuggestionsBlockList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="KendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListSourceS3PathOutputReference;

new KendraQuerySuggestionsBlockListSourceS3PathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```java
public IResolvable|KendraQuerySuggestionsBlockListSourceS3Path getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---


### KendraQuerySuggestionsBlockListTagsList <a name="KendraQuerySuggestionsBlockListTagsList" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListTagsList;

new KendraQuerySuggestionsBlockListTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get"></a>

```java
public KendraQuerySuggestionsBlockListTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KendraQuerySuggestionsBlockListTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>>

---


### KendraQuerySuggestionsBlockListTagsOutputReference <a name="KendraQuerySuggestionsBlockListTagsOutputReference" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListTagsOutputReference;

new KendraQuerySuggestionsBlockListTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KendraQuerySuggestionsBlockListTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags">KendraQuerySuggestionsBlockListTags</a>

---



