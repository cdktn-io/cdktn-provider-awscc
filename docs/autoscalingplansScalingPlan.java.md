# `autoscalingplansScalingPlan` Submodule <a name="`autoscalingplansScalingPlan` Submodule" id="@cdktn/provider-awscc.autoscalingplansScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingplansScalingPlan <a name="AutoscalingplansScalingPlan" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationSource(AutoscalingplansScalingPlanApplicationSource)
    .scalingInstructions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.applicationSource">applicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | A CloudFormation stack or a set of tags. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scalingInstructions">scalingInstructions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>></code> | The scaling instructions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.applicationSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

A CloudFormation stack or a set of tags.

You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `scalingInstructions`<sup>Required</sup> <a name="scalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scalingInstructions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>>

The scaling instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_instructions AutoscalingplansScalingPlan#scaling_instructions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource">putApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions">putScalingInstructions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationSource` <a name="putApplicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource"></a>

```java
public void putApplicationSource(AutoscalingplansScalingPlanApplicationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `putScalingInstructions` <a name="putScalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions"></a>

```java
public void putScalingInstructions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingplansScalingPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingplansScalingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingplansScalingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingplansScalingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructions">scalingInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList">AutoscalingplansScalingPlanScalingInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanArn">scalingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanName">scalingPlanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion">scalingPlanVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput">applicationSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionsInput">scalingInstructionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceOutputReference getApplicationSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scalingInstructions`<sup>Required</sup> <a name="scalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructions"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsList getScalingInstructions();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList">AutoscalingplansScalingPlanScalingInstructionsList</a>

---

##### `scalingPlanArn`<sup>Required</sup> <a name="scalingPlanArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanArn"></a>

```java
public java.lang.String getScalingPlanArn();
```

- *Type:* java.lang.String

---

##### `scalingPlanName`<sup>Required</sup> <a name="scalingPlanName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanName"></a>

```java
public java.lang.String getScalingPlanName();
```

- *Type:* java.lang.String

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="scalingPlanVersion" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion"></a>

```java
public java.lang.String getScalingPlanVersion();
```

- *Type:* java.lang.String

---

##### `applicationSourceInput`<sup>Optional</sup> <a name="applicationSourceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput"></a>

```java
public IResolvable|AutoscalingplansScalingPlanApplicationSource getApplicationSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `scalingInstructionsInput`<sup>Optional</sup> <a name="scalingInstructionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionsInput"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions> getScalingInstructionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingplansScalingPlanApplicationSource <a name="AutoscalingplansScalingPlanApplicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSource;

AutoscalingplansScalingPlanApplicationSource.builder()
//  .cloudformationStackArn(java.lang.String)
//  .tagFilters(IResolvable|java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>></code> | A set of tag filters (keys and values). |

---

##### `cloudformationStackArn`<sup>Optional</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn"></a>

```java
public java.lang.String getCloudformationStackArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilters"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>>

A set of tag filters (keys and values).

Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#tag_filters AutoscalingplansScalingPlan#tag_filters}

---

### AutoscalingplansScalingPlanApplicationSourceTagFilters <a name="AutoscalingplansScalingPlanApplicationSourceTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFilters;

AutoscalingplansScalingPlanApplicationSourceTagFilters.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The tag values (0 to 20). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The tag values (0 to 20).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}

---

### AutoscalingplansScalingPlanConfig <a name="AutoscalingplansScalingPlanConfig" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanConfig;

AutoscalingplansScalingPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationSource(AutoscalingplansScalingPlanApplicationSource)
    .scalingInstructions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | A CloudFormation stack or a set of tags. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstructions">scalingInstructions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>></code> | The scaling instructions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource"></a>

