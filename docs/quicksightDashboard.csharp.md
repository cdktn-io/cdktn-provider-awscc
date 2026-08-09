# `quicksightDashboard` Submodule <a name="`quicksightDashboard` Submodule" id="@cdktn/provider-awscc.quicksightDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDashboard <a name="QuicksightDashboard" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboard(Construct Scope, string Id, QuicksightDashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions">PutDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity">PutSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions">ResetDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetThemeArn">ResetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDashboardPublishOptions` <a name="PutDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions"></a>

```csharp
private void PutDashboardPublishOptions(QuicksightDashboardDashboardPublishOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters"></a>

```csharp
private void PutParameters(QuicksightDashboardParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions"></a>

```csharp
private void PutPermissions(IResolvable|QuicksightDashboardPermissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]

---

##### `PutSourceEntity` <a name="PutSourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity"></a>

```csharp
private void PutSourceEntity(QuicksightDashboardSourceEntity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightDashboardTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]

---

##### `ResetDashboardPublishOptions` <a name="ResetDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions"></a>

```csharp
private void ResetDashboardPublishOptions()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThemeArn` <a name="ResetThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetThemeArn"></a>

```csharp
private void ResetThemeArn()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetVersionDescription"></a>

```csharp
private void ResetVersionDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightDashboard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightDashboard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightDashboard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime">LastPublishedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList">QuicksightDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.version">Version</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference">QuicksightDashboardVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput">DashboardPublishOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissionsInput">PermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput">SourceEntityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArnInput">ThemeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArn">ThemeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DashboardPublishOptions`<sup>Required</sup> <a name="DashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsOutputReference DashboardPublishOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastPublishedTime`<sup>Required</sup> <a name="LastPublishedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime"></a>

```csharp
public string LastPublishedTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parameters"></a>

```csharp
public QuicksightDashboardParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissions"></a>

```csharp
public QuicksightDashboardPermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntity"></a>

```csharp
public QuicksightDashboardSourceEntityOutputReference SourceEntity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tags"></a>

```csharp
public QuicksightDashboardTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList">QuicksightDashboardTagsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.version"></a>

```csharp
public QuicksightDashboardVersionOutputReference Version { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference">QuicksightDashboardVersionOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput"></a>

```csharp
public string DashboardIdInput { get; }
```

- *Type:* string

---

##### `DashboardPublishOptionsInput`<sup>Optional</sup> <a name="DashboardPublishOptionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptions DashboardPublishOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parametersInput"></a>

```csharp
public IResolvable|QuicksightDashboardParameters ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissionsInput"></a>

```csharp
public IResolvable|QuicksightDashboardPermissions[] PermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]

---

##### `SourceEntityInput`<sup>Optional</sup> <a name="SourceEntityInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntity SourceEntityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightDashboardTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]

---

##### `ThemeArnInput`<sup>Optional</sup> <a name="ThemeArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArnInput"></a>

```csharp
public string ThemeArnInput { get; }
```

- *Type:* string

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput"></a>

```csharp
public string VersionDescriptionInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArn"></a>

```csharp
public string ThemeArn { get; }
```

- *Type:* string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDashboardConfig <a name="QuicksightDashboardConfig" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId,
    string DashboardId,
    QuicksightDashboardSourceEntity SourceEntity,
    QuicksightDashboardDashboardPublishOptions DashboardPublishOptions = null,
    string Name = null,
    QuicksightDashboardParameters Parameters = null,
    IResolvable|QuicksightDashboardPermissions[] Permissions = null,
    IResolvable|QuicksightDashboardTags[] Tags = null,
    string ThemeArn = null,
    string VersionDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId">DashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | <p>Dashboard source entity.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | <p>Dashboard publish options.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.name">Name</a></code> | <code>string</code> | <p>The display name of the dashboard.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | <p>A list of QuickSight parameters and the list's override values.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.permissions">Permissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]</code> | <p>A structure that contains the permissions of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             dashboard.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.themeArn">ThemeArn</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription">VersionDescription</a></code> | <code>string</code> | <p>A description for the first version of the dashboard being created.</p>. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId"></a>

```csharp
public string DashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity"></a>

```csharp
public QuicksightDashboardSourceEntity SourceEntity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

<p>Dashboard source entity.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `DashboardPublishOptions`<sup>Optional</sup> <a name="DashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions"></a>

```csharp
public QuicksightDashboardDashboardPublishOptions DashboardPublishOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

<p>Dashboard publish options.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>The display name of the dashboard.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.parameters"></a>

```csharp
public QuicksightDashboardParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

<p>A list of QuickSight parameters and the list's override values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.permissions"></a>

```csharp
public IResolvable|QuicksightDashboardPermissions[] Permissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]

<p>A structure that contains the permissions of the dashboard.

You can use this structure
for granting permissions by providing a list of IAM action information for each
principal ARN. </p>

```
    <p>To specify no permissions, omit the permissions list.</p>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightDashboardTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             dashboard.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}

