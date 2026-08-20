# `wisdomKnowledgeBase` Submodule <a name="`wisdomKnowledgeBase` Submodule" id="@cdktn/provider-awscc.wisdomKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomKnowledgeBase <a name="WisdomKnowledgeBase" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBase;

WisdomKnowledgeBase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .knowledgeBaseType(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .renderingConfiguration(WisdomKnowledgeBaseRenderingConfiguration)
//  .serverSideEncryptionConfiguration(WisdomKnowledgeBaseServerSideEncryptionConfiguration)
//  .sourceConfiguration(WisdomKnowledgeBaseSourceConfiguration)
//  .tags(IResolvable|java.util.List<WisdomKnowledgeBaseTags>)
//  .vectorIngestionConfiguration(WisdomKnowledgeBaseVectorIngestionConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.knowledgeBaseType">knowledgeBaseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.renderingConfiguration">renderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.vectorIngestionConfiguration">vectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `knowledgeBaseType`<sup>Required</sup> <a name="knowledgeBaseType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.knowledgeBaseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}.

---

##### `renderingConfiguration`<sup>Optional</sup> <a name="renderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.renderingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}.

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.sourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}.

---

##### `vectorIngestionConfiguration`<sup>Optional</sup> <a name="vectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.vectorIngestionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration">putRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration">putVectorIngestionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetRenderingConfiguration">resetRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetSourceConfiguration">resetSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetVectorIngestionConfiguration">resetVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRenderingConfiguration` <a name="putRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration"></a>

```java
public void putRenderingConfiguration(WisdomKnowledgeBaseRenderingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration"></a>

```java
public void putServerSideEncryptionConfiguration(WisdomKnowledgeBaseServerSideEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration"></a>

```java
public void putSourceConfiguration(WisdomKnowledgeBaseSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WisdomKnowledgeBaseTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>>

---

##### `putVectorIngestionConfiguration` <a name="putVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration"></a>

```java
public void putVectorIngestionConfiguration(WisdomKnowledgeBaseVectorIngestionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRenderingConfiguration` <a name="resetRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetRenderingConfiguration"></a>

```java
public void resetRenderingConfiguration()
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetServerSideEncryptionConfiguration"></a>

```java
public void resetServerSideEncryptionConfiguration()
```

##### `resetSourceConfiguration` <a name="resetSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetSourceConfiguration"></a>

```java
public void resetSourceConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetTags"></a>

```java
public void resetTags()
```

##### `resetVectorIngestionConfiguration` <a name="resetVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetVectorIngestionConfiguration"></a>

```java
public void resetVectorIngestionConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBase;

WisdomKnowledgeBase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBase;

WisdomKnowledgeBase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBase;

WisdomKnowledgeBase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBase;

WisdomKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WisdomKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WisdomKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WisdomKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WisdomKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WisdomKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfiguration">renderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference">WisdomKnowledgeBaseRenderingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList">WisdomKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfiguration">vectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseTypeInput">knowledgeBaseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfigurationInput">renderingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfigurationInput">vectorIngestionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseType">knowledgeBaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `renderingConfiguration`<sup>Required</sup> <a name="renderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfiguration"></a>

```java
public WisdomKnowledgeBaseRenderingConfigurationOutputReference getRenderingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference">WisdomKnowledgeBaseRenderingConfigurationOutputReference</a>

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfiguration"></a>

```java
public WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationOutputReference getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tags"></a>

```java
public WisdomKnowledgeBaseTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList">WisdomKnowledgeBaseTagsList</a>

---

##### `vectorIngestionConfiguration`<sup>Required</sup> <a name="vectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference getVectorIngestionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseTypeInput`<sup>Optional</sup> <a name="knowledgeBaseTypeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseTypeInput"></a>

```java
public java.lang.String getKnowledgeBaseTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `renderingConfigurationInput`<sup>Optional</sup> <a name="renderingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseRenderingConfiguration getRenderingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseServerSideEncryptionConfiguration getServerSideEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfiguration getSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>>

---

##### `vectorIngestionConfigurationInput`<sup>Optional</sup> <a name="vectorIngestionConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfiguration getVectorIngestionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseType`<sup>Required</sup> <a name="knowledgeBaseType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseType"></a>

```java
public java.lang.String getKnowledgeBaseType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomKnowledgeBaseConfig <a name="WisdomKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseConfig;

WisdomKnowledgeBaseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .knowledgeBaseType(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .renderingConfiguration(WisdomKnowledgeBaseRenderingConfiguration)
//  .serverSideEncryptionConfiguration(WisdomKnowledgeBaseServerSideEncryptionConfiguration)
//  .sourceConfiguration(WisdomKnowledgeBaseSourceConfiguration)
//  .tags(IResolvable|java.util.List<WisdomKnowledgeBaseTags>)
//  .vectorIngestionConfiguration(WisdomKnowledgeBaseVectorIngestionConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.knowledgeBaseType">knowledgeBaseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.renderingConfiguration">renderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.vectorIngestionConfiguration">vectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `knowledgeBaseType`<sup>Required</sup> <a name="knowledgeBaseType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.knowledgeBaseType"></a>

```java
public java.lang.String getKnowledgeBaseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}.

---

##### `renderingConfiguration`<sup>Optional</sup> <a name="renderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.renderingConfiguration"></a>

```java
public WisdomKnowledgeBaseRenderingConfiguration getRenderingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.serverSideEncryptionConfiguration"></a>

```java
public WisdomKnowledgeBaseServerSideEncryptionConfiguration getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}.

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.sourceConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfiguration getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}.