```java
public AutoscalingplansScalingPlanApplicationSource getApplicationSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

A CloudFormation stack or a set of tags.

You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `scalingInstructions`<sup>Required</sup> <a name="scalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstructions"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions> getScalingInstructions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>>

The scaling instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_instructions AutoscalingplansScalingPlan#scaling_instructions}

---

### AutoscalingplansScalingPlanScalingInstructions <a name="AutoscalingplansScalingPlanScalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructions;

AutoscalingplansScalingPlanScalingInstructions.builder()
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .serviceNamespace(java.lang.String)
    .targetTrackingConfigurations(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations>)
//  .customizedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification)
//  .disableDynamicScaling(java.lang.Boolean|IResolvable)
//  .predefinedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification)
//  .predictiveScalingMaxCapacityBehavior(java.lang.String)
//  .predictiveScalingMaxCapacityBuffer(java.lang.Number)
//  .predictiveScalingMode(java.lang.String)
//  .scalingPolicyUpdateBehavior(java.lang.String)
//  .scheduledActionBufferTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum capacity of the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum capacity of the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the resource. This string consists of the resource type and unique identifier. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | The scalable dimension associated with the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the AWS service. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.targetTrackingConfigurations">targetTrackingConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>></code> | The target tracking configurations (up to 10). |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | The customized load metric to use for predictive scaling. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Controls whether dynamic scaling is disabled. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | The predefined load metric to use for predictive scaling. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>java.lang.String</code> | Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>java.lang.Number</code> | The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>java.lang.String</code> | The predictive scaling mode. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>java.lang.String</code> | Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum capacity of the resource.

The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

The minimum capacity of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of the resource. This string consists of the resource type and unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

The scalable dimension associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

The namespace of the AWS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}

---

##### `targetTrackingConfigurations`<sup>Required</sup> <a name="targetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.targetTrackingConfigurations"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations> getTargetTrackingConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>>

The target tracking configurations (up to 10).

Each of these structures must specify a unique scaling metric and a target value for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_tracking_configurations AutoscalingplansScalingPlan#target_tracking_configurations}

---

##### `customizedLoadMetricSpecification`<sup>Optional</sup> <a name="customizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.customizedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification getCustomizedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

The customized load metric to use for predictive scaling.

This property or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}

---

##### `disableDynamicScaling`<sup>Optional</sup> <a name="disableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.disableDynamicScaling"></a>

```java
public java.lang.Boolean|IResolvable getDisableDynamicScaling();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Controls whether dynamic scaling is disabled.

When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. The default is enabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="predefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predefinedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification getPredefinedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

The predefined load metric to use for predictive scaling.

This property or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBehavior"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehavior();
```

- *Type:* java.lang.String

Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource.

The default value is SetForecastCapacityToMaxCapacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBuffer"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBuffer();
```

- *Type:* java.lang.Number

The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity.

The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. The range is 1-100. Required if PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}

---

##### `predictiveScalingMode`<sup>Optional</sup> <a name="predictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMode"></a>

```java
public java.lang.String getPredictiveScalingMode();
```

- *Type:* java.lang.String

The predictive scaling mode.

The default value is ForecastAndScale. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}

---

##### `scalingPolicyUpdateBehavior`<sup>Optional</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalingPolicyUpdateBehavior"></a>

```java
public java.lang.String getScalingPolicyUpdateBehavior();
```

- *Type:* java.lang.String

Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created.

The default value is KeepExternalPolicies. Valid only when configuring dynamic scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}

---

##### `scheduledActionBufferTime`<sup>Optional</sup> <a name="scheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scheduledActionBufferTime"></a>

```java
public java.lang.Number getScheduledActionBufferTime();
```

- *Type:* java.lang.Number

The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out.

The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. Valid only when configuring predictive scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}

---

### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.builder()
//  .dimensions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions>)
//  .metricName(java.lang.String)
//  .namespace(java.lang.String)
//  .statistic(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>></code> | The dimensions of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of the metric. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.dimensions"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions> getDimensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>>

The dimensions of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The statistic of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}

---

### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions;

AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dimension. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.value">value</a></code> | <code>java.lang.String</code> | The value of the dimension. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}

---

### AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.builder()
//  .predefinedLoadMetricType(java.lang.String)
//  .resourceLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>java.lang.String</code> | The metric type. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | Identifies the resource associated with the metric type. |

---

##### `predefinedLoadMetricType`<sup>Optional</sup> <a name="predefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.predefinedLoadMetricType"></a>

```java
public java.lang.String getPredefinedLoadMetricType();
```