---

##### `ThemeArn`<sup>Optional</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.themeArn"></a>

```csharp
public string ThemeArn { get; set; }
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard.

If
you add a value for this field, it overrides the value that is used in the source
entity. The theme ARN must exist in the same AWS account where you create the
dashboard.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription"></a>

```csharp
public string VersionDescription { get; set; }
```

- *Type:* string

<p>A description for the first version of the dashboard being created.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}

---

### QuicksightDashboardDashboardPublishOptions <a name="QuicksightDashboardDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptions {
    QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption AdHocFilteringOption = null,
    QuicksightDashboardDashboardPublishOptionsExportToCsvOption ExportToCsvOption = null,
    QuicksightDashboardDashboardPublishOptionsSheetControlsOption SheetControlsOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | <p>Ad hoc (one-time) filtering option.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | <p>Export to .csv option.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | <p>Sheet controls option.</p>. |

---

##### `AdHocFilteringOption`<sup>Optional</sup> <a name="AdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption AdHocFilteringOption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

<p>Ad hoc (one-time) filtering option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

##### `ExportToCsvOption`<sup>Optional</sup> <a name="ExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsExportToCsvOption ExportToCsvOption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

<p>Export to .csv option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

##### `SheetControlsOption`<sup>Optional</sup> <a name="SheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsSheetControlsOption SheetControlsOption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

<p>Sheet controls option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
    string AvailabilityStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportToCsvOption <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
    string AvailabilityStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsSheetControlsOption <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
    string VisibilityState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState">VisibilityState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}. |

---

##### `VisibilityState`<sup>Optional</sup> <a name="VisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState"></a>

```csharp
public string VisibilityState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

### QuicksightDashboardParameters <a name="QuicksightDashboardParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParameters {
    IResolvable|QuicksightDashboardParametersDateTimeParameters[] DateTimeParameters = null,
    IResolvable|QuicksightDashboardParametersDecimalParameters[] DecimalParameters = null,
    IResolvable|QuicksightDashboardParametersIntegerParameters[] IntegerParameters = null,
    IResolvable|QuicksightDashboardParametersStringParameters[] StringParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters">DateTimeParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]</code> | <p>Date-time parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters">DecimalParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]</code> | <p>Decimal parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters">IntegerParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]</code> | <p>Integer parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters">StringParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]</code> | <p>String parameters.</p>. |

---

##### `DateTimeParameters`<sup>Optional</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDateTimeParameters[] DateTimeParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]

<p>Date-time parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

##### `DecimalParameters`<sup>Optional</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDecimalParameters[] DecimalParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]

<p>Decimal parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

##### `IntegerParameters`<sup>Optional</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters"></a>

```csharp
public IResolvable|QuicksightDashboardParametersIntegerParameters[] IntegerParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]

<p>Integer parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

##### `StringParameters`<sup>Optional</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters"></a>

```csharp
public IResolvable|QuicksightDashboardParametersStringParameters[] StringParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]

<p>String parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

### QuicksightDashboardParametersDateTimeParameters <a name="QuicksightDashboardParametersDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDateTimeParameters {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name">Name</a></code> | <code>string</code> | <p>A display name for the date-time parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values">Values</a></code> | <code>string[]</code> | <p>The values for the date-time parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>A display name for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

<p>The values for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersDecimalParameters <a name="QuicksightDashboardParametersDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDecimalParameters {
    string Name = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name">Name</a></code> | <code>string</code> | <p>A display name for the decimal parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values">Values</a></code> | <code>double[]</code> | <p>The values for the decimal parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>A display name for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

<p>The values for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersIntegerParameters <a name="QuicksightDashboardParametersIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersIntegerParameters {
    string Name = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name">Name</a></code> | <code>string</code> | <p>The name of the integer parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values">Values</a></code> | <code>double[]</code> | <p>The values for the integer parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>The name of the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

<p>The values for the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersStringParameters <a name="QuicksightDashboardParametersStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersStringParameters {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name">Name</a></code> | <code>string</code> | <p>A display name for a string parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values">Values</a></code> | <code>string[]</code> | <p>The values of a string parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>A display name for a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