---

##### `vectorIngestionConfiguration`<sup>Optional</sup> <a name="vectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.vectorIngestionConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfiguration getVectorIngestionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}.

---

### WisdomKnowledgeBaseRenderingConfiguration <a name="WisdomKnowledgeBaseRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseRenderingConfiguration;

WisdomKnowledgeBaseRenderingConfiguration.builder()
//  .templateUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.property.templateUri">templateUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#template_uri WisdomKnowledgeBase#template_uri}. |

---

##### `templateUri`<sup>Optional</sup> <a name="templateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.property.templateUri"></a>

```java
public java.lang.String getTemplateUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#template_uri WisdomKnowledgeBase#template_uri}.

---

### WisdomKnowledgeBaseServerSideEncryptionConfiguration <a name="WisdomKnowledgeBaseServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseServerSideEncryptionConfiguration;

WisdomKnowledgeBaseServerSideEncryptionConfiguration.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#kms_key_id WisdomKnowledgeBase#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#kms_key_id WisdomKnowledgeBase#kms_key_id}.

---

### WisdomKnowledgeBaseSourceConfiguration <a name="WisdomKnowledgeBaseSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfiguration;

WisdomKnowledgeBaseSourceConfiguration.builder()
//  .appIntegrations(WisdomKnowledgeBaseSourceConfigurationAppIntegrations)
//  .managedSourceConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.appIntegrations">appIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#app_integrations WisdomKnowledgeBase#app_integrations}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.managedSourceConfiguration">managedSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#managed_source_configuration WisdomKnowledgeBase#managed_source_configuration}. |

---

##### `appIntegrations`<sup>Optional</sup> <a name="appIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.appIntegrations"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationAppIntegrations getAppIntegrations();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#app_integrations WisdomKnowledgeBase#app_integrations}.

---

##### `managedSourceConfiguration`<sup>Optional</sup> <a name="managedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.managedSourceConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration getManagedSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#managed_source_configuration WisdomKnowledgeBase#managed_source_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationAppIntegrations <a name="WisdomKnowledgeBaseSourceConfigurationAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationAppIntegrations;

WisdomKnowledgeBaseSourceConfigurationAppIntegrations.builder()
//  .appIntegrationArn(java.lang.String)
//  .objectFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.appIntegrationArn">appIntegrationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#app_integration_arn WisdomKnowledgeBase#app_integration_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.objectFields">objectFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#object_fields WisdomKnowledgeBase#object_fields}. |

---

##### `appIntegrationArn`<sup>Optional</sup> <a name="appIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.appIntegrationArn"></a>

```java
public java.lang.String getAppIntegrationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#app_integration_arn WisdomKnowledgeBase#app_integration_arn}.

---

##### `objectFields`<sup>Optional</sup> <a name="objectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.objectFields"></a>

