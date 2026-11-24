# `apiportalOrganizationDiscoveryConfiguration` Submodule <a name="`apiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalOrganizationDiscoveryConfiguration <a name="ApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfiguration(Construct Scope, string Id, ApiportalOrganizationDiscoveryConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters">PutDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures">ResetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters">ResetDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryFilters` <a name="PutDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters"></a>

```csharp
private void PutDiscoveryFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|ApiportalOrganizationDiscoveryConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---

##### `ResetDiscoveryFeatures` <a name="ResetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```csharp
private void ResetDiscoveryFeatures()
```

##### `ResetDiscoveryFilters` <a name="ResetDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters"></a>

```csharp
private void ResetDiscoveryFilters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalOrganizationDiscoveryConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalOrganizationDiscoveryConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalOrganizationDiscoveryConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalOrganizationDiscoveryConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">DiscoveryConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">DiscoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput">DiscoveryFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput">DiscoveryFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput">DiscoverySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources">DiscoverySources</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DiscoveryConfigurationStatus`<sup>Required</sup> <a name="DiscoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```csharp
public string DiscoveryConfigurationStatus { get; }
```

- *Type:* string

---

##### `DiscoveryFilters`<sup>Required</sup> <a name="DiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference DiscoveryFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DiscoveryFeaturesInput`<sup>Optional</sup> <a name="DiscoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```csharp
public string[] DiscoveryFeaturesInput { get; }
```

- *Type:* string[]

---

##### `DiscoveryFiltersInput`<sup>Optional</sup> <a name="DiscoveryFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters DiscoveryFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `DiscoverySourcesInput`<sup>Optional</sup> <a name="DiscoverySourcesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput"></a>

```csharp
public string[] DiscoverySourcesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---

##### `DiscoveryFeatures`<sup>Required</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```csharp
public string[] DiscoveryFeatures { get; }
```

- *Type:* string[]

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```csharp
public string[] DiscoverySources { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalOrganizationDiscoveryConfigurationConfig <a name="ApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] DiscoverySources,
    string[] DiscoveryFeatures = null,
    ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters DiscoveryFilters = null,
    IResolvable|ApiportalOrganizationDiscoveryConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources">DiscoverySources</a></code> | <code>string[]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>string[]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters">DiscoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | The tags associated with the organization discovery configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources"></a>

```csharp
public string[] DiscoverySources { get; set; }
```

- *Type:* string[]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `DiscoveryFeatures`<sup>Optional</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```csharp
public string[] DiscoveryFeatures { get; set; }
```

- *Type:* string[]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `DiscoveryFilters`<sup>Optional</sup> <a name="DiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters DiscoveryFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters {
    ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters ExclusionFilters = null,
    ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters InclusionFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters">ExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | Resources matching any of these filters are excluded from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters">InclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | Only resources matching any of these filters are included in discovery. |

---

##### `ExclusionFilters`<sup>Optional</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters ExclusionFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

##### `InclusionFilters`<sup>Optional</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters InclusionFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters {
    string[] AccountIds = null,
    string[] OrganizationalUnitIds = null,
    string[] ResourceArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds">AccountIds</a></code> | <code>string[]</code> | AWS account IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | Organizational unit IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | Resource ARNs to exclude from discovery. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; set; }
```

- *Type:* string[]

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; set; }
```

- *Type:* string[]

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters {
    string[] AccountIds = null,
    string[] OrganizationalUnitIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds">AccountIds</a></code> | <code>string[]</code> | AWS account IDs to include in discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | Organizational unit IDs to include in discovery. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; set; }
```

- *Type:* string[]

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

### ApiportalOrganizationDiscoveryConfigurationTags <a name="ApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns">ResetResourceArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```csharp
private void ResetOrganizationalUnitIds()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns"></a>

```csharp
private void ResetResourceArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```csharp
public string[] OrganizationalUnitIdsInput { get; }
```

- *Type:* string[]

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput"></a>

```csharp
public string[] ResourceArnsInput { get; }
```

- *Type:* string[]

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; }
```

- *Type:* string[]

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```csharp
private void ResetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```csharp
public string[] OrganizationalUnitIdsInput { get; }
```

- *Type:* string[]

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```csharp
public string[] OrganizationalUnitIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters">PutExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters">PutInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters">ResetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters">ResetInclusionFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionFilters` <a name="PutExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters"></a>

```csharp
private void PutExclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `PutInclusionFilters` <a name="PutInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters"></a>

```csharp
private void PutInclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `ResetExclusionFilters` <a name="ResetExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters"></a>

```csharp
private void ResetExclusionFilters()
```

##### `ResetInclusionFilters` <a name="ResetInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters"></a>

```csharp
private void ResetInclusionFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">ExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">InclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput">ExclusionFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput">InclusionFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionFilters`<sup>Required</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference ExclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `InclusionFilters`<sup>Required</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```csharp
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference InclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `ExclusionFiltersInput`<sup>Optional</sup> <a name="ExclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters ExclusionFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `InclusionFiltersInput`<sup>Optional</sup> <a name="InclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters InclusionFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationTagsList <a name="ApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```csharp
private ApiportalOrganizationDiscoveryConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---


### ApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalOrganizationDiscoveryConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalOrganizationDiscoveryConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>

---



