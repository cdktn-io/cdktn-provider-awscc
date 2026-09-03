# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroup(Construct Scope, string Id, CodedeployDeploymentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">PutAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration">PutBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">PutDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters">PutEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">PutEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices">PutEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">PutLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters">PutOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet">PutOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations">PutTriggerConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">ResetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups">ResetAutoScalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration">ResetBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">ResetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName">ResetDeploymentGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">ResetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters">ResetEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">ResetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices">ResetEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">ResetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters">ResetOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet">ResetOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy">ResetOutdatedInstancesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled">ResetTerminationHookEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations">ResetTriggerConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarmConfiguration` <a name="PutAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```csharp
private void PutAlarmConfiguration(CodedeployDeploymentGroupAlarmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```csharp
private void PutAutoRollbackConfiguration(CodedeployDeploymentGroupAutoRollbackConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `PutBlueGreenDeploymentConfiguration` <a name="PutBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration"></a>

```csharp
private void PutBlueGreenDeploymentConfiguration(CodedeployDeploymentGroupBlueGreenDeploymentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment"></a>

```csharp
private void PutDeployment(CodedeployDeploymentGroupDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `PutDeploymentStyle` <a name="PutDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```csharp
private void PutDeploymentStyle(CodedeployDeploymentGroupDeploymentStyle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `PutEc2TagFilters` <a name="PutEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters"></a>

```csharp
private void PutEc2TagFilters(IResolvable|CodedeployDeploymentGroupEc2TagFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---

##### `PutEc2TagSet` <a name="PutEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```csharp
private void PutEc2TagSet(CodedeployDeploymentGroupEc2TagSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `PutEcsServices` <a name="PutEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices"></a>

```csharp
private void PutEcsServices(IResolvable|CodedeployDeploymentGroupEcsServices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---

##### `PutLoadBalancerInfo` <a name="PutLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```csharp
private void PutLoadBalancerInfo(CodedeployDeploymentGroupLoadBalancerInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `PutOnPremisesInstanceTagFilters` <a name="PutOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters"></a>

```csharp
private void PutOnPremisesInstanceTagFilters(IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---

##### `PutOnPremisesTagSet` <a name="PutOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet"></a>

```csharp
private void PutOnPremisesTagSet(CodedeployDeploymentGroupOnPremisesTagSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|CodedeployDeploymentGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---

##### `PutTriggerConfigurations` <a name="PutTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations"></a>

```csharp
private void PutTriggerConfigurations(IResolvable|CodedeployDeploymentGroupTriggerConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---

##### `ResetAlarmConfiguration` <a name="ResetAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```csharp
private void ResetAlarmConfiguration()
```

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```csharp
private void ResetAutoRollbackConfiguration()
```

##### `ResetAutoScalingGroups` <a name="ResetAutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups"></a>

```csharp
private void ResetAutoScalingGroups()
```

##### `ResetBlueGreenDeploymentConfiguration` <a name="ResetBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration"></a>

```csharp
private void ResetBlueGreenDeploymentConfiguration()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetDeploymentConfigName` <a name="ResetDeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```csharp
private void ResetDeploymentConfigName()
```

##### `ResetDeploymentGroupName` <a name="ResetDeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName"></a>

```csharp
private void ResetDeploymentGroupName()
```

##### `ResetDeploymentStyle` <a name="ResetDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```csharp
private void ResetDeploymentStyle()
```

##### `ResetEc2TagFilters` <a name="ResetEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters"></a>

```csharp
private void ResetEc2TagFilters()
```

##### `ResetEc2TagSet` <a name="ResetEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```csharp
private void ResetEc2TagSet()
```

##### `ResetEcsServices` <a name="ResetEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices"></a>

```csharp
private void ResetEcsServices()
```

##### `ResetLoadBalancerInfo` <a name="ResetLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```csharp
private void ResetLoadBalancerInfo()
```

##### `ResetOnPremisesInstanceTagFilters` <a name="ResetOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters"></a>

```csharp
private void ResetOnPremisesInstanceTagFilters()
```

##### `ResetOnPremisesTagSet` <a name="ResetOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet"></a>

```csharp
private void ResetOnPremisesTagSet()
```

##### `ResetOutdatedInstancesStrategy` <a name="ResetOutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy"></a>

```csharp
private void ResetOutdatedInstancesStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminationHookEnabled` <a name="ResetTerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled"></a>

```csharp
private void ResetTerminationHookEnabled()
```

##### `ResetTriggerConfigurations` <a name="ResetTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations"></a>

```csharp
private void ResetTriggerConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodedeployDeploymentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodedeployDeploymentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodedeployDeploymentGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodedeployDeploymentGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodedeployDeploymentGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodedeployDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters">Ec2TagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices">EcsServices</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters">OnPremisesInstanceTagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet">OnPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations">TriggerConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">AlarmConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput">AutoScalingGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput">BlueGreenDeploymentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">DeploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">DeploymentGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput">DeploymentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">DeploymentStyleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput">Ec2TagFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">Ec2TagSetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput">EcsServicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">LoadBalancerInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput">OnPremisesInstanceTagFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput">OnPremisesTagSetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput">OutdatedInstancesStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput">TerminationHookEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput">TriggerConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups">AutoScalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy">OutdatedInstancesStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled">TerminationHookEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmConfiguration`<sup>Required</sup> <a name="AlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfigurationOutputReference AlarmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `BlueGreenDeploymentConfiguration`<sup>Required</sup> <a name="BlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference BlueGreenDeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment"></a>

```csharp
public CodedeployDeploymentGroupDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a>

---

##### `DeploymentStyle`<sup>Required</sup> <a name="DeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyleOutputReference DeploymentStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `Ec2TagFilters`<sup>Required</sup> <a name="Ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters"></a>

```csharp
public CodedeployDeploymentGroupEc2TagFiltersList Ec2TagFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a>

---

##### `Ec2TagSet`<sup>Required</sup> <a name="Ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSetOutputReference Ec2TagSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a>

---

##### `EcsServices`<sup>Required</sup> <a name="EcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices"></a>

```csharp
public CodedeployDeploymentGroupEcsServicesList EcsServices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerInfo`<sup>Required</sup> <a name="LoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoOutputReference LoadBalancerInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `OnPremisesInstanceTagFilters`<sup>Required</sup> <a name="OnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList OnPremisesInstanceTagFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a>

---

##### `OnPremisesTagSet`<sup>Required</sup> <a name="OnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesTagSetOutputReference OnPremisesTagSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```csharp
public CodedeployDeploymentGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a>

---

##### `TriggerConfigurations`<sup>Required</sup> <a name="TriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations"></a>

```csharp
public CodedeployDeploymentGroupTriggerConfigurationsList TriggerConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a>

---

##### `AlarmConfigurationInput`<sup>Optional</sup> <a name="AlarmConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfiguration AlarmConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `AutoScalingGroupsInput`<sup>Optional</sup> <a name="AutoScalingGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput"></a>

```csharp
public string[] AutoScalingGroupsInput { get; }
```

- *Type:* string[]

---

##### `BlueGreenDeploymentConfigurationInput`<sup>Optional</sup> <a name="BlueGreenDeploymentConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfiguration BlueGreenDeploymentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `DeploymentConfigNameInput`<sup>Optional</sup> <a name="DeploymentConfigNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```csharp
public string DeploymentConfigNameInput { get; }
```

- *Type:* string

---

##### `DeploymentGroupNameInput`<sup>Optional</sup> <a name="DeploymentGroupNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```csharp
public string DeploymentGroupNameInput { get; }
```

- *Type:* string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeployment DeploymentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `DeploymentStyleInput`<sup>Optional</sup> <a name="DeploymentStyleInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentStyle DeploymentStyleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `Ec2TagFiltersInput`<sup>Optional</sup> <a name="Ec2TagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagFilters[] Ec2TagFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---

##### `Ec2TagSetInput`<sup>Optional</sup> <a name="Ec2TagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSet Ec2TagSetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `EcsServicesInput`<sup>Optional</sup> <a name="EcsServicesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEcsServices[] EcsServicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---

##### `LoadBalancerInfoInput`<sup>Optional</sup> <a name="LoadBalancerInfoInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `OnPremisesInstanceTagFiltersInput`<sup>Optional</sup> <a name="OnPremisesInstanceTagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters[] OnPremisesInstanceTagFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---

##### `OnPremisesTagSetInput`<sup>Optional</sup> <a name="OnPremisesTagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSet OnPremisesTagSetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `OutdatedInstancesStrategyInput`<sup>Optional</sup> <a name="OutdatedInstancesStrategyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput"></a>

```csharp
public string OutdatedInstancesStrategyInput { get; }
```

- *Type:* string

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---

##### `TerminationHookEnabledInput`<sup>Optional</sup> <a name="TerminationHookEnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput"></a>

```csharp
public bool|IResolvable TerminationHookEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TriggerConfigurationsInput`<sup>Optional</sup> <a name="TriggerConfigurationsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTriggerConfigurations[] TriggerConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `AutoScalingGroups`<sup>Required</sup> <a name="AutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups"></a>

```csharp
public string[] AutoScalingGroups { get; }
```

- *Type:* string[]

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; }
```

- *Type:* string

---

##### `DeploymentGroupName`<sup>Required</sup> <a name="DeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```csharp
public string DeploymentGroupName { get; }
```

- *Type:* string

---

##### `OutdatedInstancesStrategy`<sup>Required</sup> <a name="OutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy"></a>

```csharp
public string OutdatedInstancesStrategy { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `TerminationHookEnabled`<sup>Required</sup> <a name="TerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled"></a>

```csharp
public bool|IResolvable TerminationHookEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAlarmConfiguration {
    IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms[] Alarms = null,
    bool|IResolvable Enabled = null,
    bool|IResolvable IgnorePollAlarmFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">Alarms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the alarm configuration is enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms[] Alarms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the alarm configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `IgnorePollAlarmFailure`<sup>Optional</sup> <a name="IgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```csharp
public bool|IResolvable IgnorePollAlarmFailure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}

---

### CodedeployDeploymentGroupAlarmConfigurationAlarms <a name="CodedeployDeploymentGroupAlarmConfigurationAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAlarmConfigurationAlarms {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name">Name</a></code> | <code>string</code> | The name of the alarm. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the alarm.

Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAutoRollbackConfiguration {
    bool|IResolvable Enabled = null,
    string[] Events = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether a defined automatic rollback configuration is currently enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">Events</a></code> | <code>string[]</code> | The event type or types that trigger a rollback. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether a defined automatic rollback configuration is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

The event type or types that trigger a rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfiguration <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfiguration {
    CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption DeploymentReadyOption = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption GreenFleetProvisioningOption = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | Information about how instances are provisioned for a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | Information about whether to terminate instances in the original fleet during a blue/green deployment. |

---

##### `DeploymentReadyOption`<sup>Optional</sup> <a name="DeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption DeploymentReadyOption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `GreenFleetProvisioningOption`<sup>Optional</sup> <a name="GreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption GreenFleetProvisioningOption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

Information about how instances are provisioned for a replacement environment in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

Information about whether to terminate instances in the original fleet during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption {
    string ActionOnTimeout = null,
    double WaitTimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>string</code> | Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>double</code> | The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. |

---

##### `ActionOnTimeout`<sup>Optional</sup> <a name="ActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

```csharp
public string ActionOnTimeout { get; set; }
```

- *Type:* string

Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.

CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}

---

##### `WaitTimeInMinutes`<sup>Optional</sup> <a name="WaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

```csharp
public double WaitTimeInMinutes { get; set; }
```

- *Type:* double

The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.

Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action">Action</a></code> | <code>string</code> | The method used to add instances to a replacement environment. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The method used to add instances to a replacement environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
    string Action = null,
    double TerminationWaitTimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action">Action</a></code> | <code>string</code> | The action to take on instances in the original environment after a successful blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>double</code> | For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action to take on instances in the original environment after a successful blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

##### `TerminationWaitTimeInMinutes`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```csharp
public double TerminationWaitTimeInMinutes { get; set; }
```

- *Type:* double

For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.

For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationName,
    string ServiceRoleArn,
    CodedeployDeploymentGroupAlarmConfiguration AlarmConfiguration = null,
    CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfiguration = null,
    string[] AutoScalingGroups = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfiguration BlueGreenDeploymentConfiguration = null,
    CodedeployDeploymentGroupDeployment Deployment = null,
    string DeploymentConfigName = null,
    string DeploymentGroupName = null,
    CodedeployDeploymentGroupDeploymentStyle DeploymentStyle = null,
    IResolvable|CodedeployDeploymentGroupEc2TagFilters[] Ec2TagFilters = null,
    CodedeployDeploymentGroupEc2TagSet Ec2TagSet = null,
    IResolvable|CodedeployDeploymentGroupEcsServices[] EcsServices = null,
    CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfo = null,
    IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters[] OnPremisesInstanceTagFilters = null,
    CodedeployDeploymentGroupOnPremisesTagSet OnPremisesTagSet = null,
    string OutdatedInstancesStrategy = null,
    IResolvable|CodedeployDeploymentGroupTags[] Tags = null,
    bool|IResolvable TerminationHookEnabled = null,
    IResolvable|CodedeployDeploymentGroupTriggerConfigurations[] TriggerConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of an existing CodeDeploy application to associate this deployment group with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | Information about the Amazon CloudWatch alarms that are associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | Information about the automatic rollback configuration that is associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups">AutoScalingGroups</a></code> | <code>string[]</code> | A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | Information about blue/green deployment options for a deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | The application revision to deploy to this deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | A deployment configuration name or a predefined configuration name. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>string</code> | A name for the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters">Ec2TagFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | Information about groups of tags applied to Amazon EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices">EcsServices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | The target Amazon ECS services in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | Information about the load balancer to use in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters">OnPremisesInstanceTagFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet">OnPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | Information about groups of tags applied to on-premises instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy">OutdatedInstancesStrategy</a></code> | <code>string</code> | Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled">TerminationHookEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations">TriggerConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | Information about triggers associated with the deployment group. Duplicates are not allowed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of an existing CodeDeploy application to associate this deployment group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#application_name CodedeployDeploymentGroup#application_name}

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.

For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}

---

##### `AlarmConfiguration`<sup>Optional</sup> <a name="AlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfiguration AlarmConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

Information about the Amazon CloudWatch alarms that are associated with the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

Information about the automatic rollback configuration that is associated with the deployment group.

If you specify this property, don't specify the Deployment property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `AutoScalingGroups`<sup>Optional</sup> <a name="AutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups"></a>

```csharp
public string[] AutoScalingGroups { get; set; }
```

- *Type:* string[]

A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.

Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#auto_scaling_groups CodedeployDeploymentGroup#auto_scaling_groups}

---

##### `BlueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="BlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfiguration BlueGreenDeploymentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

Information about blue/green deployment options for a deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CodedeployDeploymentGroup#blue_green_deployment_configuration}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment"></a>

```csharp
public CodedeployDeploymentGroupDeployment Deployment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

The application revision to deploy to this deployment group.

If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment CodedeployDeploymentGroup#deployment}

---

##### `DeploymentConfigName`<sup>Optional</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; set; }
```

- *Type:* string

A deployment configuration name or a predefined configuration name.

With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}

---

##### `DeploymentGroupName`<sup>Optional</sup> <a name="DeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```csharp
public string DeploymentGroupName { get; set; }
```

- *Type:* string

A name for the deployment group.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}

---

##### `DeploymentStyle`<sup>Optional</sup> <a name="DeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyle DeploymentStyle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.

If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `Ec2TagFilters`<sup>Optional</sup> <a name="Ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagFilters[] Ec2TagFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CodedeployDeploymentGroup#ec_2_tag_filters}

---

##### `Ec2TagSet`<sup>Optional</sup> <a name="Ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSet Ec2TagSet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

Information about groups of tags applied to Amazon EC2 instances.

Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set CodedeployDeploymentGroup#ec_2_tag_set}

---

##### `EcsServices`<sup>Optional</sup> <a name="EcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEcsServices[] EcsServices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

The target Amazon ECS services in the deployment group.

This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ecs_services CodedeployDeploymentGroup#ecs_services}

---

##### `LoadBalancerInfo`<sup>Optional</sup> <a name="LoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

Information about the load balancer to use in a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `OnPremisesInstanceTagFilters`<sup>Optional</sup> <a name="OnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters[] OnPremisesInstanceTagFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.

CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CodedeployDeploymentGroup#on_premises_instance_tag_filters}

---

##### `OnPremisesTagSet`<sup>Optional</sup> <a name="OnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesTagSet OnPremisesTagSet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

Information about groups of tags applied to on-premises instances.

The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set CodedeployDeploymentGroup#on_premises_tag_set}

---

##### `OutdatedInstancesStrategy`<sup>Optional</sup> <a name="OutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy"></a>

```csharp
public string OutdatedInstancesStrategy { get; set; }
```

- *Type:* string

Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.

If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.

Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}

---

##### `TerminationHookEnabled`<sup>Optional</sup> <a name="TerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled"></a>

```csharp
public bool|IResolvable TerminationHookEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}

---

##### `TriggerConfigurations`<sup>Optional</sup> <a name="TriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTriggerConfigurations[] TriggerConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

Information about triggers associated with the deployment group. Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_configurations CodedeployDeploymentGroup#trigger_configurations}

---

### CodedeployDeploymentGroupDeployment <a name="CodedeployDeploymentGroupDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeployment {
    string Description = null,
    bool|IResolvable IgnoreApplicationStopFailures = null,
    CodedeployDeploymentGroupDeploymentRevision Revision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description">Description</a></code> | <code>string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures">IgnoreApplicationStopFailures</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision">Revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | Information about the location of stored application artifacts and the service from which to retrieve them. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#description CodedeployDeploymentGroup#description}

---

##### `IgnoreApplicationStopFailures`<sup>Optional</sup> <a name="IgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures"></a>

```csharp
public bool|IResolvable IgnoreApplicationStopFailures { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.

If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CodedeployDeploymentGroup#ignore_application_stop_failures}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevision Revision { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

Information about the location of stored application artifacts and the service from which to retrieve them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision CodedeployDeploymentGroup#revision}

---

### CodedeployDeploymentGroupDeploymentRevision <a name="CodedeployDeploymentGroupDeploymentRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevision {
    CodedeployDeploymentGroupDeploymentRevisionGitHubLocation GitHubLocation = null,
    string RevisionType = null,
    CodedeployDeploymentGroupDeploymentRevisionS3Location S3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation">GitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | Specifies the location of an application revision that is stored in GitHub. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType">RevisionType</a></code> | <code>string</code> | The type of application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | Information about the location of application artifacts stored in Amazon S3. |

---

##### `GitHubLocation`<sup>Optional</sup> <a name="GitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevisionGitHubLocation GitHubLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

Specifies the location of an application revision that is stored in GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#git_hub_location CodedeployDeploymentGroup#git_hub_location}

---

##### `RevisionType`<sup>Optional</sup> <a name="RevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType"></a>

```csharp
public string RevisionType { get; set; }
```

- *Type:* string

The type of application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#revision_type CodedeployDeploymentGroup#revision_type}

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevisionS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

Information about the location of application artifacts stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#s3_location CodedeployDeploymentGroup#s3_location}

---

### CodedeployDeploymentGroupDeploymentRevisionGitHubLocation <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevisionGitHubLocation {
    string CommitId = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId">CommitId</a></code> | <code>string</code> | The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository">Repository</a></code> | <code>string</code> | The GitHub account and repository pair that stores the application revision to be deployed. |

---

##### `CommitId`<sup>Optional</sup> <a name="CommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId"></a>

```csharp
public string CommitId { get; set; }
```

- *Type:* string

The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#commit_id CodedeployDeploymentGroup#commit_id}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The GitHub account and repository pair that stores the application revision to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#repository CodedeployDeploymentGroup#repository}

---

### CodedeployDeploymentGroupDeploymentRevisionS3Location <a name="CodedeployDeploymentGroupDeploymentRevisionS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevisionS3Location {
    string Bucket = null,
    string BundleType = null,
    string ETag = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket">Bucket</a></code> | <code>string</code> | The name of the Amazon S3 bucket where the application revision is stored. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType">BundleType</a></code> | <code>string</code> | The file type of the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag">ETag</a></code> | <code>string</code> | The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key">Key</a></code> | <code>string</code> | The name of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version">Version</a></code> | <code>string</code> | A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket where the application revision is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bucket CodedeployDeploymentGroup#bucket}

---

##### `BundleType`<sup>Optional</sup> <a name="BundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType"></a>

```csharp
public string BundleType { get; set; }
```

- *Type:* string

The file type of the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#bundle_type CodedeployDeploymentGroup#bundle_type}

---

##### `ETag`<sup>Optional</sup> <a name="ETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag"></a>

```csharp
public string ETag { get; set; }
```

- *Type:* string

The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the ETag is not specified as an input parameter, ETag validation of the object is skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#e_tag CodedeployDeploymentGroup#e_tag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the Amazon S3 object that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the version is not specified, the system uses the most recent version by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#version CodedeployDeploymentGroup#version}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentStyle {
    string DeploymentOption = null,
    string DeploymentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | Indicates whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Indicates whether to run an in-place or blue/green deployment. |

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; set; }
```

- *Type:* string

Indicates whether to route deployment traffic behind a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Indicates whether to run an in-place or blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}

---

### CodedeployDeploymentGroupEc2TagFilters <a name="CodedeployDeploymentGroupEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagFilters {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key">Key</a></code> | <code>string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type">Type</a></code> | <code>string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value">Value</a></code> | <code>string</code> | The tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSet {
    IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[] Ec2TagSetList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList">Ec2TagSetList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |

---

##### `Ec2TagSetList`<sup>Optional</sup> <a name="Ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[] Ec2TagSetList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CodedeployDeploymentGroup#ec_2_tag_set_list}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key">Key</a></code> | <code>string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type">Type</a></code> | <code>string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value">Value</a></code> | <code>string</code> | The tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct {
    IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[] Ec2TagGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup">Ec2TagGroup</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | A list that contains other lists of Amazon EC2 instance tag groups. |

---

##### `Ec2TagGroup`<sup>Optional</sup> <a name="Ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[] Ec2TagGroup { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

A list that contains other lists of Amazon EC2 instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#ec_2_tag_group CodedeployDeploymentGroup#ec_2_tag_group}

---

### CodedeployDeploymentGroupEcsServices <a name="CodedeployDeploymentGroupEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEcsServices {
    string ClusterName = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the cluster that the Amazon ECS service is associated with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the target Amazon ECS service. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the cluster that the Amazon ECS service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the target Amazon ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfo {
    IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[] ElbInfoList = null,
    IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[] TargetGroupInfoList = null,
    IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[] TargetGroupPairInfoList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList">ElbInfoList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | An array that contains information about the load balancers to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList">TargetGroupInfoList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | An array that contains information about the target groups to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList">TargetGroupPairInfoList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one. |

---

##### `ElbInfoList`<sup>Optional</sup> <a name="ElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[] ElbInfoList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

An array that contains information about the load balancers to use for load balancing in a deployment.

If you're using Classic Load Balancers, specify those load balancers in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#elb_info_list CodedeployDeploymentGroup#elb_info_list}

---

##### `TargetGroupInfoList`<sup>Optional</sup> <a name="TargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[] TargetGroupInfoList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

An array that contains information about the target groups to use for load balancing in a deployment.

If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_info_list CodedeployDeploymentGroup#target_group_info_list}

---

##### `TargetGroupPairInfoList`<sup>Optional</sup> <a name="TargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[] TargetGroupPairInfoList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CodedeployDeploymentGroup#target_group_pair_info_list}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name">Name</a></code> | <code>string</code> | For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment.

For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name">Name</a></code> | <code>string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute {
    string[] ListenerArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `ListenerArns`<sup>Optional</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct {
    CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute ProdTrafficRoute = null,
    IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[] TargetGroups = null,
    CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute TestTrafficRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups">TargetGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | One pair of target groups. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. |

---

##### `ProdTrafficRoute`<sup>Optional</sup> <a name="ProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute ProdTrafficRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[] TargetGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

One pair of target groups.

One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#target_groups CodedeployDeploymentGroup#target_groups}

---

##### `TestTrafficRoute`<sup>Optional</sup> <a name="TestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute TestTrafficRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

An optional path used by a load balancer to route test traffic after an Amazon ECS deployment.

Validation can occur while test traffic is served during a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name">Name</a></code> | <code>string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute {
    string[] ListenerArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `ListenerArns`<sup>Optional</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilters <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilters {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key">Key</a></code> | <code>string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type">Type</a></code> | <code>string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value">Value</a></code> | <code>string</code> | The on-premises instance tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSet <a name="CodedeployDeploymentGroupOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSet {
    IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[] OnPremisesTagSetList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList">OnPremisesTagSetList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | A list that contains other lists of on-premises instance tag groups. |

---

##### `OnPremisesTagSetList`<sup>Optional</sup> <a name="OnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[] OnPremisesTagSetList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

A list that contains other lists of on-premises instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CodedeployDeploymentGroup#on_premises_tag_set_list}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key">Key</a></code> | <code>string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type">Type</a></code> | <code>string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value">Value</a></code> | <code>string</code> | The on-premises instance tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct {
    IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[] OnPremisesTagGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup">OnPremisesTagGroup</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | Information about groups of on-premises instance tags. |

---

##### `OnPremisesTagGroup`<sup>Optional</sup> <a name="OnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[] OnPremisesTagGroup { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

Information about groups of on-premises instance tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#on_premises_tag_group CodedeployDeploymentGroup#on_premises_tag_group}

---

### CodedeployDeploymentGroupTags <a name="CodedeployDeploymentGroupTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupTriggerConfigurations <a name="CodedeployDeploymentGroupTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTriggerConfigurations {
    string[] TriggerEvents = null,
    string TriggerName = null,
    string TriggerTargetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents">TriggerEvents</a></code> | <code>string[]</code> | The event type or types that trigger notifications. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName">TriggerName</a></code> | <code>string</code> | The name of the notification trigger. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent. |

---

##### `TriggerEvents`<sup>Optional</sup> <a name="TriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents"></a>

```csharp
public string[] TriggerEvents { get; set; }
```

- *Type:* string[]

The event type or types that trigger notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}

---

##### `TriggerName`<sup>Optional</sup> <a name="TriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName"></a>

```csharp
public string TriggerName { get; set; }
```

- *Type:* string

The name of the notification trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}

---

##### `TriggerTargetArn`<sup>Optional</sup> <a name="TriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn"></a>

```csharp
public string TriggerTargetArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationAlarmsList <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAlarmConfigurationAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get"></a>

```csharp
private CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---


### CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>

---


### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAlarmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">ResetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms"></a>

```csharp
private void PutAlarms(IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIgnorePollAlarmFailure` <a name="ResetIgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```csharp
private void ResetIgnorePollAlarmFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">IgnorePollAlarmFailureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfigurationAlarmsList Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfigurationAlarms[] AlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnorePollAlarmFailureInput`<sup>Optional</sup> <a name="IgnorePollAlarmFailureInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```csharp
public bool|IResolvable IgnorePollAlarmFailureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnorePollAlarmFailure`<sup>Required</sup> <a name="IgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```csharp
public bool|IResolvable IgnorePollAlarmFailure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAlarmConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```csharp
private void ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout">ResetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">ResetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionOnTimeout` <a name="ResetActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```csharp
private void ResetActionOnTimeout()
```

##### `ResetWaitTimeInMinutes` <a name="ResetWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```csharp
private void ResetWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">ActionOnTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">WaitTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionOnTimeoutInput`<sup>Optional</sup> <a name="ActionOnTimeoutInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```csharp
public string ActionOnTimeoutInput { get; }
```

- *Type:* string

---

##### `WaitTimeInMinutesInput`<sup>Optional</sup> <a name="WaitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```csharp
public double WaitTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `ActionOnTimeout`<sup>Required</sup> <a name="ActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```csharp
public string ActionOnTimeout { get; }
```

- *Type:* string

---

##### `WaitTimeInMinutes`<sup>Required</sup> <a name="WaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```csharp
public double WaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption">PutDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption">PutGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">PutTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption">ResetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption">ResetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">ResetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploymentReadyOption` <a name="PutDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption"></a>

```csharp
private void PutDeploymentReadyOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `PutGreenFleetProvisioningOption` <a name="PutGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption"></a>

```csharp
private void PutGreenFleetProvisioningOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `PutTerminateBlueInstancesOnDeploymentSuccess` <a name="PutTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
private void PutTerminateBlueInstancesOnDeploymentSuccess(CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `ResetDeploymentReadyOption` <a name="ResetDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption"></a>

```csharp
private void ResetDeploymentReadyOption()
```

##### `ResetGreenFleetProvisioningOption` <a name="ResetGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption"></a>

```csharp
private void ResetGreenFleetProvisioningOption()
```

##### `ResetTerminateBlueInstancesOnDeploymentSuccess` <a name="ResetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
private void ResetTerminateBlueInstancesOnDeploymentSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput">DeploymentReadyOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput">GreenFleetProvisioningOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">TerminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentReadyOption`<sup>Required</sup> <a name="DeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference DeploymentReadyOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a>

---

##### `GreenFleetProvisioningOption`<sup>Required</sup> <a name="GreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference GreenFleetProvisioningOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference TerminateBlueInstancesOnDeploymentSuccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `DeploymentReadyOptionInput`<sup>Optional</sup> <a name="DeploymentReadyOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption DeploymentReadyOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `GreenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="GreenFleetProvisioningOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption GreenFleetProvisioningOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccessInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">ResetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetTerminationWaitTimeInMinutes` <a name="ResetTerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```csharp
private void ResetTerminationWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">TerminationWaitTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `TerminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```csharp
public double TerminationWaitTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `TerminationWaitTimeInMinutes`<sup>Required</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```csharp
public double TerminationWaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentOutputReference <a name="CodedeployDeploymentGroupDeploymentOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision">PutRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures">ResetIgnoreApplicationStopFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevision` <a name="PutRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision"></a>

```csharp
private void PutRevision(CodedeployDeploymentGroupDeploymentRevision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIgnoreApplicationStopFailures` <a name="ResetIgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures"></a>

```csharp
private void ResetIgnoreApplicationStopFailures()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision">Revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput">IgnoreApplicationStopFailuresInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput">RevisionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures">IgnoreApplicationStopFailures</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevisionOutputReference Revision { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IgnoreApplicationStopFailuresInput`<sup>Optional</sup> <a name="IgnoreApplicationStopFailuresInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput"></a>

```csharp
public bool|IResolvable IgnoreApplicationStopFailuresInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevision RevisionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IgnoreApplicationStopFailures`<sup>Required</sup> <a name="IgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures"></a>

```csharp
public bool|IResolvable IgnoreApplicationStopFailures { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeployment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---


### CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId">ResetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitId` <a name="ResetCommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId"></a>

```csharp
private void ResetCommitId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput">CommitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId">CommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitIdInput`<sup>Optional</sup> <a name="CommitIdInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput"></a>

```csharp
public string CommitIdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId"></a>

```csharp
public string CommitId { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevisionGitHubLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---


### CodedeployDeploymentGroupDeploymentRevisionOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation">PutGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation">ResetGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType">ResetRevisionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitHubLocation` <a name="PutGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation"></a>

```csharp
private void PutGitHubLocation(CodedeployDeploymentGroupDeploymentRevisionGitHubLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(CodedeployDeploymentGroupDeploymentRevisionS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `ResetGitHubLocation` <a name="ResetGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation"></a>

```csharp
private void ResetGitHubLocation()
```

##### `ResetRevisionType` <a name="ResetRevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType"></a>

```csharp
private void ResetRevisionType()
```

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location"></a>

```csharp
private void ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation">GitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput">GitHubLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput">RevisionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType">RevisionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitHubLocation`<sup>Required</sup> <a name="GitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference GitHubLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a>

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location"></a>

```csharp
public CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a>

---

##### `GitHubLocationInput`<sup>Optional</sup> <a name="GitHubLocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevisionGitHubLocation GitHubLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `RevisionTypeInput`<sup>Optional</sup> <a name="RevisionTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput"></a>

```csharp
public string RevisionTypeInput { get; }
```

- *Type:* string

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevisionS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `RevisionType`<sup>Required</sup> <a name="RevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType"></a>

```csharp
public string RevisionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevision InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---


### CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType">ResetBundleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag">ResetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBundleType` <a name="ResetBundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType"></a>

```csharp
private void ResetBundleType()
```

##### `ResetETag` <a name="ResetETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag"></a>

```csharp
private void ResetETag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput">BundleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput">ETagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType">BundleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag">ETag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BundleTypeInput`<sup>Optional</sup> <a name="BundleTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput"></a>

```csharp
public string BundleTypeInput { get; }
```

- *Type:* string

---

##### `ETagInput`<sup>Optional</sup> <a name="ETagInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput"></a>

```csharp
public string ETagInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BundleType`<sup>Required</sup> <a name="BundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType"></a>

```csharp
public string BundleType { get; }
```

- *Type:* string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag"></a>

```csharp
public string ETag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentRevisionS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupDeploymentStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```csharp
private void ResetDeploymentOption()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```csharp
public string DeploymentOptionInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupDeploymentStyle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFiltersList <a name="CodedeployDeploymentGroupEc2TagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---


### CodedeployDeploymentGroupEc2TagFiltersOutputReference <a name="CodedeployDeploymentGroupEc2TagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup">PutEc2TagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup">ResetEc2TagGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2TagGroup` <a name="PutEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup"></a>

```csharp
private void PutEc2TagGroup(IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---

##### `ResetEc2TagGroup` <a name="ResetEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup"></a>

```csharp
private void ResetEc2TagGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup">Ec2TagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput">Ec2TagGroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2TagGroup`<sup>Required</sup> <a name="Ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList Ec2TagGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a>

---

##### `Ec2TagGroupInput`<sup>Optional</sup> <a name="Ec2TagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[] Ec2TagGroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEc2TagSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList">PutEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList">ResetEc2TagSetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2TagSetList` <a name="PutEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList"></a>

```csharp
private void PutEc2TagSetList(IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---

##### `ResetEc2TagSetList` <a name="ResetEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList"></a>

```csharp
private void ResetEc2TagSetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList">Ec2TagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput">Ec2TagSetListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2TagSetList`<sup>Required</sup> <a name="Ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList Ec2TagSetList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a>

---

##### `Ec2TagSetListInput`<sup>Optional</sup> <a name="Ec2TagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[] Ec2TagSetListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEc2TagSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---


### CodedeployDeploymentGroupEcsServicesList <a name="CodedeployDeploymentGroupEcsServicesList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEcsServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get"></a>

```csharp
private CodedeployDeploymentGroupEcsServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEcsServices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---


### CodedeployDeploymentGroupEcsServicesOutputReference <a name="CodedeployDeploymentGroupEcsServicesOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupEcsServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupEcsServices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList">PutElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList">PutTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList">PutTargetGroupPairInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList">ResetElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList">ResetTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList">ResetTargetGroupPairInfoList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElbInfoList` <a name="PutElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList"></a>

```csharp
private void PutElbInfoList(IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---

##### `PutTargetGroupInfoList` <a name="PutTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList"></a>

```csharp
private void PutTargetGroupInfoList(IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---

##### `PutTargetGroupPairInfoList` <a name="PutTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList"></a>

```csharp
private void PutTargetGroupPairInfoList(IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---

##### `ResetElbInfoList` <a name="ResetElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList"></a>

```csharp
private void ResetElbInfoList()
```

##### `ResetTargetGroupInfoList` <a name="ResetTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList"></a>

```csharp
private void ResetTargetGroupInfoList()
```

##### `ResetTargetGroupPairInfoList` <a name="ResetTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList"></a>

```csharp
private void ResetTargetGroupPairInfoList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList">ElbInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList">TargetGroupInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList">TargetGroupPairInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput">ElbInfoListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput">TargetGroupInfoListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput">TargetGroupPairInfoListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElbInfoList`<sup>Required</sup> <a name="ElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList ElbInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a>

---

##### `TargetGroupInfoList`<sup>Required</sup> <a name="TargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList TargetGroupInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a>

---

##### `TargetGroupPairInfoList`<sup>Required</sup> <a name="TargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList TargetGroupPairInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a>

---

##### `ElbInfoListInput`<sup>Optional</sup> <a name="ElbInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[] ElbInfoListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---

##### `TargetGroupInfoListInput`<sup>Optional</sup> <a name="TargetGroupInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[] TargetGroupInfoListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---

##### `TargetGroupPairInfoListInput`<sup>Optional</sup> <a name="TargetGroupPairInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[] TargetGroupPairInfoListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns">ResetListenerArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetListenerArns` <a name="ResetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns"></a>

```csharp
private void ResetListenerArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```csharp
public string[] ListenerArnsInput { get; }
```

- *Type:* string[]

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute">PutProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute">PutTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute">ResetProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute">ResetTestTrafficRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProdTrafficRoute` <a name="PutProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute"></a>

```csharp
private void PutProdTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups"></a>

```csharp
private void PutTargetGroups(IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---

##### `PutTestTrafficRoute` <a name="PutTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute"></a>

```csharp
private void PutTestTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `ResetProdTrafficRoute` <a name="ResetProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute"></a>

```csharp
private void ResetProdTrafficRoute()
```

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups"></a>

```csharp
private void ResetTargetGroups()
```

##### `ResetTestTrafficRoute` <a name="ResetTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute"></a>

```csharp
private void ResetTestTrafficRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput">ProdTrafficRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput">TestTrafficRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProdTrafficRoute`<sup>Required</sup> <a name="ProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference ProdTrafficRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a>

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a>

---

##### `TestTrafficRoute`<sup>Required</sup> <a name="TestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference TestTrafficRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a>

---

##### `ProdTrafficRouteInput`<sup>Optional</sup> <a name="ProdTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute ProdTrafficRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[] TargetGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---

##### `TestTrafficRouteInput`<sup>Optional</sup> <a name="TestTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute TestTrafficRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns">ResetListenerArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetListenerArns` <a name="ResetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns"></a>

```csharp
private void ResetListenerArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```csharp
public string[] ListenerArnsInput { get; }
```

- *Type:* string[]

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get"></a>

```csharp
private CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesInstanceTagFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get"></a>

```csharp
private CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get"></a>

```csharp
private CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup">PutOnPremisesTagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup">ResetOnPremisesTagGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnPremisesTagGroup` <a name="PutOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup"></a>

```csharp
private void PutOnPremisesTagGroup(IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---

##### `ResetOnPremisesTagGroup` <a name="ResetOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup"></a>

```csharp
private void ResetOnPremisesTagGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup">OnPremisesTagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput">OnPremisesTagGroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnPremisesTagGroup`<sup>Required</sup> <a name="OnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList OnPremisesTagGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a>

---

##### `OnPremisesTagGroupInput`<sup>Optional</sup> <a name="OnPremisesTagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[] OnPremisesTagGroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupOnPremisesTagSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList">PutOnPremisesTagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList">ResetOnPremisesTagSetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnPremisesTagSetList` <a name="PutOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList"></a>

```csharp
private void PutOnPremisesTagSetList(IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---

##### `ResetOnPremisesTagSetList` <a name="ResetOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList"></a>

```csharp
private void ResetOnPremisesTagSetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList">OnPremisesTagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput">OnPremisesTagSetListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnPremisesTagSetList`<sup>Required</sup> <a name="OnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList OnPremisesTagSetList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a>

---

##### `OnPremisesTagSetListInput`<sup>Optional</sup> <a name="OnPremisesTagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[] OnPremisesTagSetListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupOnPremisesTagSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---


### CodedeployDeploymentGroupTagsList <a name="CodedeployDeploymentGroupTagsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get"></a>

```csharp
private CodedeployDeploymentGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---


### CodedeployDeploymentGroupTagsOutputReference <a name="CodedeployDeploymentGroupTagsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>

---


### CodedeployDeploymentGroupTriggerConfigurationsList <a name="CodedeployDeploymentGroupTriggerConfigurationsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTriggerConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get"></a>

```csharp
private CodedeployDeploymentGroupTriggerConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTriggerConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---


### CodedeployDeploymentGroupTriggerConfigurationsOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodedeployDeploymentGroupTriggerConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents">ResetTriggerEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName">ResetTriggerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn">ResetTriggerTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTriggerEvents` <a name="ResetTriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents"></a>

```csharp
private void ResetTriggerEvents()
```

##### `ResetTriggerName` <a name="ResetTriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName"></a>

```csharp
private void ResetTriggerName()
```

##### `ResetTriggerTargetArn` <a name="ResetTriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn"></a>

```csharp
private void ResetTriggerTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput">TriggerEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput">TriggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput">TriggerTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents">TriggerEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName">TriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerEventsInput`<sup>Optional</sup> <a name="TriggerEventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput"></a>

```csharp
public string[] TriggerEventsInput { get; }
```

- *Type:* string[]

---

##### `TriggerNameInput`<sup>Optional</sup> <a name="TriggerNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput"></a>

```csharp
public string TriggerNameInput { get; }
```

- *Type:* string

---

##### `TriggerTargetArnInput`<sup>Optional</sup> <a name="TriggerTargetArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput"></a>

```csharp
public string TriggerTargetArnInput { get; }
```

- *Type:* string

---

##### `TriggerEvents`<sup>Required</sup> <a name="TriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents"></a>

```csharp
public string[] TriggerEvents { get; }
```

- *Type:* string[]

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName"></a>

```csharp
public string TriggerName { get; }
```

- *Type:* string

---

##### `TriggerTargetArn`<sup>Required</sup> <a name="TriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn"></a>

```csharp
public string TriggerTargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodedeployDeploymentGroupTriggerConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>

---



