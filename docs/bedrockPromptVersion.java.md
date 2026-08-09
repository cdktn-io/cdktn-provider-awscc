# `bedrockPromptVersion` Submodule <a name="`bedrockPromptVersion` Submodule" id="@cdktn/provider-awscc.bedrockPromptVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockPromptVersion <a name="BedrockPromptVersion" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version awscc_bedrock_prompt_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersion;

BedrockPromptVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .promptArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.promptArn">promptArn</a></code> | <code>java.lang.String</code> | ARN of a prompt resource possibly with a version. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for a prompt version resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.promptArn"></a>

- *Type:* java.lang.String

ARN of a prompt resource possibly with a version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#prompt_arn BedrockPromptVersion#prompt_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for a prompt version resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#description BedrockPromptVersion#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#tags BedrockPromptVersion#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockPromptVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersion;

BedrockPromptVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersion;

BedrockPromptVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersion;

BedrockPromptVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersion;

BedrockPromptVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockPromptVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockPromptVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockPromptVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockPromptVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockPromptVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptId">promptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList">BedrockPromptVersionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptArnInput">promptArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptArn">promptArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `defaultVariant`<sup>Required</sup> <a name="defaultVariant" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.defaultVariant"></a>

```java
public java.lang.String getDefaultVariant();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptId"></a>

```java
public java.lang.String getPromptId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.variants"></a>

```java
public BedrockPromptVersionVariantsList getVariants();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList">BedrockPromptVersionVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `promptArnInput`<sup>Optional</sup> <a name="promptArnInput" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptArnInput"></a>

```java
public java.lang.String getPromptArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.promptArn"></a>

```java
public java.lang.String getPromptArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockPromptVersionConfig <a name="BedrockPromptVersionConfig" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionConfig;

BedrockPromptVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .promptArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.promptArn">promptArn</a></code> | <code>java.lang.String</code> | ARN of a prompt resource possibly with a version. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for a prompt version resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.promptArn"></a>

```java
public java.lang.String getPromptArn();
```

- *Type:* java.lang.String

ARN of a prompt resource possibly with a version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#prompt_arn BedrockPromptVersion#prompt_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for a prompt version resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#description BedrockPromptVersion#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_prompt_version#tags BedrockPromptVersion#tags}

---

### BedrockPromptVersionVariants <a name="BedrockPromptVersionVariants" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariants.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariants;

BedrockPromptVersionVariants.builder()
    .build();
```


### BedrockPromptVersionVariantsGenAiResource <a name="BedrockPromptVersionVariantsGenAiResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsGenAiResource;

BedrockPromptVersionVariantsGenAiResource.builder()
    .build();
```


### BedrockPromptVersionVariantsGenAiResourceAgent <a name="BedrockPromptVersionVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsGenAiResourceAgent;

BedrockPromptVersionVariantsGenAiResourceAgent.builder()
    .build();
```


### BedrockPromptVersionVariantsInferenceConfiguration <a name="BedrockPromptVersionVariantsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsInferenceConfiguration;

BedrockPromptVersionVariantsInferenceConfiguration.builder()
    .build();
```


### BedrockPromptVersionVariantsInferenceConfigurationText <a name="BedrockPromptVersionVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsInferenceConfigurationText;

BedrockPromptVersionVariantsInferenceConfigurationText.builder()
    .build();
```


### BedrockPromptVersionVariantsMetadata <a name="BedrockPromptVersionVariantsMetadata" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsMetadata;

BedrockPromptVersionVariantsMetadata.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfiguration <a name="BedrockPromptVersionVariantsTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfiguration;

BedrockPromptVersionVariantsTemplateConfiguration.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChat <a name="BedrockPromptVersionVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChat.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChat;

BedrockPromptVersionVariantsTemplateConfigurationChat.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables <a name="BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables;

BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatMessages <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessages.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessages;

BedrockPromptVersionVariantsTemplateConfigurationChatMessages.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent;

BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint;

BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatSystem <a name="BedrockPromptVersionVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatSystem;

BedrockPromptVersionVariantsTemplateConfigurationChatSystem.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint <a name="BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint;

BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;

BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationText <a name="BedrockPromptVersionVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationText;

BedrockPromptVersionVariantsTemplateConfigurationText.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint <a name="BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint;

BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint.builder()
    .build();
