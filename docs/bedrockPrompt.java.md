# `bedrockPrompt` Submodule <a name="`bedrockPrompt` Submodule" id="@cdktn/provider-awscc.bedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockPrompt <a name="BedrockPrompt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPrompt;

BedrockPrompt.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .defaultVariant(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .variants(IResolvable|java.util.List<BedrockPromptVariants>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.variants">variants</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>></code> | List of prompt variants. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* java.lang.String

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `defaultVariant`<sup>Optional</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.defaultVariant"></a>

- *Type:* java.lang.String

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `variants`<sup>Optional</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.variants"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>>

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants">putVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant">resetDefaultVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants">resetVariants</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVariants` <a name="putVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants"></a>

```java
public void putVariants(IResolvable|java.util.List<BedrockPromptVariants> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>>

---

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn"></a>

```java
public void resetCustomerEncryptionKeyArn()
```

##### `resetDefaultVariant` <a name="resetDefaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant"></a>

```java
public void resetDefaultVariant()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags"></a>

```java
public void resetTags()
```

##### `resetVariants` <a name="resetVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants"></a>

```java
public void resetVariants()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPrompt;

BedrockPrompt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPrompt;

BedrockPrompt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPrompt;

BedrockPrompt.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPrompt;

BedrockPrompt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockPrompt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId">promptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput">defaultVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput">variantsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId"></a>

```java
public java.lang.String getPromptId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants"></a>

```java
public BedrockPromptVariantsList getVariants();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput"></a>

```java
public java.lang.String getCustomerEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `defaultVariantInput`<sup>Optional</sup> <a name="defaultVariantInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput"></a>

```java
public java.lang.String getDefaultVariantInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variantsInput`<sup>Optional</sup> <a name="variantsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariants> getVariantsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>>

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `defaultVariant`<sup>Required</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant"></a>

```java
public java.lang.String getDefaultVariant();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockPromptConfig <a name="BedrockPromptConfig" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptConfig;

BedrockPromptConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .defaultVariant(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .variants(IResolvable|java.util.List<BedrockPromptVariants>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description">description</a></code> | <code>java.lang.String</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants">variants</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>></code> | List of prompt variants. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `defaultVariant`<sup>Optional</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant"></a>

```java
public java.lang.String getDefaultVariant();
```

- *Type:* java.lang.String

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `variants`<sup>Optional</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariants> getVariants();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>>

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

### BedrockPromptVariants <a name="BedrockPromptVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariants;

BedrockPromptVariants.builder()
//  .additionalModelRequestFields(java.lang.String)
//  .genAiResource(BedrockPromptVariantsGenAiResource)
//  .inferenceConfiguration(BedrockPromptVariantsInferenceConfiguration)
//  .metadata(IResolvable|java.util.List<BedrockPromptVariantsMetadata>)
//  .modelId(java.lang.String)
//  .name(java.lang.String)
//  .templateConfiguration(BedrockPromptVariantsTemplateConfiguration)
//  .templateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | Contains model-specific configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | Target resource to invoke with Prompt. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | Model inference configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>></code> | List of metadata to associate with the prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId">modelId</a></code> | <code>java.lang.String</code> | ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name">name</a></code> | <code>java.lang.String</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | Prompt template configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType">templateType</a></code> | <code>java.lang.String</code> | Prompt template type. |

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

Contains model-specific configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#additional_model_request_fields BedrockPrompt#additional_model_request_fields}

---

##### `genAiResource`<sup>Optional</sup> <a name="genAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource"></a>

```java
public BedrockPromptVariantsGenAiResource getGenAiResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

Target resource to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#gen_ai_resource BedrockPrompt#gen_ai_resource}

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration"></a>

```java
public BedrockPromptVariantsInferenceConfiguration getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

Model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#inference_configuration BedrockPrompt#inference_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsMetadata> getMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>>

List of metadata to associate with the prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#metadata BedrockPrompt#metadata}

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#model_id BedrockPrompt#model_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration"></a>

```java
public BedrockPromptVariantsTemplateConfiguration getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

Prompt template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_configuration BedrockPrompt#template_configuration}

---

##### `templateType`<sup>Optional</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

Prompt template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_type BedrockPrompt#template_type}

---

### BedrockPromptVariantsGenAiResource <a name="BedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsGenAiResource;

BedrockPromptVariantsGenAiResource.builder()
//  .agent(BedrockPromptVariantsGenAiResourceAgent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | Target Agent to invoke with Prompt. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent"></a>

```java
public BedrockPromptVariantsGenAiResourceAgent getAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

Target Agent to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}

---

### BedrockPromptVariantsGenAiResourceAgent <a name="BedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsGenAiResourceAgent;

BedrockPromptVariantsGenAiResourceAgent.builder()
//  .agentIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier">agentIdentifier</a></code> | <code>java.lang.String</code> | Arn representation of the Agent Alias. |

---

##### `agentIdentifier`<sup>Optional</sup> <a name="agentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier"></a>

```java
public java.lang.String getAgentIdentifier();
```

- *Type:* java.lang.String

Arn representation of the Agent Alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}

---

### BedrockPromptVariantsInferenceConfiguration <a name="BedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsInferenceConfiguration;

BedrockPromptVariantsInferenceConfiguration.builder()
//  .text(BedrockPromptVariantsInferenceConfigurationText)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | Prompt model inference configuration. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text"></a>

```java
public BedrockPromptVariantsInferenceConfigurationText getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

Prompt model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsInferenceConfigurationText <a name="BedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsInferenceConfigurationText;

BedrockPromptVariantsInferenceConfigurationText.builder()
//  .maxTokens(java.lang.Number)
//  .stopSequences(java.util.List<java.lang.String>)
//  .temperature(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP">topP</a></code> | <code>java.lang.Number</code> | Cumulative probability cutoff for token selection. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}

---

### BedrockPromptVariantsMetadata <a name="BedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsMetadata;

BedrockPromptVariantsMetadata.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key">key</a></code> | <code>java.lang.String</code> | The key of a metadata tag for a prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value">value</a></code> | <code>java.lang.String</code> | The value of a metadata tag for a prompt variant. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#value BedrockPrompt#value}

---

### BedrockPromptVariantsTemplateConfiguration <a name="BedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfiguration;

BedrockPromptVariantsTemplateConfiguration.builder()
//  .chat(BedrockPromptVariantsTemplateConfigurationChat)
//  .text(BedrockPromptVariantsTemplateConfigurationText)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | Configuration for text prompt template. |

---

##### `chat`<sup>Optional</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChat getChat();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text"></a>

```java
public BedrockPromptVariantsTemplateConfigurationText getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

Configuration for text prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChat <a name="BedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChat;

BedrockPromptVariantsTemplateConfigurationChat.builder()
//  .inputVariables(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatInputVariables>)
//  .messages(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessages>)
//  .systemAttribute(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatSystem>)
//  .toolConfiguration(BedrockPromptVariantsTemplateConfigurationChatToolConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>></code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages">messages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>></code> | List of messages for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute">systemAttribute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>></code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | Tool configuration. |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>>

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessages> getMessages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>>

List of messages for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatSystem> getSystemAttribute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}

---

##### `toolConfiguration`<sup>Optional</sup> <a name="toolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfiguration getToolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

Tool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}

---

### BedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables;

BedrockPromptVariantsTemplateConfigurationChatInputVariables.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name">name</a></code> | <code>java.lang.String</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatMessages <a name="BedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessages;

BedrockPromptVariantsTemplateConfigurationChatMessages.builder()
//  .content(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessagesContent>)
//  .role(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content">content</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>></code> | List of Content Blocks. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role">role</a></code> | <code>java.lang.String</code> | Conversation roles for the chat prompt. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessagesContent> getContent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>>

List of Content Blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#content BedrockPrompt#content}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Conversation roles for the chat prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#role BedrockPrompt#role}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent;

BedrockPromptVariantsTemplateConfigurationChatMessagesContent.builder()
//  .cachePoint(BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text">text</a></code> | <code>java.lang.String</code> | Configuration for chat prompt template. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint;

BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatSystem <a name="BedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatSystem;

BedrockPromptVariantsTemplateConfigurationChatSystem.builder()
//  .cachePoint(BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text">text</a></code> | <code>java.lang.String</code> | Configuration for chat prompt template. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint;

BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration;

BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.builder()
//  .toolChoice(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice)
//  .tools(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools">tools</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>></code> | List of Tools. |

---

##### `toolChoice`<sup>Optional</sup> <a name="toolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice getToolChoice();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools> getTools();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>>

List of Tools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.builder()
//  .any(java.lang.String)
//  .auto(java.lang.String)
//  .tool(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any">any</a></code> | <code>java.lang.String</code> | Any Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto">auto</a></code> | <code>java.lang.String</code> | Auto Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | Specific Tool choice. |

---

##### `any`<sup>Optional</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any"></a>

```java
public java.lang.String getAny();
```

- *Type:* java.lang.String

Any Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto"></a>

```java
public java.lang.String getAuto();
```

- *Type:* java.lang.String

Auto Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool getTool();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

Specific Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name">name</a></code> | <code>java.lang.String</code> | Tool name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.builder()
//  .cachePoint(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint)
//  .toolSpec(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | Tool specification. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `toolSpec`<sup>Optional</sup> <a name="toolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec getToolSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

Tool specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_spec BedrockPrompt#tool_spec}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.builder()
//  .description(java.lang.String)
//  .inputSchema(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | Tool input schema. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name">name</a></code> | <code>java.lang.String</code> | Tool name. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}.

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema getInputSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

Tool input schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;

BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.builder()
//  .json(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json">json</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}. |

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}.

---

### BedrockPromptVariantsTemplateConfigurationText <a name="BedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationText;

BedrockPromptVariantsTemplateConfigurationText.builder()
//  .cachePoint(BedrockPromptVariantsTemplateConfigurationTextCachePoint)
//  .inputVariables(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationTextInputVariables>)
//  .text(java.lang.String)
//  .textS3Location(BedrockPromptVariantsTemplateConfigurationTextTextS3Location)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>></code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text">text</a></code> | <code>java.lang.String</code> | Prompt content for String prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location">textS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | The identifier for the S3 resource. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextCachePoint getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationTextInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>>

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Prompt content for String prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `textS3Location`<sup>Optional</sup> <a name="textS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextTextS3Location getTextS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}

---

### BedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="BedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint;

BedrockPromptVariantsTemplateConfigurationTextCachePoint.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | CachePoint types for CachePointBlock. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables;

BedrockPromptVariantsTemplateConfigurationTextInputVariables.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name">name</a></code> | <code>java.lang.String</code> | Name for an input variable. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location;

BedrockPromptVariantsTemplateConfigurationTextTextS3Location.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key">key</a></code> | <code>java.lang.String</code> | A object key in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version">version</a></code> | <code>java.lang.String</code> | The version of the the S3 object to use. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the the S3 object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockPromptVariantsGenAiResourceAgentOutputReference <a name="BedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsGenAiResourceAgentOutputReference;

new BedrockPromptVariantsGenAiResourceAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier">resetAgentIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentIdentifier` <a name="resetAgentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier"></a>

```java
public void resetAgentIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput">agentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentIdentifierInput`<sup>Optional</sup> <a name="agentIdentifierInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput"></a>

```java
public java.lang.String getAgentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `agentIdentifier`<sup>Required</sup> <a name="agentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```java
public java.lang.String getAgentIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsGenAiResourceAgent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---


### BedrockPromptVariantsGenAiResourceOutputReference <a name="BedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsGenAiResourceOutputReference;

new BedrockPromptVariantsGenAiResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent">putAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent">resetAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgent` <a name="putAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent"></a>

```java
public void putAgent(BedrockPromptVariantsGenAiResourceAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `resetAgent` <a name="resetAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent"></a>

```java
public void resetAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput">agentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```java
public BedrockPromptVariantsGenAiResourceAgentOutputReference getAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput"></a>

```java
public IResolvable|BedrockPromptVariantsGenAiResourceAgent getAgentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsGenAiResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---


### BedrockPromptVariantsInferenceConfigurationOutputReference <a name="BedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsInferenceConfigurationOutputReference;

new BedrockPromptVariantsInferenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText"></a>

```java
public void putText(BedrockPromptVariantsInferenceConfigurationText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput">textInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```java
public BedrockPromptVariantsInferenceConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput"></a>

```java
public IResolvable|BedrockPromptVariantsInferenceConfigurationText getTextInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsInferenceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---


### BedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="BedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference;

new BedrockPromptVariantsInferenceConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences"></a>

```java
public void resetStopSequences()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput"></a>

```java
public java.util.List<java.lang.String> getStopSequencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsInferenceConfigurationText getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---


### BedrockPromptVariantsList <a name="BedrockPromptVariantsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsList;

new BedrockPromptVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get"></a>

```java
public BedrockPromptVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariants> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>>

---


### BedrockPromptVariantsMetadataList <a name="BedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsMetadataList;

new BedrockPromptVariantsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get"></a>

```java
public BedrockPromptVariantsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>>

---


### BedrockPromptVariantsMetadataOutputReference <a name="BedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsMetadataOutputReference;

new BedrockPromptVariantsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>

---


### BedrockPromptVariantsOutputReference <a name="BedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsOutputReference;

new BedrockPromptVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource">putGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource">resetGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType">resetTemplateType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenAiResource` <a name="putGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource"></a>

```java
public void putGenAiResource(BedrockPromptVariantsGenAiResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration"></a>

```java
public void putInferenceConfiguration(BedrockPromptVariantsInferenceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata"></a>

```java
public void putMetadata(IResolvable|java.util.List<BedrockPromptVariantsMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>>

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration"></a>

```java
public void putTemplateConfiguration(BedrockPromptVariantsTemplateConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields"></a>

```java
public void resetAdditionalModelRequestFields()
```

##### `resetGenAiResource` <a name="resetGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource"></a>

```java
public void resetGenAiResource()
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration"></a>

```java
public void resetInferenceConfiguration()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetModelId` <a name="resetModelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId"></a>

```java
public void resetModelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration"></a>

```java
public void resetTemplateConfiguration()
```

##### `resetTemplateType` <a name="resetTemplateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType"></a>

```java
public void resetTemplateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput">genAiResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput">templateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `genAiResource`<sup>Required</sup> <a name="genAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource"></a>

```java
public BedrockPromptVariantsGenAiResourceOutputReference getGenAiResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```java
public BedrockPromptVariantsInferenceConfigurationOutputReference getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata"></a>

```java
public BedrockPromptVariantsMetadataList getMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a>

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```java
public BedrockPromptVariantsTemplateConfigurationOutputReference getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput"></a>

```java
public java.lang.String getAdditionalModelRequestFieldsInput();
```

- *Type:* java.lang.String

---

##### `genAiResourceInput`<sup>Optional</sup> <a name="genAiResourceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput"></a>

```java
public IResolvable|BedrockPromptVariantsGenAiResource getGenAiResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput"></a>

```java
public IResolvable|BedrockPromptVariantsInferenceConfiguration getInferenceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsMetadata> getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata">BedrockPromptVariantsMetadata</a>>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfiguration getTemplateConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput"></a>

```java
public java.lang.String getTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariants getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants">BedrockPromptVariants</a>

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList;

new BedrockPromptVariantsTemplateConfigurationChatInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>>

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList;

new BedrockPromptVariantsTemplateConfigurationChatMessagesContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessagesContent> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint"></a>

```java
public void putCachePoint(BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint getCachePointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatMessagesContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList;

new BedrockPromptVariantsTemplateConfigurationChatMessagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>>

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent"></a>

```java
public void putContent(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessagesContent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>>

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole"></a>

```java
public void resetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesContentList getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessagesContent> getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatMessages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### BedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute">putSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration">putToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration">resetToolConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>>

---

##### `putMessages` <a name="putMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages"></a>

```java
public void putMessages(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>>

---

##### `putSystemAttribute` <a name="putSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute"></a>

```java
public void putSystemAttribute(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatSystem> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>>

---

##### `putToolConfiguration` <a name="putToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration"></a>

```java
public void putToolConfiguration(BedrockPromptVariantsTemplateConfigurationChatToolConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages"></a>

```java
public void resetMessages()
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute"></a>

```java
public void resetSystemAttribute()
```

##### `resetToolConfiguration` <a name="resetToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration"></a>

```java
public void resetToolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">systemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput">messagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput">toolConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatMessagesList getMessages();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatSystemList getSystemAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `toolConfiguration`<sup>Required</sup> <a name="toolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference getToolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables">BedrockPromptVariantsTemplateConfigurationChatInputVariables</a>>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatMessages> getMessagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages">BedrockPromptVariantsTemplateConfigurationChatMessages</a>>

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatSystem> getSystemAttributeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>>

---

##### `toolConfigurationInput`<sup>Optional</sup> <a name="toolConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfiguration getToolConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemList <a name="BedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatSystemList;

new BedrockPromptVariantsTemplateConfigurationChatSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatSystem> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>>

---


### BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint"></a>

```java
public void putCachePoint(BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint getCachePointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatSystem getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem">BedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice">putToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools">putTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice">resetToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolChoice` <a name="putToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice"></a>

```java
public void putToolChoice(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `putTools` <a name="putTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools"></a>

```java
public void putTools(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>>

---

##### `resetToolChoice` <a name="resetToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice"></a>

```java
public void resetToolChoice()
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools"></a>

```java
public void resetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput">toolChoiceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput">toolsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolChoice`<sup>Required</sup> <a name="toolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference getToolChoice();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList getTools();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `toolChoiceInput`<sup>Optional</sup> <a name="toolChoiceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice getToolChoiceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools> getToolsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny">resetAny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto">resetAuto</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool">resetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTool` <a name="putTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool"></a>

```java
public void putTool(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `resetAny` <a name="resetAny" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny"></a>

```java
public void resetAny()
```

##### `resetAuto` <a name="resetAuto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto"></a>

```java
public void resetAuto()
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool"></a>

```java
public void resetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput">anyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput">autoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput">toolInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference getTool();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `anyInput`<sup>Optional</sup> <a name="anyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput"></a>

```java
public java.lang.String getAnyInput();
```

- *Type:* java.lang.String

---

##### `autoInput`<sup>Optional</sup> <a name="autoInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput"></a>

```java
public java.lang.String getAutoInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool getToolInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```java
public java.lang.String getAny();
```

- *Type:* java.lang.String

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```java
public java.lang.String getAuto();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec">putToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec">resetToolSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint"></a>

```java
public void putCachePoint(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `putToolSpec` <a name="putToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec"></a>

```java
public void putToolSpec(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetToolSpec` <a name="resetToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec"></a>

```java
public void resetToolSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput">toolSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `toolSpec`<sup>Required</sup> <a name="toolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference getToolSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint getCachePointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `toolSpecInput`<sup>Optional</sup> <a name="toolSpecInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec getToolSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson"></a>

```java
public void resetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput">jsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput"></a>

```java
public java.lang.String getJsonInput();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference;

new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema">putInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputSchema` <a name="putInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema"></a>

```java
public void putInputSchema(BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema"></a>

```java
public void resetInputSchema()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference getInputSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema getInputSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### BedrockPromptVariantsTemplateConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationOutputReference;

new BedrockPromptVariantsTemplateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat">putChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat">resetChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChat` <a name="putChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat"></a>

```java
public void putChat(BedrockPromptVariantsTemplateConfigurationChat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `putText` <a name="putText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText"></a>

```java
public void putText(BedrockPromptVariantsTemplateConfigurationText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `resetChat` <a name="resetChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat"></a>

```java
public void resetChat()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput">chatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput">textInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```java
public BedrockPromptVariantsTemplateConfigurationChatOutputReference getChat();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `chatInput`<sup>Optional</sup> <a name="chatInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationChat getChatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationText getTextInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---


### BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference;

new BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationTextCachePoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList;

new BedrockPromptVariantsTemplateConfigurationTextInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationTextInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>>

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference;

new BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationTextInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### BedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference;

new BedrockPromptVariantsTemplateConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location">putTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location">resetTextS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint"></a>

```java
public void putCachePoint(BedrockPromptVariantsTemplateConfigurationTextCachePoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationTextInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>>

---

##### `putTextS3Location` <a name="putTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location"></a>

```java
public void putTextS3Location(BedrockPromptVariantsTemplateConfigurationTextTextS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetTextS3Location` <a name="resetTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location"></a>

```java
public void resetTextS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">textS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput">textS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `textS3Location`<sup>Required</sup> <a name="textS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```java
public BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference getTextS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationTextCachePoint getCachePointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<BedrockPromptVariantsTemplateConfigurationTextInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables">BedrockPromptVariantsTemplateConfigurationTextInputVariables</a>>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `textS3LocationInput`<sup>Optional</sup> <a name="textS3LocationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationTextTextS3Location getTextS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationText getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---


### BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference;

new BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockPromptVariantsTemplateConfigurationTextTextS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



