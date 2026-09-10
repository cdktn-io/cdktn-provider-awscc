# `ec2ApplicationStatusCheck` Submodule <a name="`ec2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ApplicationStatusCheck <a name="Ec2ApplicationStatusCheck" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheck(Construct Scope, string Id, Ec2ApplicationStatusCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths">PutHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths">ResetHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds">ResetInitializationGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope">ResetIpScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher">ResetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheckPaths` <a name="PutHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths"></a>

```csharp
private void PutHealthCheckPaths(IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2ApplicationStatusCheckTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex"></a>

```csharp
private void ResetDeviceIndex()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHealthCheckPaths` <a name="ResetHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths"></a>

```csharp
private void ResetHealthCheckPaths()
```

##### `ResetInitializationGracePeriodSeconds` <a name="ResetInitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds"></a>

```csharp
private void ResetInitializationGracePeriodSeconds()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIpScope` <a name="ResetIpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope"></a>

```csharp
private void ResetIpScope()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion"></a>

```csharp
private void ResetIpVersion()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetStatusCodeMatcher` <a name="ResetStatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher"></a>

```csharp
private void ResetStatusCodeMatcher()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ApplicationStatusCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ApplicationStatusCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ApplicationStatusCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ApplicationStatusCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ApplicationStatusCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId">ApplicationStatusCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths">HealthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput">HealthCheckPathsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput">InitializationGracePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput">IpScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput">IpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput">StatusCodeMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds">InitializationGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope">IpScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationStatusCheckId`<sup>Required</sup> <a name="ApplicationStatusCheckId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```csharp
public string ApplicationStatusCheckId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `HealthCheckPaths`<sup>Required</sup> <a name="HealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths"></a>

```csharp
public Ec2ApplicationStatusCheckHealthCheckPathsList HealthCheckPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags"></a>

```csharp
public Ec2ApplicationStatusCheckTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HealthCheckPathsInput`<sup>Optional</sup> <a name="HealthCheckPathsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths[] HealthCheckPathsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---

##### `InitializationGracePeriodSecondsInput`<sup>Optional</sup> <a name="InitializationGracePeriodSecondsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput"></a>

```csharp
public double InitializationGracePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IpScopeInput`<sup>Optional</sup> <a name="IpScopeInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput"></a>

```csharp
public string IpScopeInput { get; }
```

- *Type:* string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput"></a>

```csharp
public string IpVersionInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `StatusCodeMatcherInput`<sup>Optional</sup> <a name="StatusCodeMatcherInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput"></a>

```csharp
public string StatusCodeMatcherInput { get; }
```

- *Type:* string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitializationGracePeriodSeconds`<sup>Required</sup> <a name="InitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```csharp
public double InitializationGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IpScope`<sup>Required</sup> <a name="IpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope"></a>

```csharp
public string IpScope { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```csharp
public string StatusCodeMatcher { get; }
```

- *Type:* string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ApplicationStatusCheckConfig <a name="Ec2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Port,
    string Protocol,
    string Aggregation = null,
    double DeviceIndex = null,
    double FailureThreshold = null,
    IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths[] HealthCheckPaths = null,
    double InitializationGracePeriodSeconds = null,
    double Interval = null,
    string IpScope = null,
    string IpVersion = null,
    string Path = null,
    string StatusCodeMatcher = null,
    double SuccessThreshold = null,
    IResolvable|Ec2ApplicationStatusCheckTags[] Tags = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port">Port</a></code> | <code>double</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol">Protocol</a></code> | <code>string</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation">Aggregation</a></code> | <code>string</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths">HealthCheckPaths</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds">InitializationGracePeriodSeconds</a></code> | <code>double</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval">Interval</a></code> | <code>double</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope">IpScope</a></code> | <code>string</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion">IpVersion</a></code> | <code>string</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path">Path</a></code> | <code>string</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>string</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout">Timeout</a></code> | <code>double</code> | The timeout, in seconds, for each health check probe. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `HealthCheckPaths`<sup>Optional</sup> <a name="HealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths[] HealthCheckPaths { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `InitializationGracePeriodSeconds`<sup>Optional</sup> <a name="InitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds"></a>

```csharp
public double InitializationGracePeriodSeconds { get; set; }
```

- *Type:* double

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `IpScope`<sup>Optional</sup> <a name="IpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope"></a>

```csharp
public string IpScope { get; set; }
```

- *Type:* string

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion"></a>

```csharp
public string IpVersion { get; set; }
```

- *Type:* string

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `StatusCodeMatcher`<sup>Optional</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher"></a>

```csharp
public string StatusCodeMatcher { get; set; }
```

- *Type:* string

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

### Ec2ApplicationStatusCheckHealthCheckPaths <a name="Ec2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPaths {
    IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations[] Destinations = null,
    Ec2ApplicationStatusCheckHealthCheckPathsSource Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source"></a>

```csharp
public Ec2ApplicationStatusCheckHealthCheckPathsSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsDestinations <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsDestinations {
    string SecurityGroupId = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsSource <a name="Ec2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsSource {
    string SecurityGroupId = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckTags <a name="Ec2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```csharp
private Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---


### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```csharp
private Ec2ApplicationStatusCheckHealthCheckPathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---


### Ec2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource"></a>

```csharp
private void PutSource(Ec2ApplicationStatusCheckHealthCheckPathsSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```csharp
public Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```csharp
public Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### Ec2ApplicationStatusCheckTagsList <a name="Ec2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get"></a>

```csharp
private Ec2ApplicationStatusCheckTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---


### Ec2ApplicationStatusCheckTagsOutputReference <a name="Ec2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ApplicationStatusCheckTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ApplicationStatusCheckTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>

---