```


### BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables <a name="BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables;

BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockPromptVersionVariantsGenAiResourceAgentOutputReference <a name="BedrockPromptVersionVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference;

new BedrockPromptVersionVariantsGenAiResourceAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgent">BedrockPromptVersionVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentIdentifier`<sup>Required</sup> <a name="agentIdentifier" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```java
public java.lang.String getAgentIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsGenAiResourceAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgent">BedrockPromptVersionVariantsGenAiResourceAgent</a>

---


### BedrockPromptVersionVariantsGenAiResourceOutputReference <a name="BedrockPromptVersionVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsGenAiResourceOutputReference;

new BedrockPromptVersionVariantsGenAiResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference">BedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResource">BedrockPromptVersionVariantsGenAiResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent"></a>

```java
public BedrockPromptVersionVariantsGenAiResourceAgentOutputReference getAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceAgentOutputReference">BedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsGenAiResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResource">BedrockPromptVersionVariantsGenAiResource</a>

---


### BedrockPromptVersionVariantsInferenceConfigurationOutputReference <a name="BedrockPromptVersionVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsInferenceConfigurationOutputReference;

new BedrockPromptVersionVariantsInferenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfiguration">BedrockPromptVersionVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text"></a>

```java
public BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsInferenceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfiguration">BedrockPromptVersionVariantsInferenceConfiguration</a>

---


### BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference <a name="BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference;

new BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationText">BedrockPromptVersionVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsInferenceConfigurationText getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationText">BedrockPromptVersionVariantsInferenceConfigurationText</a>

---


### BedrockPromptVersionVariantsList <a name="BedrockPromptVersionVariantsList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsList;

new BedrockPromptVersionVariantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.get"></a>

```java
public BedrockPromptVersionVariantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsMetadataList <a name="BedrockPromptVersionVariantsMetadataList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsMetadataList;

new BedrockPromptVersionVariantsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.get"></a>

```java
public BedrockPromptVersionVariantsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsMetadataOutputReference <a name="BedrockPromptVersionVariantsMetadataOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsMetadataOutputReference;

new BedrockPromptVersionVariantsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadata">BedrockPromptVersionVariantsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadata">BedrockPromptVersionVariantsMetadata</a>

---


### BedrockPromptVersionVariantsOutputReference <a name="BedrockPromptVersionVariantsOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsOutputReference;

new BedrockPromptVersionVariantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference">BedrockPromptVersionVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference">BedrockPromptVersionVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList">BedrockPromptVersionVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference">BedrockPromptVersionVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariants">BedrockPromptVersionVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

---

##### `genAiResource`<sup>Required</sup> <a name="genAiResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.genAiResource"></a>

```java
public BedrockPromptVersionVariantsGenAiResourceOutputReference getGenAiResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsGenAiResourceOutputReference">BedrockPromptVersionVariantsGenAiResourceOutputReference</a>

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration"></a>

```java
public BedrockPromptVersionVariantsInferenceConfigurationOutputReference getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsInferenceConfigurationOutputReference">BedrockPromptVersionVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.metadata"></a>

```java
public BedrockPromptVersionVariantsMetadataList getMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsMetadataList">BedrockPromptVersionVariantsMetadataList</a>

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.templateConfiguration"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationOutputReference getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference">BedrockPromptVersionVariantsTemplateConfigurationOutputReference</a>

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariants getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariants">BedrockPromptVersionVariants</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList <a name="BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList;

new BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList;

new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList;

new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessages">BedrockPromptVersionVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessages">BedrockPromptVersionVariantsTemplateConfigurationChatMessages</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">systemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList">BedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChat">BedrockPromptVersionVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList getMessages();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a>

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatSystemList getSystemAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList">BedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a>

---

##### `toolConfiguration`<sup>Required</sup> <a name="toolConfiguration" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference getToolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChat">BedrockPromptVersionVariantsTemplateConfigurationChat</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatSystemList <a name="BedrockPromptVersionVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList;

new BedrockPromptVersionVariantsTemplateConfigurationChatSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystem">BedrockPromptVersionVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatSystem">BedrockPromptVersionVariantsTemplateConfigurationChatSystem</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolChoice`<sup>Required</sup> <a name="toolChoice" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference getToolChoice();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList getTools();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```java
public java.lang.String getAny();
```

- *Type:* java.lang.String

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```java
public java.lang.String getAuto();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference getTool();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `toolSpec`<sup>Required</sup> <a name="toolSpec" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference getToolSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference getInputSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfiguration">BedrockPromptVersionVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference getChat();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfiguration">BedrockPromptVersionVariantsTemplateConfiguration</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList <a name="BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList;

new BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a>

---


### BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference <a name="BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_prompt_version.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference;

new BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationText">BedrockPromptVersionVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference getCachePoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```java
public BedrockPromptVersionVariantsTemplateConfigurationText getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPromptVersion.BedrockPromptVersionVariantsTemplateConfigurationText">BedrockPromptVersionVariantsTemplateConfigurationText</a>

---



