# `greengrassv2Deployment` Submodule <a name="`greengrassv2Deployment` Submodule" id="@cdktn/provider-awscc.greengrassv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2Deployment <a name="Greengrassv2Deployment" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment awscc_greengrassv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2Deployment(Construct Scope, string Id, Greengrassv2DeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig">Greengrassv2DeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig">Greengrassv2DeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies">PutDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration">PutIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents">ResetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName">ResetDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies">ResetDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration">ResetIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn">ResetParentTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents"></a>

```csharp
private void PutComponents(IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2DeploymentComponents> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>>

---

##### `PutDeploymentPolicies` <a name="PutDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies"></a>

```csharp
private void PutDeploymentPolicies(Greengrassv2DeploymentDeploymentPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---

##### `PutIotJobConfiguration` <a name="PutIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration"></a>

```csharp
private void PutIotJobConfiguration(Greengrassv2DeploymentIotJobConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---

##### `ResetComponents` <a name="ResetComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents"></a>

```csharp
private void ResetComponents()
```

##### `ResetDeploymentName` <a name="ResetDeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName"></a>

```csharp
private void ResetDeploymentName()
```

##### `ResetDeploymentPolicies` <a name="ResetDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies"></a>

```csharp
private void ResetDeploymentPolicies()
```

##### `ResetIotJobConfiguration` <a name="ResetIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration"></a>

```csharp
private void ResetIotJobConfiguration()
```

##### `ResetParentTargetArn` <a name="ResetParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn"></a>

```csharp
private void ResetParentTargetArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2Deployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2Deployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2Deployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2Deployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Greengrassv2Deployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Greengrassv2Deployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2Deployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies">DeploymentPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration">IotJobConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput">ComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput">DeploymentPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput">IotJobConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput">ParentTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName">DeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn">ParentTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components"></a>

```csharp
public Greengrassv2DeploymentComponentsMap Components { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DeploymentPolicies`<sup>Required</sup> <a name="DeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies"></a>

```csharp
public Greengrassv2DeploymentDeploymentPoliciesOutputReference DeploymentPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IotJobConfiguration`<sup>Required</sup> <a name="IotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationOutputReference IotJobConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a>

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2DeploymentComponents> ComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>>

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput"></a>

```csharp
public string DeploymentNameInput { get; }
```

- *Type:* string

---

##### `DeploymentPoliciesInput`<sup>Optional</sup> <a name="DeploymentPoliciesInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPolicies DeploymentPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---

##### `IotJobConfigurationInput`<sup>Optional</sup> <a name="IotJobConfigurationInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfiguration IotJobConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---

##### `ParentTargetArnInput`<sup>Optional</sup> <a name="ParentTargetArnInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput"></a>

```csharp
public string ParentTargetArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName"></a>

```csharp
public string DeploymentName { get; }
```

- *Type:* string

---

##### `ParentTargetArn`<sup>Required</sup> <a name="ParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn"></a>

```csharp
public string ParentTargetArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2DeploymentComponents <a name="Greengrassv2DeploymentComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponents {
    string ComponentVersion = null,
    Greengrassv2DeploymentComponentsConfigurationUpdate ConfigurationUpdate = null,
    Greengrassv2DeploymentComponentsRunWith RunWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate">ConfigurationUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith">RunWith</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}. |

---

##### `ComponentVersion`<sup>Optional</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}.

---

##### `ConfigurationUpdate`<sup>Optional</sup> <a name="ConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate"></a>

```csharp
public Greengrassv2DeploymentComponentsConfigurationUpdate ConfigurationUpdate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}.

---

##### `RunWith`<sup>Optional</sup> <a name="RunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith"></a>

```csharp
public Greengrassv2DeploymentComponentsRunWith RunWith { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}.

---

### Greengrassv2DeploymentComponentsConfigurationUpdate <a name="Greengrassv2DeploymentComponentsConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsConfigurationUpdate {
    string Merge = null,
    string[] Reset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge">Merge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset">Reset</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}. |

---

##### `Merge`<sup>Optional</sup> <a name="Merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge"></a>

```csharp
public string Merge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}.

---

##### `Reset`<sup>Optional</sup> <a name="Reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset"></a>

```csharp
public string[] Reset { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}.

---