```java
public java.util.List<java.lang.String> getObjectFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#object_fields WisdomKnowledgeBase#object_fields}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration;

WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.builder()
//  .webCrawlerConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.property.webCrawlerConfiguration">webCrawlerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#web_crawler_configuration WisdomKnowledgeBase#web_crawler_configuration}. |

---

##### `webCrawlerConfiguration`<sup>Optional</sup> <a name="webCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.property.webCrawlerConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration getWebCrawlerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#web_crawler_configuration WisdomKnowledgeBase#web_crawler_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration;

WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.builder()
//  .crawlerLimits(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits)
//  .exclusionFilters(java.util.List<java.lang.String>)
//  .inclusionFilters(java.util.List<java.lang.String>)
//  .scope(java.lang.String)
//  .urlConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.crawlerLimits">crawlerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#crawler_limits WisdomKnowledgeBase#crawler_limits}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.exclusionFilters">exclusionFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#exclusion_filters WisdomKnowledgeBase#exclusion_filters}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.inclusionFilters">inclusionFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#inclusion_filters WisdomKnowledgeBase#inclusion_filters}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#scope WisdomKnowledgeBase#scope}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.urlConfiguration">urlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#url_configuration WisdomKnowledgeBase#url_configuration}. |

---

##### `crawlerLimits`<sup>Optional</sup> <a name="crawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.crawlerLimits"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits getCrawlerLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#crawler_limits WisdomKnowledgeBase#crawler_limits}.

---

##### `exclusionFilters`<sup>Optional</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.exclusionFilters"></a>

```java
public java.util.List<java.lang.String> getExclusionFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#exclusion_filters WisdomKnowledgeBase#exclusion_filters}.

---

##### `inclusionFilters`<sup>Optional</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.inclusionFilters"></a>

```java
public java.util.List<java.lang.String> getInclusionFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#inclusion_filters WisdomKnowledgeBase#inclusion_filters}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#scope WisdomKnowledgeBase#scope}.

---

##### `urlConfiguration`<sup>Optional</sup> <a name="urlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.urlConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration getUrlConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#url_configuration WisdomKnowledgeBase#url_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits;

WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.builder()
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rate_limit WisdomKnowledgeBase#rate_limit}. |

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#rate_limit WisdomKnowledgeBase#rate_limit}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration;

WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.builder()
//  .seedUrls(IResolvable|java.util.List<WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.property.seedUrls">seedUrls</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#seed_urls WisdomKnowledgeBase#seed_urls}. |

---

##### `seedUrls`<sup>Optional</sup> <a name="seedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.property.seedUrls"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls> getSeedUrls();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#seed_urls WisdomKnowledgeBase#seed_urls}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls;

WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.builder()
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#url WisdomKnowledgeBase#url}. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#url WisdomKnowledgeBase#url}.

---

### WisdomKnowledgeBaseTags <a name="WisdomKnowledgeBaseTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseTags;

WisdomKnowledgeBaseTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#key WisdomKnowledgeBase#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#value WisdomKnowledgeBase#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#key WisdomKnowledgeBase#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#value WisdomKnowledgeBase#value}.

---

### WisdomKnowledgeBaseVectorIngestionConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfiguration;

WisdomKnowledgeBaseVectorIngestionConfiguration.builder()
//  .chunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration)
//  .parsingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.chunkingConfiguration">chunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#chunking_configuration WisdomKnowledgeBase#chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.parsingConfiguration">parsingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_configuration WisdomKnowledgeBase#parsing_configuration}. |

---

##### `chunkingConfiguration`<sup>Optional</sup> <a name="chunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.chunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration getChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#chunking_configuration WisdomKnowledgeBase#chunking_configuration}.

---

##### `parsingConfiguration`<sup>Optional</sup> <a name="parsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.parsingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration getParsingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_configuration WisdomKnowledgeBase#parsing_configuration}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.builder()
//  .chunkingStrategy(java.lang.String)
//  .fixedSizeChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration)
//  .hierarchicalChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration)
//  .semanticChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy">chunkingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#chunking_strategy WisdomKnowledgeBase#chunking_strategy}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration">fixedSizeChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration WisdomKnowledgeBase#fixed_size_chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.hierarchicalChunkingConfiguration">hierarchicalChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration WisdomKnowledgeBase#hierarchical_chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.semanticChunkingConfiguration">semanticChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration WisdomKnowledgeBase#semantic_chunking_configuration}. |

---

##### `chunkingStrategy`<sup>Optional</sup> <a name="chunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy"></a>

```java
public java.lang.String getChunkingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#chunking_strategy WisdomKnowledgeBase#chunking_strategy}.

