# `apiportalDiscoveryConfiguration` Submodule <a name="`apiportalDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalDiscoveryConfiguration <a name="ApiportalDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration awscc_apiportal_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalDiscoveryConfiguration(Construct Scope, string Id, ApiportalDiscoveryConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig">ApiportalDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig">ApiportalDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures">ResetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources">ResetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|ApiportalDiscoveryConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---

##### `ResetDiscoveryFeatures` <a name="ResetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```csharp
private void ResetDiscoveryFeatures()
```

##### `ResetExcludedResources` <a name="ResetExcludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources"></a>

```csharp
private void ResetExcludedResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalDiscoveryConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalDiscoveryConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalDiscoveryConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalDiscoveryConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalDiscoveryConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus">DiscoveryConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput">DiscoveryFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput">DiscoverySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput">ExcludedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources">DiscoverySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources">ExcludedResources</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DiscoveryConfigurationStatus`<sup>Required</sup> <a name="DiscoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```csharp
public string DiscoveryConfigurationStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags"></a>

```csharp
public ApiportalDiscoveryConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DiscoveryFeaturesInput`<sup>Optional</sup> <a name="DiscoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```csharp
public string[] DiscoveryFeaturesInput { get; }
```

- *Type:* string[]

---

##### `DiscoverySourcesInput`<sup>Optional</sup> <a name="DiscoverySourcesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput"></a>

```csharp
public string[] DiscoverySourcesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedResourcesInput`<sup>Optional</sup> <a name="ExcludedResourcesInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput"></a>

```csharp
public string[] ExcludedResourcesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|ApiportalDiscoveryConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---

##### `DiscoveryFeatures`<sup>Required</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures"></a>

```csharp
public string[] DiscoveryFeatures { get; }
```

- *Type:* string[]

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources"></a>

```csharp
public string[] DiscoverySources { get; }
```

- *Type:* string[]

---

##### `ExcludedResources`<sup>Required</sup> <a name="ExcludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources"></a>

```csharp
public string[] ExcludedResources { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalDiscoveryConfigurationConfig <a name="ApiportalDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalDiscoveryConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] DiscoverySources,
    string[] DiscoveryFeatures = null,
    string[] ExcludedResources = null,
    IResolvable|ApiportalDiscoveryConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources">DiscoverySources</a></code> | <code>string[]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>string[]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources">ExcludedResources</a></code> | <code>string[]</code> | ARNs of resources to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | The tags associated with the discovery configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources"></a>

```csharp
public string[] DiscoverySources { get; set; }
```

- *Type:* string[]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_sources ApiportalDiscoveryConfiguration#discovery_sources}

---

##### `DiscoveryFeatures`<sup>Optional</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```csharp
public string[] DiscoveryFeatures { get; set; }
```

- *Type:* string[]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_features ApiportalDiscoveryConfiguration#discovery_features}

---

##### `ExcludedResources`<sup>Optional</sup> <a name="ExcludedResources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources"></a>

```csharp
public string[] ExcludedResources { get; set; }
```

- *Type:* string[]

ARNs of resources to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#excluded_resources ApiportalDiscoveryConfiguration#excluded_resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|ApiportalDiscoveryConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

The tags associated with the discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#tags ApiportalDiscoveryConfiguration#tags}

---

### ApiportalDiscoveryConfigurationTags <a name="ApiportalDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalDiscoveryConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalDiscoveryConfigurationTagsList <a name="ApiportalDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalDiscoveryConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get"></a>

```csharp
private ApiportalDiscoveryConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApiportalDiscoveryConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>[]

---


### ApiportalDiscoveryConfigurationTagsOutputReference <a name="ApiportalDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalDiscoveryConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalDiscoveryConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>

---