<p>The values of a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardPermissions <a name="QuicksightDashboardPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardPermissions {
    string[] Actions = null,
    string Principal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.actions">Actions</a></code> | <code>string[]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.principal">Principal</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across AWS accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}

---

### QuicksightDashboardSourceEntity <a name="QuicksightDashboardSourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntity {
    QuicksightDashboardSourceEntitySourceTemplate SourceTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | <p>Dashboard source template.</p>. |

---

##### `SourceTemplate`<sup>Optional</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate"></a>

```csharp
public QuicksightDashboardSourceEntitySourceTemplate SourceTemplate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

<p>Dashboard source template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

### QuicksightDashboardSourceEntitySourceTemplate <a name="QuicksightDashboardSourceEntitySourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntitySourceTemplate {
    string Arn = null,
    IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] DataSetReferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn">Arn</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences">DataSetReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]</code> | <p>Dataset references.</p>. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}

---

##### `DataSetReferences`<sup>Optional</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] DataSetReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]

<p>Dataset references.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

### QuicksightDashboardSourceEntitySourceTemplateDataSetReferences <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
    string DataSetArn = null,
    string DataSetPlaceholder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | <p>Dataset Amazon Resource Name (ARN).</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>string</code> | <p>Dataset placeholder.</p>. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

<p>Dataset Amazon Resource Name (ARN).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}

---

##### `DataSetPlaceholder`<sup>Optional</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```csharp
public string DataSetPlaceholder { get; set; }
```

- *Type:* string

<p>Dataset placeholder.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}

---

### QuicksightDashboardTags <a name="QuicksightDashboardTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.key">Key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.value">Value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#key QuicksightDashboard#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_dashboard#value QuicksightDashboard#value}

---

### QuicksightDashboardVersion <a name="QuicksightDashboardVersion" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersion {

};
```


### QuicksightDashboardVersionErrors <a name="QuicksightDashboardVersionErrors" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionErrors {

};
```


### QuicksightDashboardVersionSheets <a name="QuicksightDashboardVersionSheets" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionSheets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus"></a>

```csharp
private void ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput"></a>

```csharp
public string AvailabilityStatusInput { get; }
```

- *Type:* string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus"></a>

```csharp
private void ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput"></a>

```csharp
public string AvailabilityStatusInput { get; }
```

- *Type:* string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsExportToCsvOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---


### QuicksightDashboardDashboardPublishOptionsOutputReference <a name="QuicksightDashboardDashboardPublishOptionsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption">PutAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption">PutExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption">PutSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption">ResetAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption">ResetExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption">ResetSheetControlsOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdHocFilteringOption` <a name="PutAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption"></a>

```csharp
private void PutAdHocFilteringOption(QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `PutExportToCsvOption` <a name="PutExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption"></a>

```csharp
private void PutExportToCsvOption(QuicksightDashboardDashboardPublishOptionsExportToCsvOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `PutSheetControlsOption` <a name="PutSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption"></a>

```csharp
private void PutSheetControlsOption(QuicksightDashboardDashboardPublishOptionsSheetControlsOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `ResetAdHocFilteringOption` <a name="ResetAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption"></a>

```csharp
private void ResetAdHocFilteringOption()
```

##### `ResetExportToCsvOption` <a name="ResetExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption"></a>

```csharp
private void ResetExportToCsvOption()
```

##### `ResetSheetControlsOption` <a name="ResetSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption"></a>

```csharp
private void ResetSheetControlsOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput">AdHocFilteringOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput">ExportToCsvOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput">SheetControlsOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdHocFilteringOption`<sup>Required</sup> <a name="AdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference AdHocFilteringOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a>

---

##### `ExportToCsvOption`<sup>Required</sup> <a name="ExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference ExportToCsvOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a>

---

##### `SheetControlsOption`<sup>Required</sup> <a name="SheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption"></a>

```csharp
public QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference SheetControlsOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a>

---

##### `AdHocFilteringOptionInput`<sup>Optional</sup> <a name="AdHocFilteringOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption AdHocFilteringOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `ExportToCsvOptionInput`<sup>Optional</sup> <a name="ExportToCsvOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsExportToCsvOption ExportToCsvOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `SheetControlsOptionInput`<sup>Optional</sup> <a name="SheetControlsOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsSheetControlsOption SheetControlsOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState">ResetVisibilityState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVisibilityState` <a name="ResetVisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState"></a>

```csharp
private void ResetVisibilityState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput">VisibilityStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState">VisibilityState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VisibilityStateInput`<sup>Optional</sup> <a name="VisibilityStateInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput"></a>

```csharp
public string VisibilityStateInput { get; }
```

- *Type:* string

---

##### `VisibilityState`<sup>Required</sup> <a name="VisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState"></a>

```csharp
public string VisibilityState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardDashboardPublishOptionsSheetControlsOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---


### QuicksightDashboardParametersDateTimeParametersList <a name="QuicksightDashboardParametersDateTimeParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDateTimeParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get"></a>

```csharp
private QuicksightDashboardParametersDateTimeParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDateTimeParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]