- *Type:* java.lang.String

The metric type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

Identifies the resource associated with the metric type.

You can't specify a resource label unless the metric type is ALBTargetGroupRequestCount and there is a target group for an Application Load Balancer attached to the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations;

AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.builder()
    .targetValue(java.lang.Number)
//  .customizedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification)
//  .disableScaleIn(java.lang.Boolean|IResolvable)
//  .estimatedInstanceWarmup(java.lang.Number)
//  .predefinedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification)
//  .scaleInCooldown(java.lang.Number)
//  .scaleOutCooldown(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | The target value for the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | A customized metric. You can specify either a predefined metric or a customized metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.disableScaleIn">disableScaleIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether scale in by the target tracking scaling policy is disabled. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | A predefined metric. You can specify either a predefined metric or a customized metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

The target value for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}

---

##### `customizedScalingMetricSpecification`<sup>Optional</sup> <a name="customizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.customizedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification getCustomizedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

A customized metric. You can specify either a predefined metric or a customized metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.disableScaleIn"></a>

```java
public java.lang.Boolean|IResolvable getDisableScaleIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether scale in by the target tracking scaling policy is disabled.

If the value is true, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.

This value is used only if the resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="predefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.predefinedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification getPredefinedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

A predefined metric. You can specify either a predefined metric or a customized metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start.

This value is not used if the scalable resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.

This value is not used if the scalable resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.builder()
//  .dimensions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions>)
//  .metricName(java.lang.String)
//  .namespace(java.lang.String)
//  .statistic(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>></code> | The dimensions of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of the metric. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.dimensions"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions> getDimensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>>

The dimensions of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The statistic of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions;

AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dimension. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.value">value</a></code> | <code>java.lang.String</code> | The value of the dimension. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.builder()
//  .predefinedScalingMetricType(java.lang.String)
//  .resourceLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>java.lang.String</code> | The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | Identifies the resource associated with the metric type. |

---

##### `predefinedScalingMetricType`<sup>Optional</sup> <a name="predefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.predefinedScalingMetricType"></a>

```java
public java.lang.String getPredefinedScalingMetricType();
```

- *Type:* java.lang.String

The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

Identifies the resource associated with the metric type.

You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingplansScalingPlanApplicationSourceOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceOutputReference;

new AutoscalingplansScalingPlanApplicationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn">resetCloudformationStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>>

---

##### `resetCloudformationStackArn` <a name="resetCloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn"></a>

```java
public void resetCloudformationStackArn()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList">AutoscalingplansScalingPlanApplicationSourceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput">cloudformationStackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList">AutoscalingplansScalingPlanApplicationSourceTagFiltersList</a>

---

##### `cloudformationStackArnInput`<sup>Optional</sup> <a name="cloudformationStackArnInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput"></a>

```java
public java.lang.String getCloudformationStackArnInput();
```

- *Type:* java.lang.String

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>>

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn"></a>

```java
public java.lang.String getCloudformationStackArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanApplicationSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---


### AutoscalingplansScalingPlanApplicationSourceTagFiltersList <a name="AutoscalingplansScalingPlanApplicationSourceTagFiltersList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList;

new AutoscalingplansScalingPlanApplicationSourceTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>>

---


### AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference;

new AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanApplicationSourceTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList;

new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>>

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions> getDimensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsList <a name="AutoscalingplansScalingPlanScalingInstructionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsList;

new AutoscalingplansScalingPlanScalingInstructionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>>

---


### AutoscalingplansScalingPlanScalingInstructionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification">putCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification">putPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations">putTargetTrackingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetCustomizedLoadMetricSpecification">resetCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetDisableDynamicScaling">resetDisableDynamicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredefinedLoadMetricSpecification">resetPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBehavior">resetPredictiveScalingMaxCapacityBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBuffer">resetPredictiveScalingMaxCapacityBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMode">resetPredictiveScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScalingPolicyUpdateBehavior">resetScalingPolicyUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScheduledActionBufferTime">resetScheduledActionBufferTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedLoadMetricSpecification` <a name="putCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification"></a>

