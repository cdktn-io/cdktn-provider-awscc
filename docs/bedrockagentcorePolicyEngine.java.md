# `bedrockagentcorePolicyEngine` Submodule <a name="`bedrockagentcorePolicyEngine` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePolicyEngine <a name="BedrockagentcorePolicyEngine" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine awscc_bedrockagentcore_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngine;

BedrockagentcorePolicyEngine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcorePolicyEngineTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The customer-assigned immutable name for the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the policy engine's purpose and scope. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the policy engine data. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>></code> | A list of tags to assign to the policy engine. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The customer-assigned immutable name for the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#name BedrockagentcorePolicyEngine#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the policy engine's purpose and scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#description BedrockagentcorePolicyEngine#description}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the policy engine data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#encryption_key_arn BedrockagentcorePolicyEngine#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>>

A list of tags to assign to the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#tags BedrockagentcorePolicyEngine#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockagentcorePolicyEngineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngine;

BedrockagentcorePolicyEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngine;

BedrockagentcorePolicyEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngine;

BedrockagentcorePolicyEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngine;

BedrockagentcorePolicyEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcorePolicyEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcorePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcorePolicyEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcorePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.statusReasons">statusReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList">BedrockagentcorePolicyEngineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.policyEngineArn"></a>

```java
public java.lang.String getPolicyEngineArn();
```

- *Type:* java.lang.String

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.policyEngineId"></a>

```java
public java.lang.String getPolicyEngineId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.statusReasons"></a>

```java
public java.util.List<java.lang.String> getStatusReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tags"></a>

```java
public BedrockagentcorePolicyEngineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList">BedrockagentcorePolicyEngineTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePolicyEngineTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePolicyEngineConfig <a name="BedrockagentcorePolicyEngineConfig" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngineConfig;

BedrockagentcorePolicyEngineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcorePolicyEngineTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The customer-assigned immutable name for the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the policy engine's purpose and scope. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the policy engine data. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>></code> | A list of tags to assign to the policy engine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The customer-assigned immutable name for the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#name BedrockagentcorePolicyEngine#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the policy engine's purpose and scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#description BedrockagentcorePolicyEngine#description}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the policy engine data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#encryption_key_arn BedrockagentcorePolicyEngine#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePolicyEngineTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>>

A list of tags to assign to the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#tags BedrockagentcorePolicyEngine#tags}

---

### BedrockagentcorePolicyEngineTags <a name="BedrockagentcorePolicyEngineTags" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngineTags;

BedrockagentcorePolicyEngineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#key BedrockagentcorePolicyEngine#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#value BedrockagentcorePolicyEngine#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#key BedrockagentcorePolicyEngine#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_policy_engine#value BedrockagentcorePolicyEngine#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePolicyEngineTagsList <a name="BedrockagentcorePolicyEngineTagsList" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngineTagsList;

new BedrockagentcorePolicyEngineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.get"></a>

```java
public BedrockagentcorePolicyEngineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePolicyEngineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>>

---


### BedrockagentcorePolicyEngineTagsOutputReference <a name="BedrockagentcorePolicyEngineTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy_engine.BedrockagentcorePolicyEngineTagsOutputReference;

new BedrockagentcorePolicyEngineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePolicyEngineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicyEngine.BedrockagentcorePolicyEngineTags">BedrockagentcorePolicyEngineTags</a>

---



