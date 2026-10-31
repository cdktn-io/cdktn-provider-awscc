# `bedrockRetrievalInstruction` Submodule <a name="`bedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.bedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockRetrievalInstruction <a name="BedrockRetrievalInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstruction;

BedrockRetrievalInstruction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instruction(BedrockRetrievalInstructionInstruction)
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockRetrievalInstructionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | The reviewed content this instruction serves ? |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the retrieval instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the customer managed KMS key protecting this content, when one was supplied at create. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the retrieval instruction. On a numbered version, the description of that version. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.instruction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

The reviewed content this instruction serves ?

what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#instruction BedrockRetrievalInstruction#instruction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the retrieval instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#name BedrockRetrievalInstruction#name}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* java.lang.String

The ARN of the customer managed KMS key protecting this content, when one was supplied at create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn BedrockRetrievalInstruction#customer_encryption_key_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the retrieval instruction. On a numbered version, the description of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#description BedrockRetrievalInstruction#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#tags BedrockRetrievalInstruction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction">putInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstruction` <a name="putInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction"></a>

```java
public void putInstruction(BedrockRetrievalInstructionInstruction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockRetrievalInstructionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>>

---

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn"></a>

```java
public void resetCustomerEncryptionKeyArn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstruction;

BedrockRetrievalInstruction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstruction;

BedrockRetrievalInstruction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstruction;

BedrockRetrievalInstruction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstruction;

BedrockRetrievalInstruction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockRetrievalInstruction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockRetrievalInstruction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus">lastTransitionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId">retrievalInstructionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput">instructionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction"></a>

```java
public BedrockRetrievalInstructionInstructionOutputReference getInstruction();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `lastTransitionStatus`<sup>Required</sup> <a name="lastTransitionStatus" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```java
public java.lang.String getLastTransitionStatus();
```

- *Type:* java.lang.String

---

##### `retrievalInstructionId`<sup>Required</sup> <a name="retrievalInstructionId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```java
public java.lang.String getRetrievalInstructionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags"></a>

```java
public BedrockRetrievalInstructionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput"></a>

```java
public java.lang.String getCustomerEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput"></a>

```java
public IResolvable|BedrockRetrievalInstructionInstruction getInstructionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockRetrievalInstructionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>>

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockRetrievalInstructionConfig <a name="BedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionConfig;

BedrockRetrievalInstructionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instruction(BedrockRetrievalInstructionInstruction)
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockRetrievalInstructionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | The reviewed content this instruction serves ? |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the retrieval instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the customer managed KMS key protecting this content, when one was supplied at create. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the retrieval instruction. On a numbered version, the description of that version. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction"></a>

```java
public BedrockRetrievalInstructionInstruction getInstruction();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

The reviewed content this instruction serves ?

what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#instruction BedrockRetrievalInstruction#instruction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the retrieval instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#name BedrockRetrievalInstruction#name}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

The ARN of the customer managed KMS key protecting this content, when one was supplied at create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn BedrockRetrievalInstruction#customer_encryption_key_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the retrieval instruction. On a numbered version, the description of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#description BedrockRetrievalInstruction#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockRetrievalInstructionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#tags BedrockRetrievalInstruction#tags}

---

### BedrockRetrievalInstructionInstruction <a name="BedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionInstruction;

BedrockRetrievalInstructionInstruction.builder()
//  .answerFormat(java.lang.String)
//  .answerPolicy(java.lang.String)
//  .persona(java.lang.String)
//  .retrievalGuidance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat">answerFormat</a></code> | <code>java.lang.String</code> | How the answer is structured, including how sources are cited. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy">answerPolicy</a></code> | <code>java.lang.String</code> | Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona">persona</a></code> | <code>java.lang.String</code> | Who the assistant is: identity, tone and language. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance">retrievalGuidance</a></code> | <code>java.lang.String</code> | How to interpret and decompose the question, and what to prioritise when searching. |

---

##### `answerFormat`<sup>Optional</sup> <a name="answerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat"></a>

```java
public java.lang.String getAnswerFormat();
```

- *Type:* java.lang.String

How the answer is structured, including how sources are cited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_format BedrockRetrievalInstruction#answer_format}

---

##### `answerPolicy`<sup>Optional</sup> <a name="answerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy"></a>

```java
public java.lang.String getAnswerPolicy();
```

- *Type:* java.lang.String

Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#answer_policy BedrockRetrievalInstruction#answer_policy}

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

Who the assistant is: identity, tone and language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#persona BedrockRetrievalInstruction#persona}

---

##### `retrievalGuidance`<sup>Optional</sup> <a name="retrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance"></a>

```java
public java.lang.String getRetrievalGuidance();
```

- *Type:* java.lang.String

How to interpret and decompose the question, and what to prioritise when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#retrieval_guidance BedrockRetrievalInstruction#retrieval_guidance}

---

### BedrockRetrievalInstructionTags <a name="BedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionTags;

BedrockRetrievalInstructionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#key BedrockRetrievalInstruction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bedrock_retrieval_instruction#value BedrockRetrievalInstruction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockRetrievalInstructionInstructionOutputReference <a name="BedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionInstructionOutputReference;

new BedrockRetrievalInstructionInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat">resetAnswerFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy">resetAnswerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona">resetPersona</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance">resetRetrievalGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnswerFormat` <a name="resetAnswerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat"></a>

```java
public void resetAnswerFormat()
```

##### `resetAnswerPolicy` <a name="resetAnswerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy"></a>

```java
public void resetAnswerPolicy()
```

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona"></a>

```java
public void resetPersona()
```

##### `resetRetrievalGuidance` <a name="resetRetrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance"></a>

```java
public void resetRetrievalGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput">answerFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput">answerPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput">personaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput">retrievalGuidanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">answerFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">answerPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">retrievalGuidance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerFormatInput`<sup>Optional</sup> <a name="answerFormatInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput"></a>

```java
public java.lang.String getAnswerFormatInput();
```

- *Type:* java.lang.String

---

##### `answerPolicyInput`<sup>Optional</sup> <a name="answerPolicyInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput"></a>

```java
public java.lang.String getAnswerPolicyInput();
```

- *Type:* java.lang.String

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput"></a>

```java
public java.lang.String getPersonaInput();
```

- *Type:* java.lang.String

---

##### `retrievalGuidanceInput`<sup>Optional</sup> <a name="retrievalGuidanceInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput"></a>

```java
public java.lang.String getRetrievalGuidanceInput();
```

- *Type:* java.lang.String

---

##### `answerFormat`<sup>Required</sup> <a name="answerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```java
public java.lang.String getAnswerFormat();
```

- *Type:* java.lang.String

---

##### `answerPolicy`<sup>Required</sup> <a name="answerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```java
public java.lang.String getAnswerPolicy();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `retrievalGuidance`<sup>Required</sup> <a name="retrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```java
public java.lang.String getRetrievalGuidance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockRetrievalInstructionInstruction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---


### BedrockRetrievalInstructionTagsList <a name="BedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionTagsList;

new BedrockRetrievalInstructionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get"></a>

```java
public BedrockRetrievalInstructionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockRetrievalInstructionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>>

---


### BedrockRetrievalInstructionTagsOutputReference <a name="BedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_retrieval_instruction.BedrockRetrievalInstructionTagsOutputReference;

new BedrockRetrievalInstructionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockRetrievalInstructionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>

---



