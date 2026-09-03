# `stepfunctionsStateMachineAlias` Submodule <a name="`stepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineAlias <a name="StepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAlias;

StepfunctionsStateMachineAlias.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deploymentPreference(StepfunctionsStateMachineAliasDeploymentPreference)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .routingConfiguration(IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration>)
//  .stateMachineArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.routingConfiguration">routingConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>></code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentPreference`<sup>Optional</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.deploymentPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `routingConfiguration`<sup>Optional</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.routingConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>>

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `stateMachineArn`<sup>Optional</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.stateMachineArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference">putDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration">putRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference">resetDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration">resetRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn">resetStateMachineArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentPreference` <a name="putDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference"></a>

```java
public void putDeploymentPreference(StepfunctionsStateMachineAliasDeploymentPreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `putRoutingConfiguration` <a name="putRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration"></a>

```java
public void putRoutingConfiguration(IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>>

---

##### `resetDeploymentPreference` <a name="resetDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference"></a>

```java
public void resetDeploymentPreference()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName"></a>

```java
public void resetName()
```

##### `resetRoutingConfiguration` <a name="resetRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration"></a>

```java
public void resetRoutingConfiguration()
```

##### `resetStateMachineArn` <a name="resetStateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn"></a>

```java
public void resetStateMachineArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAlias;

StepfunctionsStateMachineAlias.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAlias;

StepfunctionsStateMachineAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAlias;

StepfunctionsStateMachineAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAlias;

StepfunctionsStateMachineAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StepfunctionsStateMachineAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StepfunctionsStateMachineAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput">deploymentPreferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput">routingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput">stateMachineArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deploymentPreference`<sup>Required</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```java
public StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference getDeploymentPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```java
public StepfunctionsStateMachineAliasRoutingConfigurationList getRoutingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `deploymentPreferenceInput`<sup>Optional</sup> <a name="deploymentPreferenceInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput"></a>

```java
public IResolvable|StepfunctionsStateMachineAliasDeploymentPreference getDeploymentPreferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routingConfigurationInput`<sup>Optional</sup> <a name="routingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration> getRoutingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>>

---

##### `stateMachineArnInput`<sup>Optional</sup> <a name="stateMachineArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput"></a>

```java
public java.lang.String getStateMachineArnInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```java
public java.lang.String getStateMachineArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineAliasConfig <a name="StepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasConfig;

StepfunctionsStateMachineAliasConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deploymentPreference(StepfunctionsStateMachineAliasDeploymentPreference)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .routingConfiguration(IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration>)
//  .stateMachineArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name">name</a></code> | <code>java.lang.String</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration">routingConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>></code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn">stateMachineArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentPreference`<sup>Optional</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference"></a>

```java
public StepfunctionsStateMachineAliasDeploymentPreference getDeploymentPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `routingConfiguration`<sup>Optional</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration> getRoutingConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>>

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `stateMachineArn`<sup>Optional</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn"></a>

```java
public java.lang.String getStateMachineArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

### StepfunctionsStateMachineAliasDeploymentPreference <a name="StepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasDeploymentPreference;

StepfunctionsStateMachineAliasDeploymentPreference.builder()
//  .alarms(java.util.List<java.lang.String>)
//  .interval(java.lang.Number)
//  .percentage(java.lang.Number)
//  .stateMachineVersionArn(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | A list of CloudWatch alarm names that will be monitored during the deployment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval">interval</a></code> | <code>java.lang.Number</code> | The time in minutes between each traffic shifting increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic to shift to the new version in each increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type">type</a></code> | <code>java.lang.String</code> | The type of deployment to perform. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

A list of CloudWatch alarm names that will be monitored during the deployment.

The deployment will fail and rollback if any alarms go into ALARM state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

The time in minutes between each traffic shifting increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traffic to shift to the new version in each increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}

---

##### `stateMachineVersionArn`<sup>Optional</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn"></a>

```java
public java.lang.String getStateMachineVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of deployment to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}

---

### StepfunctionsStateMachineAliasRoutingConfiguration <a name="StepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasRoutingConfiguration;

StepfunctionsStateMachineAliasRoutingConfiguration.builder()
//  .stateMachineVersionArn(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight">weight</a></code> | <code>java.lang.Number</code> | The percentage of traffic you want to route to the state machine version. |

---

##### `stateMachineVersionArn`<sup>Optional</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn"></a>

```java
public java.lang.String getStateMachineVersionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The percentage of traffic you want to route to the state machine version.

The sum of the weights in the routing configuration must be equal to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#weight StepfunctionsStateMachineAlias#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference;

new StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn">resetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```

##### `resetStateMachineVersionArn` <a name="resetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn"></a>

```java
public void resetStateMachineVersionArn()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput">stateMachineVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `stateMachineVersionArnInput`<sup>Optional</sup> <a name="stateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput"></a>

```java
public java.lang.String getStateMachineVersionArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```java
public java.lang.String getStateMachineVersionArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineAliasDeploymentPreference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---


### StepfunctionsStateMachineAliasRoutingConfigurationList <a name="StepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasRoutingConfigurationList;

new StepfunctionsStateMachineAliasRoutingConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```java
public StepfunctionsStateMachineAliasRoutingConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineAliasRoutingConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>>

---


### StepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="StepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine_alias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference;

new StepfunctionsStateMachineAliasRoutingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn">resetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStateMachineVersionArn` <a name="resetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn"></a>

```java
public void resetStateMachineVersionArn()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput">stateMachineVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stateMachineVersionArnInput`<sup>Optional</sup> <a name="stateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput"></a>

```java
public java.lang.String getStateMachineVersionArnInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```java
public java.lang.String getStateMachineVersionArn();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>

---