### Greengrassv2DeploymentComponentsRunWith <a name="Greengrassv2DeploymentComponentsRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsRunWith {
    string PosixUser = null,
    Greengrassv2DeploymentComponentsRunWithSystemResourceLimits SystemResourceLimits = null,
    string WindowsUser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser">PosixUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits">SystemResourceLimits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser">WindowsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}. |

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser"></a>

```csharp
public string PosixUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}.

---

##### `SystemResourceLimits`<sup>Optional</sup> <a name="SystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits"></a>

```csharp
public Greengrassv2DeploymentComponentsRunWithSystemResourceLimits SystemResourceLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}.

---

##### `WindowsUser`<sup>Optional</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser"></a>

```csharp
public string WindowsUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}.

---

### Greengrassv2DeploymentComponentsRunWithSystemResourceLimits <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsRunWithSystemResourceLimits {
    double Cpus = null,
    double Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus">Cpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory">Memory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus"></a>

```csharp
public double Cpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}.

---

### Greengrassv2DeploymentConfig <a name="Greengrassv2DeploymentConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TargetArn,
    IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2DeploymentComponents> Components = null,
    string DeploymentName = null,
    Greengrassv2DeploymentDeploymentPolicies DeploymentPolicies = null,
    Greengrassv2DeploymentIotJobConfiguration IotJobConfiguration = null,
    string ParentTargetArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components">Components</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName">DeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies">DeploymentPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration">IotJobConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn">ParentTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}.

---

##### `Components`<sup>Optional</sup> <a name="Components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2DeploymentComponents> Components { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}.

---

##### `DeploymentName`<sup>Optional</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName"></a>

```csharp
public string DeploymentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}.

---

##### `DeploymentPolicies`<sup>Optional</sup> <a name="DeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies"></a>

```csharp
public Greengrassv2DeploymentDeploymentPolicies DeploymentPolicies { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}.

---

##### `IotJobConfiguration`<sup>Optional</sup> <a name="IotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration"></a>

```csharp
public Greengrassv2DeploymentIotJobConfiguration IotJobConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}.

---

##### `ParentTargetArn`<sup>Optional</sup> <a name="ParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn"></a>

```csharp
public string ParentTargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}.

---

### Greengrassv2DeploymentDeploymentPolicies <a name="Greengrassv2DeploymentDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPolicies {
    Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy ComponentUpdatePolicy = null,
    Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy ConfigurationValidationPolicy = null,
    string FailureHandlingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy">ComponentUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy">ConfigurationValidationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy">FailureHandlingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}. |

---

##### `ComponentUpdatePolicy`<sup>Optional</sup> <a name="ComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy"></a>

```csharp
public Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy ComponentUpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}.

---

##### `ConfigurationValidationPolicy`<sup>Optional</sup> <a name="ConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy"></a>

```csharp
public Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy ConfigurationValidationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}.

---

##### `FailureHandlingPolicy`<sup>Optional</sup> <a name="FailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy"></a>

```csharp
public string FailureHandlingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}.

---

### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy {
    string Action = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy {
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentIotJobConfiguration <a name="Greengrassv2DeploymentIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfiguration {
    Greengrassv2DeploymentIotJobConfigurationAbortConfig AbortConfig = null,
    Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig JobExecutionsRolloutConfig = null,
    Greengrassv2DeploymentIotJobConfigurationTimeoutConfig TimeoutConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}. |

---

##### `AbortConfig`<sup>Optional</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationAbortConfig AbortConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}.

---

##### `JobExecutionsRolloutConfig`<sup>Optional</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig JobExecutionsRolloutConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}.

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationTimeoutConfig TimeoutConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfig <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationAbortConfig {
    IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct[] CriteriaList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList">CriteriaList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}. |

---

##### `CriteriaList`<sup>Optional</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct[] CriteriaList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct {
    string Action = null,
    string FailureType = null,
    double MinNumberOfExecutedThings = null,
    double ThresholdPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType">FailureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType"></a>

```csharp
public string FailureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}.

---

##### `MinNumberOfExecutedThings`<sup>Optional</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```csharp
public double MinNumberOfExecutedThings { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}.

---

##### `ThresholdPercentage`<sup>Optional</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```csharp
public double ThresholdPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig {
    Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate ExponentialRate = null,
    double MaximumPerMinute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}. |

---

##### `ExponentialRate`<sup>Optional</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate ExponentialRate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}.

---

##### `MaximumPerMinute`<sup>Optional</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```csharp
public double MaximumPerMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {
    double BaseRatePerMinute = null,
    double IncrementFactor = null,
    Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">IncrementFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}. |

---

##### `BaseRatePerMinute`<sup>Optional</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```csharp
public double BaseRatePerMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}.

