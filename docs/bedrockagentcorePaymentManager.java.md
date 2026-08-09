# `bedrockagentcorePaymentManager` Submodule <a name="`bedrockagentcorePaymentManager` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentManager <a name="BedrockagentcorePaymentManager" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager awscc_bedrockagentcore_payment_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManager;

BedrockagentcorePaymentManager.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorizerType(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .authorizerConfiguration(BedrockagentcorePaymentManagerAuthorizerConfiguration)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcorePaymentManagerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role for the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>></code> | Tags to assign to the payment manager. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#name BedrockagentcorePaymentManager#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role for the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#role_arn BedrockagentcorePaymentManager#role_arn}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#description BedrockagentcorePaymentManager#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>>

Tags to assign to the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#tags BedrockagentcorePaymentManager#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration"></a>

```java
public void putAuthorizerConfiguration(BedrockagentcorePaymentManagerAuthorizerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockagentcorePaymentManagerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>>

---

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetAuthorizerConfiguration"></a>

```java
public void resetAuthorizerConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManager;

BedrockagentcorePaymentManager.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManager;

BedrockagentcorePaymentManager.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManager;

BedrockagentcorePaymentManager.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManager;

BedrockagentcorePaymentManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcorePaymentManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcorePaymentManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcorePaymentManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerArn">paymentManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerId">paymentManagerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList">BedrockagentcorePaymentManagerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.workloadIdentityDetails">workloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerTypeInput">authorizerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfiguration"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `paymentManagerArn`<sup>Required</sup> <a name="paymentManagerArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerArn"></a>

```java
public java.lang.String getPaymentManagerArn();
```

- *Type:* java.lang.String

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerId"></a>

```java
public java.lang.String getPaymentManagerId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tags"></a>

```java
public BedrockagentcorePaymentManagerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList">BedrockagentcorePaymentManagerTagsList</a>

---

##### `workloadIdentityDetails`<sup>Required</sup> <a name="workloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.workloadIdentityDetails"></a>

```java
public BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference getWorkloadIdentityDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a>

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfigurationInput"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfiguration getAuthorizerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---

##### `authorizerTypeInput`<sup>Optional</sup> <a name="authorizerTypeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerTypeInput"></a>

```java
public java.lang.String getAuthorizerTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>>

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerType"></a>

```java
public java.lang.String getAuthorizerType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentManagerAuthorizerConfiguration <a name="BedrockagentcorePaymentManagerAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfiguration;

BedrockagentcorePaymentManagerAuthorizerConfiguration.builder()
//  .customJwtAuthorizer(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer BedrockagentcorePaymentManager#custom_jwt_authorizer}. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer BedrockagentcorePaymentManager#custom_jwt_authorizer}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer;

BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.builder()
//  .allowedAudience(java.util.List<java.lang.String>)
//  .allowedClients(java.util.List<java.lang.String>)
//  .allowedScopes(java.util.List<java.lang.String>)
//  .customClaims(IResolvable|java.util.List<BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims>)
//  .discoveryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience BedrockagentcorePaymentManager#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients BedrockagentcorePaymentManager#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes BedrockagentcorePaymentManager#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">customClaims</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#custom_claims BedrockagentcorePaymentManager#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#discovery_url BedrockagentcorePaymentManager#discovery_url}. |

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience BedrockagentcorePaymentManager#allowed_audience}.

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients BedrockagentcorePaymentManager#allowed_clients}.

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes BedrockagentcorePaymentManager#allowed_scopes}.

---

##### `customClaims`<sup>Optional</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getCustomClaims();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#custom_claims BedrockagentcorePaymentManager#custom_claims}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#discovery_url BedrockagentcorePaymentManager#discovery_url}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims;

BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.builder()
//  .authorizingClaimMatchValue(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue)
//  .inboundTokenClaimName(java.lang.String)
//  .inboundTokenClaimValueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizing_claim_match_value BedrockagentcorePaymentManager#authorizing_claim_match_value}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_name BedrockagentcorePaymentManager#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_value_type BedrockagentcorePaymentManager#inbound_token_claim_value_type}. |

---

##### `authorizingClaimMatchValue`<sup>Optional</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getAuthorizingClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizing_claim_match_value BedrockagentcorePaymentManager#authorizing_claim_match_value}.

---

##### `inboundTokenClaimName`<sup>Optional</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```java
public java.lang.String getInboundTokenClaimName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_name BedrockagentcorePaymentManager#inbound_token_claim_name}.

---

##### `inboundTokenClaimValueType`<sup>Optional</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```java
public java.lang.String getInboundTokenClaimValueType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_value_type BedrockagentcorePaymentManager#inbound_token_claim_value_type}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;

BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.builder()
//  .claimMatchOperator(java.lang.String)
//  .claimMatchValue(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">claimMatchOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator BedrockagentcorePaymentManager#claim_match_operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value BedrockagentcorePaymentManager#claim_match_value}. |

---

##### `claimMatchOperator`<sup>Optional</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```java
public java.lang.String getClaimMatchOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator BedrockagentcorePaymentManager#claim_match_operator}.

---

##### `claimMatchValue`<sup>Optional</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value BedrockagentcorePaymentManager#claim_match_value}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;

BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.builder()
//  .matchValueString(java.lang.String)
//  .matchValueStringList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">matchValueString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#match_value_string BedrockagentcorePaymentManager#match_value_string}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">matchValueStringList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list BedrockagentcorePaymentManager#match_value_string_list}. |

---

##### `matchValueString`<sup>Optional</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```java
public java.lang.String getMatchValueString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#match_value_string BedrockagentcorePaymentManager#match_value_string}.

---

##### `matchValueStringList`<sup>Optional</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list BedrockagentcorePaymentManager#match_value_string_list}.

---

### BedrockagentcorePaymentManagerConfig <a name="BedrockagentcorePaymentManagerConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerConfig;

BedrockagentcorePaymentManagerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorizerType(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .authorizerConfiguration(BedrockagentcorePaymentManagerAuthorizerConfiguration)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcorePaymentManagerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role for the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>></code> | Tags to assign to the payment manager. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerType"></a>

```java
public java.lang.String getAuthorizerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#name BedrockagentcorePaymentManager#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role for the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#role_arn BedrockagentcorePaymentManager#role_arn}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerConfiguration"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfiguration getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#description BedrockagentcorePaymentManager#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>>

Tags to assign to the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#tags BedrockagentcorePaymentManager#tags}

---

### BedrockagentcorePaymentManagerTags <a name="BedrockagentcorePaymentManagerTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerTags;

BedrockagentcorePaymentManagerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#key BedrockagentcorePaymentManager#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#value BedrockagentcorePaymentManager#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#key BedrockagentcorePaymentManager#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_manager#value BedrockagentcorePaymentManager#value}.

---

### BedrockagentcorePaymentManagerWorkloadIdentityDetails <a name="BedrockagentcorePaymentManagerWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerWorkloadIdentityDetails;

BedrockagentcorePaymentManagerWorkloadIdentityDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference;

new BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">resetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">resetMatchValueStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValueString` <a name="resetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```java
public void resetMatchValueString()
```

##### `resetMatchValueStringList` <a name="resetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```java
public void resetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">matchValueStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">matchValueStringListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValueStringInput`<sup>Optional</sup> <a name="matchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```java
public java.lang.String getMatchValueStringInput();
```

- *Type:* java.lang.String

---

##### `matchValueStringListInput`<sup>Optional</sup> <a name="matchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```java
public java.lang.String getMatchValueString();
```

- *Type:* java.lang.String

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```java
public java.util.List<java.lang.String> getMatchValueStringList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference;

new BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">putClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">resetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">resetClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimMatchValue` <a name="putClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```java
public void putClaimMatchValue(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `resetClaimMatchOperator` <a name="resetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```java
public void resetClaimMatchOperator()
```

##### `resetClaimMatchValue` <a name="resetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```java
public void resetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claimMatchOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claimMatchValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference getClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `claimMatchOperatorInput`<sup>Optional</sup> <a name="claimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```java
public java.lang.String getClaimMatchOperatorInput();
```

- *Type:* java.lang.String

---

##### `claimMatchValueInput`<sup>Optional</sup> <a name="claimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue getClaimMatchValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```java
public java.lang.String getClaimMatchOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList;

new BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference;

new BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">putAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">resetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">resetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">resetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizingClaimMatchValue` <a name="putAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```java
public void putAuthorizingClaimMatchValue(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `resetAuthorizingClaimMatchValue` <a name="resetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```java
public void resetAuthorizingClaimMatchValue()
```

##### `resetInboundTokenClaimName` <a name="resetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```java
public void resetInboundTokenClaimName()
```

##### `resetInboundTokenClaimValueType` <a name="resetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```java
public void resetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">authorizingClaimMatchValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">inboundTokenClaimNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">inboundTokenClaimValueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference getAuthorizingClaimMatchValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `authorizingClaimMatchValueInput`<sup>Optional</sup> <a name="authorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue getAuthorizingClaimMatchValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `inboundTokenClaimNameInput`<sup>Optional</sup> <a name="inboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```java
public java.lang.String getInboundTokenClaimNameInput();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="inboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```java
public java.lang.String getInboundTokenClaimValueTypeInput();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```java
public java.lang.String getInboundTokenClaimName();
```

- *Type:* java.lang.String

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```java
public java.lang.String getInboundTokenClaimValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference;

new BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">putCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">resetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomClaims` <a name="putCustomClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```java
public void putCustomClaims(IResolvable|java.util.List<BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```java
public void resetAllowedAudience()
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```java
public void resetAllowedClients()
```

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```java
public void resetAllowedScopes()
```

##### `resetCustomClaims` <a name="resetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```java
public void resetCustomClaims()
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```java
public void resetDiscoveryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">customClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowedScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">customClaimsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customClaims`<sup>Required</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList getCustomClaims();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customClaimsInput`<sup>Optional</sup> <a name="customClaimsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims> getCustomClaimsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>>

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference;

new BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```java
public void putCustomJwtAuthorizer(BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```java
public void resetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```java
public BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer getCustomJwtAuthorizerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerAuthorizerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---


### BedrockagentcorePaymentManagerTagsList <a name="BedrockagentcorePaymentManagerTagsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerTagsList;

new BedrockagentcorePaymentManagerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get"></a>

```java
public BedrockagentcorePaymentManagerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentManagerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>>

---


### BedrockagentcorePaymentManagerTagsOutputReference <a name="BedrockagentcorePaymentManagerTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerTagsOutputReference;

new BedrockagentcorePaymentManagerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentManagerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>

---


### BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference <a name="BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_manager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference;

new BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails">BedrockagentcorePaymentManagerWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```java
public java.lang.String getWorkloadIdentityArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```java
public BedrockagentcorePaymentManagerWorkloadIdentityDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails">BedrockagentcorePaymentManagerWorkloadIdentityDetails</a>

---