```java
public void putCustomizedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---

##### `putPredefinedLoadMetricSpecification` <a name="putPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification"></a>

```java
public void putPredefinedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---

##### `putTargetTrackingConfigurations` <a name="putTargetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations"></a>

```java
public void putTargetTrackingConfigurations(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>>

---

##### `resetCustomizedLoadMetricSpecification` <a name="resetCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetCustomizedLoadMetricSpecification"></a>

```java
public void resetCustomizedLoadMetricSpecification()
```

##### `resetDisableDynamicScaling` <a name="resetDisableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetDisableDynamicScaling"></a>

```java
public void resetDisableDynamicScaling()
```

##### `resetPredefinedLoadMetricSpecification` <a name="resetPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredefinedLoadMetricSpecification"></a>

```java
public void resetPredefinedLoadMetricSpecification()
```

##### `resetPredictiveScalingMaxCapacityBehavior` <a name="resetPredictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBehavior"></a>

```java
public void resetPredictiveScalingMaxCapacityBehavior()
```

##### `resetPredictiveScalingMaxCapacityBuffer` <a name="resetPredictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBuffer"></a>

```java
public void resetPredictiveScalingMaxCapacityBuffer()
```

##### `resetPredictiveScalingMode` <a name="resetPredictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMode"></a>

```java
public void resetPredictiveScalingMode()
```

##### `resetScalingPolicyUpdateBehavior` <a name="resetScalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScalingPolicyUpdateBehavior"></a>

```java
public void resetScalingPolicyUpdateBehavior()
```

##### `resetScheduledActionBufferTime` <a name="resetScheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScheduledActionBufferTime"></a>

```java
public void resetScheduledActionBufferTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations">targetTrackingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecificationInput">customizedLoadMetricSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScalingInput">disableDynamicScalingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecificationInput">predefinedLoadMetricSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehaviorInput">predictiveScalingMaxCapacityBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBufferInput">predictiveScalingMaxCapacityBufferInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingModeInput">predictiveScalingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehaviorInput">scalingPolicyUpdateBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTimeInput">scheduledActionBufferTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurationsInput">targetTrackingConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customizedLoadMetricSpecification`<sup>Required</sup> <a name="customizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference getCustomizedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `predefinedLoadMetricSpecification`<sup>Required</sup> <a name="predefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference getPredefinedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `targetTrackingConfigurations`<sup>Required</sup> <a name="targetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList getTargetTrackingConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a>

---

##### `customizedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="customizedLoadMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecificationInput"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification getCustomizedLoadMetricSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---

##### `disableDynamicScalingInput`<sup>Optional</sup> <a name="disableDynamicScalingInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScalingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDynamicScalingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `predefinedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedLoadMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecificationInput"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification getPredefinedLoadMetricSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---

##### `predictiveScalingMaxCapacityBehaviorInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehaviorInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehaviorInput"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehaviorInput();
```

- *Type:* java.lang.String

---

##### `predictiveScalingMaxCapacityBufferInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBufferInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBufferInput"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBufferInput();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingModeInput`<sup>Optional</sup> <a name="predictiveScalingModeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingModeInput"></a>

```java
public java.lang.String getPredictiveScalingModeInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimensionInput"></a>

```java
public java.lang.String getScalableDimensionInput();
```

- *Type:* java.lang.String

---

##### `scalingPolicyUpdateBehaviorInput`<sup>Optional</sup> <a name="scalingPolicyUpdateBehaviorInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehaviorInput"></a>

```java
public java.lang.String getScalingPolicyUpdateBehaviorInput();
```

- *Type:* java.lang.String

---

##### `scheduledActionBufferTimeInput`<sup>Optional</sup> <a name="scheduledActionBufferTimeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTimeInput"></a>

```java
public java.lang.Number getScheduledActionBufferTimeInput();
```

- *Type:* java.lang.Number

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespaceInput"></a>

```java
public java.lang.String getServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `targetTrackingConfigurationsInput`<sup>Optional</sup> <a name="targetTrackingConfigurationsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurationsInput"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations> getTargetTrackingConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>>

---

##### `disableDynamicScaling`<sup>Required</sup> <a name="disableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling"></a>

