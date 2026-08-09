# `bedrockAutomatedReasoningPolicy` Submodule <a name="`bedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicy <a name="BedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicy;

BedrockAutomatedReasoningPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .policyDefinition(BedrockAutomatedReasoningPolicyPolicyDefinition)
//  .tags(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.policyDefinition">policyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.policyDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition">putPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition">resetPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDefinition` <a name="putPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition"></a>

```java
public void putPolicyDefinition(BedrockAutomatedReasoningPolicyPolicyDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPolicyDefinition` <a name="resetPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition"></a>

```java
public void resetPolicyDefinition()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicy;

BedrockAutomatedReasoningPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicy;

BedrockAutomatedReasoningPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicy;

BedrockAutomatedReasoningPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicy;

BedrockAutomatedReasoningPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockAutomatedReasoningPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockAutomatedReasoningPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash">definitionHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition">policyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput">policyDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `definitionHash`<sup>Required</sup> <a name="definitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```java
public java.lang.String getDefinitionHash();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference getPolicyDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags"></a>

```java
public BedrockAutomatedReasoningPolicyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionInput`<sup>Optional</sup> <a name="policyDefinitionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinition getPolicyDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyConfig <a name="BedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyConfig;

BedrockAutomatedReasoningPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .policyDefinition(BedrockAutomatedReasoningPolicyPolicyDefinition)
//  .tags(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition">policyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinition getPolicyDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

### BedrockAutomatedReasoningPolicyPolicyDefinition <a name="BedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinition;

BedrockAutomatedReasoningPolicyPolicyDefinition.builder()
//  .rules(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionRules>)
//  .types(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypes>)
//  .variables(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionVariables>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>></code> | The rules definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types">types</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>></code> | The types definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables">variables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>></code> | The variables definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version">version</a></code> | <code>java.lang.String</code> | The policy format version. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>>

The rules definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypes> getTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>>

The types definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionVariables> getVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>>

The variables definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The policy format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules;

BedrockAutomatedReasoningPolicyPolicyDefinitionRules.builder()
//  .alternateExpression(java.lang.String)
//  .expression(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression">alternateExpression</a></code> | <code>java.lang.String</code> | An alternate expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression">expression</a></code> | <code>java.lang.String</code> | The SMT expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id">id</a></code> | <code>java.lang.String</code> | A unique id within the PolicyDefinition. |

---

##### `alternateExpression`<sup>Optional</sup> <a name="alternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression"></a>

```java
public java.lang.String getAlternateExpression();
```

- *Type:* java.lang.String

An alternate expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#alternate_expression BedrockAutomatedReasoningPolicy#alternate_expression}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The SMT expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#expression BedrockAutomatedReasoningPolicy#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A unique id within the PolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#id BedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes;

BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .values(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description">description</a></code> | <code>java.lang.String</code> | A natural language description of this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name">name</a></code> | <code>java.lang.String</code> | A name for this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values">values</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>></code> | A list of valid values for this type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A natural language description of this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues> getValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>>

A list of valid values for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#values BedrockAutomatedReasoningPolicy#values}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues;

BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.builder()
//  .description(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description">description</a></code> | <code>java.lang.String</code> | A natural language description of the type's value. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value">value</a></code> | <code>java.lang.String</code> | The value of the type value. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A natural language description of the type's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the type value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables;

BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description">description</a></code> | <code>java.lang.String</code> | A natural language description of this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name">name</a></code> | <code>java.lang.String</code> | A name from this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type">type</a></code> | <code>java.lang.String</code> | A type for this variable. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A natural language description of this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name from this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

A type for this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#type BedrockAutomatedReasoningPolicy#type}

---

### BedrockAutomatedReasoningPolicyTags <a name="BedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyTags;

BedrockAutomatedReasoningPolicyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#key BedrockAutomatedReasoningPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference;

new BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes">putTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables">resetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>>

---

##### `putTypes` <a name="putTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes"></a>

```java
public void putTypes(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>>

---

##### `putVariables` <a name="putVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables"></a>

```java
public void putVariables(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>>

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules"></a>

```java
public void resetRules()
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes"></a>

```java
public void resetTypes()
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables"></a>

```java
public void resetVariables()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">types</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput">typesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput">variablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList getTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList getVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypes> getTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionVariables> getVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList;

new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference;

new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression">resetAlternateExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlternateExpression` <a name="resetAlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression"></a>

```java
public void resetAlternateExpression()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput">alternateExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">alternateExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alternateExpressionInput`<sup>Optional</sup> <a name="alternateExpressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput"></a>

```java
public java.lang.String getAlternateExpressionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `alternateExpression`<sup>Required</sup> <a name="alternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```java
public java.lang.String getAlternateExpression();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues"></a>

```java
public void putValues(IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput">valuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList getValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues> getValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList;

new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```java
public BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyPolicyDefinitionVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference;

new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### BedrockAutomatedReasoningPolicyTagsList <a name="BedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyTagsList;

new BedrockAutomatedReasoningPolicyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get"></a>

```java
public BedrockAutomatedReasoningPolicyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockAutomatedReasoningPolicyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>>

---


### BedrockAutomatedReasoningPolicyTagsOutputReference <a name="BedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_automated_reasoning_policy.BedrockAutomatedReasoningPolicyTagsOutputReference;

new BedrockAutomatedReasoningPolicyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockAutomatedReasoningPolicyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>

---