---

##### `IncrementFactor`<sup>Optional</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```csharp
public double IncrementFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}.

---

##### `RateIncreaseCriteria`<sup>Optional</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    double NumberOfNotifiedThings = null,
    double NumberOfSucceededThings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}. |

---

##### `NumberOfNotifiedThings`<sup>Optional</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```csharp
public double NumberOfNotifiedThings { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}.

---

##### `NumberOfSucceededThings`<sup>Optional</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```csharp
public double NumberOfSucceededThings { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}.

---

### Greengrassv2DeploymentIotJobConfigurationTimeoutConfig <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationTimeoutConfig {
    double InProgressTimeoutInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}. |

---

##### `InProgressTimeoutInMinutes`<sup>Optional</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```csharp
public double InProgressTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference <a name="Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge">ResetMerge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset">ResetReset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMerge` <a name="ResetMerge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge"></a>

```csharp
private void ResetMerge()
```

##### `ResetReset` <a name="ResetReset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset"></a>

```csharp
private void ResetReset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput">MergeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput">ResetInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge">Merge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset">Reset</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MergeInput`<sup>Optional</sup> <a name="MergeInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput"></a>

```csharp
public string MergeInput { get; }
```

- *Type:* string

---

##### `ResetInput`<sup>Optional</sup> <a name="ResetInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput"></a>

```csharp
public string[] ResetInput { get; }
```

- *Type:* string[]

---

##### `Merge`<sup>Required</sup> <a name="Merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge"></a>

```csharp
public string Merge { get; }
```

- *Type:* string

---

##### `Reset`<sup>Required</sup> <a name="Reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset"></a>

```csharp
public string[] Reset { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsConfigurationUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---


### Greengrassv2DeploymentComponentsMap <a name="Greengrassv2DeploymentComponentsMap" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get"></a>

```csharp
private Greengrassv2DeploymentComponentsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2DeploymentComponents> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>>

---


### Greengrassv2DeploymentComponentsOutputReference <a name="Greengrassv2DeploymentComponentsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate">PutConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith">PutRunWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion">ResetComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate">ResetConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith">ResetRunWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationUpdate` <a name="PutConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate"></a>

