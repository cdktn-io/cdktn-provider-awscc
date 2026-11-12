# `mediaconnectDestinationEndpoint` Submodule <a name="`mediaconnectDestinationEndpoint` Submodule" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectDestinationEndpoint <a name="MediaconnectDestinationEndpoint" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpoint(Construct Scope, string Id, MediaconnectDestinationEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig">MediaconnectDestinationEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig">MediaconnectDestinationEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration"></a>

```csharp
private void PutConfiguration(MediaconnectDestinationEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|MediaconnectDestinationEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName"></a>

```csharp
private void ResetRegionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectDestinationEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectDestinationEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectDestinationEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectDestinationEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectDestinationEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectDestinationEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectDestinationEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails">AssociatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId">DestinationEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement">LifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState">RegistrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedResourceDetails`<sup>Required</sup> <a name="AssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails"></a>

```csharp
public MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference AssociatedResourceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a>

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DestinationEndpointId`<sup>Required</sup> <a name="DestinationEndpointId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId"></a>

```csharp
public string DestinationEndpointId { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement"></a>

```csharp
public string LifecycleManagement { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegistrationState`<sup>Required</sup> <a name="RegistrationState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState"></a>

```csharp
public string RegistrationState { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags"></a>

```csharp
public MediaconnectDestinationEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetails <a name="MediaconnectDestinationEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointAssociatedResourceDetails {

};
```


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput {

};
```


### MediaconnectDestinationEndpointConfig <a name="MediaconnectDestinationEndpointConfig" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MediaconnectDestinationEndpointConfiguration Configuration,
    string Description = null,
    string RegionName = null,
    IResolvable|MediaconnectDestinationEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | The configuration settings for a destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description">Description</a></code> | <code>string</code> | The description of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName">RegionName</a></code> | <code>string</code> | The name of the Amazon Web Services Region in which the destination endpoint is located. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]</code> | The tags associated with the destination endpoint. Each tag is a key-value pair. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration"></a>

```csharp
public MediaconnectDestinationEndpointConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

The configuration settings for a destination endpoint.

This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#configuration MediaconnectDestinationEndpoint#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#description MediaconnectDestinationEndpoint#description}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

The name of the Amazon Web Services Region in which the destination endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#region_name MediaconnectDestinationEndpoint#region_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]

The tags associated with the destination endpoint. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#tags MediaconnectDestinationEndpoint#tags}

---

### MediaconnectDestinationEndpointConfiguration <a name="MediaconnectDestinationEndpointConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfiguration {
    MediaconnectDestinationEndpointConfigurationRouterInput RouterInput = null,
    MediaconnectDestinationEndpointConfigurationStandard Standard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | The configuration settings for a destination endpoint that represents a router input. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | The configuration settings for a standard destination endpoint. |

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationRouterInput RouterInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

The configuration settings for a destination endpoint that represents a router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input MediaconnectDestinationEndpoint#router_input}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandard Standard { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

The configuration settings for a standard destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#standard MediaconnectDestinationEndpoint#standard}

---

### MediaconnectDestinationEndpointConfigurationRouterInput <a name="MediaconnectDestinationEndpointConfigurationRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationRouterInput {
    string RouterInputArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn">RouterInputArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the router input that the destination endpoint represents. |

---

##### `RouterInputArn`<sup>Optional</sup> <a name="RouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn"></a>

```csharp
public string RouterInputArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input_arn MediaconnectDestinationEndpoint#router_input_arn}

---

### MediaconnectDestinationEndpointConfigurationStandard <a name="MediaconnectDestinationEndpointConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandard {
    MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration DestinationNetworkingConfiguration = null,
    string DestinationNetworkingType = null,
    string Name = null,
    string Protocol = null,
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration ProtocolConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration">DestinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | The networking configuration for a standard destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType">DestinationNetworkingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name">Name</a></code> | <code>string</code> | The name of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration for a standard destination endpoint. |

---

##### `DestinationNetworkingConfiguration`<sup>Optional</sup> <a name="DestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration DestinationNetworkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

The networking configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_configuration MediaconnectDestinationEndpoint#destination_networking_configuration}

---

##### `DestinationNetworkingType`<sup>Optional</sup> <a name="DestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType"></a>

