# `quicksightTopicV2` Submodule <a name="`quicksightTopicV2` Submodule" id="@cdktn/provider-awscc.quicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTopicV2 <a name="QuicksightTopicV2" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2;

QuicksightTopicV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .awsAccountId(java.lang.String)
//  .customInstructions(QuicksightTopicV2CustomInstructions)
//  .dataSetRelations(IResolvable|java.util.List<QuicksightTopicV2DataSetRelations>)
//  .dataSets(IResolvable|java.util.List<QuicksightTopicV2DataSets>)
//  .description(java.lang.String)
//  .folderArns(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightTopicV2Permissions>)
//  .tags(IResolvable|java.util.List<QuicksightTopicV2Tags>)
//  .topicId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSetRelations">dataSetRelations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSets">dataSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.folderArns">folderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `customInstructions`<sup>Optional</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.customInstructions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `dataSetRelations`<sup>Optional</sup> <a name="dataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSetRelations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `dataSets`<sup>Optional</sup> <a name="dataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `folderArns`<sup>Optional</sup> <a name="folderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.folderArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.permissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions">putCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations">putDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets">putDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions">resetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations">resetDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets">resetDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns">resetFolderArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomInstructions` <a name="putCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions"></a>

```java
public void putCustomInstructions(QuicksightTopicV2CustomInstructions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `putDataSetRelations` <a name="putDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations"></a>

```java
public void putDataSetRelations(IResolvable|java.util.List<QuicksightTopicV2DataSetRelations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>>

---

##### `putDataSets` <a name="putDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets"></a>

```java
public void putDataSets(IResolvable|java.util.List<QuicksightTopicV2DataSets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions"></a>

```java
public void putPermissions(IResolvable|java.util.List<QuicksightTopicV2Permissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightTopicV2Tags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetCustomInstructions` <a name="resetCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions"></a>

```java
public void resetCustomInstructions()
```

##### `resetDataSetRelations` <a name="resetDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations"></a>

```java
public void resetDataSetRelations()
```

##### `resetDataSets` <a name="resetDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets"></a>

```java
public void resetDataSets()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFolderArns` <a name="resetFolderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns"></a>

```java
public void resetFolderArns()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName"></a>

```java
public void resetName()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId"></a>

```java
public void resetTopicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2;

QuicksightTopicV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2;

QuicksightTopicV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2;

QuicksightTopicV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2;

QuicksightTopicV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightTopicV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightTopicV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations">dataSetRelations</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets">dataSets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput">customInstructionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput">dataSetRelationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput">dataSetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput">folderArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput">permissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns">folderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions"></a>

```java
public QuicksightTopicV2CustomInstructionsOutputReference getCustomInstructions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `dataSetRelations`<sup>Required</sup> <a name="dataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations"></a>

```java
public QuicksightTopicV2DataSetRelationsList getDataSetRelations();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a>

---

##### `dataSets`<sup>Required</sup> <a name="dataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets"></a>

```java
public QuicksightTopicV2DataSetsList getDataSets();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions"></a>

```java
public QuicksightTopicV2PermissionsList getPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags"></a>

```java
public QuicksightTopicV2TagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `customInstructionsInput`<sup>Optional</sup> <a name="customInstructionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput"></a>

```java
public IResolvable|QuicksightTopicV2CustomInstructions getCustomInstructionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `dataSetRelationsInput`<sup>Optional</sup> <a name="dataSetRelationsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSetRelations> getDataSetRelationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>>

---

##### `dataSetsInput`<sup>Optional</sup> <a name="dataSetsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSets> getDataSetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `folderArnsInput`<sup>Optional</sup> <a name="folderArnsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput"></a>

```java
public java.util.List<java.lang.String> getFolderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Permissions> getPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Tags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `folderArns`<sup>Required</sup> <a name="folderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns"></a>

```java
public java.util.List<java.lang.String> getFolderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTopicV2Config <a name="QuicksightTopicV2Config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2Config;

QuicksightTopicV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .awsAccountId(java.lang.String)
//  .customInstructions(QuicksightTopicV2CustomInstructions)
//  .dataSetRelations(IResolvable|java.util.List<QuicksightTopicV2DataSetRelations>)
//  .dataSets(IResolvable|java.util.List<QuicksightTopicV2DataSets>)
//  .description(java.lang.String)
//  .folderArns(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .permissions(IResolvable|java.util.List<QuicksightTopicV2Permissions>)
//  .tags(IResolvable|java.util.List<QuicksightTopicV2Tags>)
//  .topicId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations">dataSetRelations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets">dataSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns">folderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions">permissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `customInstructions`<sup>Optional</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions"></a>

```java
public QuicksightTopicV2CustomInstructions getCustomInstructions();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `dataSetRelations`<sup>Optional</sup> <a name="dataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSetRelations> getDataSetRelations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `dataSets`<sup>Optional</sup> <a name="dataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSets> getDataSets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `folderArns`<sup>Optional</sup> <a name="folderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns"></a>

```java
public java.util.List<java.lang.String> getFolderArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Permissions> getPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Tags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

### QuicksightTopicV2CustomInstructions <a name="QuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2CustomInstructions;

QuicksightTopicV2CustomInstructions.builder()
//  .customInstructionsString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString">customInstructionsString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}. |

---

##### `customInstructionsString`<sup>Optional</sup> <a name="customInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString"></a>

```java
public java.lang.String getCustomInstructionsString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}.

---

### QuicksightTopicV2DataSetRelations <a name="QuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelations;

QuicksightTopicV2DataSetRelations.builder()
//  .left(QuicksightTopicV2DataSetRelationsLeft)
//  .right(QuicksightTopicV2DataSetRelationsRight)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}. |

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left"></a>

```java
public QuicksightTopicV2DataSetRelationsLeft getLeft();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}.

---

##### `right`<sup>Optional</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right"></a>

```java
public QuicksightTopicV2DataSetRelationsRight getRight();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}.

---

### QuicksightTopicV2DataSetRelationsLeft <a name="QuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsLeft;

QuicksightTopicV2DataSetRelationsLeft.builder()
//  .columnNames(java.util.List<java.lang.String>)
//  .dataSetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSetRelationsRight <a name="QuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsRight;

QuicksightTopicV2DataSetRelationsRight.builder()
//  .columnNames(java.util.List<java.lang.String>)
//  .dataSetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSets <a name="QuicksightTopicV2DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSets;

QuicksightTopicV2DataSets.builder()
//  .dataSetArn(java.lang.String)
//  .dataSetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName">dataSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}. |

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `dataSetName`<sup>Optional</sup> <a name="dataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName"></a>

```java
public java.lang.String getDataSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}.