---

##### `fixedSizeChunkingConfiguration`<sup>Optional</sup> <a name="fixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration getFixedSizeChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration WisdomKnowledgeBase#fixed_size_chunking_configuration}.

---

##### `hierarchicalChunkingConfiguration`<sup>Optional</sup> <a name="hierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.hierarchicalChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration getHierarchicalChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration WisdomKnowledgeBase#hierarchical_chunking_configuration}.

---

##### `semanticChunkingConfiguration`<sup>Optional</sup> <a name="semanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.semanticChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration getSemanticChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration WisdomKnowledgeBase#semantic_chunking_configuration}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.builder()
//  .maxTokens(java.lang.Number)
//  .overlapPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage">overlapPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#overlap_percentage WisdomKnowledgeBase#overlap_percentage}. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

##### `overlapPercentage`<sup>Optional</sup> <a name="overlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage"></a>

```java
public java.lang.Number getOverlapPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#overlap_percentage WisdomKnowledgeBase#overlap_percentage}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.builder()
//  .levelConfigurations(IResolvable|java.util.List<WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations>)
//  .overlapTokens(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.levelConfigurations">levelConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#level_configurations WisdomKnowledgeBase#level_configurations}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.overlapTokens">overlapTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#overlap_tokens WisdomKnowledgeBase#overlap_tokens}. |

---

##### `levelConfigurations`<sup>Optional</sup> <a name="levelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.levelConfigurations"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations> getLevelConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#level_configurations WisdomKnowledgeBase#level_configurations}.

---

##### `overlapTokens`<sup>Optional</sup> <a name="overlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.overlapTokens"></a>

```java
public java.lang.Number getOverlapTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#overlap_tokens WisdomKnowledgeBase#overlap_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations;

WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.builder()
//  .maxTokens(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.builder()
//  .breakpointPercentileThreshold(java.lang.Number)
//  .bufferSize(java.lang.Number)
//  .maxTokens(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.breakpointPercentileThreshold">breakpointPercentileThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold WisdomKnowledgeBase#breakpoint_percentile_threshold}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.bufferSize">bufferSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#buffer_size WisdomKnowledgeBase#buffer_size}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |

---

##### `breakpointPercentileThreshold`<sup>Optional</sup> <a name="breakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.breakpointPercentileThreshold"></a>

```java
public java.lang.Number getBreakpointPercentileThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold WisdomKnowledgeBase#breakpoint_percentile_threshold}.

---

##### `bufferSize`<sup>Optional</sup> <a name="bufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.bufferSize"></a>

```java
public java.lang.Number getBufferSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#buffer_size WisdomKnowledgeBase#buffer_size}.

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.builder()
//  .bedrockFoundationModelConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration)
//  .parsingStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.bedrockFoundationModelConfiguration">bedrockFoundationModelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration WisdomKnowledgeBase#bedrock_foundation_model_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.parsingStrategy">parsingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_strategy WisdomKnowledgeBase#parsing_strategy}. |

---

##### `bedrockFoundationModelConfiguration`<sup>Optional</sup> <a name="bedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.bedrockFoundationModelConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration getBedrockFoundationModelConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration WisdomKnowledgeBase#bedrock_foundation_model_configuration}.

---

##### `parsingStrategy`<sup>Optional</sup> <a name="parsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.parsingStrategy"></a>