```csharp
public string DestinationNetworkingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#name MediaconnectDestinationEndpoint#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}.

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration ProtocolConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

The protocol configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol_configuration MediaconnectDestinationEndpoint#protocol_configuration}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration {
    MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic Public = null,
    MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | The networking configuration for a destination endpoint in a virtual private cloud (VPC). |

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic Public { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#public MediaconnectDestinationEndpoint#public}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

The networking configuration for a destination endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#vpc MediaconnectDestinationEndpoint#vpc}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic {
    IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules[] DestinationAllowRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules">DestinationAllowRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]</code> | The rules that specify which CIDR blocks can connect to the destination endpoint. |

---

##### `DestinationAllowRules`<sup>Optional</sup> <a name="DestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules[] DestinationAllowRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]

The rules that specify which CIDR blocks can connect to the destination endpoint.

You can specify up to 10 rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_allow_rules MediaconnectDestinationEndpoint#destination_allow_rules}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr">Cidr</a></code> | <code>string</code> | The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#cidr MediaconnectDestinationEndpoint#cidr}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc {
    string[] SecurityGroupIds = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups to associate with the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet to use for the destination endpoint. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The IDs of the security groups to associate with the destination endpoint.

You can specify from 1 to 5 security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#security_group_ids MediaconnectDestinationEndpoint#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet to use for the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#subnet_id MediaconnectDestinationEndpoint#subnet_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration {
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist Rist = null,
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp Rtp = null,
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCaller = null,
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListener = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a destination endpoint that uses the RIST protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a destination endpoint that uses the RTP protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a destination endpoint that uses SRT in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a destination endpoint that uses SRT in listener mode. |

---

##### `Rist`<sup>Optional</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist Rist { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a destination endpoint that uses the RIST protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rist MediaconnectDestinationEndpoint#rist}

---

##### `Rtp`<sup>Optional</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp Rtp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a destination endpoint that uses the RTP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rtp MediaconnectDestinationEndpoint#rtp}

---

##### `SrtCaller`<sup>Optional</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCaller { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a destination endpoint that uses SRT in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_caller MediaconnectDestinationEndpoint#srt_caller}

---

##### `SrtListener`<sup>Optional</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListener { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a destination endpoint that uses SRT in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_listener MediaconnectDestinationEndpoint#srt_listener}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist {
    string DestinationAddress = null,
    double DestinationIngestPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp {
    string DestinationAddress = null,
    double DestinationIngestPort = null,
    string ForwardErrorCorrectionState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `ForwardErrorCorrectionState`<sup>Optional</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState"></a>

```csharp
public string ForwardErrorCorrectionState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}.

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller {
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphrase = null,
    double MinimumLatencyMilliseconds = null,
    double SourceListenerPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | The port on which the source listens for the connection. The valid range is 3000 to 30000. |

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphrase { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; set; }
```

- *Type:* double

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; set; }
```

- *Type:* double

The port on which the source listens for the connection. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#source_listener_port MediaconnectDestinationEndpoint#source_listener_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener {
    string DestinationAddress = null,
    double DestinationIngestPort = null,
    MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphrase = null,
    double MinimumLatencyMilliseconds = null,
    string StreamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | The IP address on which the destination endpoint listens for incoming connections. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId">StreamId</a></code> | <code>string</code> | The stream ID that identifies the content for the SRT connection. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

The IP address on which the destination endpoint listens for incoming connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphrase { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; set; }
```

- *Type:* double

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

The stream ID that identifies the content for the SRT connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#stream_id MediaconnectDestinationEndpoint#stream_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointTags <a name="MediaconnectDestinationEndpointTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard">Standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput"></a>

```csharp
public MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference RouterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```csharp
public string Standard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```csharp
public MediaconnectDestinationEndpointAssociatedResourceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a>

---


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue"></a>

```csharp
public MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a>

---


### MediaconnectDestinationEndpointConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput">PutRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard">PutStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput">ResetRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouterInput` <a name="PutRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput"></a>

```csharp
private void PutRouterInput(MediaconnectDestinationEndpointConfigurationRouterInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---

##### `PutStandard` <a name="PutStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard"></a>

```csharp
private void PutStandard(MediaconnectDestinationEndpointConfigurationStandard Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---

##### `ResetRouterInput` <a name="ResetRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput"></a>

```csharp
private void ResetRouterInput()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard"></a>

```csharp
private void ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput">RouterInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput">StandardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationRouterInputOutputReference RouterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardOutputReference Standard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a>

---

##### `RouterInputInput`<sup>Optional</sup> <a name="RouterInputInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationRouterInput RouterInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandard StandardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationRouterInputOutputReference <a name="MediaconnectDestinationEndpointConfigurationRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationRouterInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn">ResetRouterInputArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRouterInputArn` <a name="ResetRouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn"></a>

```csharp
private void ResetRouterInputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput">RouterInputArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn">RouterInputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterInputArnInput`<sup>Optional</sup> <a name="RouterInputArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput"></a>

```csharp
public string RouterInputArnInput { get; }
```

- *Type:* string

---

##### `RouterInputArn`<sup>Required</sup> <a name="RouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn"></a>

```csharp
public string RouterInputArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationRouterInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic">PutPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublic` <a name="PutPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic"></a>

```csharp
private void PutPublic(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc"></a>

```csharp
private void PutVpc(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic"></a>

```csharp
private void ResetPublic()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc"></a>

```csharp
private void ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput">PublicInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference Public { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a>

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic PublicInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get"></a>

```csharp
private MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules">PutDestinationAllowRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules">ResetDestinationAllowRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationAllowRules` <a name="PutDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules"></a>

```csharp
private void PutDestinationAllowRules(IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]

---

##### `ResetDestinationAllowRules` <a name="ResetDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules"></a>

```csharp
private void ResetDestinationAllowRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules">DestinationAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput">DestinationAllowRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAllowRules`<sup>Required</sup> <a name="DestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList DestinationAllowRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a>

---

##### `DestinationAllowRulesInput`<sup>Optional</sup> <a name="DestinationAllowRulesInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules[] DestinationAllowRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---


### MediaconnectDestinationEndpointConfigurationStandardOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration">PutDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration">PutProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration">ResetDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType">ResetDestinationNetworkingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationNetworkingConfiguration` <a name="PutDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration"></a>

```csharp
private void PutDestinationNetworkingConfiguration(MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---

##### `PutProtocolConfiguration` <a name="PutProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```csharp
private void PutProtocolConfiguration(MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `ResetDestinationNetworkingConfiguration` <a name="ResetDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration"></a>

```csharp
private void ResetDestinationNetworkingConfiguration()
```

##### `ResetDestinationNetworkingType` <a name="ResetDestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType"></a>

```csharp
private void ResetDestinationNetworkingType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```csharp
private void ResetProtocolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration">DestinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput">DestinationNetworkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput">DestinationNetworkingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType">DestinationNetworkingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationNetworkingConfiguration`<sup>Required</sup> <a name="DestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference DestinationNetworkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a>

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference ProtocolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `DestinationNetworkingConfigurationInput`<sup>Optional</sup> <a name="DestinationNetworkingConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration DestinationNetworkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---

##### `DestinationNetworkingTypeInput`<sup>Optional</sup> <a name="DestinationNetworkingTypeInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput"></a>

```csharp
public string DestinationNetworkingTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration ProtocolConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `DestinationNetworkingType`<sup>Required</sup> <a name="DestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType"></a>

```csharp
public string DestinationNetworkingType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandard InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist">PutRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp">PutRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">PutSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">PutSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist">ResetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp">ResetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">ResetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">ResetSrtListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRist` <a name="PutRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```csharp
private void PutRist(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `PutRtp` <a name="PutRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```csharp
private void PutRtp(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `PutSrtCaller` <a name="PutSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```csharp
private void PutSrtCaller(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `PutSrtListener` <a name="PutSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```csharp
private void PutSrtListener(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `ResetRist` <a name="ResetRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```csharp
private void ResetRist()
```

##### `ResetRtp` <a name="ResetRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```csharp
private void ResetRtp()
```

##### `ResetSrtCaller` <a name="ResetSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```csharp
private void ResetSrtCaller()
```

##### `ResetSrtListener` <a name="ResetSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```csharp
private void ResetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">RistInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">RtpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">SrtCallerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">SrtListenerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference Rist { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference Rtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference SrtCaller { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference SrtListener { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `RistInput`<sup>Optional</sup> <a name="RistInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist RistInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `RtpInput`<sup>Optional</sup> <a name="RtpInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp RtpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `SrtCallerInput`<sup>Optional</sup> <a name="SrtCallerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCallerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `SrtListenerInput`<sup>Optional</sup> <a name="SrtListenerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListenerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState">ResetForwardErrorCorrectionState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```

##### `ResetForwardErrorCorrectionState` <a name="ResetForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState"></a>

```csharp
private void ResetForwardErrorCorrectionState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput">ForwardErrorCorrectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrectionStateInput`<sup>Optional</sup> <a name="ForwardErrorCorrectionStateInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput"></a>

```csharp
public string ForwardErrorCorrectionStateInput { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrectionState`<sup>Required</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```csharp
public string ForwardErrorCorrectionState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase"></a>

```csharp
private void PutEncryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase"></a>

```csharp
private void ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```csharp
private void ResetMinimumLatencyMilliseconds()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort"></a>

```csharp
private void ResetSourceListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphraseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```csharp
public double MinimumLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput"></a>

```csharp
public double SourceListenerPortInput { get; }
```

- *Type:* double

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase"></a>

```csharp
private void PutEncryptionPassphrase(MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase"></a>

```csharp
private void ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```csharp
private void ResetMinimumLatencyMilliseconds()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```csharp
public MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphraseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```csharp
public double MinimumLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### MediaconnectDestinationEndpointTagsList <a name="MediaconnectDestinationEndpointTagsList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get"></a>

```csharp
private MediaconnectDestinationEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>[]

---


### MediaconnectDestinationEndpointTagsOutputReference <a name="MediaconnectDestinationEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectDestinationEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectDestinationEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags">MediaconnectDestinationEndpointTags</a>

---