```java
public java.lang.Boolean|IResolvable getDisableDynamicScaling();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehavior();
```

- *Type:* java.lang.String

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBuffer();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingMode`<sup>Required</sup> <a name="predictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode"></a>

```java
public java.lang.String getPredictiveScalingMode();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

---

##### `scalingPolicyUpdateBehavior`<sup>Required</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior"></a>

```java
public java.lang.String getScalingPolicyUpdateBehavior();
```

- *Type:* java.lang.String

---

##### `scheduledActionBufferTime`<sup>Required</sup> <a name="scheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime"></a>

```java
public java.lang.Number getScheduledActionBufferTime();
```

- *Type:* java.lang.Number

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetPredefinedLoadMetricType">resetPredefinedLoadMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedLoadMetricType` <a name="resetPredefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetPredefinedLoadMetricType"></a>

```java
public void resetPredefinedLoadMetricType()
```

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel"></a>

```java
public void resetResourceLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput">predefinedLoadMetricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedLoadMetricTypeInput`<sup>Optional</sup> <a name="predefinedLoadMetricTypeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput"></a>

```java
public java.lang.String getPredefinedLoadMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```java
public java.lang.String getResourceLabelInput();
```

- *Type:* java.lang.String

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType"></a>

```java
public java.lang.String getPredefinedLoadMetricType();
```

- *Type:* java.lang.String

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions> getDimensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification">putCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification">putPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetCustomizedScalingMetricSpecification">resetCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetPredefinedScalingMetricSpecification">resetPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedScalingMetricSpecification` <a name="putCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification"></a>

```java
public void putCustomizedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---

##### `putPredefinedScalingMetricSpecification` <a name="putPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification"></a>

```java
public void putPredefinedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---

##### `resetCustomizedScalingMetricSpecification` <a name="resetCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetCustomizedScalingMetricSpecification"></a>

```java
public void resetCustomizedScalingMetricSpecification()
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetDisableScaleIn"></a>

```java
public void resetDisableScaleIn()
```

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetEstimatedInstanceWarmup"></a>

```java
public void resetEstimatedInstanceWarmup()
```

##### `resetPredefinedScalingMetricSpecification` <a name="resetPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetPredefinedScalingMetricSpecification"></a>

```java
public void resetPredefinedScalingMetricSpecification()
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleInCooldown"></a>

```java
public void resetScaleInCooldown()
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleOutCooldown"></a>

```java
public void resetScaleOutCooldown()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecificationInput">customizedScalingMetricSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecificationInput">predefinedScalingMetricSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customizedScalingMetricSpecification`<sup>Required</sup> <a name="customizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference getCustomizedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `predefinedScalingMetricSpecification`<sup>Required</sup> <a name="predefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference getPredefinedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `customizedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="customizedScalingMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecificationInput"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification getCustomizedScalingMetricSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleInInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableScaleInInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmupInput"></a>

```java
public java.lang.Number getEstimatedInstanceWarmupInput();
```

- *Type:* java.lang.Number

---

##### `predefinedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedScalingMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecificationInput"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification getPredefinedScalingMetricSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldownInput"></a>

```java
public java.lang.Number getScaleInCooldownInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldownInput"></a>

```java
public java.lang.Number getScaleOutCooldownInput();
```

- *Type:* java.lang.Number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn"></a>

```java
public java.lang.Boolean|IResolvable getDisableScaleIn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetPredefinedScalingMetricType">resetPredefinedScalingMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedScalingMetricType` <a name="resetPredefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetPredefinedScalingMetricType"></a>

```java
public void resetPredefinedScalingMetricType()
```

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel"></a>

```java
public void resetResourceLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput">predefinedScalingMetricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedScalingMetricTypeInput`<sup>Optional</sup> <a name="predefinedScalingMetricTypeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput"></a>

```java
public java.lang.String getPredefinedScalingMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```java
public java.lang.String getResourceLabelInput();
```

- *Type:* java.lang.String

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType"></a>

```java
public java.lang.String getPredefinedScalingMetricType();
```

- *Type:* java.lang.String

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---