```java
public java.lang.String getParsingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_strategy WisdomKnowledgeBase#parsing_strategy}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration;

WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.builder()
//  .modelArn(java.lang.String)
//  .parsingPrompt(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#model_arn WisdomKnowledgeBase#model_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.parsingPrompt">parsingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_prompt WisdomKnowledgeBase#parsing_prompt}. |

---

##### `modelArn`<sup>Optional</sup> <a name="modelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#model_arn WisdomKnowledgeBase#model_arn}.

---

##### `parsingPrompt`<sup>Optional</sup> <a name="parsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.parsingPrompt"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt getParsingPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_prompt WisdomKnowledgeBase#parsing_prompt}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt;

WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.builder()
//  .parsingPromptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.property.parsingPromptText">parsingPromptText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_prompt_text WisdomKnowledgeBase#parsing_prompt_text}. |

---

##### `parsingPromptText`<sup>Optional</sup> <a name="parsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.property.parsingPromptText"></a>

```java
public java.lang.String getParsingPromptText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_knowledge_base#parsing_prompt_text WisdomKnowledgeBase#parsing_prompt_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomKnowledgeBaseRenderingConfigurationOutputReference <a name="WisdomKnowledgeBaseRenderingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseRenderingConfigurationOutputReference;

new WisdomKnowledgeBaseRenderingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resetTemplateUri">resetTemplateUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplateUri` <a name="resetTemplateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resetTemplateUri"></a>

```java
public void resetTemplateUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUriInput">templateUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri">templateUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `templateUriInput`<sup>Optional</sup> <a name="templateUriInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUriInput"></a>

```java
public java.lang.String getTemplateUriInput();
```

- *Type:* java.lang.String

---

##### `templateUri`<sup>Required</sup> <a name="templateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri"></a>

```java
public java.lang.String getTemplateUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseRenderingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---


### WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference <a name="WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference;

new WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseServerSideEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference;

new WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetAppIntegrationArn">resetAppIntegrationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetObjectFields">resetObjectFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIntegrationArn` <a name="resetAppIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetAppIntegrationArn"></a>

```java
public void resetAppIntegrationArn()
```

##### `resetObjectFields` <a name="resetObjectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetObjectFields"></a>

```java
public void resetObjectFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArnInput">appIntegrationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFieldsInput">objectFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn">appIntegrationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields">objectFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIntegrationArnInput`<sup>Optional</sup> <a name="appIntegrationArnInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArnInput"></a>

```java
public java.lang.String getAppIntegrationArnInput();
```

- *Type:* java.lang.String

---

##### `objectFieldsInput`<sup>Optional</sup> <a name="objectFieldsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFieldsInput"></a>

```java
public java.util.List<java.lang.String> getObjectFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appIntegrationArn`<sup>Required</sup> <a name="appIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn"></a>

```java
public java.lang.String getAppIntegrationArn();
```

- *Type:* java.lang.String

---

##### `objectFields`<sup>Required</sup> <a name="objectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields"></a>

```java
public java.util.List<java.lang.String> getObjectFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationAppIntegrations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration">putWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resetWebCrawlerConfiguration">resetWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWebCrawlerConfiguration` <a name="putWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration"></a>

```java
public void putWebCrawlerConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---

##### `resetWebCrawlerConfiguration` <a name="resetWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resetWebCrawlerConfiguration"></a>

```java
public void resetWebCrawlerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration">webCrawlerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfigurationInput">webCrawlerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `webCrawlerConfiguration`<sup>Required</sup> <a name="webCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference getWebCrawlerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `webCrawlerConfigurationInput`<sup>Optional</sup> <a name="webCrawlerConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration getWebCrawlerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits">putCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration">putUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlerLimits">resetCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetExclusionFilters">resetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetInclusionFilters">resetInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlConfiguration">resetUrlConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrawlerLimits` <a name="putCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits"></a>

```java
public void putCrawlerLimits(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---

##### `putUrlConfiguration` <a name="putUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration"></a>

```java
public void putUrlConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---

##### `resetCrawlerLimits` <a name="resetCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlerLimits"></a>

```java
public void resetCrawlerLimits()
```

##### `resetExclusionFilters` <a name="resetExclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetExclusionFilters"></a>

```java
public void resetExclusionFilters()
```

##### `resetInclusionFilters` <a name="resetInclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetInclusionFilters"></a>

```java
public void resetInclusionFilters()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetUrlConfiguration` <a name="resetUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlConfiguration"></a>

```java
public void resetUrlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits">crawlerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration">urlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimitsInput">crawlerLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFiltersInput">exclusionFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFiltersInput">inclusionFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfigurationInput">urlConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters">exclusionFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters">inclusionFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlerLimits`<sup>Required</sup> <a name="crawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference getCrawlerLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a>