---


### QuicksightDashboardParametersDateTimeParametersOutputReference <a name="QuicksightDashboardParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDateTimeParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDateTimeParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>

---


### QuicksightDashboardParametersDecimalParametersList <a name="QuicksightDashboardParametersDecimalParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDecimalParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get"></a>

```csharp
private QuicksightDashboardParametersDecimalParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDecimalParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]

---


### QuicksightDashboardParametersDecimalParametersOutputReference <a name="QuicksightDashboardParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersDecimalParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDecimalParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>

---


### QuicksightDashboardParametersIntegerParametersList <a name="QuicksightDashboardParametersIntegerParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersIntegerParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get"></a>

```csharp
private QuicksightDashboardParametersIntegerParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersIntegerParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]

---


### QuicksightDashboardParametersIntegerParametersOutputReference <a name="QuicksightDashboardParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersIntegerParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersIntegerParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>

---


### QuicksightDashboardParametersOutputReference <a name="QuicksightDashboardParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters">PutDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters">PutDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters">PutIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters">PutStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters">ResetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters">ResetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters">ResetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters">ResetStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeParameters` <a name="PutDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters"></a>

```csharp
private void PutDateTimeParameters(IResolvable|QuicksightDashboardParametersDateTimeParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]

---

##### `PutDecimalParameters` <a name="PutDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters"></a>

```csharp
private void PutDecimalParameters(IResolvable|QuicksightDashboardParametersDecimalParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]

---

##### `PutIntegerParameters` <a name="PutIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters"></a>

```csharp
private void PutIntegerParameters(IResolvable|QuicksightDashboardParametersIntegerParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]

---

##### `PutStringParameters` <a name="PutStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters"></a>

```csharp
private void PutStringParameters(IResolvable|QuicksightDashboardParametersStringParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]

---

##### `ResetDateTimeParameters` <a name="ResetDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters"></a>

```csharp
private void ResetDateTimeParameters()
```

##### `ResetDecimalParameters` <a name="ResetDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters"></a>

```csharp
private void ResetDecimalParameters()
```

##### `ResetIntegerParameters` <a name="ResetIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters"></a>

```csharp
private void ResetIntegerParameters()
```

##### `ResetStringParameters` <a name="ResetStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters"></a>

```csharp
private void ResetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters">DateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters">DecimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters">IntegerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters">StringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput">DateTimeParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput">DecimalParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput">IntegerParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput">StringParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateTimeParameters`<sup>Required</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters"></a>

```csharp
public QuicksightDashboardParametersDateTimeParametersList DateTimeParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a>

---

##### `DecimalParameters`<sup>Required</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters"></a>

```csharp
public QuicksightDashboardParametersDecimalParametersList DecimalParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a>

---

##### `IntegerParameters`<sup>Required</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters"></a>

```csharp
public QuicksightDashboardParametersIntegerParametersList IntegerParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a>

---

##### `StringParameters`<sup>Required</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters"></a>

```csharp
public QuicksightDashboardParametersStringParametersList StringParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a>

---

##### `DateTimeParametersInput`<sup>Optional</sup> <a name="DateTimeParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDateTimeParameters[] DateTimeParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>[]

---

##### `DecimalParametersInput`<sup>Optional</sup> <a name="DecimalParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput"></a>

```csharp
public IResolvable|QuicksightDashboardParametersDecimalParameters[] DecimalParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>[]

---

##### `IntegerParametersInput`<sup>Optional</sup> <a name="IntegerParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput"></a>

```csharp
public IResolvable|QuicksightDashboardParametersIntegerParameters[] IntegerParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>[]

---

##### `StringParametersInput`<sup>Optional</sup> <a name="StringParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput"></a>

```csharp
public IResolvable|QuicksightDashboardParametersStringParameters[] StringParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---


### QuicksightDashboardParametersStringParametersList <a name="QuicksightDashboardParametersStringParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersStringParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get"></a>

```csharp
private QuicksightDashboardParametersStringParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersStringParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>[]

---