---

### QuicksightTopicV2Permissions <a name="QuicksightTopicV2Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2Permissions;

QuicksightTopicV2Permissions.builder()
//  .actions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}.

---

### QuicksightTopicV2Tags <a name="QuicksightTopicV2Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2Tags;

QuicksightTopicV2Tags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#key QuicksightTopicV2#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#value QuicksightTopicV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTopicV2CustomInstructionsOutputReference <a name="QuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2CustomInstructionsOutputReference;

new QuicksightTopicV2CustomInstructionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString">resetCustomInstructionsString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomInstructionsString` <a name="resetCustomInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString"></a>

```java
public void resetCustomInstructionsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput">customInstructionsStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">customInstructionsString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customInstructionsStringInput`<sup>Optional</sup> <a name="customInstructionsStringInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput"></a>

```java
public java.lang.String getCustomInstructionsStringInput();
```

- *Type:* java.lang.String

---

##### `customInstructionsString`<sup>Required</sup> <a name="customInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```java
public java.lang.String getCustomInstructionsString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2CustomInstructions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---


### QuicksightTopicV2DataSetRelationsLeftOutputReference <a name="QuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsLeftOutputReference;

new QuicksightTopicV2DataSetRelationsLeftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn"></a>

```java
public void resetDataSetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2DataSetRelationsLeft getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---


### QuicksightTopicV2DataSetRelationsList <a name="QuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsList;

new QuicksightTopicV2DataSetRelationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get"></a>

```java
public QuicksightTopicV2DataSetRelationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSetRelations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>>

---


### QuicksightTopicV2DataSetRelationsOutputReference <a name="QuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsOutputReference;

new QuicksightTopicV2DataSetRelationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft">resetLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight">resetRight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft"></a>

```java
public void putLeft(QuicksightTopicV2DataSetRelationsLeft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight"></a>

```java
public void putRight(QuicksightTopicV2DataSetRelationsRight value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `resetLeft` <a name="resetLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft"></a>

```java
public void resetLeft()
```

##### `resetRight` <a name="resetRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight"></a>

```java
public void resetRight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput">leftInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput">rightInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```java
public QuicksightTopicV2DataSetRelationsLeftOutputReference getLeft();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```java
public QuicksightTopicV2DataSetRelationsRightOutputReference getRight();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput"></a>

```java
public IResolvable|QuicksightTopicV2DataSetRelationsLeft getLeftInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput"></a>

```java
public IResolvable|QuicksightTopicV2DataSetRelationsRight getRightInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2DataSetRelations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>

---


### QuicksightTopicV2DataSetRelationsRightOutputReference <a name="QuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetRelationsRightOutputReference;

new QuicksightTopicV2DataSetRelationsRightOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn"></a>

```java
public void resetDataSetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2DataSetRelationsRight getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---


### QuicksightTopicV2DataSetsList <a name="QuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetsList;

new QuicksightTopicV2DataSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get"></a>

```java
public QuicksightTopicV2DataSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2DataSets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>>

---


### QuicksightTopicV2DataSetsOutputReference <a name="QuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2DataSetsOutputReference;

new QuicksightTopicV2DataSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName">resetDataSetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn"></a>

```java
public void resetDataSetArn()
```

##### `resetDataSetName` <a name="resetDataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName"></a>

```java
public void resetDataSetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput">dataSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName">dataSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetNameInput`<sup>Optional</sup> <a name="dataSetNameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput"></a>

```java
public java.lang.String getDataSetNameInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```java
public java.lang.String getDataSetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2DataSets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>

---


### QuicksightTopicV2PermissionsList <a name="QuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2PermissionsList;

new QuicksightTopicV2PermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get"></a>

```java
public QuicksightTopicV2PermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Permissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>>

---


### QuicksightTopicV2PermissionsOutputReference <a name="QuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2PermissionsOutputReference;

new QuicksightTopicV2PermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2Permissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>

---


### QuicksightTopicV2TagsList <a name="QuicksightTopicV2TagsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2TagsList;

new QuicksightTopicV2TagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get"></a>

```java
public QuicksightTopicV2TagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightTopicV2Tags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>>

---


### QuicksightTopicV2TagsOutputReference <a name="QuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_topic_v2.QuicksightTopicV2TagsOutputReference;

new QuicksightTopicV2TagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightTopicV2Tags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>

---



