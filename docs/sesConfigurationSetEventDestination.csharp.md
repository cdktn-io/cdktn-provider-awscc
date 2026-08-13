# `sesConfigurationSetEventDestination` Submodule <a name="`sesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSetEventDestination <a name="SesConfigurationSetEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestination(Construct Scope, string Id, SesConfigurationSetEventDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig">SesConfigurationSetEventDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig">SesConfigurationSetEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination">PutEventDestination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventDestination` <a name="PutEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination"></a>

```csharp
private void PutEventDestination(SesConfigurationSetEventDestinationEventDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesConfigurationSetEventDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesConfigurationSetEventDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesConfigurationSetEventDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesConfigurationSetEventDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesConfigurationSetEventDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId">ConfigurationSetEventDestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination">EventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput">EventDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetEventDestinationId`<sup>Required</sup> <a name="ConfigurationSetEventDestinationId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```csharp
public string ConfigurationSetEventDestinationId { get; }
```

- *Type:* string

---

##### `EventDestination`<sup>Required</sup> <a name="EventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationOutputReference EventDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `EventDestinationInput`<sup>Optional</sup> <a name="EventDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestination EventDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetEventDestinationConfig <a name="SesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationSetName,
    SesConfigurationSetEventDestinationEventDestination EventDestination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination">EventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `EventDestination`<sup>Required</sup> <a name="EventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestination EventDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

### SesConfigurationSetEventDestinationEventDestination <a name="SesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestination {
    string[] MatchingEventTypes,
    SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination CloudwatchDestination = null,
    bool|IResolvable Enabled = null,
    SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination EventBridgeDestination = null,
    SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination KinesisFirehoseDestination = null,
    string Name = null,
    SesConfigurationSetEventDestinationEventDestinationSnsDestination SnsDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination">EventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | An object that contains Event bus ARN associated with the event bridge destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name">Name</a></code> | <code>string</code> | The name of the event destination set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | An object that contains SNS topic ARN associated event destination. |

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; set; }
```

- *Type:* string[]

The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#matching_event_types SesConfigurationSetEventDestination#matching_event_types}

---

##### `CloudwatchDestination`<sup>Optional</sup> <a name="CloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination CloudwatchDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination SesConfigurationSetEventDestination#cloudwatch_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set.

Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#enabled SesConfigurationSetEventDestination#enabled}

---

##### `EventBridgeDestination`<sup>Optional</sup> <a name="EventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination EventBridgeDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

An object that contains Event bus ARN associated with the event bridge destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination SesConfigurationSetEventDestination#event_bridge_destination}

---

##### `KinesisFirehoseDestination`<sup>Optional</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination SesConfigurationSetEventDestination#kinesis_firehose_destination}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event destination set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#name SesConfigurationSetEventDestination#name}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationSnsDestination SnsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

An object that contains SNS topic ARN associated event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#sns_destination SesConfigurationSetEventDestination#sns_destination}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination {
    IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[] DimensionConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations">DimensionConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch. |

---

##### `DimensionConfigurations`<sup>Optional</sup> <a name="DimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[] DimensionConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations SesConfigurationSetEventDestination#dimension_configurations}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations {
    string DefaultDimensionValue = null,
    string DimensionName = null,
    string DimensionValueSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue">DefaultDimensionValue</a></code> | <code>string</code> | The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName">DimensionName</a></code> | <code>string</code> | The name of an Amazon CloudWatch dimension associated with an email sending metric. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource">DimensionValueSource</a></code> | <code>string</code> | The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. |

---

##### `DefaultDimensionValue`<sup>Optional</sup> <a name="DefaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue"></a>

```csharp
public string DefaultDimensionValue { get; set; }
```

- *Type:* string

The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#default_dimension_value SesConfigurationSetEventDestination#default_dimension_value}

---

##### `DimensionName`<sup>Optional</sup> <a name="DimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName"></a>

```csharp
public string DimensionName { get; set; }
```

- *Type:* string

The name of an Amazon CloudWatch dimension associated with an email sending metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_name SesConfigurationSetEventDestination#dimension_name}

---

##### `DimensionValueSource`<sup>Optional</sup> <a name="DimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource"></a>

```csharp
public string DimensionValueSource { get; set; }
```

- *Type:* string

The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch.

To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_value_source SesConfigurationSetEventDestination#dimension_value_source}

---

### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination {
    string EventBusArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}. |

---

##### `EventBusArn`<sup>Optional</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}.

---

### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {
    string DeliveryStreamArn = null,
    string IamRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream. |

---