---

##### `urlConfiguration`<sup>Required</sup> <a name="urlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference getUrlConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a>

---

##### `crawlerLimitsInput`<sup>Optional</sup> <a name="crawlerLimitsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimitsInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits getCrawlerLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---

##### `exclusionFiltersInput`<sup>Optional</sup> <a name="exclusionFiltersInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFiltersInput"></a>

```java
public java.util.List<java.lang.String> getExclusionFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionFiltersInput`<sup>Optional</sup> <a name="inclusionFiltersInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFiltersInput"></a>

```java
public java.util.List<java.lang.String> getInclusionFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `urlConfigurationInput`<sup>Optional</sup> <a name="urlConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration getUrlConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---

##### `exclusionFilters`<sup>Required</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters"></a>

```java
public java.util.List<java.lang.String> getExclusionFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionFilters`<sup>Required</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters"></a>

```java
public java.util.List<java.lang.String> getInclusionFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls">putSeedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resetSeedUrls">resetSeedUrls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSeedUrls` <a name="putSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls"></a>

```java
public void putSeedUrls(IResolvable|java.util.List<WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>>

---

##### `resetSeedUrls` <a name="resetSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resetSeedUrls"></a>

```java
public void resetSeedUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls">seedUrls</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrlsInput">seedUrlsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `seedUrls`<sup>Required</sup> <a name="seedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList getSeedUrls();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a>

---

##### `seedUrlsInput`<sup>Optional</sup> <a name="seedUrlsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrlsInput"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls> getSeedUrlsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>

---


### WisdomKnowledgeBaseSourceConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseSourceConfigurationOutputReference;

new WisdomKnowledgeBaseSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations">putAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration">putManagedSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetAppIntegrations">resetAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetManagedSourceConfiguration">resetManagedSourceConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppIntegrations` <a name="putAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations"></a>

```java
public void putAppIntegrations(WisdomKnowledgeBaseSourceConfigurationAppIntegrations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---

##### `putManagedSourceConfiguration` <a name="putManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration"></a>

```java
public void putManagedSourceConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---

##### `resetAppIntegrations` <a name="resetAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetAppIntegrations"></a>

```java
public void resetAppIntegrations()
```

##### `resetManagedSourceConfiguration` <a name="resetManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetManagedSourceConfiguration"></a>

```java
public void resetManagedSourceConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations">appIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration">managedSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrationsInput">appIntegrationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfigurationInput">managedSourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIntegrations`<sup>Required</sup> <a name="appIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference getAppIntegrations();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a>

---

##### `managedSourceConfiguration`<sup>Required</sup> <a name="managedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration"></a>

```java
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference getManagedSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a>

---

##### `appIntegrationsInput`<sup>Optional</sup> <a name="appIntegrationsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrationsInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationAppIntegrations getAppIntegrationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---

##### `managedSourceConfigurationInput`<sup>Optional</sup> <a name="managedSourceConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration getManagedSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---


### WisdomKnowledgeBaseTagsList <a name="WisdomKnowledgeBaseTagsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseTagsList;

new WisdomKnowledgeBaseTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get"></a>

```java
public WisdomKnowledgeBaseTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>>

---


### WisdomKnowledgeBaseTagsOutputReference <a name="WisdomKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseTagsOutputReference;

new WisdomKnowledgeBaseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetOverlapPercentage">resetOverlapPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```

##### `resetOverlapPercentage` <a name="resetOverlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetOverlapPercentage"></a>

```java
public void resetOverlapPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput">overlapPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage">overlapPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `overlapPercentageInput`<sup>Optional</sup> <a name="overlapPercentageInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput"></a>

```java
public java.lang.Number getOverlapPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `overlapPercentage`<sup>Required</sup> <a name="overlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage"></a>

```java
public java.lang.Number getOverlapPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations">putLevelConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetLevelConfigurations">resetLevelConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetOverlapTokens">resetOverlapTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevelConfigurations` <a name="putLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations"></a>

```java
public void putLevelConfigurations(IResolvable|java.util.List<WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>>

---

##### `resetLevelConfigurations` <a name="resetLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetLevelConfigurations"></a>

```java
public void resetLevelConfigurations()
```

##### `resetOverlapTokens` <a name="resetOverlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetOverlapTokens"></a>

```java
public void resetOverlapTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations">levelConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurationsInput">levelConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokensInput">overlapTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens">overlapTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelConfigurations`<sup>Required</sup> <a name="levelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList getLevelConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a>

---

##### `levelConfigurationsInput`<sup>Optional</sup> <a name="levelConfigurationsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurationsInput"></a>

```java
public IResolvable|java.util.List<WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations> getLevelConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>>

---

##### `overlapTokensInput`<sup>Optional</sup> <a name="overlapTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokensInput"></a>

```java
public java.lang.Number getOverlapTokensInput();
```

- *Type:* java.lang.Number

---

##### `overlapTokens`<sup>Required</sup> <a name="overlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens"></a>

```java
public java.lang.Number getOverlapTokens();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration">putFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration">putHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration">putSemanticChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetChunkingStrategy">resetChunkingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration">resetFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetHierarchicalChunkingConfiguration">resetHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetSemanticChunkingConfiguration">resetSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedSizeChunkingConfiguration` <a name="putFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration"></a>

```java
public void putFixedSizeChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---

##### `putHierarchicalChunkingConfiguration` <a name="putHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration"></a>

```java
public void putHierarchicalChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---

##### `putSemanticChunkingConfiguration` <a name="putSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration"></a>

```java
public void putSemanticChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---

##### `resetChunkingStrategy` <a name="resetChunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetChunkingStrategy"></a>

```java
public void resetChunkingStrategy()
```

##### `resetFixedSizeChunkingConfiguration` <a name="resetFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration"></a>

```java
public void resetFixedSizeChunkingConfiguration()
```

##### `resetHierarchicalChunkingConfiguration` <a name="resetHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetHierarchicalChunkingConfiguration"></a>

```java
public void resetHierarchicalChunkingConfiguration()
```

##### `resetSemanticChunkingConfiguration` <a name="resetSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetSemanticChunkingConfiguration"></a>

```java
public void resetSemanticChunkingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration">fixedSizeChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration">hierarchicalChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration">semanticChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput">chunkingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput">fixedSizeChunkingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfigurationInput">hierarchicalChunkingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfigurationInput">semanticChunkingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy">chunkingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedSizeChunkingConfiguration`<sup>Required</sup> <a name="fixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference getFixedSizeChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a>

---

##### `hierarchicalChunkingConfiguration`<sup>Required</sup> <a name="hierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference getHierarchicalChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a>

---

##### `semanticChunkingConfiguration`<sup>Required</sup> <a name="semanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference getSemanticChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a>

---

##### `chunkingStrategyInput`<sup>Optional</sup> <a name="chunkingStrategyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput"></a>

```java
public java.lang.String getChunkingStrategyInput();
```

- *Type:* java.lang.String

---

##### `fixedSizeChunkingConfigurationInput`<sup>Optional</sup> <a name="fixedSizeChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration getFixedSizeChunkingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---

##### `hierarchicalChunkingConfigurationInput`<sup>Optional</sup> <a name="hierarchicalChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration getHierarchicalChunkingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---

##### `semanticChunkingConfigurationInput`<sup>Optional</sup> <a name="semanticChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration getSemanticChunkingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---

##### `chunkingStrategy`<sup>Required</sup> <a name="chunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy"></a>

```java
public java.lang.String getChunkingStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBreakpointPercentileThreshold">resetBreakpointPercentileThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBufferSize">resetBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakpointPercentileThreshold` <a name="resetBreakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBreakpointPercentileThreshold"></a>

```java
public void resetBreakpointPercentileThreshold()
```

##### `resetBufferSize` <a name="resetBufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBufferSize"></a>

```java
public void resetBufferSize()
```

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThresholdInput">breakpointPercentileThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSizeInput">bufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold">breakpointPercentileThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize">bufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `breakpointPercentileThresholdInput`<sup>Optional</sup> <a name="breakpointPercentileThresholdInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThresholdInput"></a>

```java
public java.lang.Number getBreakpointPercentileThresholdInput();
```

- *Type:* java.lang.Number

---

##### `bufferSizeInput`<sup>Optional</sup> <a name="bufferSizeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSizeInput"></a>

```java
public java.lang.Number getBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `breakpointPercentileThreshold`<sup>Required</sup> <a name="breakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold"></a>

```java
public java.lang.Number getBreakpointPercentileThreshold();
```

- *Type:* java.lang.Number

---

##### `bufferSize`<sup>Required</sup> <a name="bufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize"></a>

```java
public java.lang.Number getBufferSize();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration">putChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration">putParsingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetChunkingConfiguration">resetChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetParsingConfiguration">resetParsingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunkingConfiguration` <a name="putChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration"></a>

```java
public void putChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---

##### `putParsingConfiguration` <a name="putParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration"></a>

```java
public void putParsingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---

##### `resetChunkingConfiguration` <a name="resetChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetChunkingConfiguration"></a>

```java
public void resetChunkingConfiguration()
```

##### `resetParsingConfiguration` <a name="resetParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetParsingConfiguration"></a>

```java
public void resetParsingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration">chunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration">parsingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput">chunkingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfigurationInput">parsingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chunkingConfiguration`<sup>Required</sup> <a name="chunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference getChunkingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a>

---

##### `parsingConfiguration`<sup>Required</sup> <a name="parsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference getParsingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a>

---

##### `chunkingConfigurationInput`<sup>Optional</sup> <a name="chunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration getChunkingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---

##### `parsingConfigurationInput`<sup>Optional</sup> <a name="parsingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration getParsingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt">putParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetModelArn">resetModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetParsingPrompt">resetParsingPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParsingPrompt` <a name="putParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt"></a>

```java
public void putParsingPrompt(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---

##### `resetModelArn` <a name="resetModelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetModelArn"></a>

```java
public void resetModelArn()
```

##### `resetParsingPrompt` <a name="resetParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetParsingPrompt"></a>

```java
public void resetParsingPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt">parsingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPromptInput">parsingPromptInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parsingPrompt`<sup>Required</sup> <a name="parsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference getParsingPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a>

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `parsingPromptInput`<sup>Optional</sup> <a name="parsingPromptInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPromptInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt getParsingPromptInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resetParsingPromptText">resetParsingPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParsingPromptText` <a name="resetParsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resetParsingPromptText"></a>

```java
public void resetParsingPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptTextInput">parsingPromptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText">parsingPromptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parsingPromptTextInput`<sup>Optional</sup> <a name="parsingPromptTextInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptTextInput"></a>

```java
public java.lang.String getParsingPromptTextInput();
```

- *Type:* java.lang.String

---

##### `parsingPromptText`<sup>Required</sup> <a name="parsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText"></a>

```java
public java.lang.String getParsingPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_knowledge_base.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration">putBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetBedrockFoundationModelConfiguration">resetBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetParsingStrategy">resetParsingStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBedrockFoundationModelConfiguration` <a name="putBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration"></a>

```java
public void putBedrockFoundationModelConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---

##### `resetBedrockFoundationModelConfiguration` <a name="resetBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetBedrockFoundationModelConfiguration"></a>

```java
public void resetBedrockFoundationModelConfiguration()
```

##### `resetParsingStrategy` <a name="resetParsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetParsingStrategy"></a>

```java
public void resetParsingStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration">bedrockFoundationModelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfigurationInput">bedrockFoundationModelConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategyInput">parsingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy">parsingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bedrockFoundationModelConfiguration`<sup>Required</sup> <a name="bedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration"></a>

```java
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference getBedrockFoundationModelConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a>

---

##### `bedrockFoundationModelConfigurationInput`<sup>Optional</sup> <a name="bedrockFoundationModelConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfigurationInput"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration getBedrockFoundationModelConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---

##### `parsingStrategyInput`<sup>Optional</sup> <a name="parsingStrategyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategyInput"></a>

```java
public java.lang.String getParsingStrategyInput();
```

- *Type:* java.lang.String

---

##### `parsingStrategy`<sup>Required</sup> <a name="parsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy"></a>

```java
public java.lang.String getParsingStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---



