# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktn/provider-awscc.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage awscc_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2Stage(Construct Scope, string Id, Apigatewayv2StageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">PutAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">PutDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">ResetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">ResetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">ResetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">ResetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">ResetStageVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogSettings` <a name="PutAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```csharp
private void PutAccessLogSettings(Apigatewayv2StageAccessLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `PutDefaultRouteSettings` <a name="PutDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```csharp
private void PutDefaultRouteSettings(Apigatewayv2StageDefaultRouteSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `ResetAccessLogSettings` <a name="ResetAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```csharp
private void ResetAccessLogSettings()
```

##### `ResetAutoDeploy` <a name="ResetAutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```csharp
private void ResetAutoDeploy()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```csharp
private void ResetClientCertificateId()
```

##### `ResetDefaultRouteSettings` <a name="ResetDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```csharp
private void ResetDefaultRouteSettings()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRouteSettings` <a name="ResetRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```csharp
private void ResetRouteSettings()
```

##### `ResetStageVariables` <a name="ResetStageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```csharp
private void ResetStageVariables()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Stage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Stage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Stage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Stage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Stage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Stage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Stage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">AccessLogSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">AutoDeployInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">DefaultRouteSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">RouteSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">StageVariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">AutoDeploy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">RouteSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">StageVariables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```csharp
public Apigatewayv2StageAccessLogSettingsOutputReference AccessLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `DefaultRouteSettings`<sup>Required</sup> <a name="DefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettingsOutputReference DefaultRouteSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccessLogSettingsInput`<sup>Optional</sup> <a name="AccessLogSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```csharp
public IResolvable|Apigatewayv2StageAccessLogSettings AccessLogSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `AutoDeployInput`<sup>Optional</sup> <a name="AutoDeployInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```csharp
public bool|IResolvable AutoDeployInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```csharp
public string ClientCertificateIdInput { get; }
```

- *Type:* string

---

##### `DefaultRouteSettingsInput`<sup>Optional</sup> <a name="DefaultRouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```csharp
public IResolvable|Apigatewayv2StageDefaultRouteSettings DefaultRouteSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RouteSettingsInput`<sup>Optional</sup> <a name="RouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```csharp
public string RouteSettingsInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `StageVariablesInput`<sup>Optional</sup> <a name="StageVariablesInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```csharp
public string StageVariablesInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `AutoDeploy`<sup>Required</sup> <a name="AutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```csharp
public bool|IResolvable AutoDeploy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RouteSettings`<sup>Required</sup> <a name="RouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```csharp
public string RouteSettings { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `StageVariables`<sup>Required</sup> <a name="StageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```csharp
public string StageVariables { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2StageAccessLogSettings {
    string DestinationArn = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2StageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string StageName,
    Apigatewayv2StageAccessLogSettings AccessLogSettings = null,
    bool|IResolvable AutoDeploy = null,
    string ClientCertificateId = null,
    Apigatewayv2StageDefaultRouteSettings DefaultRouteSettings = null,
    string DeploymentId = null,
    string Description = null,
    string RouteSettings = null,
    string StageVariables = null,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">ApiId</a></code> | <code>string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName">StageName</a></code> | <code>string</code> | The stage name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | Settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">AutoDeploy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether updates to an API automatically trigger a new deployment. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | The identifier of a client certificate for a Stage. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | The default route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">Description</a></code> | <code>string</code> | The description for the API stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">RouteSettings</a></code> | <code>string</code> | Route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">StageVariables</a></code> | <code>string</code> | A map that defines the stage variables for a Stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">Tags</a></code> | <code>string</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

The stage name.

Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_name Apigatewayv2Stage#stage_name}

---

##### `AccessLogSettings`<sup>Optional</sup> <a name="AccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```csharp
public Apigatewayv2StageAccessLogSettings AccessLogSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

Settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `AutoDeploy`<sup>Optional</sup> <a name="AutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```csharp
public bool|IResolvable AutoDeploy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether updates to an API automatically trigger a new deployment. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; set; }
```

- *Type:* string

The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}

---

##### `DefaultRouteSettings`<sup>Optional</sup> <a name="DefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettings DefaultRouteSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

The default route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the API stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#description Apigatewayv2Stage#description}

---

##### `RouteSettings`<sup>Optional</sup> <a name="RouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```csharp
public string RouteSettings { get; set; }
```

- *Type:* string

Route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `StageVariables`<sup>Optional</sup> <a name="StageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```csharp
public string StageVariables { get; set; }
```

- *Type:* string

A map that defines the stage variables for a Stage.

Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#tags Apigatewayv2Stage#tags}

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2StageDefaultRouteSettings {
    bool|IResolvable DataTraceEnabled = null,
    bool|IResolvable DetailedMetricsEnabled = null,
    string LoggingLevel = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `DetailedMetricsEnabled`<sup>Optional</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```csharp
public bool|IResolvable DetailedMetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2StageAccessLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn"></a>

```csharp
private void ResetDestinationArn()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2StageAccessLogSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2StageDefaultRouteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">ResetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetDetailedMetricsEnabled` <a name="ResetDetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```csharp
private void ResetDetailedMetricsEnabled()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">DetailedMetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public bool|IResolvable DataTraceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DetailedMetricsEnabledInput`<sup>Optional</sup> <a name="DetailedMetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```csharp
public bool|IResolvable DetailedMetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```csharp
public bool|IResolvable DetailedMetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2StageDefaultRouteSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---



