# `personalizeMetricAttribution` Submodule <a name="`personalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.personalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeMetricAttribution <a name="PersonalizeMetricAttribution" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttribution(Construct Scope, string Id, PersonalizeMetricAttributionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig">PersonalizeMetricAttributionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig">PersonalizeMetricAttributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig">PutMetricsOutputConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics"></a>

```csharp
private void PutMetrics(IResolvable|PersonalizeMetricAttributionMetrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetrics.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---

##### `PutMetricsOutputConfig` <a name="PutMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig"></a>

```csharp
private void PutMetricsOutputConfig(PersonalizeMetricAttributionMetricsOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.putMetricsOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeMetricAttribution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeMetricAttribution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeMetricAttribution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeMetricAttribution.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeMetricAttribution to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn">MetricAttributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig">MetricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput">DatasetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput">MetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput">MetricsOutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricAttributionArn`<sup>Required</sup> <a name="MetricAttributionArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricAttributionArn"></a>

```csharp
public string MetricAttributionArn { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metrics"></a>

```csharp
public PersonalizeMetricAttributionMetricsList Metrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList">PersonalizeMetricAttributionMetricsList</a>

---

##### `MetricsOutputConfig`<sup>Required</sup> <a name="MetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```csharp
public PersonalizeMetricAttributionMetricsOutputConfigOutputReference MetricsOutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference">PersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DatasetGroupArnInput`<sup>Optional</sup> <a name="DatasetGroupArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArnInput"></a>

```csharp
public string DatasetGroupArnInput { get; }
```

- *Type:* string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsInput"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetrics[] MetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---

##### `MetricsOutputConfigInput`<sup>Optional</sup> <a name="MetricsOutputConfigInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.metricsOutputConfigInput"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfig MetricsOutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.datasetGroupArn"></a>

```csharp
public string DatasetGroupArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttribution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeMetricAttributionConfig <a name="PersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatasetGroupArn,
    IResolvable|PersonalizeMetricAttributionMetrics[] Metrics,
    PersonalizeMetricAttributionMetricsOutputConfig MetricsOutputConfig,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>string</code> | The ARN of the destination dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics">Metrics</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | A list of metric attributes for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig">MetricsOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | The output configuration details for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name">Name</a></code> | <code>string</code> | The name of the metric attribution. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.datasetGroupArn"></a>

```csharp
public string DatasetGroupArn { get; set; }
```

- *Type:* string

The ARN of the destination dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metrics"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetrics[] Metrics { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

A list of metric attributes for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}

---

##### `MetricsOutputConfig`<sup>Required</sup> <a name="MetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.metricsOutputConfig"></a>

```csharp
public PersonalizeMetricAttributionMetricsOutputConfig MetricsOutputConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

The output configuration details for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}

---

### PersonalizeMetricAttributionMetrics <a name="PersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetrics {
    string EventType,
    string Expression,
    string MetricName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType">EventType</a></code> | <code>string</code> | The metric's event type. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression">Expression</a></code> | <code>string</code> | The attribute's expression. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName">MetricName</a></code> | <code>string</code> | The metric's name. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The metric's event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#event_type PersonalizeMetricAttribution#event_type}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The attribute's expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#expression PersonalizeMetricAttribution#expression}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The metric's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metric_name PersonalizeMetricAttribution#metric_name}

---

### PersonalizeMetricAttributionMetricsOutputConfig <a name="PersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsOutputConfig {
    string RoleArn,
    PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination S3DataDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role for the metric attribution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination">S3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | The configuration details of an Amazon S3 output bucket. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role for the metric attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}

---

##### `S3DataDestination`<sup>Optional</sup> <a name="S3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig.property.s3DataDestination"></a>

```csharp
public PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination S3DataDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

The configuration details of an Amazon S3 output bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}

---

### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination {
    string KmsKeyArn = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path">Path</a></code> | <code>string</code> | The file path of the Amazon S3 bucket. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The file path of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeMetricAttributionMetricsList <a name="PersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get"></a>

```csharp
private PersonalizeMetricAttributionMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsList.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetrics[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>[]

---


### PersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination">PutS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination">ResetS3DataDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataDestination` <a name="PutS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination"></a>

```csharp
private void PutS3DataDestination(PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.putS3DataDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `ResetS3DataDestination` <a name="ResetS3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.resetS3DataDestination"></a>

```csharp
private void ResetS3DataDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">S3DataDestination</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput">S3DataDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3DataDestination`<sup>Required</sup> <a name="S3DataDestination" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```csharp
public PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference S3DataDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `S3DataDestinationInput`<sup>Optional</sup> <a name="S3DataDestinationInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestinationInput"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination S3DataDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfig">PersonalizeMetricAttributionMetricsOutputConfig</a>

---


### PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### PersonalizeMetricAttributionMetricsOutputReference <a name="PersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeMetricAttributionMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeMetricAttributionMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeMetricAttribution.PersonalizeMetricAttributionMetrics">PersonalizeMetricAttributionMetrics</a>

---