```csharp
private void PutConfigurationUpdate(Greengrassv2DeploymentComponentsConfigurationUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---

##### `PutRunWith` <a name="PutRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith"></a>

```csharp
private void PutRunWith(Greengrassv2DeploymentComponentsRunWith Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---

##### `ResetComponentVersion` <a name="ResetComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion"></a>

```csharp
private void ResetComponentVersion()
```

##### `ResetConfigurationUpdate` <a name="ResetConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate"></a>

```csharp
private void ResetConfigurationUpdate()
```

##### `ResetRunWith` <a name="ResetRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith"></a>

```csharp
private void ResetRunWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate">ConfigurationUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith">RunWith</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput">ComponentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput">ConfigurationUpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput">RunWithInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationUpdate`<sup>Required</sup> <a name="ConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate"></a>

```csharp
public Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference ConfigurationUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a>

---

##### `RunWith`<sup>Required</sup> <a name="RunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith"></a>

```csharp
public Greengrassv2DeploymentComponentsRunWithOutputReference RunWith { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a>

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput"></a>

```csharp
public string ComponentVersionInput { get; }
```

- *Type:* string

---

##### `ConfigurationUpdateInput`<sup>Optional</sup> <a name="ConfigurationUpdateInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsConfigurationUpdate ConfigurationUpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---

##### `RunWithInput`<sup>Optional</sup> <a name="RunWithInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsRunWith RunWithInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>

---


### Greengrassv2DeploymentComponentsRunWithOutputReference <a name="Greengrassv2DeploymentComponentsRunWithOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsRunWithOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits">PutSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits">ResetSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser">ResetWindowsUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSystemResourceLimits` <a name="PutSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits"></a>

```csharp
private void PutSystemResourceLimits(Greengrassv2DeploymentComponentsRunWithSystemResourceLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser"></a>

```csharp
private void ResetPosixUser()
```

##### `ResetSystemResourceLimits` <a name="ResetSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits"></a>

```csharp
private void ResetSystemResourceLimits()
```

##### `ResetWindowsUser` <a name="ResetWindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser"></a>

```csharp
private void ResetWindowsUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits">SystemResourceLimits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput">PosixUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput">SystemResourceLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput">WindowsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser">PosixUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser">WindowsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemResourceLimits`<sup>Required</sup> <a name="SystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits"></a>

```csharp
public Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference SystemResourceLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a>

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput"></a>

```csharp
public string PosixUserInput { get; }
```

- *Type:* string

---

##### `SystemResourceLimitsInput`<sup>Optional</sup> <a name="SystemResourceLimitsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsRunWithSystemResourceLimits SystemResourceLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---

##### `WindowsUserInput`<sup>Optional</sup> <a name="WindowsUserInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput"></a>

```csharp
public string WindowsUserInput { get; }
```

- *Type:* string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser"></a>

```csharp
public string PosixUser { get; }
```

- *Type:* string

---

##### `WindowsUser`<sup>Required</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser"></a>

```csharp
public string WindowsUser { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsRunWith InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---


### Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus"></a>

```csharp
private void ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput">CpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus">Cpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput"></a>

```csharp
public double CpusInput { get; }
```

- *Type:* double

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus"></a>

```csharp
public double Cpus { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentComponentsRunWithSystemResourceLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---


### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---


### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---


### Greengrassv2DeploymentDeploymentPoliciesOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentDeploymentPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy">PutComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy">PutConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy">ResetComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy">ResetConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy">ResetFailureHandlingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentUpdatePolicy` <a name="PutComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy"></a>

```csharp
private void PutComponentUpdatePolicy(Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---

##### `PutConfigurationValidationPolicy` <a name="PutConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy"></a>

```csharp
private void PutConfigurationValidationPolicy(Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---

##### `ResetComponentUpdatePolicy` <a name="ResetComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy"></a>

```csharp
private void ResetComponentUpdatePolicy()
```

##### `ResetConfigurationValidationPolicy` <a name="ResetConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy"></a>

```csharp
private void ResetConfigurationValidationPolicy()
```

##### `ResetFailureHandlingPolicy` <a name="ResetFailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy"></a>

```csharp
private void ResetFailureHandlingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy">ComponentUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy">ConfigurationValidationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput">ComponentUpdatePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput">ConfigurationValidationPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput">FailureHandlingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy">FailureHandlingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentUpdatePolicy`<sup>Required</sup> <a name="ComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy"></a>

```csharp
public Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference ComponentUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a>

---

##### `ConfigurationValidationPolicy`<sup>Required</sup> <a name="ConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy"></a>

```csharp
public Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference ConfigurationValidationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a>

---

##### `ComponentUpdatePolicyInput`<sup>Optional</sup> <a name="ComponentUpdatePolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy ComponentUpdatePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---

##### `ConfigurationValidationPolicyInput`<sup>Optional</sup> <a name="ConfigurationValidationPolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy ConfigurationValidationPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---

##### `FailureHandlingPolicyInput`<sup>Optional</sup> <a name="FailureHandlingPolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput"></a>

```csharp
public string FailureHandlingPolicyInput { get; }
```

- *Type:* string

---

##### `FailureHandlingPolicy`<sup>Required</sup> <a name="FailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy"></a>

```csharp
public string FailureHandlingPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentDeploymentPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get"></a>

```csharp
private Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">ResetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">ResetThresholdPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```csharp
private void ResetFailureType()
```

##### `ResetMinNumberOfExecutedThings` <a name="ResetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```csharp
private void ResetMinNumberOfExecutedThings()
```

##### `ResetThresholdPercentage` <a name="ResetThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```csharp
private void ResetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">MinNumberOfExecutedThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">ThresholdPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```csharp
public string FailureTypeInput { get; }
```

- *Type:* string

---

##### `MinNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="MinNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```csharp
public double MinNumberOfExecutedThingsInput { get; }
```

- *Type:* double

---

##### `ThresholdPercentageInput`<sup>Optional</sup> <a name="ThresholdPercentageInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```csharp
public double ThresholdPercentageInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```csharp
public string FailureType { get; }
```

- *Type:* string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```csharp
public double MinNumberOfExecutedThings { get; }
```

- *Type:* double

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```csharp
public double ThresholdPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList">PutCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList">ResetCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteriaList` <a name="PutCriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList"></a>

```csharp
private void PutCriteriaList(IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]

---

##### `ResetCriteriaList` <a name="ResetCriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList"></a>

```csharp
private void ResetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput">CriteriaListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList CriteriaList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a>

---

##### `CriteriaListInput`<sup>Optional</sup> <a name="CriteriaListInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct[] CriteriaListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">PutRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">ResetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">ResetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">ResetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateIncreaseCriteria` <a name="PutRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```csharp
private void PutRateIncreaseCriteria(Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `ResetBaseRatePerMinute` <a name="ResetBaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```csharp
private void ResetBaseRatePerMinute()
```

##### `ResetIncrementFactor` <a name="ResetIncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```csharp
private void ResetIncrementFactor()
```

##### `ResetRateIncreaseCriteria` <a name="ResetRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```csharp
private void ResetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">BaseRatePerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">IncrementFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">RateIncreaseCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference RateIncreaseCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `BaseRatePerMinuteInput`<sup>Optional</sup> <a name="BaseRatePerMinuteInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```csharp
public double BaseRatePerMinuteInput { get; }
```

- *Type:* double

---

##### `IncrementFactorInput`<sup>Optional</sup> <a name="IncrementFactorInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```csharp
public double IncrementFactorInput { get; }
```

- *Type:* double

---

##### `RateIncreaseCriteriaInput`<sup>Optional</sup> <a name="RateIncreaseCriteriaInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```csharp
public double BaseRatePerMinute { get; }
```

- *Type:* double

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```csharp
public double IncrementFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">ResetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">ResetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfNotifiedThings` <a name="ResetNumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```csharp
private void ResetNumberOfNotifiedThings()
```

##### `ResetNumberOfSucceededThings` <a name="ResetNumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```csharp
private void ResetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">NumberOfNotifiedThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">NumberOfSucceededThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfNotifiedThingsInput`<sup>Optional</sup> <a name="NumberOfNotifiedThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```csharp
public double NumberOfNotifiedThingsInput { get; }
```

- *Type:* double

---

##### `NumberOfSucceededThingsInput`<sup>Optional</sup> <a name="NumberOfSucceededThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```csharp
public double NumberOfSucceededThingsInput { get; }
```

- *Type:* double

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```csharp
public double NumberOfNotifiedThings { get; }
```

- *Type:* double

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```csharp
public double NumberOfSucceededThings { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate">PutExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate">ResetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">ResetMaximumPerMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExponentialRate` <a name="PutExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```csharp
private void PutExponentialRate(Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---

##### `ResetExponentialRate` <a name="ResetExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```csharp
private void ResetExponentialRate()
```

##### `ResetMaximumPerMinute` <a name="ResetMaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```csharp
private void ResetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">ExponentialRateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">MaximumPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference ExponentialRate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `ExponentialRateInput`<sup>Optional</sup> <a name="ExponentialRateInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate ExponentialRateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---

##### `MaximumPerMinuteInput`<sup>Optional</sup> <a name="MaximumPerMinuteInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```csharp
public double MaximumPerMinuteInput { get; }
```

- *Type:* double

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```csharp
public double MaximumPerMinute { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---


### Greengrassv2DeploymentIotJobConfigurationOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig">PutAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig">PutJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig">ResetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig">ResetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortConfig` <a name="PutAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig"></a>

```csharp
private void PutAbortConfig(Greengrassv2DeploymentIotJobConfigurationAbortConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---

##### `PutJobExecutionsRolloutConfig` <a name="PutJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig"></a>

```csharp
private void PutJobExecutionsRolloutConfig(Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig"></a>

```csharp
private void PutTimeoutConfig(Greengrassv2DeploymentIotJobConfigurationTimeoutConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---

##### `ResetAbortConfig` <a name="ResetAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig"></a>

```csharp
private void ResetAbortConfig()
```

##### `ResetJobExecutionsRolloutConfig` <a name="ResetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig"></a>

```csharp
private void ResetJobExecutionsRolloutConfig()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig"></a>

```csharp
private void ResetTimeoutConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput">AbortConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput">JobExecutionsRolloutConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbortConfig`<sup>Required</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference AbortConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a>

---

##### `JobExecutionsRolloutConfig`<sup>Required</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference JobExecutionsRolloutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig"></a>

```csharp
public Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference TimeoutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a>

---

##### `AbortConfigInput`<sup>Optional</sup> <a name="AbortConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationAbortConfig AbortConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---

##### `JobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="JobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig JobExecutionsRolloutConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationTimeoutConfig TimeoutConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---


### Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">ResetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInProgressTimeoutInMinutes` <a name="ResetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```csharp
private void ResetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">InProgressTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="InProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```csharp
public double InProgressTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```csharp
public double InProgressTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2DeploymentIotJobConfigurationTimeoutConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---



