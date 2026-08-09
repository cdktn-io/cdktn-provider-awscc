# `secretsmanagerSecretTargetAttachment` Submodule <a name="`secretsmanagerSecretTargetAttachment` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretTargetAttachment <a name="SecretsmanagerSecretTargetAttachment" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment awscc_secretsmanager_secret_target_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachment;

SecretsmanagerSecretTargetAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretId(java.lang.String)
    .targetId(java.lang.String)
    .targetType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecretTargetAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachment;

SecretsmanagerSecretTargetAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachment;

SecretsmanagerSecretTargetAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachment;

SecretsmanagerSecretTargetAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachment;

SecretsmanagerSecretTargetAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsmanagerSecretTargetAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsmanagerSecretTargetAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsmanagerSecretTargetAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsmanagerSecretTargetAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretTargetAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretTargetAttachmentId">secretTargetAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `secretTargetAttachmentId`<sup>Required</sup> <a name="secretTargetAttachmentId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretTargetAttachmentId"></a>

```java
public java.lang.String getSecretTargetAttachmentId();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretTargetAttachmentConfig <a name="SecretsmanagerSecretTargetAttachmentConfig" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret_target_attachment.SecretsmanagerSecretTargetAttachmentConfig;

SecretsmanagerSecretTargetAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretId(java.lang.String)
    .targetId(java.lang.String)
    .targetType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#secret_id SecretsmanagerSecretTargetAttachment#secret_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_id SecretsmanagerSecretTargetAttachment#target_id}.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.secretsmanagerSecretTargetAttachment.SecretsmanagerSecretTargetAttachmentConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret_target_attachment#target_type SecretsmanagerSecretTargetAttachment#target_type}.

---