##### `DeliveryStreamArn`<sup>Optional</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; set; }
```

- *Type:* string

The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn SesConfigurationSetEventDestination#delivery_stream_arn}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn SesConfigurationSetEventDestination#iam_role_arn}

---

### SesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationSnsDestination {
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```csharp
private SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue">ResetDefaultDimensionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName">ResetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource">ResetDimensionValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultDimensionValue` <a name="ResetDefaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue"></a>

```csharp
private void ResetDefaultDimensionValue()
```

##### `ResetDimensionName` <a name="ResetDimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName"></a>

```csharp
private void ResetDimensionName()
```

##### `ResetDimensionValueSource` <a name="ResetDimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource"></a>

```csharp
private void ResetDimensionValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput">DefaultDimensionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput">DimensionValueSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">DefaultDimensionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">DimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">DimensionValueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultDimensionValueInput`<sup>Optional</sup> <a name="DefaultDimensionValueInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput"></a>

```csharp
public string DefaultDimensionValueInput { get; }
```

- *Type:* string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput"></a>

```csharp
public string DimensionNameInput { get; }
```

- *Type:* string

---

##### `DimensionValueSourceInput`<sup>Optional</sup> <a name="DimensionValueSourceInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput"></a>

```csharp
public string DimensionValueSourceInput { get; }
```

- *Type:* string

---

##### `DefaultDimensionValue`<sup>Required</sup> <a name="DefaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```csharp
public string DefaultDimensionValue { get; }
```

- *Type:* string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```csharp
public string DimensionName { get; }
```

- *Type:* string

---

##### `DimensionValueSource`<sup>Required</sup> <a name="DimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```csharp
public string DimensionValueSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations">PutDimensionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations">ResetDimensionConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensionConfigurations` <a name="PutDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations"></a>

```csharp
private void PutDimensionConfigurations(IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---

##### `ResetDimensionConfigurations` <a name="ResetDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations"></a>

```csharp
private void ResetDimensionConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">DimensionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput">DimensionConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionConfigurations`<sup>Required</sup> <a name="DimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList DimensionConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `DimensionConfigurationsInput`<sup>Optional</sup> <a name="DimensionConfigurationsInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations[] DimensionConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn">ResetEventBusArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventBusArn` <a name="ResetEventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn"></a>

```csharp
private void ResetEventBusArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">ResetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStreamArn` <a name="ResetDeliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```csharp
private void ResetDeliveryStreamArn()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">DeliveryStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamArnInput`<sup>Optional</sup> <a name="DeliveryStreamArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```csharp
public string DeliveryStreamArnInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination">PutCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination">PutEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination">PutKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination">ResetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination">ResetEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination">ResetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchDestination` <a name="PutCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination"></a>

```csharp
private void PutCloudwatchDestination(SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `PutEventBridgeDestination` <a name="PutEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination"></a>

```csharp
private void PutEventBridgeDestination(SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `PutKinesisFirehoseDestination` <a name="PutKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination"></a>

```csharp
private void PutKinesisFirehoseDestination(SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination"></a>

```csharp
private void PutSnsDestination(SesConfigurationSetEventDestinationEventDestinationSnsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `ResetCloudwatchDestination` <a name="ResetCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination"></a>

```csharp
private void ResetCloudwatchDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventBridgeDestination` <a name="ResetEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination"></a>

```csharp
private void ResetEventBridgeDestination()
```

##### `ResetKinesisFirehoseDestination` <a name="ResetKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination"></a>

```csharp
private void ResetKinesisFirehoseDestination()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination"></a>

```csharp
private void ResetSnsDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">EventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput">CloudwatchDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput">EventBridgeDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput">KinesisFirehoseDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput">MatchingEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput">SnsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchDestination`<sup>Required</sup> <a name="CloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference CloudwatchDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `EventBridgeDestination`<sup>Required</sup> <a name="EventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference EventBridgeDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `KinesisFirehoseDestination`<sup>Required</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference KinesisFirehoseDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```csharp
public SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference SnsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `CloudwatchDestinationInput`<sup>Optional</sup> <a name="CloudwatchDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination CloudwatchDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventBridgeDestinationInput`<sup>Optional</sup> <a name="EventBridgeDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination EventBridgeDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `KinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="KinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination KinesisFirehoseDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `MatchingEventTypesInput`<sup>Optional</sup> <a name="MatchingEventTypesInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput"></a>

```csharp
public string[] MatchingEventTypesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationSnsDestination SnsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesConfigurationSetEventDestinationEventDestinationSnsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