### QuicksightDashboardParametersStringParametersOutputReference <a name="QuicksightDashboardParametersStringParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardParametersStringParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardParametersStringParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>

---


### QuicksightDashboardPermissionsList <a name="QuicksightDashboardPermissionsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get"></a>

```csharp
private QuicksightDashboardPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardPermissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>[]

---


### QuicksightDashboardPermissionsOutputReference <a name="QuicksightDashboardPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>

---


### QuicksightDashboardSourceEntityOutputReference <a name="QuicksightDashboardSourceEntityOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate">PutSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate">ResetSourceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceTemplate` <a name="PutSourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate"></a>

```csharp
private void PutSourceTemplate(QuicksightDashboardSourceEntitySourceTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `ResetSourceTemplate` <a name="ResetSourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate"></a>

```csharp
private void ResetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput">SourceTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate"></a>

```csharp
public QuicksightDashboardSourceEntitySourceTemplateOutputReference SourceTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a>

---

##### `SourceTemplateInput`<sup>Optional</sup> <a name="SourceTemplateInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplate SourceTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```csharp
private QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder">ResetDataSetPlaceholder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn"></a>

```csharp
private void ResetDataSetArn()
```

##### `ResetDataSetPlaceholder` <a name="ResetDataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder"></a>

```csharp
private void ResetDataSetPlaceholder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">DataSetPlaceholderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `DataSetPlaceholderInput`<sup>Optional</sup> <a name="DataSetPlaceholderInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```csharp
public string DataSetPlaceholderInput { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```csharp
public string DataSetPlaceholder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>

---


### QuicksightDashboardSourceEntitySourceTemplateOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardSourceEntitySourceTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences">PutDataSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetDataSetReferences">ResetDataSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSetReferences` <a name="PutDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```csharp
private void PutDataSetReferences(IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetDataSetReferences` <a name="ResetDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetDataSetReferences"></a>

```csharp
private void ResetDataSetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">DataSetReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```csharp
public QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList DataSetReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `DataSetReferencesInput`<sup>Optional</sup> <a name="DataSetReferencesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] DataSetReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardSourceEntitySourceTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---


### QuicksightDashboardTagsList <a name="QuicksightDashboardTagsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get"></a>

```csharp
private QuicksightDashboardTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>[]

---


### QuicksightDashboardTagsOutputReference <a name="QuicksightDashboardTagsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightDashboardTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags">QuicksightDashboardTags</a>

---


### QuicksightDashboardVersionErrorsList <a name="QuicksightDashboardVersionErrorsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get"></a>

```csharp
private QuicksightDashboardVersionErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### QuicksightDashboardVersionErrorsOutputReference <a name="QuicksightDashboardVersionErrorsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors">QuicksightDashboardVersionErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDashboardVersionErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors">QuicksightDashboardVersionErrors</a>

---


### QuicksightDashboardVersionOutputReference <a name="QuicksightDashboardVersionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.dataSetArns">DataSetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList">QuicksightDashboardVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sheets">Sheets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList">QuicksightDashboardVersionSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sourceEntityArn">SourceEntityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.themeArn">ThemeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion">QuicksightDashboardVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DataSetArns`<sup>Required</sup> <a name="DataSetArns" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.dataSetArns"></a>

```csharp
public string[] DataSetArns { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.errors"></a>

```csharp
public QuicksightDashboardVersionErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList">QuicksightDashboardVersionErrorsList</a>

---

##### `Sheets`<sup>Required</sup> <a name="Sheets" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sheets"></a>

```csharp
public QuicksightDashboardVersionSheetsList Sheets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList">QuicksightDashboardVersionSheetsList</a>

---

##### `SourceEntityArn`<sup>Required</sup> <a name="SourceEntityArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sourceEntityArn"></a>

```csharp
public string SourceEntityArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.themeArn"></a>

```csharp
public string ThemeArn { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.versionNumber"></a>

```csharp
public double VersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.internalValue"></a>

```csharp
public QuicksightDashboardVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion">QuicksightDashboardVersion</a>

---


### QuicksightDashboardVersionSheetsList <a name="QuicksightDashboardVersionSheetsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionSheetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get"></a>

```csharp
private QuicksightDashboardVersionSheetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### QuicksightDashboardVersionSheetsOutputReference <a name="QuicksightDashboardVersionSheetsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightDashboardVersionSheetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.sheetId">SheetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets">QuicksightDashboardVersionSheets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SheetId`<sup>Required</sup> <a name="SheetId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.sheetId"></a>

```csharp
public string SheetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDashboardVersionSheets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets">QuicksightDashboardVersionSheets</a>

---



